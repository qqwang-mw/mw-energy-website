
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Contact from './components/Contact';
import AIConsultant from './components/AIConsultant';
import SolarService from './components/pages/SolarService';
import BESSService from './components/pages/BESSService';
import TransformerService from './components/pages/TransformerService';
import InfrastructureService from './components/pages/InfrastructureService';
import { Eye, FileSearch, Database, ArrowRight, ChevronUp } from 'lucide-react';

export type ViewState = 'home' | 'solar' | 'bess' | 'transformer' | 'infrastructure';

const InnovationSection: React.FC = () => (
  <section id="innovation" className="py-32 bg-slate-900 overflow-hidden relative border-y border-white/5">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-cyan/5 blur-[120px] -z-10"></div>
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-cyan/20 rounded-full blur-[80px]"></div>
          <div className="relative z-10 glass-morphism p-1.5 rounded-[40px] overflow-hidden border-brand-cyan/30">
            <img 
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=1000" 
              alt="AI Glasses Technology" 
              className="rounded-[36px] w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex flex-col justify-end p-10">
              <div className="brand-gradient w-fit px-4 py-1 rounded text-xs font-black text-slate-950 uppercase mb-3 tracking-widest">Live AI Glass HUD</div>
              <h4 className="text-white font-black text-3xl tracking-tighter uppercase italic opacity-80 font-mono">Capture_Complete_Data...</h4>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <h2 className="text-brand-cyan font-black uppercase tracking-[0.3em] text-xs mb-6">Innovative Workflow</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-none">Total Raw Data. <br /><span className="gradient-text">Zero Compromise.</span></h3>
          <p className="text-slate-400 text-xl mb-12 font-medium leading-relaxed">
            Our technicians utilize **AI GLASSES** to harvest massive field data sets in real-time, delivering the industry's most transparent and granular reporting.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="space-y-4 group">
              <div className="h-14 w-14 bg-brand-cyan/10 rounded-2xl flex items-center justify-center border border-brand-cyan/20 transition-all group-hover:bg-brand-cyan/20">
                <Eye className="h-7 w-7 text-brand-cyan" />
              </div>
              <h5 className="text-white font-black uppercase tracking-tight text-xl">AI Glass Capture</h5>
              <p className="text-slate-500 text-base font-medium leading-relaxed">Visual intelligence from the front lines of your energy assets.</p>
            </div>
            <div className="space-y-4 group">
              <div className="h-14 w-14 bg-brand-green/10 rounded-2xl flex items-center justify-center border border-brand-green/20 transition-all group-hover:bg-brand-green/20">
                <Database className="h-7 w-7 text-brand-green" />
              </div>
              <h5 className="text-white font-black uppercase tracking-tight text-xl">High-Fidelity Mining</h5>
              <p className="text-slate-500 text-base font-medium leading-relaxed">Every cell, every inverter health point. We capture what others ignore.</p>
            </div>
            <div className="space-y-4 col-span-full">
              <div className="glass-morphism p-8 rounded-3xl border-l-[6px] border-brand-cyan relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-cyan/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <FileSearch className="h-8 w-8 text-brand-cyan" />
                    <h5 className="text-2xl text-white font-black tracking-tight uppercase">Transparent Detailed Reporting</h5>
                  </div>
                  <p className="text-slate-400 text-lg leading-relaxed font-medium mb-8">
                    We synthesize millions of raw data points into interactive reports. You see exactly what our technicians see—no obfuscation, total visibility.
                  </p>
                  <button className="flex items-center text-brand-cyan text-xs font-black uppercase tracking-widest group">
                    Explore Sample Report <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HomeView: React.FC<{ setView: (v: ViewState) => void }> = ({ setView }) => (
  <>
    <Hero setView={setView} />
    <Services setView={setView} />
    
    <section id="why-us" className="py-32 bg-slate-950 border-t border-white/5 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -bottom-8 -right-8 w-full h-full border-2 border-brand-green/20 rounded-[40px] -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=1000" 
                alt="Technician working" 
                className="rounded-[40px] shadow-2xl border border-white/10"
              />
              <div className="absolute -top-10 -right-10 bg-slate-900 border border-brand-cyan/30 p-8 rounded-3xl shadow-2xl hidden md:block">
                <div className="text-brand-cyan font-black text-5xl tracking-tighter mb-1">ZERO</div>
                <div className="text-slate-400 text-xs font-black uppercase tracking-[0.3em]">Incident Safety</div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-brand-green font-black uppercase tracking-[0.3em] text-xs mb-6">MW Excellence</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Built for Precision. <br />Driven by <span className="gradient-text">Trust.</span></h3>
            <p className="text-slate-400 text-xl leading-relaxed mb-10 font-medium">
              At MW Energy, we don't just "check" equipment. We audit energy ecosystems using high-fidelity field data captured via AI-integrated hardware.
            </p>
            <div className="space-y-5">
              {[
                "AI Glass Assisted Field Audits",
                "Total Transparency Detailed Reports",
                "Certified HV/Substation Specialists",
                "Fleet Performance Benchmarking",
                "Zero-Harm Safety Mandate"
              ].map((text, i) => (
                <div key={i} className="flex items-center space-x-4 text-slate-200 font-bold uppercase text-xs tracking-[0.2em] group">
                  <div className="h-6 w-6 rounded-full bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20 group-hover:bg-brand-cyan/30 transition-colors">
                    <div className="h-1.5 w-1.5 rounded-full brand-gradient"></div>
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <InnovationSection />
    <Stats />
    <Contact />
  </>
);

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 1000);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-slate-950 selection:bg-brand-cyan/30">
      <Navbar currentView={view} setView={setView} />
      
      <main>
        {view === 'home' && <HomeView setView={setView} />}
        {view === 'solar' && <SolarService setView={setView} />}
        {view === 'bess' && <BESSService setView={setView} />}
        {view === 'transformer' && <TransformerService setView={setView} />}
        {view === 'infrastructure' && <InfrastructureService setView={setView} />}
      </main>

      <footer className="py-20 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs font-black uppercase tracking-[0.3em]">
            <div className="mb-8 md:mb-0">
              © {new Date().getFullYear()} MW Energy Solutions. Powering Global Infrastructure.
            </div>
            <div className="flex space-x-12">
              <a href="#" className="hover:text-brand-cyan transition-colors">Safety Standard</a>
              <a href="#" className="hover:text-brand-cyan transition-colors">Terms</a>
              <a href="#" className="hover:text-brand-cyan transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>

      <AIConsultant />
      
      {showTopBtn && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-32 right-8 z-50 p-4 bg-slate-900 border border-white/10 text-brand-cyan rounded-2xl shadow-2xl hover:bg-brand-cyan hover:text-slate-950 transition-all animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default App;
