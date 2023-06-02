import React from "react";

export default function RingtoneSkelton() {
  return (
    <div className="border p-4 animate-pulse rounded-md flex items-center gap-4">
      <div className="bg-gray-400 h-full w-14 rounded-md"></div>
      <div className="w-full grid gap-2">
        <h3 className="bg-gray-400 h-6 rounded-md"></h3>
        <p className="bg-gray-400 h-3 rounded-md"></p>
      </div>
    </div>
  );
}
