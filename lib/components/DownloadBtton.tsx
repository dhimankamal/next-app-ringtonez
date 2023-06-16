"use client";

import React from "react";
import { CommonButton } from "./ui";
import { FaDownload } from "react-icons/fa";
import { Post } from "@prisma/client";

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

export default function DownloadBtton({
  url,
  id,
  download,
}: DownloadBttonProps) {
  const handleClick = async () => {
    // const status = await handleDownload(url);
    // if (status) {
    const data = { id, download };
    await fetch(`/api/post/downloadcount`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    // }
  };

  return (
    <CommonButton variant="light" onClick={handleClick}>
      <div className="flex flex-row gap-2 items-center justify-center">
        <span>Download Mp3</span>
        <FaDownload />
      </div>
    </CommonButton>
  );
}
