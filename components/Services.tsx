
import React from 'react';
import { Database, Cloud, Code2, Users2, ShieldCheck, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: <Users2 size={24} className="text-brand-red" />,
    title: "Strategic Staffing",
    description: "Access a vetted pool of top 1% global engineering talent to scale your internal teams instantly."
  },
  {
    icon: <Code2 size={24} className="text-brand-red" />,
    title: "App Development",
    description: "Full-cycle software engineering from conceptualization to deployment with focus on scalability."
  },
  {
    icon: <Cloud size={24} className="text-brand-red" />,
    title: "Cloud & DevOps",
    description: "Modernize your infrastructure with native cloud solutions on AWS, Azure, and Google Cloud."
  },
  {
    icon: <ShieldCheck size={24} className="text-brand-red" />,
    title: "Cyber Resilience",
    description: "Ensure zero-threat delivery with integrated security protocols and elite DevSecOps talent."
  },
  {
    icon: <Database size={24} className="text-brand-red" />,
    title: "Data Intelligence",
    description: "Unlock actionable insights through robust data engineering, AI, and predictive analytics."
  },
  {
    icon: <BarChart3 size={24} className="text-brand-red" />,
    title: "Digital Strategy",
    description: "Consultative approach to digital transformation, aligning technology with business outcomes."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <h2 className="text-brand-red font-black text-xs uppercase tracking-[0.4em] mb-4">What We Do</h2>
          <h3 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            End-to-End Solutions for <br />
            <span className="text-gray-400">Enterprise Growth.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group border-b border-gray-100 pb-12 transition-all">
              <div className="mb-8 p-4 bg-gray-50 rounded-lg w-fit group-hover:bg-brand-red/5 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-red transition-colors">{service.title}</h4>
              <p className="text-gray-500 leading-relaxed mb-8 text-sm md:text-base">
                {service.description}
              </p>
              <button className="text-[11px] font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn more <span className="text-brand-red">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
