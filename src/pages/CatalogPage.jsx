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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-spsu-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8 md:py-12">
        {/* Welcome Banner */}
        <div className="glass rounded-2xl shadow-elegant p-6 md:p-8 mb-8 border-2 border-white animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
                Course Catalog
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Welcome back, <span className="font-bold text-spsu-blue-700">{studentName}</span>! 
                <span className="hidden md:inline"> Browse and select your courses below.</span>
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-spsu-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Selection Status Banner */}
        <div className="glass rounded-2xl shadow-card p-5 md:p-6 mb-8 border-2 border-white animate-slide-up">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-spsu-blue-700 to-spsu-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">{selectedCourses.length}</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  Classes Selected
                </p>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">
                  <span className="text-spsu-blue-700">{selectedCourses.length}</span>
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-gray-600">5</span>
                </p>
                {selectedCourses.length === 5 && (
                  <p className="text-sm text-spsu-green-600 font-bold mt-1 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Maximum reached!
                  </p>
                )}
              </div>
            </div>

            {/* Progress bar */}
            <div className="flex-1 max-w-md">
              <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                <div 
                  className="bg-gradient-to-r from-spsu-blue-700 via-spsu-blue-600 to-cyan-500 h-3 rounded-full transition-all duration-500 shadow-md"
                  style={{ width: `${(selectedCourses.length / 5) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                {5 - selectedCourses.length} {5 - selectedCourses.length === 1 ? 'slot' : 'slots'} remaining
              </p>
            </div>
            
            {selectedCourses.length > 0 && (
              <button
                onClick={handleRegister}
                className="group bg-gradient-to-r from-spsu-green-700 via-spsu-green-600 to-emerald-600 text-white py-3 px-8 rounded-xl font-bold text-base hover:from-spsu-green-800 hover:via-spsu-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-300 transform hover:scale-[1.02] whitespace-nowrap"
              >
                <span className="flex items-center">
                  Register Classes
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Course Grid Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Available Courses</h3>
          <p className="text-gray-600">Fall 2025 Semester • {courses.length} courses available</p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
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