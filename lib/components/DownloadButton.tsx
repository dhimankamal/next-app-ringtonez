"use client";

import React, { useState } from "react";
import { CommonButton } from "./ui";
import { FaDownload } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
import { Post } from "@prisma/client";
import { convertAndDownloadRingtone } from "@lib/utils";

type DownloadBttonProps = {
  url: Post["url"];
  id: Post["id"];
  download: Post["downloads"];
};

const handleDownload = async (url: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const fileName = url.substring(url.lastIndexOf("/") + 1);
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = fileName;
    link.click();
    window.URL.revokeObjectURL(downloadUrl);
    return true;
  } catch (error) {
    console.error("Error downloading file:", error);
    return false;
  }
};

const handleClickM4a = async (url: string) => {
  return await convertAndDownloadRingtone(url);
};

export default function DownloadBtton({
  url,
  id,
  download,
}: DownloadBttonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async (type: "mp3" | "m4a") => {
    
    let status: boolean = false;
    if (type === "mp3") {
      status = await handleDownload(url);
    } else {
      setLoading(true);
      status = await handleClickM4a(url);
    }

    if (status) {
      const data = { id, download };
      await fetch(`/api/post/downloadcount`, {
        method: "POST",
        body: JSON.stringify(data),
      });
    }
    setLoading(false);
  };

  return (
    <div className="flex gap-2 flex-wrap">
      <CommonButton variant="light" onClick={() => handleClick("mp3")}>
        <div className="flex flex-row gap-2 items-center justify-center">
          <span>Download .mp3</span>
          <FaDownload />
        </div>
      </CommonButton>
      <CommonButton variant="light" onClick={() => handleClick("m4a")}>
        <div className="flex flex-row gap-2 items-center justify-center">
          <span>Download .m4a</span>
          {!loading && <FaDownload />}
          {loading && (
            <span className="animate-spin">
              <AiOutlineLoading />
            </span>
          )}
        </div>
      </CommonButton>
    </div>
  );
}
