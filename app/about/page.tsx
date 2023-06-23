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
    </div>
  );
}
