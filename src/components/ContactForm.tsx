"use client";

import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, Briefcase } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto glass p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
    >
      <form onSubmit={handleSubmit} className="relative z-10 space-y-6 text-left">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-jakarta font-bold uppercase tracking-widest text-text-muted ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
              <input 
                required
                type="text" 
                placeholder="John Doe"
                className="w-full bg-navy-deep border border-card-border rounded-2xl py-4 pl-12 pr-4 text-foreground placeholder:text-text-muted/30 focus:outline-none focus:border-primary/50 transition-all font-jakarta"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-jakarta font-bold uppercase tracking-widest text-text-muted ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
              <input 
                required
                type="email" 
                placeholder="john@company.com"
                className="w-full bg-navy-deep border border-card-border rounded-2xl py-4 pl-12 pr-4 text-foreground placeholder:text-text-muted/30 focus:outline-none focus:border-primary/50 transition-all font-jakarta"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-jakarta font-bold uppercase tracking-widest text-text-muted ml-1">Company / Interest</label>
          <div className="relative">
            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
            <select className="w-full bg-navy-deep border border-card-border rounded-2xl py-4 pl-12 pr-4 text-foreground focus:outline-none focus:border-primary/50 transition-all font-jakarta appearance-none">
              <option className="bg-navy">Mobility Solutions</option>
              <option className="bg-navy">Technology Partnership</option>
              <option className="bg-navy">Investment Inquiry</option>
              <option className="bg-navy">Other</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-jakarta font-bold uppercase tracking-widest text-text-muted ml-1">Your Message</label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-6 text-primary/40" size={18} />
            <textarea 
              required
              rows={4}
              placeholder="How can we help move your vision forward?"
              className="w-full bg-navy-deep border border-card-border rounded-2xl py-4 pl-12 pr-4 text-foreground placeholder:text-text-muted/30 focus:outline-none focus:border-primary/50 transition-all font-jakarta resize-none"
            />
          </div>
        </div>

        <button
          disabled={isSubmitting || isSent}
          className="w-full group relative overflow-hidden bg-primary text-white py-5 rounded-2xl font-jakarta font-bold uppercase tracking-[0.2em] text-xs transition-all duration-500 hover:shadow-2xl hover:shadow-primary/40 active:scale-[0.98]"
        >
          <div className="relative z-10 flex items-center justify-center gap-3">
            {isSubmitting ? (
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
              />
            ) : isSent ? (
              "Message Sent Successfully"
            ) : (
              <>
                Send Message
                <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </>
            )}
          </div>
          <motion.div 
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 bg-white/10 skew-x-12"
          />
        </button>
      </form>
    </motion.div>
  );
}
