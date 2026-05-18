"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const events = [
  { year: "1954", title: "Operations Begin", desc: "First bus operator in Mauritius as Rose Hill Transport Ltd" },
  { year: "1965", title: "Auto Transmission", desc: "First automatic transmission introduced in buses" },
  { year: "1998", title: "ICL Launch", desc: "Pioneer GPS Tracking services in Mauritius" },
  { year: "2001", title: "Stock Exchange", desc: "Listed on DEM of Stock Exchange of Mauritius" },
  { year: "2005", title: "E-Fares", desc: "Introduction of Electronic Fare Systems" },
  { year: "2010", title: "Free WiFi", desc: "First free WiFi buses in Mauritius" },
  { year: "2018", title: "Electric Buses", desc: "First EV fleet launched in Mauritius" },
  { year: "2021", title: "VUT & Uganda", desc: "Victoria Urban Terminal + BRT deployment" },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="timeline" className="py-32 px-6 bg-navy-mid overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10 mb-20">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-primary" />
          <span className="text-[10px] font-jakarta font-bold uppercase tracking-[0.3em] text-primary">
            Our Journey
          </span>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="text-5xl md:text-7xl font-jakarta font-bold text-foreground tracking-tight">
            A SOLID <span className="text-primary italic">GROWTH</span>
          </h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-3 px-4 py-2 glass rounded-full"
          >
            <span className="text-[10px] font-jakarta font-bold uppercase tracking-widest text-text-muted">
              Slide to Explore
            </span>
            <div className="w-12 h-1.5 bg-card-border rounded-full relative overflow-hidden">
              <motion.div 
                animate={{ x: [-20, 40] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-4 h-full bg-primary rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative">
        <div 
          ref={containerRef}
          className="flex gap-12 overflow-x-auto pb-12 px-6 no-scrollbar cursor-grab active:cursor-grabbing relative z-10"
        >
          <div className="flex gap-20 min-w-max px-[10%] relative">
            {/* The Line extended for the whole scrollable width */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-primary/30 -translate-y-1/2 z-0" />
            
            {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative w-72 group"
            >
              {/* Dot on line */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full z-20 shadow-[0_0_20px_rgba(232,25,44,0.5)] group-hover:scale-125 transition-transform" />
              
              <div className={cn(
                "flex flex-col gap-4",
                idx % 2 === 0 ? "pb-32 text-right items-end" : "pt-32"
              )}>
                <span className="text-5xl font-jakarta font-black text-primary/40 group-hover:text-primary/60 transition-colors duration-500 select-none">
                  {event.year}
                </span>
                <div>
                  <h4 className="text-foreground font-jakarta font-bold uppercase tracking-widest text-sm mb-2">
                    {event.title}
                  </h4>
                  <p className="text-text-muted text-xs font-light leading-relaxed max-w-[240px]">
                    {event.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
