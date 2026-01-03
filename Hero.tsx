
import React from 'react';
import { ArrowRight, ShieldCheck, Activity, Battery } from 'lucide-react';
import { ViewState } from '../App';

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
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950"></div>
        <img 
          src="https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-20" 
          alt="Solar Infrastructure"
        />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-green/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            <span className="text-brand-cyan text-xs font-black uppercase tracking-[0.2em]">Global Energy O&M Standard</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
            Future-Proofing <br /><span className="gradient-text">Energy Assets.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl leading-relaxed font-medium">
            MW Energy leverages AI-integrated field diagnostics and total data transparency to maximize the performance of Solar, BESS, and Infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group brand-gradient text-slate-950 px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center transition-all hover:shadow-[0_0_30px_-5px_rgba(58,190,249,0.5)]"
            >
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center hover:bg-slate-700 transition-all"
            >
              Explore Solutions
            </button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => scrollToSection('stats')}>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-brand-cyan transition-colors">
                <ShieldCheck className="h-8 w-8 text-brand-cyan" />
              </div>
              <div>
                <h4 className="text-white font-black uppercase text-xs tracking-widest opacity-60">Uptime</h4>
                <p className="text-slate-300 text-lg font-bold">99.9% Reliability</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => scrollToSection('innovation')}>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-brand-green transition-colors">
                <Activity className="h-8 w-8 text-brand-green" />
              </div>
              <div>
                <h4 className="text-white font-black uppercase text-xs tracking-widest opacity-60">Intelligence</h4>
                <p className="text-slate-300 text-lg font-bold">AI-Driven Field Audits</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => scrollToSection('innovation')}>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-brand-cyan transition-colors">
                <Battery className="h-8 w-8 text-brand-cyan" />
              </div>
              <div>
                <h4 className="text-white font-black uppercase text-xs tracking-widest opacity-60">Transparency</h4>
                <p className="text-slate-300 text-lg font-bold">Raw Data Reports</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
