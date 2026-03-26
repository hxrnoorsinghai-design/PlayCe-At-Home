"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const t = useTranslations("Index");
  const locale = useLocale();
  const nextLocale = locale === "en" ? "es" : "en";
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/explore", label: "Explore PLAYce" },
    { href: "/activities", label: "Activities at Home" },
    { href: "/guides", label: "Caregiver Guides" },
    { href: "/visit", label: "Visit Planner" },
  ];

  const switchLocale = () => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-playceCream/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-heading font-bold text-playceCoral">
              PLAYce at Home
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href as any}
                className="text-playceInk hover:text-playceBlue px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
            <button
              onClick={switchLocale}
              className="flex items-center text-playceInk hover:text-playceTeal px-3 py-2 text-sm font-medium transition-colors"
            >
              <Globe className="w-4 h-4 mr-1" />
              {locale === "en" ? "ES" : "EN"}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={switchLocale}
              className="p-2 mr-2 text-playceInk hover:bg-gray-100 rounded-full"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-playceInk hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href as any}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-playceInk hover:text-playceBlue hover:bg-gray-50"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
