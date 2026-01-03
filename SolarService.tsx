
import React from 'react';
import { Sun, Shield, Activity, BarChart, CheckCircle, ArrowRight, Zap, Target, FileCheck, Search, Settings, Cpu, Microscope, HardHat, FileText, LayoutGrid } from 'lucide-react';
import Contact from '../Contact';
import { ViewState } from '../../App';

const SolarService: React.FC<{ setView: (v: ViewState) => void }> = ({ setView }) => {
  return (
    <div className="pt-24 animate-in fade-in duration-700">
      {/* Header */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950">
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-10" 
            alt="Solar Farm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center space-x-3 bg-brand-cyan/10 border border-brand-cyan/20 px-6 py-2 rounded-full text-brand-cyan text-[10px] font-black uppercase tracking-widest mb-8">
            <LayoutGrid className="h-4 w-4" />
            <span>Utility-Scale Solar PV Experts</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter uppercase leading-none">SOLAR <span className="gradient-text">O&M</span></h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium mb-12">
            End-to-end electrical balance of system (eBOS) lifecycle management. We provide NETA certified testing, specialized inverter services, and high-fidelity field diagnostics for utility-scale PV assets.
          </p>
          <div className="flex justify-center space-x-6">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 px-8 py-5 rounded-[32px]">
              <div className="text-brand-cyan font-black text-3xl tracking-tighter">2.5 GW+</div>
              <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Active Portfolio</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 px-8 py-5 rounded-[32px]">
              <div className="text-brand-green font-black text-3xl tracking-tighter">NETA</div>
              <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Certified Standards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Spectrum Service Tiers */}
      <section className="py-32 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-brand-cyan font-black uppercase tracking-[0.3em] text-[11px] mb-6">eBOS Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none">Total Site <span className="gradient-text">Stewardship.</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Acceptance Testing & Commissioning */}
            <div className="glass-morphism p-12 rounded-[56px] border-white/5 space-y-8 group hover:border-brand-cyan/30 transition-all">
              <div className="h-16 w-16 bg-brand-cyan/10 rounded-2xl flex items-center justify-center border border-brand-cyan/20">
                <FileCheck className="h-8 w-8 text-brand-cyan" />
              </div>
              <h4 className="text-2xl font-black text-white uppercase tracking-tighter">Acceptance Testing</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Starting your project with a high-fidelity baseline through NETA-accredited commissioning and verification.</p>
              <ul className="space-y-4 pt-4 border-t border-white/5">
                {[
                  "PV Module Health & IV Curve Tracing",
                  "DC Collection & Combiner Box Testing",
                  "Insulation Resistance & Hi-Pot Testing",
                  "Substation & Transformer Commissioning",
                  "PPA Compliance Availability Audits",
                  "DAS/SCADA Validation & Mapping"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-slate-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inverter & Advanced O&M */}
            <div className="glass-morphism p-12 rounded-[56px] border-white/5 space-y-8 group hover:border-brand-green/30 transition-all">
              <div className="h-16 w-16 bg-brand-green/10 rounded-2xl flex items-center justify-center border border-brand-green/20">
                <Cpu className="h-8 w-8 text-brand-green" />
              </div>
              <h4 className="text-2xl font-black text-white uppercase tracking-tighter">Inverter Services</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Maximizing inverter uptime through component-level repairs and rigorous preventative maintenance schedules.</p>
              <ul className="space-y-4 pt-4 border-t border-white/5">
                {[
                  "Central & String Inverter PMs",
                  "Component-Level Diagnostics & Repair",
                  "Thermal Mapping of Power Electronics",
                  "Firmware Management & Logic Updates",
                  "Filter Cleaning & Cooling System Service",
                  "PVS/Tracker Calibration & Maintenance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-slate-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Performance Engineering */}
            <div className="glass-morphism p-12 rounded-[56px] border-white/5 space-y-8 group hover:border-brand-cyan/30 transition-all">
              <div className="h-16 w-16 bg-brand-cyan/10 rounded-2xl flex items-center justify-center border border-brand-cyan/20">
                <Search className="h-8 w-8 text-brand-cyan" />
              </div>
              <h4 className="text-2xl font-black text-white uppercase tracking-tighter">Engineering Studies</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Providing deep technical insight to ensure personnel safety and long-term asset reliability.</p>
              <ul className="space-y-4 pt-4 border-t border-white/5">
                {[
                  "Arc Flash & Coordination Studies",
                  "Short Circuit Analysis & Grounding",
                  "Drone-Based IR Aerial Surveys",
                  "Root Cause Analysis (RCA) for Faults",
                  "Degradation Analysis & Yield Forecasting",
                  "NERC-CIP / FERC Documentation"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-slate-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section: The AI Glass Advantage */}
      <section className="py-32 bg-slate-900 border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2">
              <h2 className="text-brand-green font-black uppercase tracking-[0.3em] text-[11px] mb-6">Field Intelligence</h2>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase leading-none">AI-Glass <br /><span className="gradient-text">Diagnostics.</span></h3>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                MW Energy technicians utilize proprietary AI Glass hardware to capture the raw reality of your solar assets. During inspections, string-level data is overlaid in real-time on the technician's field of view, ensuring zero errors and 100% data fidelity.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-6 p-6 bg-slate-950/50 rounded-3xl border border-white/5">
                  <Activity className="h-8 w-8 text-brand-cyan" />
                  <div>
                    <h5 className="text-white font-black uppercase text-xs tracking-widest mb-1">Live Telemetry HUD</h5>
                    <p className="text-slate-500 text-[10px] uppercase font-bold">Real-time string performance visualization.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 p-6 bg-slate-950/50 rounded-3xl border border-white/5">
                  <Microscope className="h-8 w-8 text-brand-green" />
                  <div>
                    <h5 className="text-white font-black uppercase text-xs tracking-widest mb-1">Total Detail Reports</h5>
                    <p className="text-slate-500 text-[10px] uppercase font-bold">POV footage and raw datasets from every box.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-20 bg-brand-cyan/5 blur-[120px] rounded-full"></div>
              <div className="relative glass-morphism p-1 rounded-[48px] overflow-hidden border-brand-cyan/20">
                <img 
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=1000" 
                  alt="AI Glass Technology" 
                  className="rounded-[44px] grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-10 right-10 flex space-x-3">
                  <div className="bg-brand-cyan px-4 py-1.5 rounded-full text-[8px] font-black text-slate-950 uppercase tracking-widest">Live Feed</div>
                  <div className="bg-slate-900/80 px-4 py-1.5 rounded-full text-[8px] font-black text-brand-green uppercase tracking-widest border border-brand-green/30">Target Identified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Monitoring Section */}
      <section className="py-32 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Yield Increase", value: "+4.2% Avg" },
                  { label: "O&M Cost Save", value: "20% Reduction" },
                  { label: "Detection Rate", value: "99.9% Faults" },
                  { label: "Response Time", value: "< 2 Hours" }
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-900/50 p-8 rounded-[40px] border border-white/5 hover:border-brand-cyan/20 transition-all">
                    <div className="text-brand-cyan font-black text-2xl tracking-tighter mb-1 uppercase">{stat.value}</div>
                    <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-brand-cyan font-black uppercase tracking-[0.3em] text-[11px] mb-6">Optimization Results</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">Data That <br /><span className="gradient-text">Drives Yield.</span></h3>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                Our O&M philosophy is centered on energy harvesting. By combining NETA-standard electrical testing with high-fidelity performance monitoring, we identify and resolve invisible losses that others miss.
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="h-12 w-12 bg-slate-900 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-brand-cyan transition-all">
                    <BarChart className="h-5 w-5 text-brand-cyan" />
                  </div>
                  <span className="text-xs font-black text-slate-300 uppercase tracking-widest group-hover:text-brand-cyan transition-colors">Real-time Performance Benchmarking</span>
                </div>
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="h-12 w-12 bg-slate-900 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-brand-green transition-all">
                    <Target className="h-5 w-5 text-brand-green" />
                  </div>
                  <span className="text-xs font-black text-slate-300 uppercase tracking-widest group-hover:text-brand-green transition-colors">Strategic Soiling Analysis</span>
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

export default SolarService;
