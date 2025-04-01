import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import { IBM_Plex_Sans } from "next/font/google";
import "@/styles/globals.scss";

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
        <div className="main">
          <Header />
          <div className="container">{children}</div>
          <div className="footer">
            <p>This site is built with Next.js, SCSS and PostgreSQL</p>
          </div>
        </div>
      </body>
    </html>
  );
}
