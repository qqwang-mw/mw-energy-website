
import React from 'react';
import { Battery, ShieldAlert, Thermometer, Cpu, CheckCircle, Zap, ShieldCheck, Activity, Search, Gauge, Box, Settings, HardHat, FileCheck, Layers } from 'lucide-react';
import Contact from '../Contact';
// Fixed import path for ViewState from App to types
import { ViewState } from '../../types';

const BESSService: React.FC<{ setView: (v: ViewState) => void }> = ({ setView }) => {
  return (
    <div className="pt-24 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950">
          <img 
            src="https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-10" 
            alt="Battery Storage Facility"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center space-x-3 bg-brand-cyan/10 border border-brand-cyan/20 px-6 py-2 rounded-full text-brand-cyan text-[10px] font-black uppercase tracking-widest mb-8">
            <ShieldCheck className="h-4 w-4" />
            <span>Mission Critical Storage Infrastructure</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter uppercase leading-none">BESS <span className="gradient-text">SYSTEMS</span></h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium mb-12">
            Comprehensive lifecycle support for Battery Energy Storage Systems. From initial commissioning and NETA testing to preventative maintenance and engineering safety studies.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { label: "Compliance", value: "NFPA 855" },
              { label: "Certification", value: "NETA / IEEE" },
              { label: "Diagnostics", value: "Cell-Level" },
              { label: "Reliability", value: "99.99% Goal" }
            ].map((stat, i) => (
              <div key={i} className="glass-morphism p-8 rounded-[32px] border-white/5">
                <div className="text-white font-black text-2xl tracking-tighter mb-1 uppercase">{stat.value}</div>
                <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Markets / Applications */}
      <section className="py-24 bg-slate-950 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-brand-cyan font-black uppercase tracking-[0.3em] text-[11px] mb-6">Market Applications</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">Powering the <span className="gradient-text">Energy Shift.</span></h3>
            </div>
            <div className="flex space-x-4">
              <span className="px-5 py-2 bg-slate-900 border border-white/10 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest">Utility-Scale</span>
              <span className="px-5 py-2 bg-slate-900 border border-white/10 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest">Commercial/Industrial</span>
              <span className="px-5 py-2 bg-slate-900 border border-white/10 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest">Renewable Integration</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Peak Shaving", icon: <Layers />, desc: "Managing demand charges and grid stress through optimized discharge cycles." },
              { title: "Frequency Regulation", icon: <Activity />, desc: "Supporting grid stability with rapid response power injection and absorption." },
              { title: "Microgrid Support", icon: <Zap />, desc: "Ensuring energy independence and resilience for critical industrial facilities." }
            ].map((app, i) => (
              <div key={i} className="p-10 rounded-[40px] bg-slate-900/40 border border-white/5 hover:border-brand-green/30 transition-all">
                <div className="text-brand-green mb-6">{app.icon}</div>
                <h4 className="text-white font-black text-xl uppercase mb-4">{app.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Pillars */}
      <section className="py-32 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Services List */}
            <div className="lg:col-span-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Pillar: Testing & Commissioning */}
                <div className="glass-morphism p-10 rounded-[48px] border-white/5 space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-brand-cyan/10 rounded-2xl">
                      <FileCheck className="h-6 w-6 text-brand-cyan" />
                    </div>
                    <h4 className="text-white font-black text-xl uppercase tracking-tight">Commissioning</h4>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "NETA Certified Acceptance Testing",
                      "Insulation Resistance & Hi-Pot Testing",
                      "Functional System Checkout (BMS/PCS)",
                      "Capacity & Performance Verification",
                      "Interconnection Compliance (IEEE 1547)",
                      "Ground Grid Integrity Audits"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start space-x-3 group">
                        <CheckCircle className="h-4 w-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                        <span className="text-slate-400 text-sm group-hover:text-slate-200 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pillar: O&M & Preventative */}
                <div className="glass-morphism p-10 rounded-[48px] border-white/5 space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-brand-green/10 rounded-2xl">
                      <Settings className="h-6 w-6 text-brand-green" />
                    </div>
                    <h4 className="text-white font-black text-xl uppercase tracking-tight">Operations & O&M</h4>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Thermal Management (Coolant/HVAC) Care",
                      "Cell Voltage & Resistance Mapping",
                      "Infrared Thermography of DC Links",
                      "Battery Rack Torque Verification",
                      "BMS Firmware & Logic Validation",
                      "Container Sealing & Filter Service"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start space-x-3 group">
                        <CheckCircle className="h-4 w-4 text-brand-green mt-0.5 flex-shrink-0" />
                        <span className="text-slate-400 text-sm group-hover:text-slate-200 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pillar: Engineering & Safety */}
                <div className="glass-morphism p-10 rounded-[48px] border-white/5 space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-brand-cyan/10 rounded-2xl">
                      <Search className="h-6 w-6 text-brand-cyan" />
                    </div>
                    <h4 className="text-white font-black text-xl uppercase tracking-tight">Engineering Studies</h4>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Arc Flash Hazard Analysis (DC & AC)",
                      "Short Circuit & Coordination Studies",
                      "NFPA 855 Fire Safety Compliance",
                      "State of Health (SoH) Forecasting",
                      "Power Quality & Harmonics Audits",
                      "Relay Protection Setting Design"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start space-x-3 group">
                        <CheckCircle className="h-4 w-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                        <span className="text-slate-400 text-sm group-hover:text-slate-200 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pillar: Equipment Solutions */}
                <div className="glass-morphism p-10 rounded-[48px] border-white/5 space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-brand-green/10 rounded-2xl">
                      <Box className="h-6 w-6 text-brand-green" />
                    </div>
                    <h4 className="text-white font-black text-xl uppercase tracking-tight">Equipment Support</h4>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "MV Transformer Maintenance & Rebuilds",
                      "Breaker Service (Vacuum/SF6)",
                      "BMS Hardware Upgrades & Retrofits",
                      "PCS/Inverter Component Replacement",
                      "Containerized Substation Solutions",
                      "Critical Spares Inventory Management"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start space-x-3 group">
                        <CheckCircle className="h-4 w-4 text-brand-green mt-0.5 flex-shrink-0" />
                        <span className="text-slate-400 text-sm group-hover:text-slate-200 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Technical Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-900 rounded-[40px] p-10 border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Battery className="h-32 w-32 text-brand-cyan" />
                  </div>
                  <h5 className="text-brand-cyan font-black uppercase tracking-widest text-xs mb-8">State of Health Monitor</h5>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-[10px] font-black uppercase text-slate-500 mb-2">
                        <span>Capacity Retention</span>
                        <span>94.2%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                        <div className="h-full w-[94.2%] brand-gradient"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] font-black uppercase text-slate-500 mb-2">
                        <span>Cycle Efficiency</span>
                        <span>89.5%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                        <div className="h-full w-[89.5%] bg-brand-green"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 pt-10 border-t border-white/5">
                    <div className="flex items-center space-x-4">
                      <HardHat className="h-6 w-6 text-brand-cyan" />
                      <p className="text-xs font-medium text-slate-400 leading-relaxed">
                        MW Energy technicians use <span className="text-white">AI Glasses</span> to visualize real-time cell impedance data during on-site inspections.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brand-cyan/20 to-brand-green/20 rounded-[40px] p-10 border border-brand-cyan/20">
                  <h5 className="text-white font-black uppercase text-xs tracking-widest mb-6">Need Emergency Care?</h5>
                  <p className="text-slate-300 text-sm mb-8 leading-relaxed">Our rapid deployment teams specialize in BESS troubleshooting and recovery, available 24/7/365.</p>
                  <button className="w-full bg-white text-slate-950 font-black py-4 rounded-2xl uppercase tracking-widest text-[10px] hover:bg-brand-cyan transition-all">
                    Emergency Dispatch
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Safety & Compliance Section */}
      <section className="py-32 bg-slate-900/50 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/10 blur-[100px] rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1590105577767-e21a46b53002?auto=format&fit=crop&q=80&w=1000" 
                  alt="Safety Systems" 
                  className="rounded-[40px] relative z-10 border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-flex items-center space-x-3 bg-red-500/10 border border-red-500/20 px-6 py-2 rounded-full text-red-500 text-[10px] font-black uppercase tracking-widest mb-8">
                <ShieldAlert className="h-4 w-4" />
                <span>Zero-Harm Safety Protocol</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-none">NFPA 855 <br /><span className="text-red-500">Compliance.</span></h3>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Fire safety is non-negotiable for battery storage. We provide comprehensive safety audits including functional testing of off-gas detection, fire suppression integration, and emergency ventilation systems to ensure your site is fully compliant and secure.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Gauge className="h-4 w-4 text-red-500" />
                    <span className="text-xs font-black text-white uppercase tracking-tight">Gas Detection</span>
                  </div>
                  <p className="text-xs text-slate-500">Calibration of sensors for early detection of thermal runaway.</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Thermometer className="h-4 w-4 text-red-500" />
                    <span className="text-xs font-black text-white uppercase tracking-tight">Thermal Runaway</span>
                  </div>
                  <p className="text-xs text-slate-500">Modeling and mitigation strategy implementation for stack safety.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default BESSService;