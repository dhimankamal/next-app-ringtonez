import {
  FeaturedSection,
  TagComponent,
  SectionHeader,
  SingleRingtone,
  TopDownloadSection,
} from "@lib/components";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import GroupRingtoneSkelton from "@lib/components/skelton/GroupRingtoneSkelton";
import DownloadBtton from "@lib/components/DownloadButton";

type PageProps = { params: { slug: string } };

export const revalidate = 100;

const getPost = async (slug: string) => {
  try {
    return await prisma.post.findUnique({
      where: {
        slug,
      },
    });
  } catch (error) {
    throw error;
  }
};

export async function generateMetadata({ params }: PageProps) {
  const post = await getPost(params.slug);
  return {
    title: `${post?.title} | Ringtonez`,
  };
}

export default async function Page({ params }: PageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 md:p-8 space-y-4">
      <section className="grid gap-4 grid-cols-5">
        <div className="border p-4 col-span-5 lg:col-span-4 rounded-md">
          <SectionHeader label={`${post.title} | Ringtonez`} />
          <SingleRingtone url={post.url} />
        </div>
        <div className="border p-4 col-span-5 lg:col-span-1 rounded-md">
          <SectionHeader label="Download Now" />
          <div className="py-2">
            <DownloadBtton
              url={post.url}
              id={post.id}
              download={post.downloads}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="border p-4 col-span-3 lg:col-span-1">
          <SectionHeader label="Tags" />
          <TagComponent
            tags={[
              "ringtone",
              "freeringtone",
              "ringtonedownload",
              "newringtone",
              "latestringtones",
              "popularringtones",
              "mp3ringtone",
              "aacringtone",
            ]}
          />
        </div>
      </section>
      <section className="container mx-auto border p-6 rounded-md">
        <SectionHeader label="Featured Ringtones" />
        <Suspense fallback={<GroupRingtoneSkelton number={10} />}>
          {/* @ts-expect-error Async Server Component */}
          <FeaturedSection />
        </Suspense>
      </section>

      <section className="container mx-auto border p-6 rounded-md">
        <SectionHeader label="Top Download" />
        <Suspense fallback={<GroupRingtoneSkelton number={5} />}>
          {/* @ts-expect-error Async Server Component */}
          <TopDownloadSection />
        </Suspense>
      </section>
    </div>
  );
}
