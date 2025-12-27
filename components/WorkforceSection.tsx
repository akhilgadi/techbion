
import React from 'react';
import { UserCheck, Target, Workflow, Briefcase } from 'lucide-react';

const WorkforceSection: React.FC = () => {
  return (
    <section id="workforce" className="py-32 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
               <img src="https://picsum.photos/seed/wf1/400/500" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Workforce 1" />
               <img src="https://picsum.photos/seed/wf2/400/500" className="rounded-2xl mt-12 grayscale hover:grayscale-0 transition-all duration-700" alt="Workforce 2" />
            </div>
            {/* Overlay card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-red p-8 rounded-xl shadow-2xl">
               <div className="text-4xl font-black mb-1">10k+</div>
               <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Tech Talent Pool</div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-brand-red font-black text-xs uppercase tracking-[0.4em] mb-4">Talent Excellence</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Elite Engineering <br />at Scale.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              Techbion bridges the gap between complex engineering needs and specialized IT talent. 
              Our workforce solutions are built on precision sourcing and global delivery excellence.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
               <div className="flex items-start gap-4">
                  <UserCheck className="text-brand-red shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-white mb-2">Staff Augmentation</h4>
                    <p className="text-xs text-gray-500">Quickly ramp up teams with niche technical expertise.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <Target className="text-brand-red shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-white mb-2">Dedicated Teams</h4>
                    <p className="text-xs text-gray-500">Self-managed squads for long-term project success.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <Workflow className="text-brand-red shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-white mb-2">Managed Services</h4>
                    <p className="text-xs text-gray-500">End-to-end operational responsibility and SLA delivery.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <Briefcase className="text-brand-red shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-white mb-2">Executive Search</h4>
                    <p className="text-xs text-gray-500">Finding leadership talent for high-impact tech roles.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkforceSection;
