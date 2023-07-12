import Breadcrumb from "@lib/components/Breadcrumb";

export default function Page() {
  return (
    <div className="container mx-auto">
      <Breadcrumb
        crumbs={[
          { name: "Home", href: "/" },
          { name: "About us", href: "/about" },
        ]}
      />
      <div className="text-md space-y-4 p-4">
        <p className="text-lg">
          Ringtonez is a website that provides free ringtones for iPhone and
          Android phones. We have a wide variety of ringtones to choose from,
          including popular songs, movie and TV show themes, and funny sounds.
          You can find ringtones for every genre, so you are sure to find the
          perfect one for your phone.
        </p>
        <p className="text-lg">
          Finding a ringtone on our site is easy. Just browse through our
          collection by genre, or use the search bar to find a specific
          ringtone. Once you find a ringtone you like, you can preview it to
          make sure it is the right one for you. If you like the ringtone,
          simply click the download button and save it to your phone.
        </p>
        <p className="text-lg">
          We offer a variety of ways to download ringtones from our site. You
          can download ringtones directly to your phone, or you can download
          them to your computer and then transfer them to your phone. We also
          offer a mobile app that makes it easy to find and download ringtones
          on your phone.
        </p>
        <p className="text-lg">
          Ringtonez is a free service, so you do not need to create an account
          to download ringtones from our site. Just browse our collection, find
          the ringtones you like, and download them for free.
        </p>
        <h2 className="text-2xl font-bold">Why Choose Ringtonez?</h2>
        <ul className="list-disc pl-6">
          <li className="text-lg">Wide variety of ringtones</li>
          <li className="text-lg">Free downloads</li>
          <li className="text-lg">Easy to use</li>
          <li className="text-lg">Compatible with all devices</li>
        </ul>
        <p className="text-lg">We hope you enjoy using Ringtonez!</p>
      </div>
    </div>
  );
}
