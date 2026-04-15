import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Engenz — Premium Car & Motorcycle Rentals",
  description:
    "Rent stylish, reliable cars and motorcycles with fast booking, flexible plans, and trusted service. Engenz delivers premium mobility solutions for every journey.",
  keywords: "car rental, motorcycle rental, premium vehicles, Engenz, flexible rental, luxury car hire",
  openGraph: {
    title: "Engenz — Premium Car & Motorcycle Rentals",
    description: "Your ride, ready when you are. Premium car and motorcycle rentals with fast booking.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
