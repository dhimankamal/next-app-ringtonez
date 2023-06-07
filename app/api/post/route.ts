import { NextResponse } from "next/server";
import { WordpressPostResponse } from "./types";
import { prisma } from "@/lib/db";
const cloudinary = require("cloudinary").v2;

const baseUrl = process.env.BACKEND_URL;

// configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

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
    const options = {
      resource_type: 'auto',
      folder: 'ringtonez',
      use_filename: true,
      unique_filename: false,
      overwrite: true
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

export async function GET() {
  const posts: WordpressPostResponse[] = await getPostData(1);
  for (const data of posts) {
    const currentDate = new Date().toISOString();
    const url = await getURL(data?.fields?.file);
    console.log("uploadurl>>>>>>", url);
    const update = {
      postid: String(data.id),
      slug: data.slug,
      title: data.title.rendered,
      categories: data.categories,
      tags: data.tags,
      url,
    };
    await prisma.post.upsert({
      where: { slug: data.slug || "" },
      update: update,
      create: { ...update, date: currentDate, downloads: 0 },
    });
    console.log(update);
  }
  return NextResponse.json({ posts });
}
