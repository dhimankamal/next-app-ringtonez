import { Post } from "@prisma/client";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");
  try {
    const data: Post[] = await prisma.post.findMany({
      take: 6,
      orderBy: {
        date: "desc",
      },
      where: {
        title: {
          contains: query || undefined,
        },
      },
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
