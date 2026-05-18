"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Mail, Phone, MapPin, Globe, MessageSquare, 
  Share2, ArrowUp, ChevronDown 
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import ContactForm from "./ContactForm";

const footerLinks = [
  {
    title: "Mobility",
    links: [
      { name: "RHT Bus Services", href: "#" },
      { name: "FLO Mobility", href: "#" },
      { name: "FleetPro Services", href: "#" },
      { name: "RHT Africa", href: "#" },
      { name: "izy.market", href: "#" },
    ],
  },
  {
    title: "Technology",
    links: [
      { name: "ICL", href: "#" },
      { name: "ICL Zambia", href: "#" },
      { name: "GPS Telematics", href: "#" },
      { name: "IoT Solutions", href: "#" },
      { name: "Cashless Systems", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About RHT", href: "#" },
      { name: "Investment", href: "#" },
      { name: "Sustainability", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
];

export default function CTAAndFooter() {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-navy relative overflow-hidden">
      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 text-center relative z-10 border-t border-card-border bg-gradient-to-b from-navy to-navy-deep">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-8xl font-jakarta font-black text-foreground mb-8 tracking-tighter leading-none">
            READY TO<br />MOVE <span className="text-primary italic">FORWARD?</span>
          </h2>
          <p className="text-text-muted text-lg md:text-xl font-light mb-12 max-w-xl mx-auto">
            Partner with RHT Holding to transform mobility and transportation. Fill out the form below and our team will get in touch.
          </p>
          
          <ContactForm />
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="bg-navy-deep py-20 px-6 border-t border-card-border relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-12">
            {/* Brand Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-8 group">
                <img
                  src="/logo.png"
                  alt="RHT Holding Logo"
                  className="h-14 w-auto rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <p className="text-text-muted text-sm font-light leading-relaxed max-w-sm mb-10">
                An integrator of innovative solutions transforming mobility, technology and investment worldwide. Founded in Mauritius in 1954. Listed on the Stock Exchange of Mauritius.
              </p>
              
              <div className="flex items-center gap-4">
                <Link href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/50 transition-all"><MessageSquare size={18} /></Link>
                <Link href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/50 transition-all"><Share2 size={18} /></Link>
                <button 
                  onClick={scrollToTop}
                  className="ml-auto w-10 h-10 glass rounded-full flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/50 transition-all group"
                >
                  <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Links Sections */}
            {footerLinks.map((section) => (
              <div key={section.title} className="flex flex-col">
                {/* Mobile Header */}
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex items-center justify-between w-full py-4 border-b border-card-border lg:border-none lg:py-0 lg:mb-8 text-left group"
                >
                  <h4 className="text-[10px] font-jakarta font-bold uppercase tracking-[0.3em] text-foreground">
                    {section.title}
                  </h4>
                  <ChevronDown 
                    size={16} 
                    className={cn(
                      "text-text-muted transition-transform duration-300 lg:hidden",
                      openSections.includes(section.title) ? "rotate-180" : ""
                    )} 
                  />
                </button>

                {/* Links List */}
                <div className={cn("lg:block", openSections.includes(section.title) ? "block" : "hidden")}>
                  <ul className="flex flex-col gap-4 mt-4 lg:mt-0">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href} 
                          className="text-sm text-text-muted hover:text-primary transition-all font-light hover:translate-x-1 inline-block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Details Quick Band */}
          <div className="mt-20 p-8 glass rounded-3xl grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <MapPin size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-widest text-text-muted font-bold">Headquarters</span>
                <span className="text-xs text-foreground font-medium">Rose-Hill, Mauritius</span>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-widest text-text-muted font-bold">Call Us</span>
                <span className="text-xs text-foreground font-medium">+230 464 1221</span>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-widest text-text-muted font-bold">Email</span>
                <span className="text-xs text-foreground font-medium">info@rht.africa</span>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-card-border flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold text-center md:text-left">
              © 2026 RHT Holding Ltd. Listed on the SEM Mauritius.
            </p>
            <div className="flex gap-8 text-[10px] uppercase tracking-widest text-text-muted font-bold">
              <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
              <Link href="#" className="hover:text-primary transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
