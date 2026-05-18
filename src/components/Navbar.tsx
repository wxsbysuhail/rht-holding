"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Clusters", href: "#clusters" },
  { name: "History", href: "#timeline" },
  { name: "Presence", href: "#presence" },
  { name: "Investors", href: "/investors" },
];

import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 transition-all duration-300"
    >
      <motion.div
        className={cn(
          "flex items-center justify-between w-full max-w-7xl px-6 py-3 rounded-full transition-all duration-500",
          scrolled 
            ? "glass-dark shadow-2xl shadow-primary/5 py-2" 
            : "bg-transparent"
        )}
      >
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="RHT Holding Logo"
            className="h-12 w-auto rounded-xl shadow-sm hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] font-jakarta font-semibold uppercase tracking-widest text-text-muted hover:text-foreground transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="#contact"
            className="bg-primary hover:bg-primary-dark text-foreground text-[11px] font-jakarta font-bold uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className="text-foreground p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[80px] z-40 bg-navy/95 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center gap-8 p-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-jakarta font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-primary text-foreground py-4 rounded-xl font-jakarta font-bold uppercase tracking-widest"
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
