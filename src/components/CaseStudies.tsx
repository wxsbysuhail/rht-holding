"use client";

import { motion } from "framer-motion";

const cases = [
  {
    ghost: "TMC",
    flag: "🇺🇬 Uganda · 2020",
    title: "TONDEKA METRO CORPORATION",
    desc: "Signed first OMC contract for the operation of 1,030 buses in greater Kampala. Established CCTV, GPS, Traffic Management and cashless payment systems.",
    kpis: [
      { val: "1,030", lbl: "Buses Operated" },
      { val: "1.2M", lbl: "Daily Passengers" },
      { val: "50", lbl: "Electric Buses" },
      { val: "12K", lbl: "Staff Managed" },
    ],
  },
  {
    ghost: "VUT",
    flag: "🇲🇺 Mauritius · 2019",
    title: "VICTORIA URBAN TERMINAL",
    desc: "Providing technical expertise in Public Transport Management, Passenger Information Systems, Terminal Management and Parking Management for Mauritius's landmark hub.",
    kpis: [
      { val: "Rs1.9B", lbl: "Project Investment" },
      { val: "125K", lbl: "Daily Travellers" },
      { val: "638", lbl: "Workers On Site" },
      { val: "2km²", lbl: "Surface Area" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="cases" className="py-24 px-6 bg-navy-mid relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-primary" />
          <span className="text-[10px] font-jakarta font-bold uppercase tracking-[0.3em] text-primary">
            Impact Stories
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-jakarta font-bold text-foreground mb-16 tracking-tight">
          CASE <span className="text-primary italic">STUDIES</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-3xl overflow-hidden group hover:border-primary/30 transition-all duration-500"
            >
              <div className="p-8 lg:p-12 relative overflow-hidden bg-gradient-to-br from-primary/10 to-transparent border-b border-glass-border">
                <div className="relative z-10">
                  <span className="text-[10px] font-jakarta font-bold uppercase tracking-[0.25em] text-primary mb-4 block">
                    {project.flag}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-jakarta font-bold text-foreground tracking-tight leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-8 mb-10">
                  {project.kpis.map((kpi, kIdx) => (
                    <div key={kIdx}>
                      <div className="text-3xl font-jakarta font-bold text-foreground mb-1">
                        {kpi.val.includes("Rs") ? (
                          <><span className="text-primary">Rs</span>{kpi.val.replace("Rs", "")}</>
                        ) : kpi.val}
                      </div>
                      <div className="text-[9px] uppercase tracking-widest text-text-muted font-bold">
                        {kpi.lbl}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-text-muted font-light leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
