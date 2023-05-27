import SectionHeader from "../ui/SectionHeader";

export default function FeaturedSection() {
  const myArray = Array.from({ length:5 }, (_, index) => index);
  return (
    <section className="container mx-auto border p-6 rounded-md">
      <SectionHeader label="Featured Ringtones" />
      <div className="py-4 grid grid-cols-2 gap-4">
        {myArray.map((_, idx) => {
          return (
            <div key={idx} className="border p-4 rounded-md">
              <h3>Ringtone name</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
