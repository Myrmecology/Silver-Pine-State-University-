import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-silver-900 via-silver-800 to-silver-700 text-white shadow-2xl relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-2 bg-gradient-to-r from-pine-green-600 via-gold-500 to-pine-green-600"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-pine-green-500 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-500 rounded-full filter blur-3xl animate-pulse-slow animation-delay-400"></div>
      </div>

      <div className="relative container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4 hover:opacity-90 transition-all duration-300 group">
            {/* Logo with glow effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pine-green-400 to-gold-400 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative w-16 h-16 bg-gradient-to-br from-pine-green-600 via-pine-green-500 to-gold-500 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border-4 border-white">
                <span className="text-4xl">🌲</span>
              </div>
            </div>
            
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-1 drop-shadow-lg bg-gradient-to-r from-white via-silver-100 to-white bg-clip-text">
                Silver Pine State University
              </h1>
              <p className="text-sm text-silver-300 font-semibold tracking-wide flex items-center">
                <span className="w-2 h-2 bg-gold-400 rounded-full mr-2 animate-pulse"></span>
                Student Registration Portal
              </p>
            </div>
          </Link>
          
          {/* Right side info badge */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="h-12 w-px bg-silver-600"></div>
            <div className="text-right bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <p className="text-xs text-gold-300 uppercase tracking-wider font-bold">Fall 2025</p>
              <p className="text-sm text-white font-semibold">Registration Open</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
    </header>
  );
};

export default Header;