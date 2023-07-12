"use client"
import { RingtoneCard } from "@lib/components";
 import { Post } from "@prisma/client";
import React, { useState } from "react";

type RingtonesProps = {
  posts: Post[];
};
export default function Ringtones({ posts }: RingtonesProps) {
  const [data, setData] = useState(posts);
  return (
    <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {data && data?.map(post => <RingtoneCard key={post.id} post={post} />)}
    </div>
  );
}
