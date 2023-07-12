import AdminSidebar from "./components/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="w-72 h-screen p-10">
        <AdminSidebar />
      </div>
      <div className="flex-1 p-10">{children}</div>
    </div>
  );
}
