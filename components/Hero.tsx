
import React from 'react';
import { ArrowRight, Globe2 } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-screen flex items-center bg-white hero-soft-gradient overflow-hidden pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 right-[5%] w-96 h-96 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-[5%] w-64 h-64 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-3 mb-10 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-100 shadow-sm animate-slide-up">
            <Globe2 size={16} className="text-brand-red" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">Global IT Delivery Leaders</span>
          </div>
          
          <h1 className="text-6xl md:text-[110px] font-black text-slate-900 leading-[0.95] mb-12">
            <span className="block animate-slide-up delay-100">
              Precision <span className="text-brand-red">Talent</span>,
            </span>
            <span className="block animate-slide-up delay-300">
              Engineered <span className="italic font-light text-slate-400">Teams.</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 mb-16 max-w-2xl leading-relaxed animate-slide-up delay-500">
            Techbion empowers enterprises with high-performance workforce solutions 
            and modern software engineering that drives certainty.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-8 animate-slide-up delay-700">
            <button 
              onClick={onCtaClick}
              className="w-full sm:w-auto px-12 py-6 bg-brand-red text-white font-black text-xs uppercase tracking-[0.2em] rounded-full hover:bg-slate-900 transition-all shadow-2xl shadow-brand-red/20 group"
            >
              Explore Solutions
              <ArrowRight size={18} className="inline ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/100?u=1" className="w-10 h-10 rounded-full border-2 border-white" alt="Team" />
                <img src="https://i.pravatar.cc/100?u=2" className="w-10 h-10 rounded-full border-2 border-white" alt="Team" />
                <img src="https://i.pravatar.cc/100?u=3" className="w-10 h-10 rounded-full border-2 border-white" alt="Team" />
              </div>
              <span className="text-sm font-bold text-slate-400">Trusted by 200+ Enterprises</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Hint */}
      <div className="absolute bottom-12 left-6 md:left-24 hidden md:flex items-center gap-4 text-slate-300 rotate-90 origin-left">
        <span className="text-[10px] uppercase font-bold tracking-[0.4em]">Scroll Down</span>
        <div className="h-[1px] w-12 bg-slate-200"></div>
      </div>
    </section>
  );
};

export default Hero;