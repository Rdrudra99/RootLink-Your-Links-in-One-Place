import SiteHeader from "@/components/mainComponents/SiteHeader";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen overflow-hidden">
      <SiteHeader />
      <div className="container">{children}</div>
    </div>
  );
}
