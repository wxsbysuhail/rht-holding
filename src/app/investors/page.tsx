"use client";

import { motion } from "framer-motion";
import { 
  Download, FileText, Calendar, ArrowUpRight, 
  TrendingUp, BarChart3, ShieldCheck, Mail 
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CTAAndFooter from "@/components/CTAAndFooter";

const stockStats = [
  { label: "Market Cap", value: "Rs 1.4B", change: "+2.4%" },
  { label: "Share Price", value: "Rs 38.50", change: "-0.5%" },
  { label: "Dividend Yield", value: "4.2%", change: "Stable" },
  { label: "P/E Ratio", value: "12.4", change: "+1.2%" },
];

const reportCategories = [
  {
    title: "Annual Reports",
    reports: [
      { name: "Annual Report 2025", size: "12.4 MB", date: "Oct 2025" },
      { name: "Annual Report 2024", size: "10.8 MB", date: "Oct 2024" },
      { name: "Annual Report 2023", size: "9.5 MB", date: "Oct 2023" },
    ]
  },
  {
    title: "Financial Statements",
    reports: [
      { name: "Q3 Condensed Financials", size: "2.1 MB", date: "May 2026" },
      { name: "Q2 Condensed Financials", size: "1.9 MB", date: "Feb 2026" },
      { name: "Q1 Condensed Financials", size: "2.4 MB", date: "Nov 2025" },
    ]
  },
  {
    title: "Shareholder Notices",
    reports: [
      { name: "Notice of AGM 2026", size: "0.8 MB", date: "Apr 2026" },
      { name: "Dividend Declaration", size: "0.5 MB", date: "Mar 2026" },
      { name: "Cautionary Announcement", size: "0.6 MB", date: "Jan 2026" },
    ]
  }
];

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-navy text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-xs font-jakarta font-bold uppercase tracking-[0.4em] text-primary">
                Investor Relations
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-jakarta font-black tracking-tighter leading-[0.9] mb-8">
              DRIVING VALUE<br />THROUGH <span className="text-primary italic">PRECISION.</span>
            </h1>
            <p className="text-text-muted text-lg md:text-xl font-light max-w-2xl leading-relaxed">
              We maintain an open, transparent dialogue with our shareholders and the financial community. Explore our latest financial performance and corporate disclosures.
            </p>
          </motion.div>

          {/* Stock Dashboard */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {stockStats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="glass p-8 rounded-[2.5rem] relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
              >
                <div className="relative z-10">
                  <p className="text-[10px] font-jakarta font-bold uppercase tracking-widest text-text-muted mb-4">{stat.label}</p>
                  <div className="flex items-end gap-3 mb-2">
                    <h3 className="text-3xl font-jakarta font-black text-foreground">{stat.value}</h3>
                    <span className={`text-[10px] font-bold mb-1.5 px-2 py-0.5 rounded-full ${
                      stat.change.startsWith("+") ? "bg-green-500/10 text-green-500" : 
                      stat.change.startsWith("-") ? "bg-primary/10 text-primary" : "bg-white/10 text-text-muted"
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-colors transform rotate-12">
                  <TrendingUp size={96} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main IR Hub */}
      <section className="py-24 px-6 bg-navy-mid border-y border-card-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Left: Interactive Financials Feed */}
            <div className="lg:col-span-2 space-y-16">
              {reportCategories.map((cat, catIdx) => (
                <div key={cat.title}>
                  <div className="flex items-center justify-between mb-8 border-b border-card-border pb-4">
                    <h2 className="text-2xl font-jakarta font-bold tracking-tight text-foreground uppercase tracking-widest">
                      {cat.title}
                    </h2>
                    <Link href="#" className="text-[10px] font-jakarta font-bold uppercase tracking-widest text-primary hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                      View All <ArrowUpRight size={14} />
                    </Link>
                  </div>
                  
                  <div className="grid gap-4">
                    {cat.reports.map((report, idx) => (
                      <motion.div
                        key={report.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass p-6 rounded-2xl flex items-center justify-between group hover:bg-white/5 transition-all"
                      >
                        <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <FileText size={20} />
                          </div>
                          <div>
                            <h4 className="font-jakarta font-bold text-foreground mb-1">{report.name}</h4>
                            <div className="flex items-center gap-4">
                              <span className="text-[10px] uppercase tracking-widest text-text-muted flex items-center gap-1.5">
                                <Calendar size={12} /> {report.date}
                              </span>
                              <span className="text-[10px] uppercase tracking-widest text-text-muted flex items-center gap-1.5">
                                {report.size}
                              </span>
                            </div>
                          </div>
                        </div>
                        <button className="w-10 h-10 glass rounded-full flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/50 transition-all">
                          <Download size={18} />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Forthcoming Disclosures - Smart Placeholders */}
              <div className="mt-20">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-2xl font-jakarta font-bold tracking-tight text-foreground uppercase tracking-widest">
                    Forthcoming Disclosures
                  </h2>
                  <span className="bg-primary/10 text-primary text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest animate-pulse">
                    Scheduled
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: "Annual Report 2026", date: "Expected Oct 2026" },
                    { name: "Q4 Condensed Financials", date: "Expected Aug 2026" },
                  ].map((placeholder, idx) => (
                    <div 
                      key={idx}
                      className="glass p-8 rounded-3xl border-dashed border-card-border/50 relative overflow-hidden group opacity-60 hover:opacity-100 transition-opacity"
                    >
                      <div className="flex items-start justify-between mb-8">
                        <div className="w-12 h-16 bg-white/5 rounded-lg relative overflow-hidden">
                          {/* Pulsing Skeleton Lines */}
                          <div className="absolute top-4 left-3 w-6 h-1 bg-white/10 rounded animate-pulse" />
                          <div className="absolute top-7 left-3 w-4 h-1 bg-white/10 rounded animate-pulse" />
                          <div className="absolute top-10 left-3 w-5 h-1 bg-white/10 rounded animate-pulse" />
                        </div>
                        <span className="text-[9px] font-jakarta font-bold uppercase tracking-widest text-text-muted">
                          {placeholder.date}
                        </span>
                      </div>
                      <h4 className="font-jakarta font-bold text-foreground/50 mb-6">{placeholder.name}</h4>
                      <button className="flex items-center gap-2 text-[10px] font-jakarta font-bold uppercase tracking-widest text-primary hover:gap-3 transition-all">
                        Notify Me <ArrowUpRight size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Quick Links & Contact */}
            <div className="space-y-8">
              <div className="glass p-8 rounded-3xl border-primary/20">
                <h3 className="text-xl font-jakarta font-bold text-foreground mb-6">Investor Toolkit</h3>
                <div className="space-y-4">
                  {[
                    { label: "Corporate Governance", icon: <ShieldCheck size={18} /> },
                    { label: "Dividend History", icon: <BarChart3 size={18} /> },
                    { label: "IR Calendar", icon: <Calendar size={18} /> },
                    { label: "Email Alerts", icon: <Mail size={18} /> },
                  ].map((item) => (
                    <Link 
                      key={item.label}
                      href="#" 
                      className="flex items-center justify-between p-4 glass rounded-xl text-xs font-jakarta font-bold uppercase tracking-widest text-text-muted hover:text-foreground hover:border-primary/50 transition-all group"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-primary">{item.icon}</span>
                        {item.label}
                      </span>
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="glass p-8 rounded-3xl bg-primary/5 border-primary/20">
                <h3 className="text-xl font-jakarta font-bold text-foreground mb-4">Investor Contact</h3>
                <p className="text-sm text-text-muted font-light mb-8 leading-relaxed">
                  For all investor related queries, please contact our Group Secretary.
                </p>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-widest text-primary font-bold mb-1">Direct Email</span>
                    <span className="text-sm text-foreground font-medium">investors@rht.africa</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-widest text-primary font-bold mb-1">Phone</span>
                    <span className="text-sm text-foreground font-medium">+230 464 1221</span>
                  </div>
                </div>
                <button className="w-full mt-8 bg-primary text-white py-4 rounded-xl font-jakarta font-bold uppercase tracking-widest text-[10px] transition-all hover:shadow-xl hover:shadow-primary/20">
                  Request Information
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTAAndFooter />
    </main>
  );
}
