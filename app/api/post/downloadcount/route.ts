import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  console.log("body>>>>>>>>>>>>>>>>>>", body);
  const res = prisma.post.update({
    where: { id: body.id },
    data: { downloads: (body?.download || 0) + 1 },
  });

  console.log("res>>>>",res)

  return NextResponse.json({ res });
}
