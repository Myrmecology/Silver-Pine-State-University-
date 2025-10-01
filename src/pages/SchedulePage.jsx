import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../context/RegistrationContext';
import Header from '../components/Header';
import ScheduleItem from '../components/ScheduleItem';

const SchedulePage = () => {
  const { selectedCourses, studentName, clearSchedule } = useRegistration();
  const navigate = useNavigate();

  const handleClearSchedule = () => {
    if (window.confirm('Are you sure you want to clear your entire schedule? This action cannot be undone.')) {
      clearSchedule();
      navigate('/catalog');
    }
  };

  const handleBackToCatalog = () => {
    navigate('/catalog');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-spsu-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="glass rounded-2xl shadow-elegant p-6 md:p-8 mb-8 border-2 border-white animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-spsu-blue-700 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                      My Schedule
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 mt-1">
                      <span className="font-bold text-spsu-blue-700">{studentName}</span>
                      <span className="text-gray-400 mx-2">•</span>
                      Fall 2025
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Summary stats */}
              <div className="flex flex-wrap gap-3">
                <div className="bg-gradient-to-br from-spsu-blue-600 to-spsu-blue-700 text-white px-6 py-3 rounded-xl shadow-lg">
                  <p className="text-xs font-semibold uppercase tracking-wide opacity-90">Total Courses</p>
                  <p className="text-3xl font-bold">{selectedCourses.length}</p>
                </div>
                <div className="bg-gradient-to-br from-spsu-green-600 to-spsu-green-700 text-white px-6 py-3 rounded-xl shadow-lg">
                  <p className="text-xs font-semibold uppercase tracking-wide opacity-90">Status</p>
                  <p className="text-sm font-bold">Registered</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8 animate-slide-up">
            <button
              onClick={handleBackToCatalog}
              className="group flex-1 md:flex-none bg-gradient-to-r from-spsu-blue-700 via-spsu-blue-600 to-cyan-600 text-white py-3 px-8 rounded-xl font-bold hover:from-spsu-blue-800 hover:via-spsu-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-300 transform hover:scale-[1.02]"
            >
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
                Back to Catalog
              </span>
            </button>
            
            <button
              onClick={handleClearSchedule}
              className="group flex-1 md:flex-none bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-8 rounded-xl font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-300 transform hover:scale-[1.02]"
            >
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Clear Schedule
              </span>
            </button>
          </div>

          {/* Schedule Content */}
          {selectedCourses.length === 0 ? (
            <div className="glass rounded-2xl shadow-card p-12 md:p-16 text-center border-2 border-white">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">No Courses Registered</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Your schedule is empty. Browse the course catalog to get started!
                </p>
                <button
                  onClick={handleBackToCatalog}
                  className="group bg-gradient-to-r from-spsu-blue-700 via-spsu-blue-600 to-cyan-600 text-white py-4 px-10 rounded-xl font-bold text-lg hover:from-spsu-blue-800 hover:via-spsu-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-300 transform hover:scale-[1.02]"
                >
                  <span className="flex items-center">
                    Browse Course Catalog
                    <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Registered Courses</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-spsu-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold">All courses confirmed</span>
                </div>
              </div>
              
              <div className="space-y-5 pb-12">
                {selectedCourses.map((course, index) => (
                  <div 
                    key={course.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ScheduleItem course={course} />
                  </div>
                ))}
              </div>

              {/* Summary Footer */}
              <div className="glass rounded-2xl shadow-card p-6 border-2 border-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-spsu-green-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Registration Complete</p>
                      <p className="text-lg font-bold text-gray-900">You're all set for Fall 2025!</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Total Credit Hours</p>
                    <p className="text-2xl font-bold text-spsu-blue-700">{selectedCourses.length * 3}</p>
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