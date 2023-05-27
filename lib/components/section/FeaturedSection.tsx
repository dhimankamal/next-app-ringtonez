import RingtoneCard from "../ringtone-card";
import SectionHeader from "../ui/SectionHeader";

export default function FeaturedSection() {
  const myArray = Array.from({ length: 5 }, (_, index) => index);
  return (
    <section className="container mx-auto border p-6 rounded-md">
      <SectionHeader label="Featured Ringtones" />
      <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {myArray.map((_, idx) => (
          <RingtoneCard key={idx} />
        ))}
      </div>
    </section>
  );
}
