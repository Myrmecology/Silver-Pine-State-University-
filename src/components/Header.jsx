import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-spsu-blue to-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-spsu-blue">🌲</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Silver Pine State University</h1>
              <p className="text-sm text-blue-200">Student Registration Portal</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;