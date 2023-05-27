import {
  FeaturedSection,
  HeorSection,
  TopDownloadSection,
} from "@lib/components";

export default function Home() {
  return (
    <div className="space-y-8">
      <HeorSection />
      <FeaturedSection />
      <TopDownloadSection />
    </div>
  );
}
