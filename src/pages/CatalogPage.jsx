import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../context/RegistrationContext';
import { courses } from '../data/courses';
import Header from '../components/Header';
import CourseCard from '../components/CourseCard';

const CatalogPage = () => {
  const { selectedCourses, studentName } = useRegistration();
  const navigate = useNavigate();

  const handleRegister = () => {
    if (selectedCourses.length > 0) {
      navigate('/schedule');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-silver-100 via-silver-200 to-silver-300 relative overflow-hidden">
      <Header />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-80 h-80 bg-pine-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gold-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow animation-delay-200"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8 md:py-12">
        {/* Welcome Banner */}
        <div className="glass-effect rounded-3xl shadow-elegant p-6 md:p-8 mb-8 border-4 border-white/50 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-silver-900 mb-3 tracking-tight">
                Course Catalog
              </h2>
              <p className="text-base md:text-lg text-silver-700">
                Welcome back, <span className="font-bold text-pine-green-700 bg-gradient-to-r from-pine-green-600 to-gold-600 bg-clip-text text-transparent">{studentName}</span>! 
                <span className="hidden md:inline"> Browse and select your courses below.</span>
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-gradient-to-br from-pine-green-600 via-pine-green-500 to-gold-500 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 hover:rotate-6 transition-all border-4 border-white">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Selection Status Banner */}
        <div className="glass-effect rounded-3xl card-shadow p-6 md:p-8 mb-10 border-4 border-white/50 animate-slide-up">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center space-x-5">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-pine-green-700 via-pine-green-600 to-gold-600 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white transform hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white">{selectedCourses.length}</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-silver-500 uppercase tracking-wider mb-1">
                  Classes Selected
                </p>
                <p className="text-3xl md:text-4xl font-bold text-silver-900">
                  <span className="bg-gradient-to-r from-pine-green-700 to-gold-600 bg-clip-text text-transparent">{selectedCourses.length}</span>
                  <span className="text-silver-400 mx-3">/</span>
                  <span className="text-silver-700">5</span>
                </p>
                {selectedCourses.length === 5 && (
                  <p className="text-sm text-pine-green-700 font-bold mt-2 flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Maximum classes reached!
                  </p>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="flex-1 max-w-md">
              <div className="w-full bg-silver-300 rounded-full h-4 shadow-inner">
                <div 
                  className="bg-gradient-to-r from-pine-green-700 via-pine-green-600 to-gold-600 h-4 rounded-full transition-all duration-700 shadow-lg relative overflow-hidden"
                  style={{ width: `${(selectedCourses.length / 5) * 100}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
                </div>
              </div>
              <p className="text-sm text-silver-600 mt-2 text-center font-semibold">
                {5 - selectedCourses.length} {5 - selectedCourses.length === 1 ? 'slot' : 'slots'} remaining
              </p>
            </div>
            
            {selectedCourses.length > 0 && (
              <button
                onClick={handleRegister}
                className="group bg-gradient-to-r from-pine-green-700 via-pine-green-600 to-gold-600 text-white py-4 px-10 rounded-2xl font-bold text-lg hover:from-pine-green-800 hover:via-pine-green-700 hover:to-gold-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 whitespace-nowrap shimmer border-2 border-white/20"
              >
                <span className="flex items-center">
                  Register Classes
                  <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Course Grid Header */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-silver-900 mb-2">Available Courses</h3>
          <div className="flex items-center space-x-3">
            <p className="text-lg text-silver-600 font-semibold">Fall 2025 Semester</p>
            <div className="h-1 w-1 bg-gold-500 rounded-full"></div>
            <p className="text-lg text-silver-600 font-semibold">{courses.length} courses available</p>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {courses.map((course, index) => (
            <div 
              key={course.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;