
import React from 'react';
import { Zap, Activity, Microscope, Droplets, CheckCircle, AlertTriangle, Settings, ShieldCheck, Factory, HardHat, FileText, Beaker, ZapOff, RefreshCcw, Waves, Shield, Thermometer, FlaskConical, ClipboardCheck } from 'lucide-react';
import Contact from '../Contact';
// Fixed import path for ViewState from App to types
import { ViewState } from '../../types';

const TransformerService: React.FC<{ setView: (v: ViewState) => void }> = ({ setView }) => {
  return (
    <div className="pt-24 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950">
          <img 
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-10" 
            alt="Power Substation"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-5 py-2 mb-8">
            <span className="text-brand-cyan text-xs font-black uppercase tracking-[0.2em]">High Voltage Excellence</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter uppercase">Transformer <span className="gradient-text">& HV</span></h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto font-medium mb-12 leading-relaxed">
            Total lifecycle management for critical high-voltage assets. MW Energy delivers NETA-certified testing, fluid diagnostics, and turnkey engineering solutions for utilities and industrial systems.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { label: "Voltage Range", value: "Up to 500kV" },
              { label: "Response", value: "24/7/365" },
              { label: "Accreditation", value: "NETA Accredited" },
              { label: "Engineering", value: "PE Certified" }
            ].map((stat, i) => (
              <div key={i} className="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-[32px]">
                <div className="text-white font-black text-3xl tracking-tighter mb-1">{stat.value}</div>
                <div className="text-xs text-slate-500 font-black uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Service Pillars */}
      <section className="py-32 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-brand-cyan font-black uppercase tracking-[0.3em] text-xs mb-6">Technical Capabilities</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none">Testing. <span className="gradient-text">Diagnostics.</span> Engineering.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Transformer Testing & Maintenance */}
            <div className="glass-morphism p-12 rounded-[56px] border-white/5 hover:border-brand-cyan/30 transition-all group">
              <div className="h-16 w-16 bg-brand-cyan/10 rounded-2xl flex items-center justify-center mb-8 border border-brand-cyan/20 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-brand-cyan" />
              </div>
              <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-6">Field Testing</h4>
              <ul className="space-y-4">
                {[
                  "Power Factor & Tan Delta (Doble)",
                  "Transformer Turns Ratio (TTR)",
                  "Winding Resistance Testing",
                  "Insulation Resistance (Megger)",
                  "Excitation Current Testing",
                  "Sweep Frequency Response Analysis (SFRA)",
                  "Core Ground Testing"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-slate-400 text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Insulating Fluid Services */}
            <div className="glass-morphism p-12 rounded-[56px] border-white/5 hover:border-brand-green/30 transition-all group">
              <div className="h-16 w-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-8 border border-brand-green/20 group-hover:scale-110 transition-transform">
                <Droplets className="h-8 w-8 text-brand-green" />
              </div>
              <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-6">Fluid Diagnostics</h4>
              <ul className="space-y-4">
                {[
                  "Dissolved Gas Analysis (DGA)",
                  "Moisture & Dielectric Breakdown",
                  "Acidity & Interfacial Tension (IFT)",
                  "Hot Oil Processing & Degassing",
                  "Vacuum Filling & Fluid Retrofilling",
                  "PCB Testing & Dechlorination",
                  "Furanic Compound Analysis"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-slate-400 text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Engineering & Asset Management */}
            <div className="glass-morphism p-12 rounded-[56px] border-white/5 hover:border-brand-cyan/30 transition-all group">
              <div className="h-16 w-16 bg-brand-cyan/10 rounded-2xl flex items-center justify-center mb-8 border border-brand-cyan/20 group-hover:scale-110 transition-transform">
                <FileText className="h-8 w-8 text-brand-cyan" />
              </div>
              <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-6">Engineering</h4>
              <ul className="space-y-4">
                {[
                  "Arc Flash Hazard Analysis",
                  "Short Circuit & Coordination Studies",
                  "Grounding Grid System Audits",
                  "Substation Automation & Design",
                  "Protection Relay Settings & Logic",
                  "Root Cause Failure Analysis",
                  "Asset State of Health Monitoring"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-slate-400 text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* On-Site Component Maintenance */}
      <section className="py-32 bg-slate-900/50 border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-brand-green font-black uppercase tracking-[0.3em] text-xs mb-6">Component Care</h2>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">On-Site Field <br /><span className="gradient-text">Maintenance.</span></h3>
              <p className="text-slate-400 text-xl mb-12 leading-relaxed font-medium">
                Our mobile field crews are equipped for heavy-duty transformer maintenance, ensuring reliability through precision component-level care.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: <Settings />, title: "LTC Maintenance", text: "Tap changer internal inspection, timing, and repair." },
                  { icon: <Shield />, title: "Gasket & Bushing", text: "Complete regasketing and bushing replacements." },
                  { icon: <Thermometer />, title: "Cooling Systems", text: "Radiator, fan, and pump service/replacement." },
                  { icon: <ClipboardCheck />, title: "Leak Repair", text: "Weld repairs and valve replacements on-site." }
                ].map((feat, i) => (
                  <div key={i} className="p-8 bg-slate-950/50 rounded-3xl border border-white/5 hover:border-brand-cyan/30 transition-all">
                    <div className="text-brand-cyan mb-4">{feat.icon}</div>
                    <h5 className="text-white font-black uppercase text-sm tracking-widest mb-2">{feat.title}</h5>
                    <p className="text-slate-500 text-sm font-bold uppercase">{feat.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-brand-cyan/5 blur-[100px] rounded-full"></div>
              <div className="relative glass-morphism p-12 rounded-[60px] border-white/10">
                <div className="flex items-center space-x-4 mb-10">
                  <FlaskConical className="h-6 w-6 text-brand-green" />
                  <h4 className="text-brand-cyan font-black uppercase tracking-widest text-sm italic">Critical DGA Thresholds</h4>
                </div>
                <div className="space-y-8">
                  {[
                    { gas: "Hydrogen (H2)", level: "< 100 ppm", risk: "Low" },
                    { gas: "Acetylene (C2H2)", level: "0 ppm", risk: "Critical" },
                    { gas: "Methane (CH4)", level: "< 120 ppm", risk: "Normal" },
                    { gas: "Ethylene (C2H4)", level: "< 50 ppm", risk: "Nominal" }
                  ].map((gas, i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{gas.gas}</span>
                        <span className="text-sm font-bold text-white">{gas.level}</span>
                      </div>
                      <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden">
                        <div 
                          className={`h-full brand-gradient transition-all duration-1000`} 
                          style={{ width: i === 1 ? '5%' : '85%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 p-6 bg-slate-900 rounded-3xl border border-white/5 flex items-center">
                  <Activity className="h-8 w-8 text-brand-cyan mr-4 animate-pulse" />
                  <span className="text-xs font-black text-slate-300 uppercase tracking-widest">Real-time Lab Integration Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Solutions Section */}
      <section className="py-32 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-brand-cyan font-black uppercase tracking-[0.3em] text-xs mb-6">Asset Lifecycle</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">Lifecycle <span className="gradient-text">Solutions.</span></h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-12 bg-slate-900/50 rounded-[56px] border border-white/5 hover:border-brand-green/30 transition-all group">
              <RefreshCcw className="h-12 w-12 text-brand-green mb-8 group-hover:rotate-180 transition-transform duration-700" />
              <h4 className="text-2xl font-black text-white uppercase mb-6">Remanufactured Transformers</h4>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Reduce lead times and costs without compromising quality. We provide fully remanufactured and reconditioned transformers—all built to current IEEE/ANSI standards with full warranties.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-5 py-2 bg-slate-950 rounded-full text-xs font-black text-slate-500 uppercase tracking-widest">Padmounts</span>
                <span className="px-5 py-2 bg-slate-950 rounded-full text-xs font-black text-slate-500 uppercase tracking-widest">Substations</span>
                <span className="px-5 py-2 bg-slate-950 rounded-full text-xs font-black text-slate-500 uppercase tracking-widest">Dry Type</span>
              </div>
            </div>

            <div className="p-12 bg-slate-900/50 rounded-[56px] border border-white/5 hover:border-brand-cyan/30 transition-all group">
              <Waves className="h-12 w-12 text-brand-cyan mb-8" />
              <h4 className="text-2xl font-black text-white uppercase mb-6">Temporary Power & Rentals</h4>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Fast mobilization for emergency outages or planned maintenance. Our inventory includes mobile substations, replacement transformers, and MV switchgear for immediate deployment.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-5 py-2 bg-slate-950 rounded-full text-xs font-black text-slate-500 uppercase tracking-widest">Emergency Rentals</span>
                <span className="px-5 py-2 bg-slate-950 rounded-full text-xs font-black text-slate-500 uppercase tracking-widest">Quick Ship Inventory</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Section */}
      <section className="py-32 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-[64px] p-12 md:p-24 border border-white/5 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <ZapOff className="h-64 w-64 text-red-500" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="h-24 w-24 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-red-500/20">
                <AlertTriangle className="h-12 w-12 text-red-500" />
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">24/7 Rapid <span className="text-red-500">Response.</span></h3>
              <p className="text-slate-400 text-xl md:text-2xl font-medium mb-12">Transformer failure? Unexpected outage? Our rapid deployment teams mobilize instantly for critical HV system troubleshooting and restoration.</p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-2xl shadow-red-500/20 active:scale-95">
                Emergency Hotline: +1 (209) 666-6180
              </button>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default TransformerService;