
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-yellow/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-purple/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/tech1/600/800" className="rounded-2xl shadow-xl mt-12" alt="Office 1" />
                <img src="https://picsum.photos/seed/tech2/600/800" className="rounded-2xl shadow-xl" alt="Office 2" />
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-brand-red p-10 rounded-2xl shadow-3xl text-white text-center">
                <div className="text-6xl font-black mb-2">15+</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-80">Years in Software</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-brand-red font-black tracking-widest uppercase mb-6 flex items-center">
              <span className="w-10 h-0.5 bg-brand-red mr-4"></span>
              The Techbion Identity
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              A Global Leader in IT <br />Workforce Optimization.
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded on the principles of precision and scalability, Techbion Software Systems 
              has evolved into a premier partner for enterprises seeking elite IT talent and 
              robust software solutions.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Our unique Global Delivery Model ensures that your business leverages 
              cost-effective offshore expertise while maintaining high-touch local 
              accountability. We don't just fill seats; we engineer teams.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="border-l-4 border-brand-red pl-6">
                <h4 className="font-black text-gray-900 text-lg mb-2">Certainty</h4>
                <p className="text-sm text-gray-500">Zero-risk delivery with guaranteed service levels.</p>
              </div>
              <div className="border-l-4 border-brand-orange pl-6">
                <h4 className="font-black text-gray-900 text-lg mb-2">Scalability</h4>
                <p className="text-sm text-gray-500">Rapidly deploy pods of 10 to 100+ engineers.</p>
              </div>
            </div>

            <button className="bg-gray-900 text-white px-10 py-5 rounded-sm font-black flex items-center group hover:bg-black transition-all">
              LEARN OUR STORY
              <ArrowUpRight className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
