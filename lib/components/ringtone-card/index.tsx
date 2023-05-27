"use client";

import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

type RingtoneCardProps = {};

export default function RingtoneCard({}: RingtoneCardProps) {
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
      <div className="cursor-pointer" onClick={() => setPlay(!play)}>
        {!play && <FaPlay size={32} />}
        {play && <FaPause size={32} />}
      </div>
      <div className="cursor-pointer">
        <h3 className="text-md font-medium">Ringtone name kamal</h3>
        <p className="text-xs">Date - 12 may 2023 </p>
      </div>
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />
    </div>
  );
}
