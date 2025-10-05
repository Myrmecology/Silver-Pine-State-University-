import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../context/RegistrationContext';
import Header from '../components/Header';
import ScheduleItem from '../components/ScheduleItem';

const SchedulePage = () => {
  const { selectedCourses, studentName, clearSchedule } = useRegistration();
  const navigate = useNavigate();

  const handleClearSchedule = () => {
    if (window.confirm('Are you sure you want to clear your entire schedule? This action cannot be undone and you can register for new classes.')) {
      clearSchedule();
      navigate('/catalog');
    }
  };

  const handleBackToCatalog = () => {
    navigate('/catalog');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-silver-100 via-silver-200 to-silver-300 relative overflow-hidden animated-gradient-bg">
      <Header />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 bg-pine-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gold-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-200"></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-silver-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse-slow"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-gold-500 rounded-full animate-particleFloat"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-pine-green-500 rounded-full animate-particleFloat animation-delay-300"></div>
        <div className="absolute top-2/3 right-1/2 w-2 h-2 bg-gold-400 rounded-full animate-particleFloat animation-delay-500"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section with advanced animations */}
          <div className="glass-effect rounded-3xl shadow-elegant p-6 md:p-10 mb-8 border-4 border-white/50 animate-fadeInDown relative overflow-hidden">
            {/* Animated decorative corners */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-pine-green-500/20 to-transparent rounded-br-full animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-gold-500/20 to-transparent rounded-tl-full animate-pulse-slow animation-delay-400"></div>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between relative z-10">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center space-x-4 mb-4 animate-slideInLeft">
                  <div className="w-16 h-16 bg-gradient-to-br from-pine-green-700 via-pine-green-600 to-gold-600 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white transform hover:scale-110 hover:rotate-12 transition-all duration-500 animate-pulseGlow">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-silver-900 tracking-tight transform hover:scale-105 transition-transform duration-300">
                      My Schedule
                    </h2>
                    <p className="text-lg md:text-xl text-silver-700 mt-2">
                      <span className="font-bold text-gradient-animate">{studentName}</span>
                      <span className="text-silver-400 mx-3">•</span>
                      <span className="font-semibold">Fall 2025</span>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Summary Stats with staggered animations */}
              <div className="flex flex-wrap gap-4 animate-slideInRight">
                <div className="bg-gradient-to-br from-pine-green-600 to-pine-green-700 text-white px-8 py-4 rounded-2xl shadow-2xl border-4 border-white transform hover:scale-105 transition-all duration-400 animate-scalePop delay-100 card-3d">
                  <p className="text-xs font-bold uppercase tracking-wider opacity-90 mb-1">Total Courses</p>
                  <p className="text-4xl font-bold animate-bounce-subtle">{selectedCourses.length}</p>
                </div>
                <div className="bg-gradient-to-br from-gold-500 to-gold-600 text-white px-8 py-4 rounded-2xl shadow-2xl border-4 border-white transform hover:scale-105 transition-all duration-400 animate-scalePop delay-200 card-3d">
                  <p className="text-xs font-bold uppercase tracking-wider opacity-90 mb-1">Status</p>
                  <p className="text-lg font-bold">Registered</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons with advanced effects */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fadeInUp delay-100">
            <button
              onClick={handleBackToCatalog}
              className="group relative flex-1 md:flex-none bg-gradient-to-r from-pine-green-700 via-pine-green-600 to-gold-600 text-white py-4 px-10 rounded-2xl font-bold text-lg hover:from-pine-green-800 hover:via-pine-green-700 hover:to-gold-700 transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-105 border-2 border-white/20 overflow-hidden ripple"
            >
              {/* Animated shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Pulsing glow */}
              <div className="absolute inset-0 bg-pine-green-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-6 h-6 mr-2 transform group-hover:-translate-x-2 group-hover:scale-125 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
                Back to Catalog
              </span>
            </button>
            
            <button
              onClick={handleClearSchedule}
              className="group relative flex-1 md:flex-none bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-10 rounded-2xl font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-105 border-2 border-white/20 overflow-hidden ripple"
            >
              {/* Animated shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Warning glow on hover */}
              <div className="absolute inset-0 bg-red-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-6 h-6 mr-2 transform group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Clear Schedule
              </span>
            </button>
          </div>

          {/* Schedule Content */}
          {selectedCourses.length === 0 ? (
            <div className="glass-effect rounded-3xl card-shadow p-12 md:p-20 text-center border-4 border-white/50 animate-scalePop relative overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-pine-green-500 via-gold-500 to-silver-500 animate-gradientShift"></div>
              </div>
              
              <div className="max-w-xl mx-auto relative z-10">
                <div className="w-28 h-28 bg-gradient-to-br from-silver-300 to-silver-400 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl border-4 border-white animate-tilt3d">
                  <svg className="w-14 h-14 text-silver-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-silver-900 mb-4">No Courses Registered</h3>
                <p className="text-xl text-silver-600 mb-10 font-medium">
                  Your schedule is empty. Browse the course catalog to get started!
                </p>
                <button
                  onClick={handleBackToCatalog}
                  className="group relative bg-gradient-to-r from-pine-green-700 via-pine-green-600 to-gold-600 text-white py-5 px-12 rounded-2xl font-bold text-xl hover:from-pine-green-800 hover:via-pine-green-700 hover:to-gold-700 transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-105 border-2 border-white/20 overflow-hidden ripple"
                >
                  {/* Animated shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <span className="relative z-10 flex items-center">
                    Browse Course Catalog
                    <svg className="w-7 h-7 ml-3 transform group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-8 animate-fadeInUp delay-200">
                <h3 className="text-3xl font-bold text-silver-900">Registered Courses</h3>
                <div className="flex items-center space-x-2 text-base text-silver-700 bg-gradient-to-r from-pine-green-100 to-gold-100 px-6 py-3 rounded-xl border-2 border-pine-green-200 shadow-md transform hover:scale-105 transition-all duration-300">
                  <svg className="w-6 h-6 text-pine-green-700 animate-scalePop" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-bold">All courses confirmed</span>
                </div>
              </div>
              
              <div className="space-y-6 pb-16">
                {selectedCourses.map((course, index) => (
                  <div 
                    key={course.id}
                    className="animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ScheduleItem course={course} />
                  </div>
                ))}
              </div>

              {/* Summary Footer with animations */}
              <div className="glass-effect rounded-3xl card-shadow p-8 border-4 border-white/50 animate-fadeInUp delay-300 relative overflow-hidden">
                {/* Animated corner decoration */}
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pine-green-500/20 to-transparent rounded-tr-full animate-pulse-slow"></div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10">
                  <div className="flex items-center space-x-4 animate-slideInLeft delay-400">
                    <div className="w-16 h-16 bg-gradient-to-br from-pine-green-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white animate-pulseGlow">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-silver-500 uppercase tracking-wide">Registration Complete</p>
                      <p className="text-2xl font-bold text-silver-900">You're all set for Fall 2025!</p>
                    </div>
                  </div>
                  <div className="text-center md:text-right bg-gradient-to-br from-gold-100 to-gold-200 px-8 py-4 rounded-2xl border-2 border-gold-300 shadow-lg transform hover:scale-105 transition-all duration-300 animate-slideInRight delay-500 card-3d">
                    <p className="text-sm text-gold-700 font-bold uppercase tracking-wide">Total Credit Hours</p>
                    <p className="text-4xl font-bold text-gradient-animate animate-bounce-subtle">{selectedCourses.length * 3}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;