import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-silver-900 via-silver-800 to-silver-700 text-white shadow-2xl relative overflow-hidden">
      {/* Animated decorative top border */}
      <div className="h-2 bg-gradient-to-r from-pine-green-600 via-gold-500 to-pine-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
      </div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-pine-green-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-500 rounded-full filter blur-3xl animate-float animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-silver-400 rounded-full filter blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="relative container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4 group">
            {/* Animated Logo */}
            <div className="relative">
              {/* Pulsing glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pine-green-400 via-gold-400 to-pine-green-400 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 animate-pulseGlow"></div>
              
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border-4 border-gold-400 opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-700"></div>
              
              {/* Main logo */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-pine-green-600 via-pine-green-500 to-gold-500 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-4 border-white animate-scalePop">
                <span className="text-4xl transform group-hover:scale-125 transition-transform duration-500">🌲</span>
              </div>
            </div>
            
            <div className="animate-slideInLeft">
              <h1 className="text-3xl font-bold tracking-tight mb-1 drop-shadow-lg text-gradient-animate transition-all duration-300 group-hover:scale-105">
                Silver Pine State University
              </h1>
              <p className="text-sm text-silver-300 font-semibold tracking-wide flex items-center group-hover:text-gold-300 transition-colors duration-300">
                <span className="w-2 h-2 bg-gold-400 rounded-full mr-2 animate-ping"></span>
                <span className="w-2 h-2 bg-gold-400 rounded-full mr-2 absolute animate-pulse"></span>
                Student Registration Portal
              </p>
            </div>
          </Link>
          
          {/* Right side info badge - BRIGHTENED VERSION */}
          <div className="hidden md:flex items-center space-x-4 animate-slideInRight">
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-gold-400 to-transparent"></div>
            <div className="relative text-right bg-gradient-to-br from-pine-green-600/90 to-gold-600/90 backdrop-blur-sm rounded-xl px-6 py-3 border-3 border-gold-400 shadow-2xl transform hover:scale-105 transition-all duration-300 card-3d animate-pulseGlow">
              {/* Bright glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-pine-green-400/40 to-gold-400/40 rounded-xl"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-xl opacity-50 animate-shimmer"></div>
              
              <div className="relative z-10">
                <p className="text-xs text-gold-200 uppercase tracking-wider font-black mb-1 animate-pulse drop-shadow-lg">Fall 2025</p>
                <p className="text-sm text-white font-black drop-shadow-lg">Registration Open</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line with shimmer */}
      <div className="relative h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-shimmer"></div>
      </div>
    </header>
  );
};

export default Header;