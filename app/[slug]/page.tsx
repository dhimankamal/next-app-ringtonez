import {
  FeaturedSection,
  TagComponent,
  SectionHeader,
  CommonButton,
  SingleRingtone,
  TopDownloadSection,
} from "@lib/components";
import { FaDownload } from "react-icons/fa";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import GroupRingtoneSkelton from "@lib/components/skelton/GroupRingtoneSkelton";

type PageProps = { params: { slug: string } };

export const revalidate = 10;

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

export default async function Page({ params }: PageProps) {
  const post = await getPost(params.slug);
  if (!post) {
    notFound();
  }
  return (
    <div className="container mx-auto p-8 space-y-4">
      <section className="grid gap-4 grid-cols-5">
        <div className="border p-4 col-span-5 lg:col-span-3 rounded-md">
          <SectionHeader label={`${post.title} | Ringtonez`} />
          <SingleRingtone url={post.url} />
        </div>
        <div className="border p-4 md:col-span-2 lg:col-span-1 rounded-md">
          <SectionHeader label="Download Now" />
          <div className="py-2">
            <CommonButton variant="light">
              <div className="flex flex-row gap-2 items-center justify-center">
                <span>Download Mp3</span>
                <FaDownload />
              </div>
            </CommonButton>
          </div>
        </div>
        <div className="border p-4 col-span-3 lg:col-span-1">
          <SectionHeader label="Tags" />
          <TagComponent
            tags={[
              "Kamal",
              "test",
              "Kamal",
              "test",
              "Kamal",
              "test",
              "Kamal",
              "test",
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
