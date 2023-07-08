// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/db";
import { UploadApiOptions, v2 as cloudinary } from "cloudinary";
import { WordpressPostResponse } from "./types";

const baseUrl = process.env.BACKEND_URL;

// configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

type Data = {
  finalRes: any[];
};

const getPostData = async (page: number) => {
  try {
    const res = await fetch(`${baseUrl}posts?per_page=20&page=${page}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const post: WordpressPostResponse[] = await res.json();
    return post;
  } catch (error) {
    throw error;
  }
};

const getURL = async (url?: string) => {
  console.log("url+++++", url);
  if (url) {
    const options: UploadApiOptions = {
      resource_type: "auto",
      folder: "ringtonez",
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };
    try {
      // Upload the ringtone
      const result = await cloudinary.uploader.upload(url, options);
      return result.secure_url;
    } catch (error) {
      console.error(error);
      return "";
    }
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let finalRes:any[] = []
  const posts: WordpressPostResponse[] = await getPostData(16);
  for (const data of posts) {
    const currentDate = new Date().toISOString();
    const url = await getURL(data?.fields?.file);
    console.log("uploadurl>>>>>>", url);
    if (url) {
      const update: any = {
        postid: String(data.id),
        slug: data.slug,
        title: data.title.rendered,
        categories: data.categories,
        tags: data.tags,
        url,
      };
      const res =  await prisma.post.upsert({
        where: { slug: data.slug || "" },
        update: update,
        create: { ...update, date: currentDate, downloads: 0 },
      });
      finalRes.push(res)
      console.log("res>>>>>",res);
    }
  }
  res.status(200).json({ finalRes });
}
