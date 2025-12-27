
import React from 'react';
import { Linkedin, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-baseline space-x-1 mb-6">
              <span className="text-2xl font-extrabold tracking-tight">techbion</span>
              <div className="w-4 h-4 bg-brand rounded-sm rotate-45 transform translate-y-[-2px] flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Techbion Software Systems is an IT services, business solutions and 
              outsourcing organization that delivers real results to global businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-brand transition-colors">Workforce Management</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Digital Engineering</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Cloud & Infrastructure</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Data & Analytics</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Quality Engineering</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-brand transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Partnerships</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Newsroom</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="text-brand shrink-0" size={20} />
                <span>Hyderabad, Telangana, India <br />Corporate HQ</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-brand shrink-0" size={20} />
                <span>+91 40 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-brand shrink-0" size={20} />
                <span>contact@techbion.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:row items-center justify-between text-gray-500 text-sm">
          <p>© 2024 Techbion Software Systems Pvt Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
