
import React from 'react';

interface LogoProps {
  light?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ light = false, className = "", size = 'md' }) => {
  const textColor = light ? 'text-white' : 'text-[#0f172a]';
  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  };
  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-12 h-12'
  };
  
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <span className={`${textSizes[size]} logo-text ${textColor}`}>
        t<span className="tilted-e">e</span>chbion
      </span>
      <div className={`${iconSizes[size]} flex items-center justify-center`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Top-most Triangle: Bright Yellow */}
          <path d="M45 15 L85 40 L55 50 Z" fill="#fdb913" />
          
          {/* Middle-Right Triangle: Deep Orange */}
          <path d="M55 40 L95 55 L65 70 Z" fill="#f37021" />
          
          {/* Bottom-Right Triangle: Pink/Red */}
          <path d="M45 60 L85 85 L45 100 Z" fill="#e91e63" />
          
          {/* Inner-Left Triangle: Purple */}
          <path d="M10 40 L50 55 L15 80 Z" fill="#9c27b0" />
        </svg>
      </div>
    </div>
  );
};

export default Logo;
