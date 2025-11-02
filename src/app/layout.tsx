import { IBM_Plex_Sans } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";
import "../styles/animations.css";
import Footer from "@/components/Footer";

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
        <div className="min-w-[320px] max-w-[1600px] mx-auto flex flex-col items-center bg-slate-950 text-white">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main
            className="
              relative 
              w-[95%] sm:w-[96%] md:w-[98%] 
              rounded-md 
              bg-white/5 
              border border-white/10 
              my-4 
              min-h-screen 
              flex flex-col items-center 
              gap-6 
              p-3 sm:p-5 md:p-8
            "
          >
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
