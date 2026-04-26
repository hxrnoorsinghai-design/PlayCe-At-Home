"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/explore" as const, labelEn: "Explore", labelEs: "Explorar", color: "var(--color-playce-blue)" },
  { href: "/activities" as const, labelEn: "Activities", labelEs: "Actividades", color: "var(--color-playce-coral)" },
  { href: "/visit" as const, labelEn: "Visit", labelEs: "Visitar", color: "var(--color-playce-leaf)" },
  { href: "/guides" as const, labelEn: "Guides", labelEs: "Guías", color: "var(--color-playce-sun)" },
];

export default function Navbar() {
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLocale = locale === "en" ? "es" : "en";

  return (
    <>
      {/* Rainbow accent bar */}
      <div className="h-1 gradient-rainbow animate-rainbow w-full fixed top-0 z-[60]" />

      <nav
        className={`fixed top-1 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "frosted-glass shadow-playful py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={"/" as any} className="group flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-playceBlue to-playceTeal flex items-center justify-center shadow-colored-blue"
              >
                <span className="text-white font-heading font-black text-lg">P</span>
              </motion.div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-playceInk leading-tight tracking-tight">
                  PLAYce
                </span>
                <span className="text-[10px] font-medium text-warm-400 uppercase tracking-[0.2em] leading-none">
                  at Home
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href as any}
                    className="relative px-4 py-2 text-sm font-semibold group"
                  >
                    <span
                      className={`transition-colors duration-300 ${
                        isActive ? "text-playceInk" : "text-warm-500 group-hover:text-playceInk"
                      }`}
                    >
                      {locale === "en" ? link.labelEn : link.labelEs}
                    </span>
                    {/* Animated underline */}
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: link.color,
                        width: isActive ? "60%" : "0%",
                        opacity: isActive ? 1 : 0,
                      }}
                    />
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] rounded-full group-hover:w-[60%] group-hover:opacity-100 w-0 opacity-0 transition-all duration-300"
                      style={{ backgroundColor: link.color }}
                    />
                    {/* Active dot */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: link.color }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}

              {/* Language Toggle */}
              <Link
                href={pathname as any}
                locale={toggleLocale}
                className="ml-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-warm-100 hover:bg-warm-200 transition-colors text-sm font-semibold text-warm-600 hover:text-playceInk"
              >
                <Globe className="w-3.5 h-3.5" />
                {locale === "en" ? "ES" : "EN"}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center bg-warm-100 hover:bg-warm-200 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-playceInk/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl"
            >
              <div className="h-1 gradient-rainbow animate-rainbow" />
              <div className="p-6 pt-20 flex flex-col gap-2">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.06 }}
                    >
                      <Link
                        href={link.href as any}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-4 px-4 py-4 rounded-2xl text-lg font-heading font-bold transition-all ${
                          isActive ? "bg-warm-100 text-playceInk" : "text-warm-500 hover:bg-warm-50 hover:text-playceInk"
                        }`}
                      >
                        <div
                          className="w-3 h-3 rounded-full flex-shrink-0"
                          style={{ backgroundColor: link.color }}
                        />
                        {locale === "en" ? link.labelEn : link.labelEs}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                  className="pt-4 mt-4 border-t border-warm-200"
                >
                  <Link
                    href={pathname as any}
                    locale={toggleLocale}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl text-warm-500 hover:bg-warm-50 hover:text-playceInk transition-all font-semibold"
                  >
                    <Globe className="w-5 h-5" />
                    {locale === "en" ? "Español" : "English"}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
