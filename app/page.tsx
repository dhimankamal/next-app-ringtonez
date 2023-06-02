import {
  FeaturedSection,
  HeorSection,
  SectionHeader,
  TopDownloadSection,
} from "@lib/components";
import GroupRingtoneSkelton from "@lib/components/skelton/GroupRingtoneSkelton";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="space-y-8">
      <HeorSection />
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
