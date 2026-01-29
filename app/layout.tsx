import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { NextIntlClientProvider } from "next-intl";
import Footer from "@/components/common/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deutschland in Minecraft | BTE Germany",
  description: "Wir bauen gemeinsam Deutschland in Minecraft nach. 1 zu 1. Block für Block.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased dark px-8 lg:px-0 flex w-full min-h-screen flex-col bg-background`}
      >
        <NextIntlClientProvider>
          <div className="flex-1">
            <Navbar />
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
