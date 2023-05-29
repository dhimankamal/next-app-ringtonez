import {
  FeaturedSection,
  HeorSection,
  TopDownloadSection,
} from "@lib/components";
import { prisma } from "@/lib/db";

export const revalidate = 0;

async function getPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}

export default async function Home() {
  const post = await getPosts();
  console.log("post>>>", post);
  return (
    <div className="space-y-8">
      <HeorSection />
      <FeaturedSection />
      <TopDownloadSection />
    </div>
  );
}
