import type { Metadata } from "next";
import { Playpen_Sans } from "next/font/google";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlowC = Barlow_Condensed({
  weight: ["400", "700"],
  variable: "--font-barlow",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KJewels",
  description: "Stainless steel jewelery for UCF students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowC.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
