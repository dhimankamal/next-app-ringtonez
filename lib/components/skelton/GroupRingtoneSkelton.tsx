import React from "react";
import RingtoneSkelton from "./RingtoneSkelton";

type GroupRingtoneSkeltonProps = {
  number: number;
  className?: string;
};

export default function GroupRingtoneSkelton({
  number,
  className,
}: GroupRingtoneSkeltonProps) {
  const myArray = Array.from({ length: number }, (_, index) => index);
  return (
    <div
      className={`py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 ${className}`}
    >
      {myArray.map((_, idx) => (
        <RingtoneSkelton key={idx} />
      ))}
    </div>
  );
}
