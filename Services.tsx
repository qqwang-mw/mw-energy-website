
import React from 'react';
import { Sun, Battery, Zap, Factory, ArrowRight, Shield, Activity, BarChart3, Eye, HardHat } from 'lucide-react';
import { ViewState } from '../App';

interface ServiceOverview {
  id: ViewState;
  title: string;
  icon: React.ReactNode;
  shortDesc: string;
  color: string;
}

const services: ServiceOverview[] = [
  {
    id: 'solar',
    title: 'Solar O&M',
    icon: <Sun className="h-8 w-8" />,
    shortDesc: 'Utility-scale PV lifecycle and yield optimization.',
    color: 'brand-cyan'
  },
  {
    id: 'bess',
    title: 'BESS Service',
    icon: <Battery className="h-8 w-8" />,
    shortDesc: 'Safety-critical energy storage maintenance.',
    color: 'brand-green'
  },
  {
    id: 'transformer',
    title: 'Transformer',
    icon: <Zap className="h-8 w-8" />,
    shortDesc: 'High-voltage asset health and fluid diagnostics.',
    color: 'brand-cyan'
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    icon: <Factory className="h-8 w-8" />,
    shortDesc: 'Grid-level electrical work and facility O&M.',
    color: 'brand-green'
  }
];

interface ServicesProps {
  setView: (v: ViewState) => void;
}

const Services: React.FC<ServicesProps> = ({ setView }) => {
  return (
    <section id="services" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-brand-cyan font-black uppercase tracking-[0.3em] text-xs mb-6">Expertise Hub</h2>
          <h3 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">The MW <span className="gradient-text">Core.</span></h3>
          <p className="text-slate-400 text-xl font-medium leading-relaxed">
            Select a specialized sector below to explore our high-fidelity O&M protocols and technical capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setView(s.id)}
              className="group text-left relative glass-morphism p-12 rounded-[40px] border-white/5 hover:border-brand-cyan/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                {s.icon}
              </div>
              <div className="h-16 w-16 bg-slate-900 rounded-[20px] flex items-center justify-center mb-10 border border-white/5 group-hover:bg-brand-cyan/10 group-hover:border-brand-cyan/30 transition-all">
                <div className="text-slate-400 group-hover:text-brand-cyan transition-colors">
                  {s.icon}
                </div>
              </div>
              <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-6 group-hover:text-brand-cyan transition-colors">{s.title}</h4>
              <p className="text-slate-500 text-base font-medium leading-relaxed mb-10">
                {s.shortDesc}
              </p>
              <div className="flex items-center text-xs font-black uppercase tracking-widest text-brand-cyan group-hover:translate-x-2 transition-transform">
                Explore Page <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-900 rounded-[50px] p-16 border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full brand-gradient"></div>
            <div className="flex items-center space-x-6 mb-10">
              <Eye className="h-10 w-10 text-brand-cyan" />
              <h5 className="text-white font-black text-3xl tracking-tight uppercase">AI Glass Diagnostics</h5>
            </div>
            <p className="text-slate-400 text-xl leading-relaxed mb-10 font-medium">
              Every technician is equipped with AI Glass hardware, ensuring that field data is captured with 100% fidelity. You don't get a "summary"; you get the raw reality of your assets.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-5 py-2.5 bg-slate-950 rounded-full text-xs font-black text-slate-500 uppercase tracking-widest border border-white/5">Thermal HUD</span>
              <span className="px-5 py-2.5 bg-slate-950 rounded-full text-xs font-black text-slate-500 uppercase tracking-widest border border-white/5">Real-time Telemetry</span>
              <span className="px-5 py-2.5 bg-slate-950 rounded-full text-xs font-black text-slate-500 uppercase tracking-widest border border-white/5">POV Reporting</span>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[50px] p-16 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-green"></div>
            <div className="flex items-center space-x-6 mb-10">
              <HardHat className="h-10 w-10 text-brand-green" />
              <h5 className="text-white font-black text-3xl tracking-tight uppercase">Global Compliance</h5>
            </div>
            <p className="text-slate-400 text-xl leading-relaxed mb-10 font-medium">
              Our O&M standards exceed NERC, FERC, and local utility requirements. We maintain a zero-incident safety culture while ensuring your PPA availability targets are consistently met.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-5 py-2.5 bg-slate-950 rounded-full text-xs font-black text-slate-500 uppercase tracking-widest border border-white/5">NERC-CIP</span>
              <span className="px-5 py-2.5 bg-slate-950 rounded-full text-xs font-black text-slate-500 uppercase tracking-widest border border-white/5">NFPA 855</span>
              <span className="px-5 py-2.5 bg-slate-950 rounded-full text-xs font-black text-slate-500 uppercase tracking-widest border border-white/5">IEEE 1547</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
