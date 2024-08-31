import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/hero-nav";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CG Stewart",
  description:
    "Full Stack Developer architecting blazingly fast digital experiences that scale to infinity and beyond. ⚡️🚀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow px-2">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
