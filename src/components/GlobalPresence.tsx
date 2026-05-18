"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Globe, MapPin, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";

const locations = [
  { name: "Mauritius", type: "Main Office", color: "bg-primary", top: "82%", left: "85%", bio: "Strategic Headquarters & Innovation Hub" },
  { name: "Uganda", type: "Regional Office", color: "bg-accent", top: "45%", left: "55%", bio: "Victoria Urban Terminal & BRT Operations" },
  { name: "Zambia", type: "Regional Office", color: "bg-accent", top: "65%", left: "48%", bio: "Fleet Management & Logistics Services" },
  { name: "Kenya", type: "Regional Office", color: "bg-accent", top: "42%", left: "62%", bio: "Technology Integration & Partner Network" },
  { name: "Senegal", type: "Partner", color: "bg-white/30", top: "30%", left: "15%", bio: "West African Mobility Research" },
  { name: "Djibouti", type: "Partner", color: "bg-white/30", top: "35%", left: "68%", bio: "East African Strategic Logistics" },
];

export default function GlobalPresence() {
  const [activeLoc, setActiveLoc] = useState<string | null>(null);

  return (
    <section id="presence" className="py-32 px-6 bg-navy-deep relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-[10px] font-jakarta font-bold uppercase tracking-[0.3em] text-primary">
                Global Reach
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-jakarta font-bold text-foreground tracking-tight">
              OUR <span className="text-primary italic">PRESENCE</span>
            </h2>
          </div>
          <p className="text-text-muted text-sm font-light leading-relaxed max-w-md">
            RHT Holding is expanding its footprint across the African continent, bringing innovative mobility solutions to emerging markets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Interactive Particle Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square glass rounded-[3rem] p-12 flex items-center justify-center overflow-hidden group"
          >
            {/* The Dot Grid Map - Stylized representation of Africa */}
            <div className="relative w-full h-full opacity-60 group-hover:opacity-80 transition-opacity duration-700">
              <svg viewBox="0 0 400 500" className="w-full h-full text-foreground">
                {/* A simplified but recognizable dotted-grid Africa */}
                <path d="M120,50 L180,40 L240,45 L280,70 L320,120 L330,180 L310,240 L280,300 L240,360 L200,420 L160,460 L130,420 L100,360 L70,300 L50,220 L60,140 L85,80 Z" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  strokeDasharray="2 4"
                  className="opacity-40"
                />
                {/* Dots inside the shape - Deterministic for hydration */}
                {Array.from({ length: 50 }).map((_, i) => (
                  <circle 
                    key={i} 
                    cx={120 + (i * 137.5) % 180} 
                    cy={100 + (i * 153.2) % 320} 
                    r="1.5" 
                    fill="currentColor"
                    className="animate-pulse opacity-30" 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </svg>
            </div>

            {/* Locations Markers */}
            {locations.map((loc, idx) => (
              <motion.div
                key={loc.name}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 + idx * 0.1 }}
                onMouseEnter={() => setActiveLoc(loc.name)}
                onMouseLeave={() => setActiveLoc(null)}
                className="absolute cursor-pointer"
                style={{ top: loc.top, left: loc.left }}
              >
                <div className="relative">
                  <motion.div 
                    animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute inset-0 rounded-full ${loc.color} opacity-50`}
                  />
                  <div className={`w-3.5 h-3.5 rounded-full ${loc.color} border-2 border-navy-deep relative z-10 shadow-xl shadow-primary/20 group-hover:scale-125 transition-transform`} />
                  
                  {/* Hover Tooltip */}
                  <AnimatePresence>
                    {(activeLoc === loc.name) && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 p-4 glass rounded-2xl w-48 z-20 pointer-events-none"
                      >
                        <span className="text-[9px] font-bold text-primary uppercase tracking-[0.2em] block mb-1">{loc.type}</span>
                        <h4 className="text-sm font-bold text-foreground mb-1">{loc.name}</h4>
                        <p className="text-[10px] text-text-muted leading-relaxed">{loc.bio}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}

            {/* Mauritius to Africa Arcs */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              {locations.slice(1).map((loc, i) => (
                <motion.path
                  key={i}
                  d={`M ${85}% ${82}% Q ${Math.min(parseFloat(loc.left), 85)}% ${Math.min(parseFloat(loc.top), 82) - 10}% ${loc.left} ${loc.top}`}
                  fill="none"
                  stroke="url(#arcGradient)"
                  strokeWidth="1.5"
                  strokeDasharray="10 10"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: activeLoc === loc.name ? 0.8 : 0.1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                />
              ))}
              <defs>
                <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E8192C" />
                  <stop offset="100%" stopColor="#C9A84C" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Locations List */}
          <div className="flex flex-col gap-4">
            {locations.map((loc, idx) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => setActiveLoc(loc.name)}
                onMouseLeave={() => setActiveLoc(null)}
                className={cn(
                  "glass p-6 rounded-3xl flex items-center justify-between group cursor-pointer transition-all duration-500",
                  activeLoc === loc.name ? "border-primary/50 bg-primary/5 translate-x-2" : "hover:border-primary/30"
                )}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-3 h-3 rounded-full ${loc.color} shadow-[0_0_15px_rgba(232,25,44,0.4)]`} />
                  <div>
                    <h4 className="text-sm font-jakarta font-bold uppercase tracking-[0.2em] text-foreground mb-1">
                      {loc.name}
                    </h4>
                    <span className="text-[9px] font-jakarta font-bold uppercase tracking-widest text-text-muted">
                      {loc.type}
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Navigation size={14} className="text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
