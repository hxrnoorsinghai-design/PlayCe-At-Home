import type { Metadata } from "next";
import { Nunito, Lexend } from "next/font/google";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const nunito = Nunito({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const lexend = Lexend({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

import { CapybaraMascot } from "@/components/ui/CapybaraMascot";

export const metadata: Metadata = {
  title: "PLAYce at Home — Discovery PLAYce Digital Companion",
  description: "A digital companion to Beloit Public Library's Discovery PLAYce. Explore interactive zones, play learning games, and discover activities for children ages 0-6.",
  keywords: ["Beloit Public Library", "Discovery PLAYce", "children", "learning", "play", "early childhood"],
  openGraph: {
    title: "PLAYce at Home",
    description: "Explore, play, and learn together — at the library or from home.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${nunito.variable} ${lexend.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-playceCream text-playceInk relative">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-grow pt-14">
            {children}
          </main>
          <Footer />
          <CapybaraMascot />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
