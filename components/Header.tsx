
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Solutions', id: 'services' },
    { label: 'Workforce', id: 'workforce' },
    { label: 'About', id: 'about' },
    { label: 'Careers', id: 'careers' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-7'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="cursor-pointer group" onClick={() => onNavigate('home')}>
          <Logo light={false} className="group-hover:opacity-80 transition-opacity" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-[12px] font-bold uppercase tracking-[0.2em] transition-all hover:text-brand-red ${
                currentPage === item.id ? 'text-brand-red' : 'text-slate-500'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => onNavigate('contact')}
            className="px-8 py-3 bg-slate-900 text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-brand-red transition-all rounded-full shadow-lg hover:shadow-brand-red/20"
          >
            Connect
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <button className="lg:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-white z-[60] flex flex-col p-8 pt-24 animate-fade-in">
          <button className="absolute top-8 right-8 text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={32} />
          </button>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); setIsMobileMenuOpen(false); }}
              className="text-4xl font-black text-left mb-8 text-slate-900"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => { onNavigate('contact'); setIsMobileMenuOpen(false); }}
            className="w-full py-5 bg-brand-red text-white text-lg font-bold uppercase tracking-widest mt-auto rounded-xl"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
