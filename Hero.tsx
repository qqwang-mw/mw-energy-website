
import React from 'react';
import { ArrowRight, ShieldCheck, Activity, Battery } from 'lucide-react';
// Fixed import path for ViewState from App to types
import { ViewState } from '../types';

interface HeroProps {
  setView: (v: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite]" 
          alt="Solar Infrastructure"
        />
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-5xl">
          <div className="inline-flex items-center space-x-2 bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            <span className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.3em]">Premier North American O&M</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.95] mb-10 tracking-tighter">
            Engineering <br /><span className="gradient-text italic">Performance.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-14 max-w-2xl leading-relaxed font-medium">
            MW Energy optimizes critical energy infrastructure through AI-driven diagnostics and uncompromising data transparency.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group brand-gradient text-slate-950 px-12 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center transition-all hover:shadow-[0_0_40px_-10px_rgba(58,190,249,0.7)] hover:scale-105 active:scale-95"
            >
              Request Consultation
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center hover:bg-white/10 transition-all active:scale-95"
            >
              Our Capability
            </button>
          </div>

          <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/5 pt-16">
            <div className="flex items-start space-x-6 group">
              <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 group-hover:border-brand-cyan transition-colors">
                <ShieldCheck className="h-6 w-6 text-brand-cyan" />
              </div>
              <div>
                <h4 className="text-slate-500 font-black uppercase text-[10px] tracking-widest mb-1">Asset Uptime</h4>
                <p className="text-white text-xl font-bold tracking-tight">99.9% Availability</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 group">
              <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 group-hover:border-brand-green transition-colors">
                <Activity className="h-6 w-6 text-brand-green" />
              </div>
              <div>
                <h4 className="text-slate-500 font-black uppercase text-[10px] tracking-widest mb-1">Field Intelligence</h4>
                <p className="text-white text-xl font-bold tracking-tight">AI Glass HUD Audits</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 group">
              <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 group-hover:border-brand-cyan transition-colors">
                <Battery className="h-6 w-6 text-brand-cyan" />
              </div>
              <div>
                <h4 className="text-slate-500 font-black uppercase text-[10px] tracking-widest mb-1">Reporting</h4>
                <p className="text-white text-xl font-bold tracking-tight">Total Raw Data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;