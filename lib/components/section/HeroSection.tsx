import SearchRingtone from "../search/SearchRingtone";

export default function HeorSection() {
  return (
    <section className="bg-white dark:bg-gray-900 pt-20 grid place-content-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Discover the Perfect Ringtone for Every Mood and Moment
        </h1>
        <div className="mb-4 sm:px-16 lg:px-48 ">
          <SearchRingtone />
        </div>

        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          🎶 Unlock the perfect melody! 📲 Download your favorite ringtones
          today and let your phone sing with joy. 🎵 Customize your calls with a
          wide variety of tunes that match your style. 🎧 Upgrade your sound
          experience now!
        </p>
      </div>
    </section>
  );
}
