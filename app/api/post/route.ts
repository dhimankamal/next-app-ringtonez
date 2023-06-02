import { NextResponse } from "next/server";
import { WordpressPostResponse } from "./types";
import { prisma } from "@/lib/db";

const baseUrl = process.env.BACKEND_URL;
export const runtime = 'edge'
const getPostData = async (page: number) => {
  try {
    const res = await fetch(`${baseUrl}posts?per_page=10&page=${page}`, {
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
      date: currentDate,
      slug: data.slug,
      title: data.title.rendered,
      categories: data.categories,
      tags: data.tags,
      url: data.fields.file,
      downloads: 0,
    };
    await prisma.post.upsert({
      where: { slug:data.slug || "" },
      update: update,
      create: update,
    });
    console.log(update
    )
  }
  return NextResponse.json({ posts });
}
