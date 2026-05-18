"use client";

import { motion } from "framer-motion";

const team = [
  { image: "/sidarth.png", initials: "SS", name: "Sidarth Sharma", role: "Group CEO" },
  { image: "/ravindra.png", initials: "RG", name: "Ravindra Goburdhun", role: "Chief Operating Officer" },
  { initials: "PR", name: "Prakash Rajkomar", role: "Group Treasurer" },
  { initials: "AA", name: "Ajmal Abdool", role: "Chief Innovation Officer" },
  { initials: "RB", name: "Rajkoomar Balkrishoon", role: "Engineering Consultant" },
  { initials: "RS", name: "Reehaz Soobhany", role: "Chief Operating Officer" },
  { initials: "JM", name: "Jamil Malik", role: "CEO, RHT Africa" },
  { initials: "AR", name: "Ashwin Ramchurn", role: "Engineering Manager" },
  { initials: "HB", name: "Hussayn Baulum", role: "Head of Training" },
];

const partnerCats = [
  { title: "OEM Partners", items: ["Golden Dragon", "Ashok Leyland", "Zhong Tong Bus"] },
  { title: "Financial Advisors", items: ["Transport Investment Limited (TIL)", "MCB Group"] },
  { title: "Technology Providers", items: ["TapToPay", "LIT Transit", "ColumbiaSoft", "Semnox", "Geotab", "Swarco Traffic Systems"] },
];

export default function TeamAndPartners() {
  return (
    <div className="bg-navy">
      {/* Team Section */}
      <section id="team" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-[10px] font-jakarta font-bold uppercase tracking-[0.3em] text-primary">
              Leadership
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-jakarta font-bold text-foreground mb-16 tracking-tight">
            MANAGEMENT <span className="text-primary italic">TEAM</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {team.map((member, idx) => (
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
              whileHover={{ y: -10 }}
              className="glass rounded-3xl p-6 group transition-all duration-500"
            >
              <div className="aspect-[4/5] bg-navy-mid rounded-2xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-jakarta font-bold text-2xl text-primary/50">
                    {member.initials}
                  </div>
                )}
              </div>
              <h3 className="text-sm font-jakarta font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-[9px] font-jakarta font-bold uppercase tracking-widest text-primary mb-3">
                {member.role}
              </p>
            </motion.div>
          ))}
            
            {/* 400+ Team Card */}
            <div className="glass p-8 rounded-3xl text-center border-primary/20 bg-primary/5 flex flex-col justify-center items-center">
              <div className="text-4xl font-jakarta font-black text-primary mb-2">+400</div>
              <p className="text-[9px] uppercase tracking-widest text-text-muted font-bold">Team Members Across 4 Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-24 px-6 bg-navy-mid">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-[10px] font-jakarta font-bold uppercase tracking-[0.3em] text-primary">
              Our Ecosystem
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-jakarta font-bold text-foreground mb-16 tracking-tight">
            OUR <span className="text-primary italic">PARTNERS</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {partnerCats.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4 className="text-[11px] font-jakarta font-bold uppercase tracking-[0.3em] text-primary mb-8 pb-4 border-b border-glass-border">
                  {cat.title}
                </h4>
                <div className="flex flex-col gap-3">
                  {cat.items.map((item, iIdx) => (
                    <motion.div 
                      key={iIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (idx * 0.1) + (iIdx * 0.05) }}
                      whileHover={{ x: 10, backgroundColor: "rgba(232, 25, 44, 0.05)" }}
                      className="glass p-4 rounded-xl text-xs font-jakarta font-semibold uppercase tracking-widest text-text-muted hover:text-foreground hover:border-primary/30 transition-all duration-300 cursor-default"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
