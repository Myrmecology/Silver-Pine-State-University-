import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-spsu-blue-800 via-spsu-blue-700 to-spsu-blue-600 text-white shadow-2xl border-b-4 border-spsu-gold-500">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4 hover:opacity-90 transition-all duration-300 group">
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative w-16 h-16 bg-gradient-to-br from-white to-spsu-gold-400 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                <span className="text-4xl">🌲</span>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-1 drop-shadow-lg">
                Silver Pine State University
              </h1>
              <p className="text-sm text-blue-100 font-medium tracking-wide">
                Student Registration Portal
              </p>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <div className="h-8 w-px bg-blue-300 opacity-30"></div>
            <div className="text-right">
              <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Fall 2025</p>
              <p className="text-sm text-white font-medium">Semester Registration</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-spsu-gold-400 via-spsu-gold-500 to-spsu-gold-400"></div>
    </header>
  );
};

export default Header;