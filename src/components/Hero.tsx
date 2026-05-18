"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_68%_50%,rgba(232,25,44,0.07)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_18%_80%,rgba(201,168,76,0.04)_0%,transparent_50%)]" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)`,
            backgroundSize: '64px 64px'
          }} 
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-primary" />
            <span className="text-[10px] font-jakarta font-bold uppercase tracking-[0.3em] text-primary">
              Since 1954 · Mauritius & Africa
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl xl:text-9xl font-jakarta font-extrabold leading-[0.9] tracking-tighter mb-8 text-foreground">
            {"Leadership Through Innovation".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2 + i * 0.1, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="inline-block mr-[0.2em] last:mr-0"
              >
                {word === "Innovation" ? (
                  <motion.span 
                    initial={{ backgroundPosition: "200% center" }}
                    animate={{ backgroundPosition: "-200% center" }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="bg-gradient-to-r from-primary via-[#ff4d5e] to-primary bg-[length:400%_auto] bg-clip-text text-transparent"
                  >
                    Innovation
                  </motion.span>
                ) : word}
              </motion.span>
            ))}
          </h1>

          <p className="text-text-muted text-lg md:text-xl font-light leading-relaxed max-w-lg mb-10">
            An integrator of innovative solutions addressing and transforming mobility, technology & investment needs across Africa and beyond.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <Link 
              href="#clusters"
              className="group flex items-center gap-3 bg-primary text-foreground px-8 py-4 rounded-full font-jakarta font-bold uppercase tracking-widest text-[11px] transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30"
            >
              Explore Our Clusters
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              href="#cases"
              className="group flex items-center gap-3 text-foreground/80 hover:text-foreground px-4 py-4 font-jakarta font-bold uppercase tracking-widest text-[11px] transition-colors"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Stats Column */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="hidden lg:flex flex-col gap-8 items-end"
        >
          {[
            { num: "25K+", label: "Daily Passengers" },
            { num: "400+", label: "Employees" },
            { num: "4", label: "Countries" },
            { num: "70+", label: "Years Excellence" },
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ x: -10 }}
              className="text-right border-r-2 border-primary pr-6 py-2"
            >
              <div className="text-5xl font-jakarta font-bold text-foreground leading-none mb-1">
                {stat.num.includes("+") ? (
                  <>
                    {stat.num.replace("+", "")}<span className="text-primary">+</span>
                  </>
                ) : stat.num}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-jakarta font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30"
      >
        <span className="text-[8px] uppercase tracking-[0.4em] font-jakarta">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
