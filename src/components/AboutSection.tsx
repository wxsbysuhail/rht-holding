"use client";

import { motion } from "framer-motion";

const pillars = [
  { icon: "🚀", title: "Innovation", desc: "Modern solutions for everyone — from electric buses to smart transit AI" },
  { icon: "🌱", title: "Sustainability", desc: "Contributing to a greener, safer and better tomorrow through every decision" },
  { icon: "🤝", title: "Employment", desc: "Stimulating jobs and economic growth in local communities across Africa" },
  { icon: "⚖️", title: "Diversity", desc: "Promoting differences and gender equality across all levels of the organisation" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-primary" />
          <span className="text-[10px] font-jakarta font-bold uppercase tracking-[0.3em] text-primary">
            Who We Are
          </span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-jakarta font-bold text-foreground mb-16 tracking-tight">
          A LEGACY OF <span className="text-primary italic">BOLD</span><br />TRANSFORMATION
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-3xl p-10 lg:p-16 relative overflow-hidden aspect-video lg:aspect-auto lg:h-[500px] flex flex-col justify-end">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-0" />
              
              <div className="relative z-10">
                <span className="text-[10px] font-jakarta font-bold uppercase tracking-[0.2em] text-primary mb-2 block">
                  Incorporated · Rose-Hill, Mauritius · 1954
                </span>
                <h3 className="text-5xl font-jakarta font-bold text-foreground mb-4">7 Decades</h3>
                <p className="text-text-muted font-light max-w-sm">
                  Pioneering sustainable mobility solutions from Mauritius to Africa and beyond.
                </p>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 flex flex-col gap-4">
              {[
                { num: "8", label: "Business Segments" },
                { num: "100+", label: "Global Clients" },
                { num: "6", label: "Offices Worldwide" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="glass p-4 rounded-xl w-40 hover:border-primary/30 transition-colors"
                >
                  <div className="text-2xl font-jakarta font-bold text-foreground leading-none">
                    {stat.num.includes("+") ? <>{stat.num.replace("+", "")}<span className="text-primary">+</span></> : stat.num}
                  </div>
                  <div className="text-[8px] uppercase tracking-widest text-text-muted font-bold mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div>
            <p className="text-xl text-foreground/80 font-light leading-relaxed mb-6">
              RHT Holding is an <strong className="text-foreground font-semibold">integrator of innovative solutions</strong> addressing and transforming mobility, technology and investment needs worldwide. Founded as Rose Hill Transport Ltd, we evolved into a multi-segment holding company across four countries.
            </p>
            <p className="text-lg text-text-muted font-light leading-relaxed mb-12">
              Listed on the <strong className="text-foreground font-medium">Development and Enterprise Market</strong> of the Stock Exchange of Mauritius and a member of the <strong className="text-foreground font-medium">SEMSI Sustainability Index</strong>.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map((pillar, i) => (
                <div key={i} className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors group">
                  <div className="text-2xl mb-4 group-hover:scale-110 transition-transform">{pillar.icon}</div>
                  <h4 className="text-xs font-jakarta font-bold uppercase tracking-widest text-foreground mb-2">{pillar.title}</h4>
                  <p className="text-xs text-text-muted leading-relaxed font-light">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
