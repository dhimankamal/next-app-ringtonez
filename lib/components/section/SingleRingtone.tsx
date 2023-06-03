"use client";

import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { ProgressBar } from "../ui";

type SingleRingtoneProps = {
  url: string;
};

export default function SingleRingtone({ url }: SingleRingtoneProps) {
  const [play, setPlay] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);

  const handleAudioTimeUpdate = (
    event: React.SyntheticEvent<HTMLAudioElement, Event>
  ) => {
    const { currentTime, duration } = event.target as HTMLAudioElement;
    const percentage = (currentTime / duration) * 100;
    setPercentage(percentage);
  };

  useEffect(() => {
    if (play) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [play]);

  return (
    <div className="py-4">
      <div className="flex items-center justify-center gap-4 ">
        <button className="cursor-pointer" onClick={() => setPlay(!play)}>
          {!play && <FaPlay size={32} />}
          {play && <FaPause size={32} />}
        </button>
        <div className="w-full">
          <ProgressBar percentage={percentage} />
        </div>
        <audio
          ref={audioRef}
          onTimeUpdate={handleAudioTimeUpdate}
          src={url}
        />
      </div>
    </div>
  );
}
