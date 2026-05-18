"use client";

import { motion } from "framer-motion";

const whyItems = [
  { num: "01", title: "Strong Client Relationships", desc: "We are closely connected and dedicated to those we work with, building long-term partnerships founded on trust and mutual growth." },
  { num: "02", title: "Deep Know-How", desc: "Seven decades of mobility expertise translated into knowledge-sharing and consultancy solutions addressing today's most complex transport challenges." },
  { num: "03", title: "Passenger-Centric", desc: "We deliver the best possible service to our passengers — always and everywhere — putting user experience at the centre of everything we build." },
  { num: "04", title: "Always On The Move", desc: "We constantly provide advanced transportation solutions suited to today's world, from electric fleets to AI-powered transit intelligence systems." },
];

const clients = [
  { logo: "/emblem_of_mauritius-freelogovectors.net_-400x322.png", name: "National Land Transport Authority" },
  { logo: "/emblem_of_mauritius-freelogovectors.net_-400x322.png", name: "Ministry of Works & Transport" },
  { logo: "/tondeka.jpg", name: "Tondeka Metro Corporation" },
  { logo: "/kampala.png", name: "Kampala Capital City Authority" },
  { logo: "/kiira.png", name: "Kiira Motors Corporation" },
  { logo: "/metro-express.png", name: "Metro Express" },
  { name: "Road Transport Division" },
];

export default function WhyAndClients() {
  return (
    <div className="bg-navy">
      {/* Why Section */}
      <section id="why" className="py-24 px-6 border-b border-glass-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-[10px] font-jakarta font-bold uppercase tracking-[0.3em] text-primary">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-jakarta font-bold text-foreground mb-16 tracking-tight">
            WHY <span className="text-primary italic">RHT</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyItems.map((item, idx) => (
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
                  borderColor: "rgba(232, 25, 44, 0.3)",
                  boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)"
                }}
                className="glass p-8 rounded-3xl group transition-all duration-500 relative overflow-hidden"
              >
                <div className="text-6xl font-jakarta font-black text-foreground/5 mb-8 group-hover:text-primary/10 transition-colors">
                  {item.num}
                </div>
                <h4 className="text-lg font-jakarta font-bold uppercase tracking-widest text-foreground mb-4 leading-tight">
                  {item.title}
                </h4>
                <p className="text-text-muted text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Clients Section */}
      <section className="py-24 px-6 bg-navy-mid overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-[10px] font-jakarta font-bold uppercase tracking-[0.3em] text-primary">
              Our Clients
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-jakarta font-bold text-foreground mb-16 tracking-tight">
            TRUSTED BY <span className="text-primary italic">LEADERS</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {clients.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass px-6 py-4 rounded-3xl flex items-center gap-6 hover:border-primary/40 transition-all duration-300 group"
              >
                {/* Logo Container - Only rendered if 'logo' property exists */}
                {"logo" in client && (
                  <div className={`w-28 h-16 ${(client.name === "Kampala Capital City Authority" || client.name === "Metro Express") ? "bg-transparent" : "bg-white"} rounded-lg flex items-center justify-center overflow-hidden border border-transparent group-hover:border-primary/30 transition-colors`}>
                    {client.logo ? (
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="w-full h-full object-contain" 
                      />
                    ) : (
                      <div className="text-[10px] font-jakarta font-bold text-text-muted/40 border border-dashed border-card-border w-full h-full flex items-center justify-center rounded-lg">
                        LOGO
                      </div>
                    )}
                  </div>
                )}
                
                <span className="text-[10px] font-jakarta font-bold uppercase tracking-widest text-text-muted group-hover:text-foreground transition-colors max-w-[200px] leading-tight">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
