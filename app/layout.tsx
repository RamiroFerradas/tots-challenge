import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Favicon from "@/public/planet.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Countries challenge",
  description: "Countries challenge by TOTS",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
