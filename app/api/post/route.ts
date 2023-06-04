import { NextResponse } from "next/server";
import { WordpressPostResponse } from "./types";
import { prisma } from "@/lib/db";

const baseUrl = process.env.BACKEND_URL;

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

export async function GET() {
  const posts: WordpressPostResponse[] = await getPostData(1);
  for (const data of posts) {
    const currentDate = new Date().toISOString();
    const update = {
      postid: String(data.id),
      slug: data.slug,
      title: data.title.rendered,
      categories: data.categories,
      tags: data.tags,
      url: data?.fields?.file || '',
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
