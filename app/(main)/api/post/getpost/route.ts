import { Post } from "@prisma/client";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  const page_size = searchParams.get("page_size");
  const pageSize = +(page_size || 10);
  const skip = (+(page || 1) - 1) * pageSize;
  try {
    const data: Post[] = await prisma.post.findMany({
      take: pageSize,
      skip,
      orderBy: {
        date: "desc",
      },
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
