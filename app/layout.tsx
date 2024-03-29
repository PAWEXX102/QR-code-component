import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outift = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | QR code component",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${outift.className} bg-Lightgray overflow-hidden flex items-center justify-center h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
