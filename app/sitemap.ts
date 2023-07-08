import { MetadataRoute } from "next";
import { prisma } from "@/lib/db";

const web_base_url = process.env.NEXT_WEB_URL;

async function getPosts() {
  try {
    return await prisma.post.findMany({
      take: 100,
      orderBy: {
        date: "desc",
      },
    });
  } catch (error) {
    throw error;
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const sitemaps = posts.map(item => {
    return {
      url: `${web_base_url}${item.slug}`,
      lastModified: new Date(item.date).toISOString(),
    };
  });

  return sitemaps;
}
