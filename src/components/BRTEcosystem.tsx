"use client";

import { motion } from "framer-motion";

const nodes = [
  { label: "Contact Mgmt", pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
  { label: "Fare Determination", pos: "top-[15%] right-[5%]" },
  { label: "Fare Collection", pos: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2" },
  { label: "Depot Mgmt", pos: "bottom-[15%] right-[5%]" },
  { label: "Revenue Mgmt", pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
  { label: "Bus Maintenance", pos: "bottom-[15%] left-[5%]" },
  { label: "Feeder System", pos: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" },
  { label: "ITMS / AI", pos: "top-[15%] left-[5%]" },
];

export default function BRTEcosystem() {
  return (
    <section id="brt" className="py-24 px-6 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-primary" />
          <span className="text-[10px] font-jakarta font-bold uppercase tracking-[0.3em] text-primary">
            Core Capability
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-jakarta font-bold text-foreground mb-16 tracking-tight">
          THE BRT <span className="text-primary italic">ECOSYSTEM</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
            {/* Core */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative z-20 w-32 h-32 bg-primary rounded-full flex items-center justify-center font-jakarta font-black text-2xl tracking-tighter text-foreground shadow-[0_0_60px_rgba(232,25,44,0.4)]"
            >
              BRT
            </motion.div>

            {/* Orbiting Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-3/4 h-3/4 border border-primary/20 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full border border-white/5 rounded-full"
            />

            {/* Nodes */}
            {nodes.map((node, i) => (
              <div key={i} className={`absolute ${node.pos} z-30 flex flex-col items-center`}>
                <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(232,25,44,0.8)] mb-2" />
                <div className="glass px-3 py-1 rounded-md text-[8px] font-jakarta font-bold uppercase tracking-widest text-foreground whitespace-nowrap">
                  {node.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-8">
            {[
              { icon: "🚍", title: "Promote Public Transport", desc: "An alternative to conventional bus and tramway solutions — designed to increase ridership through modal shift and reduce private vehicle dependency." },
              { icon: "✨", title: "Seamless Passenger Experience", desc: "Real-time information, cashless payment, smart scheduling and CCTV-integrated safety for a truly modern journey." },
              { icon: "🌍", title: "Sustainable Mobility", desc: "Combating urban congestion and harmful emissions while building accessible, equitable transit for fast-growing African cities." },
            ].map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex gap-6 items-start">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-500">{feat.icon}</div>
                  <div>
                    <h4 className="text-lg font-jakarta font-bold uppercase tracking-widest text-foreground mb-3">{feat.title}</h4>
                    <p className="text-text-muted font-light leading-relaxed text-sm">{feat.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
