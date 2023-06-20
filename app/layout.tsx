import { TailwindIndicator } from "@lib/components/TailwindIndicatior";
import "./globals.css";
import { Footer,Navbar } from "@lib/components";
import { Metadata } from 'next'
 

export const metadata:Metadata = {
  title: "Ringtonez",
  description: "Discover the Perfect Ringtone for Every Mood and Moment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="w-full">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <TailwindIndicator />
      </body>
    </html>
  );
}
