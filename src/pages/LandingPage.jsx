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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section with animated background */}
      <div className="relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-spsu-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow animation-delay-4000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Main content card */}
            <div className="glass rounded-3xl shadow-elegant p-8 md:p-12 lg:p-16 animate-fade-in border-2 border-white">
              {/* Logo and title section */}
              <div className="text-center mb-10">
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-spsu-blue-500 to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
                  <div className="relative w-28 h-28 bg-gradient-to-br from-spsu-blue-700 via-spsu-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto shadow-2xl border-4 border-white">
                    <span className="text-6xl">🌲</span>
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                  Welcome to
                  <span className="block mt-2 bg-gradient-to-r from-spsu-blue-700 via-spsu-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Silver Pine State University
                  </span>
                </h2>
                
                <p className="text-xl md:text-2xl text-gray-600 font-medium mb-2">
                  Student Registration Portal
                </p>
                <p className="text-base md:text-lg text-gray-500">
                  Begin your academic journey with us
                </p>
              </div>

              {/* Registration form */}
              <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
                <div className="space-y-3">
                  <label 
                    htmlFor="studentName" 
                    className="block text-base font-bold text-gray-800 tracking-wide"
                  >
                    Enter Your Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-spsu-blue-200 focus:border-spsu-blue-500 outline-none transition-all text-gray-900 placeholder-gray-400 shadow-sm hover:border-gray-300"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-spsu-blue-700 via-spsu-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-spsu-blue-800 hover:via-spsu-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-300 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="flex items-center justify-center">
                    Begin Registration
                    <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </form>

              {/* Info cards */}
              <div className="mt-12 pt-8 border-t-2 border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                    <div className="w-12 h-12 bg-spsu-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <p className="text-sm font-bold text-gray-800">22+ Courses</p>
                    <p className="text-xs text-gray-600 mt-1">Diverse curriculum</p>
                  </div>
                  
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                    <div className="w-12 h-12 bg-spsu-green-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <p className="text-sm font-bold text-gray-800">Up to 5 Classes</p>
                    <p className="text-xs text-gray-600 mt-1">Per semester</p>
                  </div>
                  
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-sm font-bold text-gray-800">Instant Registration</p>
                    <p className="text-xs text-gray-600 mt-1">Quick & easy</p>
                  </div>
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