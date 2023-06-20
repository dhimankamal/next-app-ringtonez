"use client";

import React, { ChangeEventHandler, useState } from "react";
import Searchbar from "./Searchbar";
import clsx from "clsx";
import GroupRingtoneSkelton from "../skelton/GroupRingtoneSkelton";
import { Post } from "@prisma/client";
import RingtoneCard from "../ringtone-card";
import { motion, AnimatePresence } from "framer-motion";

export default function SearchRingtone() {
  const [query, setQuery] = useState<string | undefined>(undefined);
  const [result, setResult] = useState<Post[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  //debaunce pending
  const getPost = async (query: string) => {
    setLoading(true);
    const res = await fetch(`/api/search?q=${query}`);
    const { data, error }: { data: Post[]; error: any } = await res.json();
    if (error) {
      setResult(undefined);
    }
    if (data) {
      setResult(data);
    }
    setLoading(false);
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    const value = e.target.value;
    if (value) {
      setQuery(value);
      getPost(value);
    } else {
      setResult(undefined);
      setQuery(undefined);
    }
  };
  return (
    <AnimatePresence>
      <motion.div layout className="relative">
        <Searchbar onChange={onChange} />

        <motion.div
          layout
          className={clsx(
            "w-full h-fit absolute rounded-md backdrop-blur-md shadow-md bg-white/30 px-4",
            { "h-0": !query }
          )}
        >
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <GroupRingtoneSkelton
                number={6}
                className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3"
              />
            </motion.div>
          )}
          {!!result?.length && !loading && query && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-4 text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4"
            >
              {result.map(post => (
                <RingtoneCard key={post.id} post={post} />
              ))}
            </motion.div>
          )}
          {!result?.length && !loading && query && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-10 w-full text-sm"
            >
              Oops! The requested ringtone was not found. Please try another
              search.
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
