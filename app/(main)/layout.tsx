import { Footer, Navbar } from "@lib/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ringtonez",
  description: "Discover the Perfect Ringtone for Every Mood and Moment",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
}
