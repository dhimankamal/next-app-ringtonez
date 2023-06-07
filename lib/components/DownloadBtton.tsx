"use client";

import React from "react";
import { CommonButton } from "./ui";
import { FaDownload } from "react-icons/fa";

type DownloadBttonProps = {
  url: string;
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
  } catch (error) {
    console.error("Error downloading file:", error);
  }
};

export default function DownloadBtton({ url }: DownloadBttonProps) {
  return (
    <CommonButton variant="light" onClick={() => handleDownload(url)}>
      <div className="flex flex-row gap-2 items-center justify-center">
        <span>Download Mp3</span>
        <FaDownload />
      </div>
    </CommonButton>
  );
}
