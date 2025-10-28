import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LocalizationProvider } from "@/contexts/localizationContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Our Voice, Our Rights | MGNREGA Dashboard",
  description:
    "Explore district-wise MGNREGA performance data in an easy, visual, and accessible way. View labour budget, works completed, and employment trends across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LocalizationProvider>{children}</LocalizationProvider>
      </body>
    </html>
  );
}
