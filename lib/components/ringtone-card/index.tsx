"use client";

import { Post } from "@prisma/client";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <motion.div className="border px-4 transition-all duration-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md flex items-center gap-4">
      <button className="cursor-pointer" onClick={() => setPlay(!play)}>
        {!play && (
          <motion.div
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
          >
            <FaPlay size={32} />
          </motion.div>
        )}
        {play && (
          <motion.div
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
          >
            <FaPause size={32} />
          </motion.div>
        )}
      </button>
      <Link
        prefetch={false}
        href={`/${post.slug}`}
        className="cursor-pointer py-2 w-full flex justify-between items-center"
      >
        <div>
          <h3 className="text-md font-medium">{post?.title}</h3>
          <p className="text-xs">{dayjs().to(post?.date)}</p>
        </div>
        <div className="text-sm opacity-40 flex gap-1 items-center">
          <FaDownload /> <span>{post?.downloads || 0}</span>
        </div>
      </Link>
      <audio ref={audioRef} src={post?.url} />
    </motion.div>
  );
}
