import { IBM_Plex_Sans } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";
import "../styles/animations.css";

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tareque Mahmud",
  description: "Portfolio website for Tareque Mahmud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibm.className}>
        <div className="min-w-[320px] max-w-[1600px] mx-auto flex flex-col items-center bg-gradient-to-r from-slate-900 to-[#132e5b] h-full">
          <Header />
          <div className="relative w-[98%] rounded-md bg-white/30 border border-white/30 my-4 min-h-[1400px] flex flex-col items-center gap-6 text-white">
            {children}
          </div>
          <div className="min-h-[5rem] w-full bg-[#0870a0] flex flex-row justify-center items-center text-white">
            <p>This site is built with Next.js and TailwindCSS</p>
          </div>
        </div>
      </body>
    </html>
  );
}
