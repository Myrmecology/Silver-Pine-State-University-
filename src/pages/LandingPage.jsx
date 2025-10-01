import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../context/RegistrationContext';
import Header from '../components/Header';

const LandingPage = () => {
  const [name, setName] = useState('');
  const { saveStudentName } = useRegistration();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      saveStudentName(name.trim());
      navigate('/catalog');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-silver-100 via-silver-200 to-silver-300 relative overflow-hidden">
      <Header />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-pine-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow animation-delay-200"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-silver-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow animation-delay-400"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Main Content Card */}
          <div className="glass-effect rounded-3xl shadow-elegant p-8 md:p-12 lg:p-16 animate-fade-in border-4 border-white/50">
            {/* Logo and Title Section */}
            <div className="text-center mb-12">
              <div className="relative inline-block mb-8">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pine-green-500 via-gold-500 to-pine-green-500 rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
                
                {/* Logo */}
                <div className="relative w-32 h-32 bg-gradient-to-br from-pine-green-700 via-pine-green-600 to-gold-500 rounded-full flex items-center justify-center mx-auto shadow-2xl border-8 border-white transform hover:scale-110 hover:rotate-12 transition-all duration-500">
                  <span className="text-7xl">🌲</span>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-silver-900 mb-6 tracking-tight leading-tight">
                Welcome to
                <span className="block mt-3 bg-gradient-to-r from-pine-green-700 via-gold-600 to-pine-green-700 bg-clip-text text-transparent animate-fade-in">
                  Silver Pine State University
                </span>
              </h2>
              
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="h-1 w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
                <p className="text-2xl md:text-3xl text-silver-700 font-bold">
                  Student Registration Portal
                </p>
                <div className="h-1 w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
              </div>
              
              <p className="text-lg md:text-xl text-silver-600 font-medium">
                Begin your academic journey with excellence
              </p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto mb-12">
              <div className="space-y-4">
                <label 
                  htmlFor="studentName" 
                  className="block text-lg font-bold text-silver-800 tracking-wide"
                >
                  Enter Your Full Name
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <svg className="h-7 w-7 text-pine-green-600 group-focus-within:text-pine-green-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="studentName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., John Doe"
                    required
                    className="w-full pl-16 pr-6 py-5 text-xl border-3 border-silver-300 rounded-2xl focus:ring-4 focus:ring-pine-green-300 focus:border-pine-green-600 outline-none transition-all text-silver-900 placeholder-silver-400 shadow-lg hover:border-pine-green-400 font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-pine-green-700 via-pine-green-600 to-gold-600 text-white py-5 px-10 rounded-2xl font-bold text-xl hover:from-pine-green-800 hover:via-pine-green-700 hover:to-gold-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 active:scale-95 shimmer border-2 border-white/20"
              >
                <span className="flex items-center justify-center">
                  Begin Registration
                  <svg className="w-7 h-7 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </form>

            {/* Info Cards */}
            <div className="pt-10 border-t-2 border-silver-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-pine-green-50 to-emerald-100 border-3 border-pine-green-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-pine-green-600 to-pine-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform group-hover:rotate-6 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <p className="text-base font-bold text-pine-green-900 mb-1">22+ Courses</p>
                  <p className="text-sm text-silver-600 font-medium">Diverse curriculum across departments</p>
                </div>
                
                {/* Card 2 */}
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gold-50 to-amber-100 border-3 border-gold-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform group-hover:rotate-6 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <p className="text-base font-bold text-gold-900 mb-1">Up to 5 Classes</p>
                  <p className="text-sm text-silver-600 font-medium">Register per semester</p>
                </div>
                
                {/* Card 3 */}
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-silver-100 to-slate-200 border-3 border-silver-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-silver-700 to-silver-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform group-hover:rotate-6 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-base font-bold text-silver-900 mb-1">Instant Registration</p>
                  <p className="text-sm text-silver-600 font-medium">Quick & secure process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;