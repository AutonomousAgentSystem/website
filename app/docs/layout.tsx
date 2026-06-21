import Sidebar from "@/components/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-12 prose">
          {children}
        </div>
      </main>
    </div>
  );
}
