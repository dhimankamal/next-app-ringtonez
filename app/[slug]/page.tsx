import {
  FeaturedSection,
  TagComponent,
  SectionHeader,
  CommonButton,
  SingleRingtone,
} from "@lib/components";
import { FaDownload } from "react-icons/fa";

type PageProps = { params: { slug: string } };

export default function Page({ params }: PageProps) {
  return (
    <div className="container mx-auto p-8 space-y-4">
      <section className="grid gap-4 grid-cols-5">
        <div className="border p-4 col-span-5 lg:col-span-3 rounded-md">
          <SectionHeader label="Ringtone" />
          <SingleRingtone />
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
      <section>
        <FeaturedSection />
      </section>
    </div>
  );
}
