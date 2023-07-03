"use client";
import React from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      {children}
    </>
  );
}
