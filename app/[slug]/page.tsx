import { FeaturedSection } from "@lib/components";

type PageProps = { params: { slug: string } };

export default function Page({ params }: PageProps) {
  return (
    <div className="container mx-auto p-8 space-y-4">
    
      <section className="grid gap-4 grid-cols-5">
        <div className="border p-4 col-span-3 hover:bg-slate-100 cursor-pointer bg-primary-10 transition-all duration-500">hello</div>
        <div className="border p-4 col-span-2">2</div>
      </section>
      <section>
        <FeaturedSection />
      </section>
    </div>
  );
}
