import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const post = await prisma.post.findUnique({
    where: {
      id: body.id,
    },
  });
  const res = await prisma.post.update({
    where: { id: body.id },
    data: { downloads: (post?.downloads || 0) + 1 },
  });
  return NextResponse.json({ res });
}
