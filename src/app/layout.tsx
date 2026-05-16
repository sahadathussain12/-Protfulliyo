import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#05040B] text-white overflow-x-hidden">
        
        {/* Global Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-[#0A061F] to-black" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7e22ce_0%,transparent_45%)] opacity-30" />

          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-[120px]" />

          <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-[140px]" />
        </div>

        {children}
      </body>
    </html>
  );
}