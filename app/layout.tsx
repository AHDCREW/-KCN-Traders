import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KCN Traders — From Local Fields to Global Markets",
  description: "KCN / K.C. Nammakkal Traders — a generational agro-export network supplying fresh produce from Kerala's coastal farms to domestic wholesale and international markets.",
  keywords: "agro export, KCN traders, Nammakkal traders, fresh vegetables export, Kerala farm produce, wholesale vegetables India",
  icons: {
    icon: "/images/KCN logo png.png",
    apple: "/images/KCN logo png.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#FFFDF7] text-[#1F2937] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
