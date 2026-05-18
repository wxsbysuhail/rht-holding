"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const clusters = [
  {
    num: "01",
    icon: "🚌",
    cat: "Cluster One",
    title: "MOBILITY",
    desc: "Trendsetters in offering safe, reliable and modern mobility solutions facilitating the daily movements of thousands of people across Mauritius and Africa.",
    tags: ["RHT Bus Services", "FLO Mobility", "FleetPro", "RHT Africa", "izy.market"],
    className: "lg:col-span-2",
  },
  {
    num: "02",
    icon: "💡",
    cat: "Cluster Two",
    title: "TECHNOLOGY",
    desc: "Developing innovative connected solutions for transportation, fleet management, GPS telematics, IoT and digital services.",
    tags: ["ICL", "ICL Zambia", "GPS Tracking", "IoT Solutions"],
    className: "lg:col-span-1",
  },
  {
    num: "03",
    icon: "📈",
    cat: "Cluster Three",
    title: "INVESTMENT",
    desc: "Investing in assets across banking, tourism, insurance and pharmaceuticals.",
    tags: ["RHT Investment", "Equity Trading", "ETF", "Forex"],
    className: "lg:col-span-3",
  },
];

export default function BentoGrid() {
  return (
    <section id="clusters" className="py-24 px-6 bg-navy">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-primary" />
          <span className="text-[10px] font-jakarta font-bold uppercase tracking-[0.3em] text-primary">
            Business Segments
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-jakarta font-bold text-foreground mb-16 tracking-tight">
          OUR <span className="text-primary italic">CLUSTERS</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {clusters.map((cluster, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className={cn(
                "glass rounded-3xl p-8 relative overflow-hidden group cursor-pointer",
                cluster.className
              )}
            >
              <div className="absolute top-0 right-0 p-8 text-8xl font-jakarta font-black text-foreground/5 group-hover:text-primary/5 transition-colors duration-500">
                {cluster.num}
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-2xl text-3xl mb-8 group-hover:scale-110 transition-transform duration-500">
                  {cluster.icon}
                </div>
                
                <span className="text-[10px] font-jakarta font-bold uppercase tracking-[0.25em] text-primary mb-2 block">
                  {cluster.cat}
                </span>
                
                <h3 className="text-4xl font-jakarta font-bold text-foreground mb-6 tracking-tight">
                  {cluster.title}
                </h3>
                
                <p className="text-text-muted text-lg font-light leading-relaxed mb-8 max-w-xl">
                  {cluster.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {cluster.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-[9px] uppercase tracking-widest px-4 py-2 rounded-full border border-glass-border bg-white/5 text-text-muted group-hover:text-foreground/80 group-hover:border-primary/20 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Decoration */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
