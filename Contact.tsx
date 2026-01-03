
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-cyan/5 blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info */}
          <div>
            <h2 className="text-brand-cyan font-black uppercase tracking-[0.3em] text-xs mb-6">Partner With Us</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-none">Ready to Optimize Your <br /><span className="gradient-text">Energy Assets?</span></h3>
            <p className="text-slate-400 mb-12 text-xl font-medium leading-relaxed">Whether you have a new BESS project or an existing solar fleet, our expert team is ready to ensure peak performance with full transparency.</p>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6 group">
                <div className="bg-brand-cyan/10 p-5 rounded-2xl border border-brand-cyan/20 group-hover:bg-brand-cyan/20 transition-all">
                  <Mail className="h-6 w-6 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-black text-base uppercase tracking-widest mb-1">Email Inquiry</h4>
                  <p className="text-slate-400 font-medium text-lg">info@mwenergy.us</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 group">
                <div className="bg-brand-green/10 p-5 rounded-2xl border border-brand-green/20 group-hover:bg-brand-green/20 transition-all">
                  <Phone className="h-6 w-6 text-brand-green" />
                </div>
                <div>
                  <h4 className="text-white font-black text-base uppercase tracking-widest mb-1">Direct Line</h4>
                  <p className="text-slate-400 font-medium text-lg">+1 (209) 666-6180</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 group">
                <div className="bg-brand-cyan/10 p-5 rounded-2xl border border-brand-cyan/20 group-hover:bg-brand-cyan/20 transition-all">
                  <MapPin className="h-6 w-6 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-black text-base uppercase tracking-widest mb-1">Global HQ</h4>
                  <p className="text-slate-400 font-medium text-lg">2131 S Grove Ave Unit J<br />Ontario, California 91761</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex space-x-5">
              {[Linkedin, Twitter, Globe].map((Icon, i) => (
                <a key={i} href="#" className="p-4 bg-slate-900 border border-white/5 rounded-2xl text-slate-400 hover:text-brand-cyan hover:border-brand-cyan transition-all">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="glass-morphism p-10 md:p-14 rounded-[40px] relative overflow-hidden border-white/10">
            <div className="absolute -top-10 -right-10 p-8 opacity-5">
              <Zap className="h-64 w-64 text-brand-cyan" />
            </div>
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-black text-slate-500 uppercase tracking-widest mb-3">Full Name</label>
                  <input type="text" className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-5 text-lg text-white focus:outline-none focus:border-brand-cyan transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-black text-slate-500 uppercase tracking-widest mb-3">Company</label>
                  <input type="text" className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-5 text-lg text-white focus:outline-none focus:border-brand-cyan transition-all" placeholder="Energy Corp" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-black text-slate-500 uppercase tracking-widest mb-3">Service Interest</label>
                <div className="relative">
                  <select className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-5 text-lg text-white focus:outline-none focus:border-brand-cyan transition-all appearance-none cursor-pointer">
                    <option className="bg-slate-900">Solar O&M</option>
                    <option className="bg-slate-900">BESS Maintenance</option>
                    <option className="bg-slate-900">Transformer/HV Work</option>
                    <option className="bg-slate-900">Infrastructure Electrical</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▼</div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-black text-slate-500 uppercase tracking-widest mb-3">Project Details</label>
                <textarea rows={4} className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-5 text-lg text-white focus:outline-none focus:border-brand-cyan transition-all resize-none" placeholder="Briefly describe your requirements..."></textarea>
              </div>
              <button className="w-full brand-gradient hover:shadow-[0_0_40px_-10px_rgba(58,190,249,0.6)] text-slate-950 font-black py-6 rounded-2xl transition-all uppercase tracking-[0.2em] text-sm active:scale-[0.98]">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
