import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import BentoGrid from "@/components/BentoGrid";
import Timeline from "@/components/Timeline";
import GlobalPresence from "@/components/GlobalPresence";
import BRTEcosystem from "@/components/BRTEcosystem";
import CaseStudies from "@/components/CaseStudies";
import WhyAndClients from "@/components/WhyAndClients";
import TeamAndPartners from "@/components/TeamAndPartners";
import CTAAndFooter from "@/components/CTAAndFooter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Marquee Section */}
      <div className="py-10 bg-navy-deep border-y border-glass-border overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee gap-16 items-center">
          {[
            "Mobility Solutions", "Technology Innovation", "Investment Management", 
            "Bus Rapid Transit", "Fleet Management", "Electric Vehicles", 
            "GPS Telematics", "African Expansion", "Sustainable Transport", "Cashless Payment"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-8">
              <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(232,25,44,0.5)]" />
              <span className="text-[11px] font-jakarta font-bold uppercase tracking-[0.4em] text-text-muted">
                {text}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {[
            "Mobility Solutions", "Technology Innovation", "Investment Management", 
            "Bus Rapid Transit", "Fleet Management", "Electric Vehicles", 
            "GPS Telematics", "African Expansion", "Sustainable Transport", "Cashless Payment"
          ].map((text, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-8">
              <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(232,25,44,0.5)]" />
              <span className="text-[11px] font-jakarta font-bold uppercase tracking-[0.4em] text-text-muted">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <AboutSection />
      
      {/* Numbers Band - Quick Integrated Band */}
      <div className="py-16 px-6 bg-navy-mid border-y border-glass-border">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          {[
            { n: "25K+", l: "Daily Passengers" },
            { n: "400+", l: "Employees" },
            { n: "4", l: "Countries" },
            { n: "100+", l: "Global Clients" },
            { n: "8", l: "Segments" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-jakarta font-black text-foreground leading-none mb-2">
                {stat.n.includes("+") ? <>{stat.n.replace("+", "")}<span className="text-primary">+</span></> : stat.n}
              </div>
              <div className="text-[9px] uppercase tracking-widest text-text-muted font-bold">{stat.l}</div>
            </div>
          ))}
        </div>
      </div>

      <BentoGrid />
      <Timeline />
      
      {/* Companies Strip - Full Section */}
      <div className="py-24 px-6 bg-navy border-b border-glass-border overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-[10px] font-jakarta font-bold uppercase tracking-[0.3em] text-primary">
              Group Companies
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-jakarta font-bold text-foreground mb-16 tracking-tight">
            THE RHT <span className="text-primary italic">ECOSYSTEM</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "RHT Bus Services", logo: "/rht-bus-services.png" },
              { name: "FLO Mobility", logo: "/flo-mobility.png" },
              { name: "ICL", logo: "/icl.png" },
              { name: "FleetPro Services", logo: "/fleetpro.png" },
              { name: "RHT Africa", logo: "/rht-africa.png" },
              { name: "ICL Zambia", logo: "/icl-zambia.png" },
              { name: "RHT Investment", logo: "/rht-investment.png" },
              { name: "izy.market", logo: "/izy-market.png" }
            ].map(co => (
              <div 
                key={co.name} 
                className="glass p-6 rounded-3xl flex flex-col items-center gap-6 hover:border-primary/40 transition-all duration-500 group cursor-default hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5"
              >
                {/* Logo Container */}
                <div className={`w-32 h-20 ${co.name === "ICL" ? "bg-transparent" : "bg-white"} rounded-xl flex items-center justify-center overflow-hidden border border-transparent group-hover:border-primary/30 transition-all duration-300 shadow-lg shadow-black/30`}>
                  {co.logo ? (
                    <img 
                      src={co.logo} 
                      alt={co.name} 
                      className={`w-full h-full object-contain p-2 ${co.name === "RHT Bus Services" ? "scale-[1.8]" : ""}`} 
                    />
                  ) : (
                    <div className="text-[10px] font-jakarta font-bold text-text-muted/40">
                      LOGO
                    </div>
                  )}
                </div>
                
                <span className="text-[10px] font-jakarta font-bold uppercase tracking-widest text-text-muted group-hover:text-foreground transition-colors text-center max-w-[120px] leading-tight">
                  {co.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <GlobalPresence />
      <BRTEcosystem />
      <CaseStudies />
      <WhyAndClients />
      <TeamAndPartners />
      <CTAAndFooter />
    </main>
  );
}
