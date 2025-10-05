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
    <div className="min-h-screen bg-gradient-to-br from-silver-100 via-silver-200 to-silver-300 relative overflow-hidden animated-gradient-bg">
      <Header />
      
      {/* TONS OF MOVING PARTICLES - Silver, Gold, Green - ALL constantly animated */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* GOLD Particles - Row 1 */}
        <div className="absolute top-[8%] left-[10%] w-4 h-4 bg-gold-500 rounded-full shadow-lg animate-particleFloat"></div>
        <div className="absolute top-[12%] left-[25%] w-3 h-3 bg-gold-400 rounded-full shadow-lg animate-particleFloat animation-delay-200"></div>
        <div className="absolute top-[15%] left-[40%] w-4 h-4 bg-gold-600 rounded-full shadow-lg animate-particleFloat animation-delay-400"></div>
        <div className="absolute top-[10%] left-[55%] w-3 h-3 bg-gold-500 rounded-full shadow-lg animate-particleFloat animation-delay-600"></div>
        <div className="absolute top-[18%] left-[70%] w-4 h-4 bg-gold-400 rounded-full shadow-lg animate-particleFloat animation-delay-300"></div>
        <div className="absolute top-[14%] left-[85%] w-3 h-3 bg-gold-600 rounded-full shadow-lg animate-particleFloat animation-delay-500"></div>
        
        {/* GOLD Particles - Row 2 */}
        <div className="absolute top-[28%] left-[15%] w-3 h-3 bg-gold-500 rounded-full shadow-lg animate-particleFloat animation-delay-100"></div>
        <div className="absolute top-[32%] left-[30%] w-4 h-4 bg-gold-400 rounded-full shadow-lg animate-particleFloat animation-delay-300"></div>
        <div className="absolute top-[35%] left-[45%] w-3 h-3 bg-gold-600 rounded-full shadow-lg animate-particleFloat animation-delay-500"></div>
        <div className="absolute top-[30%] left-[60%] w-4 h-4 bg-gold-500 rounded-full shadow-lg animate-particleFloat animation-delay-700"></div>
        <div className="absolute top-[38%] left-[75%] w-3 h-3 bg-gold-400 rounded-full shadow-lg animate-particleFloat animation-delay-200"></div>
        <div className="absolute top-[34%] left-[90%] w-4 h-4 bg-gold-600 rounded-full shadow-lg animate-particleFloat animation-delay-400"></div>
        
        {/* GOLD Particles - Row 3 */}
        <div className="absolute top-[48%] left-[12%] w-4 h-4 bg-gold-500 rounded-full shadow-lg animate-particleFloat animation-delay-600"></div>
        <div className="absolute top-[52%] left-[28%] w-3 h-3 bg-gold-400 rounded-full shadow-lg animate-particleFloat animation-delay-800"></div>
        <div className="absolute top-[55%] left-[42%] w-4 h-4 bg-gold-600 rounded-full shadow-lg animate-particleFloat animation-delay-300"></div>
        <div className="absolute top-[50%] left-[58%] w-3 h-3 bg-gold-500 rounded-full shadow-lg animate-particleFloat animation-delay-500"></div>
        <div className="absolute top-[58%] left-[72%] w-4 h-4 bg-gold-400 rounded-full shadow-lg animate-particleFloat animation-delay-700"></div>
        <div className="absolute top-[54%] left-[88%] w-3 h-3 bg-gold-600 rounded-full shadow-lg animate-particleFloat animation-delay-200"></div>
        
        {/* GREEN Particles - Row 1 */}
        <div className="absolute top-[20%] left-[8%] w-3 h-3 bg-pine-green-500 rounded-full shadow-lg animate-particleFloat animation-delay-100"></div>
        <div className="absolute top-[24%] left-[22%] w-4 h-4 bg-pine-green-600 rounded-full shadow-lg animate-particleFloat animation-delay-300"></div>
        <div className="absolute top-[18%] left-[38%] w-3 h-3 bg-pine-green-400 rounded-full shadow-lg animate-particleFloat animation-delay-500"></div>
        <div className="absolute top-[22%] left-[52%] w-4 h-4 bg-pine-green-500 rounded-full shadow-lg animate-particleFloat animation-delay-700"></div>
        <div className="absolute top-[26%] left-[68%] w-3 h-3 bg-pine-green-600 rounded-full shadow-lg animate-particleFloat animation-delay-200"></div>
        <div className="absolute top-[20%] left-[82%] w-4 h-4 bg-pine-green-400 rounded-full shadow-lg animate-particleFloat animation-delay-400"></div>
        
        {/* GREEN Particles - Row 2 */}
        <div className="absolute top-[40%] left-[18%] w-4 h-4 bg-pine-green-500 rounded-full shadow-lg animate-particleFloat animation-delay-600"></div>
        <div className="absolute top-[44%] left-[32%] w-3 h-3 bg-pine-green-600 rounded-full shadow-lg animate-particleFloat animation-delay-800"></div>
        <div className="absolute top-[38%] left-[48%] w-4 h-4 bg-pine-green-400 rounded-full shadow-lg animate-particleFloat animation-delay-300"></div>
        <div className="absolute top-[42%] left-[62%] w-3 h-3 bg-pine-green-500 rounded-full shadow-lg animate-particleFloat animation-delay-500"></div>
        <div className="absolute top-[46%] left-[78%] w-4 h-4 bg-pine-green-600 rounded-full shadow-lg animate-particleFloat animation-delay-700"></div>
        <div className="absolute top-[40%] left-[92%] w-3 h-3 bg-pine-green-400 rounded-full shadow-lg animate-particleFloat animation-delay-200"></div>
        
        {/* GREEN Particles - Row 3 */}
        <div className="absolute top-[60%] left-[14%] w-3 h-3 bg-pine-green-500 rounded-full shadow-lg animate-particleFloat animation-delay-400"></div>
        <div className="absolute top-[64%] left-[26%] w-4 h-4 bg-pine-green-600 rounded-full shadow-lg animate-particleFloat animation-delay-600"></div>
        <div className="absolute top-[58%] left-[44%] w-3 h-3 bg-pine-green-400 rounded-full shadow-lg animate-particleFloat animation-delay-800"></div>
        <div className="absolute top-[62%] left-[56%] w-4 h-4 bg-pine-green-500 rounded-full shadow-lg animate-particleFloat animation-delay-300"></div>
        <div className="absolute top-[66%] left-[74%] w-3 h-3 bg-pine-green-600 rounded-full shadow-lg animate-particleFloat animation-delay-500"></div>
        <div className="absolute top-[60%] left-[86%] w-4 h-4 bg-pine-green-400 rounded-full shadow-lg animate-particleFloat animation-delay-700"></div>
        
        {/* SILVER Particles - Row 1 */}
        <div className="absolute top-[16%] left-[12%] w-3 h-3 bg-silver-400 rounded-full shadow-lg animate-particleFloat animation-delay-200"></div>
        <div className="absolute top-[10%] left-[28%] w-4 h-4 bg-silver-500 rounded-full shadow-lg animate-particleFloat animation-delay-400"></div>
        <div className="absolute top-[14%] left-[44%] w-3 h-3 bg-silver-400 rounded-full shadow-lg animate-particleFloat animation-delay-600"></div>
        <div className="absolute top-[12%] left-[58%] w-4 h-4 bg-silver-500 rounded-full shadow-lg animate-particleFloat animation-delay-800"></div>
        <div className="absolute top-[16%] left-[72%] w-3 h-3 bg-silver-400 rounded-full shadow-lg animate-particleFloat animation-delay-300"></div>
        <div className="absolute top-[10%] left-[88%] w-4 h-4 bg-silver-500 rounded-full shadow-lg animate-particleFloat animation-delay-500"></div>
        
        {/* SILVER Particles - Row 2 */}
        <div className="absolute top-[36%] left-[20%] w-4 h-4 bg-silver-400 rounded-full shadow-lg animate-particleFloat animation-delay-700"></div>
        <div className="absolute top-[30%] left-[34%] w-3 h-3 bg-silver-500 rounded-full shadow-lg animate-particleFloat animation-delay-200"></div>
        <div className="absolute top-[34%] left-[50%] w-4 h-4 bg-silver-400 rounded-full shadow-lg animate-particleFloat animation-delay-400"></div>
        <div className="absolute top-[32%] left-[64%] w-3 h-3 bg-silver-500 rounded-full shadow-lg animate-particleFloat animation-delay-600"></div>
        <div className="absolute top-[36%] left-[80%] w-4 h-4 bg-silver-400 rounded-full shadow-lg animate-particleFloat animation-delay-800"></div>
        <div className="absolute top-[30%] left-[94%] w-3 h-3 bg-silver-500 rounded-full shadow-lg animate-particleFloat animation-delay-300"></div>
        
        {/* SILVER Particles - Row 3 */}
        <div className="absolute top-[56%] left-[16%] w-3 h-3 bg-silver-400 rounded-full shadow-lg animate-particleFloat animation-delay-500"></div>
        <div className="absolute top-[50%] left-[36%] w-4 h-4 bg-silver-500 rounded-full shadow-lg animate-particleFloat animation-delay-700"></div>
        <div className="absolute top-[54%] left-[46%] w-3 h-3 bg-silver-400 rounded-full shadow-lg animate-particleFloat animation-delay-200"></div>
        <div className="absolute top-[52%] left-[66%] w-4 h-4 bg-silver-500 rounded-full shadow-lg animate-particleFloat animation-delay-400"></div>
        <div className="absolute top-[56%] left-[76%] w-3 h-3 bg-silver-400 rounded-full shadow-lg animate-particleFloat animation-delay-600"></div>
        <div className="absolute top-[50%] left-[90%] w-4 h-4 bg-silver-500 rounded-full shadow-lg animate-particleFloat animation-delay-800"></div>
        
        {/* Bottom scattered particles for extra density */}
        <div className="absolute top-[68%] left-[10%] w-3 h-3 bg-gold-500 rounded-full shadow-md animate-particleFloat animation-delay-300"></div>
        <div className="absolute top-[72%] left-[25%] w-3 h-3 bg-pine-green-500 rounded-full shadow-md animate-particleFloat animation-delay-500"></div>
        <div className="absolute top-[70%] left-[40%] w-3 h-3 bg-silver-400 rounded-full shadow-md animate-particleFloat animation-delay-700"></div>
        <div className="absolute top-[74%] left-[55%] w-3 h-3 bg-gold-400 rounded-full shadow-md animate-particleFloat animation-delay-200"></div>
        <div className="absolute top-[68%] left-[70%] w-3 h-3 bg-pine-green-400 rounded-full shadow-md animate-particleFloat animation-delay-400"></div>
        <div className="absolute top-[72%] left-[85%] w-3 h-3 bg-silver-500 rounded-full shadow-md animate-particleFloat animation-delay-600"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8 md:py-12 z-10">
        {/* Welcome Banner with advanced animations */}
        <div className="glass-effect rounded-3xl shadow-elegant p-6 md:p-8 mb-8 border-4 border-white/50 animate-fadeInDown relative overflow-hidden">
          {/* Animated corner decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-400/20 to-transparent rounded-bl-full animate-pulse-slow"></div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between relative z-10">
            <div className="mb-4 md:mb-0 animate-slideInLeft">
              <h2 className="text-3xl md:text-4xl font-bold text-silver-900 mb-3 tracking-tight transform hover:scale-105 transition-transform duration-300">
                Course Catalog
              </h2>
              <p className="text-base md:text-lg text-silver-700">
                Welcome back, <span className="font-bold text-gradient-animate">{studentName}</span>! 
                <span className="hidden md:inline"> Browse and select your courses below.</span>
              </p>
            </div>
            <div className="flex items-center space-x-3 animate-slideInRight">
              <div className="w-14 h-14 bg-gradient-to-br from-pine-green-600 via-pine-green-500 to-gold-500 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 hover:rotate-12 transition-all duration-500 border-4 border-white animate-pulseGlow">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Selection Status Banner with enhanced animations */}
        <div className="glass-effect rounded-3xl card-shadow p-6 md:p-8 mb-10 border-4 border-white/50 animate-scalePop relative overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pine-green-500 via-gold-500 to-pine-green-500 animate-shimmer"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 relative z-10">
            <div className="flex items-center space-x-5 animate-fadeInUp">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-pine-green-700 via-pine-green-600 to-gold-600 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white transform hover:scale-110 hover:rotate-6 transition-all duration-500 animate-tilt3d">
                  <span className="text-3xl font-bold text-white animate-bounce-subtle">{selectedCourses.length}</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-silver-500 uppercase tracking-wider mb-1">
                  Classes Selected
                </p>
                <p className="text-3xl md:text-4xl font-bold text-silver-900">
                  <span className="text-gradient-animate">{selectedCourses.length}</span>
                  <span className="text-silver-400 mx-3">/</span>
                  <span className="text-silver-700">5</span>
                </p>
                {selectedCourses.length === 5 && (
                  <p className="text-sm text-pine-green-700 font-bold mt-2 flex items-center animate-fadeInUp delay-200">
                    <svg className="w-5 h-5 mr-1 animate-scalePop" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Maximum classes reached!
                  </p>
                )}
              </div>
            </div>

            {/* Enhanced Progress Bar */}
            <div className="flex-1 max-w-md animate-fadeInUp delay-100">
              <div className="relative w-full bg-silver-300 rounded-full h-4 shadow-inner overflow-hidden">
                {/* Animated progress fill */}
                <div 
                  className="relative h-4 rounded-full transition-all duration-700 ease-out shadow-lg"
                  style={{ 
                    width: `${(selectedCourses.length / 5) * 100}%`,
                    background: 'linear-gradient(90deg, #15803d, #22c55e, #fbbf24)'
                  }}
                >
                  {/* Shimmer effect on progress */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                  
                  {/* Pulsing glow */}
                  <div className="absolute inset-0 bg-pine-green-400 opacity-50 blur-md animate-pulse-slow"></div>
                </div>
                
                {/* Progress markers */}
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="absolute top-0 h-4 w-0.5 bg-silver-400"
                    style={{ left: `${(i / 5) * 100}%` }}
                  />
                ))}
              </div>
              <p className="text-sm text-silver-600 mt-2 text-center font-semibold">
                {5 - selectedCourses.length} {5 - selectedCourses.length === 1 ? 'slot' : 'slots'} remaining
              </p>
            </div>
            
            {selectedCourses.length > 0 && (
              <button
                onClick={handleRegister}
                className="group relative bg-gradient-to-r from-pine-green-700 via-pine-green-600 to-gold-600 text-white py-4 px-10 rounded-2xl font-bold text-lg hover:from-pine-green-800 hover:via-pine-green-700 hover:to-gold-700 transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-105 whitespace-nowrap border-2 border-white/20 overflow-hidden animate-fadeInUp delay-200 ripple"
              >
                {/* Animated shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Pulsing glow */}
                <div className="absolute inset-0 bg-pine-green-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                
                <span className="relative z-10 flex items-center">
                  Register Classes
                  <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Course Grid Header - REMOVED frozen dot */}
        <div className="mb-8 animate-fadeInUp delay-300">
          <h3 className="text-3xl font-bold text-silver-900 mb-2">Available Courses</h3>
          <div className="flex items-center space-x-3">
            <p className="text-lg text-silver-600 font-semibold">Fall 2025 Semester</p>
            <span className="text-silver-400">•</span>
            <p className="text-lg text-silver-600 font-semibold">{courses.length} courses available</p>
          </div>
        </div>

        {/* Course Grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {courses.map((course, index) => (
            <div 
              key={course.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${Math.min(index * 0.05, 1)}s` }}
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