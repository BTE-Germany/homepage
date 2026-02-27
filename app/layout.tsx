

import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { NextIntlClientProvider } from "next-intl";
import Footer from "@/components/common/Footer";
import Script from "next/script";
import CookieNotice from "@/components/common/CookieNotice";
import { ViewTransitions } from "next-view-transitions";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Deutschland in Minecraft | BTE Germany",
    description:
        "Wir bauen gemeinsam Deutschland in Minecraft nach. 1 zu 1. Block für Block.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ViewTransitions>
            <html lang="en">
                <body
                    className={`${outfit.variable} antialiased dark px-8 lg:px-0 flex w-full min-h-screen flex-col bg-background`}
                >
                    <Script
                        src="https://umami.app.k8s.bteger.dev/script.js"
                        data-website-id="17126ad1-a8ec-4164-8606-5a548d1996e4"
                    />
                    <NextIntlClientProvider>
                        <CookieNotice />
                        <div className="flex-1 h-full">
                            <Navbar />
                            {children}
                        </div>
                        <Footer />
                    </NextIntlClientProvider>
                </body>
            </html>
        </ViewTransitions>
    );
}
