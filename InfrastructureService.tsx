
import React from 'react';
import { Factory, Construction, ShieldCheck, Activity, CheckCircle, Network, HardHat, FileText } from 'lucide-react';
import Contact from '../Contact';
// Fixed import path for ViewState from App to types
import { ViewState } from '../../types';

const InfrastructureService: React.FC<{ setView: (v: ViewState) => void }> = ({ setView }) => {
  return (
    <div className="pt-24 animate-in fade-in duration-700">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950">
          <img 
            src="https://images.unsplash.com/photo-1454165833767-027ffed15c3e?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-10" 
            alt="Infrastructure"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter">GRID <span className="gradient-text">INFRA</span></h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-medium mb-12 leading-relaxed">Comprehensive electrical infrastructure O&M. From substation switchgear to industrial interconnection protection.</p>
        </div>
      </section>

      <section className="py-32 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-900/50 p-10 rounded-[40px] border border-white/5 hover:border-brand-cyan/30 transition-all">
              <Network className="h-10 w-10 text-brand-cyan mb-8" />
              <h4 className="text-white font-black text-2xl mb-4">SCADA & Comms</h4>
              <p className="text-slate-400 text-base leading-relaxed">Maintaining fiber optic backbones, PLC logic, and site-wide telemetry for total data visibility.</p>
            </div>
            <div className="bg-slate-900/50 p-10 rounded-[40px] border border-white/5 hover:border-brand-cyan/30 transition-all">
              <ShieldCheck className="h-10 w-10 text-brand-cyan mb-8" />
              <h4 className="text-white font-black text-2xl mb-4">Relay Protection</h4>
              <p className="text-slate-400 text-base leading-relaxed">Functional testing and settings validation for SEL, GE, and ABB protection relays (P81/P87).</p>
            </div>
            <div className="bg-slate-900/50 p-10 rounded-[40px] border border-white/5 hover:border-brand-cyan/30 transition-all">
              <HardHat className="h-10 w-10 text-brand-cyan mb-8" />
              <h4 className="text-white font-black text-2xl mb-4">Switchgear O&M</h4>
              <p className="text-slate-400 text-base leading-relaxed">Service for SF6, vacuum, and air breakers including lubrication and millisecond timing tests.</p>
            </div>
            <div className="bg-slate-900/50 p-10 rounded-[40px] border border-white/5 hover:border-brand-cyan/30 transition-all">
              <FileText className="h-10 w-10 text-brand-cyan mb-8" />
              <h4 className="text-white font-black text-2xl mb-4">Compliance</h4>
              <p className="text-slate-400 text-base leading-relaxed">Management of NERC/FERC documentation and utility interconnection agreement (IA) audits.</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default InfrastructureService;