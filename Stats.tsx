
import React from 'react';

const StatBox: React.FC<{ value: string, label: string, desc: string }> = ({ value, label, desc }) => (
  <div className="text-center p-12 transition-all hover:bg-white/5 group">
    <div className="text-6xl font-black text-white mb-3 tracking-tighter group-hover:scale-105 transition-transform">{value}</div>
    <div className="text-brand-cyan font-black uppercase text-xs tracking-[0.3em] mb-6">{label}</div>
    <p className="text-slate-500 text-sm font-bold leading-relaxed max-w-[220px] mx-auto uppercase tracking-wide">{desc}</p>
  </div>
);

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-24 bg-slate-950 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <StatBox value="2.5 GW" label="Capacity Managed" desc="Ensuring reliable output across global portfolios." />
          <StatBox value="99.9%" label="Availability" desc="Industry leading uptime for critical assets." />
          <StatBox value="2 HRS" label="Response" desc="Rapid on-site deployment for fault recovery." />
          <StatBox value="150+" label="Major Assets" desc="HV Transformers and utility-scale substations." />
        </div>
      </div>
    </section>
  );
};

export default Stats;
