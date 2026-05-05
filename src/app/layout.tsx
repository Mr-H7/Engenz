import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Engenz — Rent The Ride. Own The Moment.",
  description:
    "Premium car and motorcycle rentals with fast booking, flexible plans, and a fleet built for every journey. Engineered for the extraordinary.",
  keywords: "premium car rental, motorcycle rental, supercar hire, Engenz, luxury fleet",
  openGraph: {
    title: "Engenz — Rent The Ride. Own The Moment.",
    description: "Premium car and motorcycle rentals. Engineered for the extraordinary.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} antialiased`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
