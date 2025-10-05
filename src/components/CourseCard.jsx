import { useRegistration } from '../context/RegistrationContext';

const CourseCard = ({ course }) => {
  const { addCourse, isCourseSelected, selectedCourses } = useRegistration();

  const isSelected = isCourseSelected(course.id);
  const isDisabled = selectedCourses.length >= 5 && !isSelected;

  const handleAddCourse = () => {
    if (!isSelected && selectedCourses.length < 5) {
      addCourse(course);
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-500 border-2 border-silver-200 overflow-hidden transform hover:-translate-y-3 card-3d">
      {/* Animated gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-pine-green-500/0 via-gold-500/0 to-pine-green-500/0 group-hover:from-pine-green-500/5 group-hover:via-gold-500/5 group-hover:to-pine-green-500/5 transition-all duration-500 pointer-events-none"></div>
      
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
      </div>

      {/* Top accent gradient with animation */}
      <div className="relative h-2 bg-gradient-to-r from-pine-green-600 via-gold-500 to-pine-green-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 animate-shimmer"></div>
      </div>
      
      <div className="relative p-6">
        {/* Course Header with animation */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-silver-900 mb-2 group-hover:text-pine-green-700 transition-all duration-300 transform group-hover:scale-105 origin-left">
              {course.title}
            </h3>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-pine-green-100 to-gold-100 text-pine-green-800 border-2 border-pine-green-200 shadow-sm transform group-hover:scale-110 transition-all duration-300 animate-fadeInUp delay-100">
                {course.id}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-5 text-sm leading-relaxed animate-fadeInUp delay-200">
          {course.description}
        </p>

        {/* Course Details Grid with staggered animations */}
        <div className="space-y-3 mb-6">
          {/* Professor */}
          <div className="flex items-start bg-gradient-to-r from-silver-50 to-silver-100 rounded-lg p-3 border border-silver-200 transform group-hover:translate-x-1 transition-all duration-300 animate-fadeInUp delay-300">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pine-green-600 to-pine-green-700 rounded-lg flex items-center justify-center shadow-md transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-xs font-bold text-silver-500 uppercase tracking-wide">Professor</p>
              <p className="text-sm font-bold text-silver-900">{course.professor}</p>
            </div>
          </div>

          {/* Schedule */}
          <div className="flex items-start bg-gradient-to-r from-gold-50 to-gold-100 rounded-lg p-3 border border-gold-200 transform group-hover:translate-x-1 transition-all duration-300 animate-fadeInUp delay-400">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center shadow-md transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-xs font-bold text-gold-700 uppercase tracking-wide">Schedule</p>
              <p className="text-sm font-bold text-silver-900">{course.days.join(', ')}</p>
              <p className="text-xs text-silver-600 mt-0.5 font-medium">{course.time}</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start bg-gradient-to-r from-pine-green-50 to-emerald-50 rounded-lg p-3 border border-pine-green-200 transform group-hover:translate-x-1 transition-all duration-300 animate-fadeInUp delay-500">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-silver-700 to-silver-800 rounded-lg flex items-center justify-center shadow-md transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-xs font-bold text-pine-green-700 uppercase tracking-wide">Location</p>
              <p className="text-sm font-bold text-silver-900">{course.building}</p>
              <p className="text-xs text-silver-600 mt-0.5 font-medium">Room {course.room}</p>
            </div>
          </div>
        </div>

        {/* Action Button with advanced effects */}
        <button
          onClick={handleAddCourse}
          disabled={isSelected || isDisabled}
          className={`relative w-full py-3 px-4 rounded-xl font-bold text-sm transition-all duration-500 transform overflow-hidden animate-fadeInUp delay-600 ${
            isSelected
              ? 'bg-gradient-to-r from-pine-green-600 to-pine-green-700 text-white cursor-not-allowed shadow-lg scale-105'
              : isDisabled
              ? 'bg-silver-200 text-silver-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-pine-green-600 via-pine-green-500 to-gold-500 text-white hover:from-pine-green-700 hover:via-pine-green-600 hover:to-gold-600 shadow-lg hover:shadow-2xl hover:scale-105 ripple'
          }`}
        >
          {/* Shimmer effect for active buttons */}
          {!isSelected && !isDisabled && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          )}
          
          {/* Button content */}
          <span className="relative z-10">
            {isSelected ? (
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 animate-scalePop" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Added to Schedule
              </span>
            ) : (
              <span className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add to Schedule
              </span>
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default CourseCard;