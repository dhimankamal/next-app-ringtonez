import React from "react";
import RingtoneSkelton from "./RingtoneSkelton";

type GroupRingtoneSkeltonProps = {
  number: number;
};

export default function GroupRingtoneSkelton({
  number,
}: GroupRingtoneSkeltonProps) {
  const myArray = Array.from({ length: number }, (_, index) => index);
  return (
    <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {myArray.map((_, idx) => (
        <RingtoneSkelton key={idx} />
      ))}
    </div>
  );
}
