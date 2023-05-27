import RingtoneCard from "../ringtone-card";
import SectionHeader from "../ui/SectionHeader";

export default function TopDownloadSection() {
  const myArray = Array.from({ length: 5 }, (_, index) => index);
  return (
    <section className="container mx-auto border p-6 rounded-md">
      <SectionHeader label="Top Download" />
      <div className="py-4 grid grid-cols-5 gap-4">
        {myArray.map((_, idx) => (
          <RingtoneCard key={idx} />
        ))}
      </div>
    </section>
  );
}
