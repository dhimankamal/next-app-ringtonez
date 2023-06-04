"use client";

import { Post } from "@prisma/client";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

dayjs.extend(relativeTime);

type RingtoneCardProps = {
  post: Post;
};

export default function RingtoneCard({ post }: RingtoneCardProps) {
  const [play, setPlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (play) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [play]);

  return (
    <div className="border p-4 transition-all duration-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md flex items-center gap-4">
      <button className="cursor-pointer" onClick={() => setPlay(!play)}>
        {!play && <FaPlay size={32} />}
        {play && <FaPause size={32} />}
      </button>
      <Link href={post.slug} className="cursor-pointer">
        <h3 className="text-md font-medium">{post?.title}</h3>
        <p className="text-xs">{dayjs().from(post?.date) }</p>
      </Link>
      <audio ref={audioRef} src={post?.url} />
    </div>
  );
}
