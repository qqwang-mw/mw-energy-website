
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ViewState } from '../App';

const BrandLogo: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <div className="flex items-center space-x-3 cursor-pointer" onClick={onClick}>
    <div className="flex items-center space-x-1 h-8">
      {[0.4, 0.7, 1.0, 0.8, 0.6, 0.4].map((h, i) => (
        <div 
          key={i} 
          className="w-1.5 rounded-full" 
          style={{ 
            height: `${h * 100}%`, 
            backgroundColor: i < 3 ? '#3ABEF9' : '#97E9B1',
            opacity: 0.8 + (i * 0.04)
          }} 
        />
      ))}
    </div>
    <div className="h-6 w-[1px] bg-slate-800 mx-2" />
    <span className="text-2xl font-black tracking-tighter text-white uppercase flex">
      <span className="text-brand-cyan">MW</span>
      <span className="text-brand-green">ENERGY</span>
    </span>
  </div>
);

interface NavbarProps {
  currentView: ViewState;
  setView: (v: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceLinks: { name: string; view: ViewState }[] = [
    { name: 'Solar O&M', view: 'solar' },
    { name: 'BESS Service', view: 'bess' },
    { name: 'Transformer', view: 'transformer' },
    { name: 'Infrastructure', view: 'infrastructure' },
  ];

  const handleNav = (v: ViewState) => {
    setView(v);
    setMobileMenuOpen(false);
    setServicesOpen(false);
    window.scrollTo(0, 0);
  };

  const scrollToSection = (id: string) => {
    if (currentView !== 'home') {
      setView('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || currentView !== 'home' ? 'bg-slate-950/95 backdrop-blur-xl py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <BrandLogo onClick={() => handleNav('home')} />

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => handleNav('home')}
              className={`text-xs font-black uppercase tracking-[0.3em] transition-all hover:text-brand-cyan ${currentView === 'home' ? 'text-brand-cyan' : 'text-slate-400'}`}
            >
              Home
            </button>
            
            <div className="relative group">
              <button 
                onMouseEnter={() => setServicesOpen(true)}
                className={`text-xs font-black uppercase tracking-[0.3em] transition-all flex items-center hover:text-brand-cyan ${currentView !== 'home' ? 'text-brand-cyan' : 'text-slate-400'}`}
              >
                Services <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              
              <div 
                onMouseLeave={() => setServicesOpen(false)}
                className={`absolute top-full -left-4 mt-2 w-56 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-4 space-y-2 transition-all duration-300 ${servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
              >
                {serviceLinks.map((s) => (
                  <button 
                    key={s.view} 
                    onClick={() => handleNav(s.view)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-brand-cyan/10 hover:text-brand-cyan transition-all ${currentView === s.view ? 'text-brand-cyan bg-brand-cyan/5' : 'text-slate-400'}`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={() => scrollToSection('innovation')} className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 hover:text-brand-cyan">Innovation</button>
            <button onClick={() => scrollToSection('contact')} className="brand-gradient text-slate-950 px-6 py-2 rounded-lg text-xs font-black transition-all shadow-lg shadow-brand-cyan/20 uppercase tracking-widest hover:scale-105 active:scale-95 ml-4">Get Quote</button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-300 p-2">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/10 p-8 space-y-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <button onClick={() => handleNav('home')} className="block w-full text-left text-xl font-black uppercase tracking-widest text-slate-300">Home</button>
          <div className="space-y-4 pt-4 border-t border-white/5">
            <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Our Solutions</p>
            {serviceLinks.map((s) => (
              <button 
                key={s.view} 
                onClick={() => handleNav(s.view)}
                className={`block w-full text-left text-lg font-black uppercase tracking-widest ${currentView === s.view ? 'text-brand-cyan' : 'text-slate-300'}`}
              >
                {s.name}
              </button>
            ))}
          </div>
          <button onClick={() => scrollToSection('contact')} className="w-full brand-gradient py-5 rounded-2xl text-slate-950 font-black uppercase tracking-widest shadow-xl mt-6">Get Quote</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
