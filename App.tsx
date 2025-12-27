
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutSection from './components/AboutSection';
import WorkforceSection from './components/WorkforceSection';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    const element = document.getElementById(page);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main>
        <div id="home">
          <Hero onCtaClick={() => handleNavigate('services')} />
        </div>
        
        {/* Trusted Partners Section */}
        <section className="bg-slate-50 py-24 border-y border-slate-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400">Strategic Technology Ecosystem</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
               <span className="text-2xl font-black tracking-tighter">ORACLE</span>
               <span className="text-2xl font-black tracking-tighter">AMAZON</span>
               <span className="text-2xl font-black tracking-tighter">SAP</span>
               <span className="text-2xl font-black tracking-tighter">GOOGLE</span>
               <span className="text-2xl font-black tracking-tighter">MICROSOFT</span>
               <span className="text-2xl font-black tracking-tighter">SALESFORCE</span>
            </div>
          </div>
        </section>

        <AboutSection />
        
        <div id="services">
          <Services />
        </div>
        
        <div id="workforce">
          <WorkforceSection />
        </div>

        {/* Dynamic Growth CTA */}
        <section className="py-40 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="bg-slate-900 rounded-[3rem] p-12 md:p-32 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.3)]">
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red opacity-10 blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
               <div className="absolute bottom-0 left-0 w-1/2 h-full bg-brand-purple opacity-10 blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
               
               <h2 className="text-5xl md:text-8xl font-black text-white mb-10 leading-[0.9] relative z-10 tracking-tight">
                 Scale your <span className="text-brand-red italic">future</span> <br /> 
                 with Techbion.
               </h2>
               <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto mb-16 relative z-10 leading-relaxed font-medium">
                 Join global enterprises that leverage our precision talent to deliver 
                 mission-critical IT results with unwavering certainty.
               </p>
               <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                 <button 
                   onClick={() => handleNavigate('contact')}
                   className="px-14 py-6 bg-brand-red text-white font-black text-xs uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl shadow-brand-red/40 rounded-full"
                 >
                   Get Started
                 </button>
                 <button className="px-14 py-6 bg-transparent text-white border border-slate-800 font-black text-xs uppercase tracking-[0.3em] hover:bg-slate-800 transition-all rounded-full">
                   Our Methodology
                 </button>
               </div>
            </div>
          </div>
        </section>

        {/* Clean Contact section */}
        <div id="contact" className="py-32 bg-slate-50 relative">
          <div className="container mx-auto px-6">
             <div className="grid lg:grid-cols-2 gap-32 items-center">
                <div>
                   <span className="text-brand-red font-black text-[10px] uppercase tracking-[0.5em] mb-6 block">Inquiry</span>
                   <h3 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 leading-[0.9] tracking-tighter">Connect with <br />excellence.</h3>
                   <p className="text-slate-500 text-lg mb-16 leading-relaxed">
                     Talk to our solution architects about building your next high-performance tech team.
                   </p>
                   
                   <div className="grid sm:grid-cols-2 gap-10">
                      <div>
                         <div className="text-slate-900 font-black text-xl mb-3">India HQ</div>
                         <p className="text-slate-500 text-sm leading-relaxed">HITEC City Tech Hub, <br />Hyderabad, TS 500081</p>
                      </div>
                      <div>
                         <div className="text-slate-900 font-black text-xl mb-3">EMEA</div>
                         <p className="text-slate-500 text-sm leading-relaxed">Canary Wharf Center, <br />London, UK E14 5AA</p>
                      </div>
                   </div>
                </div>
                
                <div className="bg-white p-12 md:p-16 rounded-[2rem] shadow-2xl border border-slate-100">
                   <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                        <input type="text" className="w-full bg-slate-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-red/20 outline-none transition-all text-slate-900 font-medium" placeholder="E.g. Alexander Smith" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Corporate Email</label>
                        <input type="email" className="w-full bg-slate-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-red/20 outline-none transition-all text-slate-900 font-medium" placeholder="alex@company.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Requirement</label>
                        <textarea rows={4} className="w-full bg-slate-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-red/20 outline-none transition-all text-slate-900 font-medium resize-none" placeholder="Briefly describe your workforce needs..."></textarea>
                      </div>
                      <button className="w-full py-6 bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-brand-red transition-all shadow-xl hover:shadow-brand-red/30">
                        Request Consultation
                      </button>
                   </form>
                </div>
             </div>
          </div>
        </div>
      </main>

      <Footer />
      <AIChatbot />
    </div>
  );
};

export default App;
