import Breadcrumb from "@lib/components/Breadcrumb";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-2">
      <Breadcrumb
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Ringtones", href: "/ringtones" },
        ]}
      />
      <div className="">{children}</div>
    </div>
  );
}
