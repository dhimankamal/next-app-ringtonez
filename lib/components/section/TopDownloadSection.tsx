import RingtoneCard from "../ringtone-card";
import { prisma } from "@/lib/db";

export const revalidate = 10;

async function getPosts() {
  try {
    return await prisma.post.findMany();
  } catch (error) {
    throw error;
  }
}

export default async function TopDownloadSection() {
  const posts = await getPosts();
  return (
    <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {posts.map(post => (
        <RingtoneCard key={post.id} post={post} />
      ))}
    </div>
  );
}
