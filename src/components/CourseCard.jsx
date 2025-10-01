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
    <div className="group bg-white rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 border-2 border-silver-200 overflow-hidden transform hover:-translate-y-2">
      {/* Top accent gradient */}
      <div className="h-2 bg-gradient-to-r from-pine-green-600 via-gold-500 to-pine-green-600"></div>
      
      <div className="p-6">
        {/* Course Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-silver-900 mb-2 group-hover:text-pine-green-700 transition-colors">
              {course.title}
            </h3>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-pine-green-100 to-gold-100 text-pine-green-800 border-2 border-pine-green-200 shadow-sm">
                {course.id}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-5 text-sm leading-relaxed">
          {course.description}
        </p>

        {/* Course Details Grid */}
        <div className="space-y-3 mb-6">
          {/* Professor */}
          <div className="flex items-start bg-gradient-to-r from-silver-50 to-silver-100 rounded-lg p-3 border border-silver-200">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pine-green-600 to-pine-green-700 rounded-lg flex items-center justify-center shadow-md">
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
          <div className="flex items-start bg-gradient-to-r from-gold-50 to-gold-100 rounded-lg p-3 border border-gold-200">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center shadow-md">
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
          <div className="flex items-start bg-gradient-to-r from-pine-green-50 to-emerald-50 rounded-lg p-3 border border-pine-green-200">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-silver-700 to-silver-800 rounded-lg flex items-center justify-center shadow-md">
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

        {/* Action Button */}
        <button
          onClick={handleAddCourse}
          disabled={isSelected || isDisabled}
          className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 transform ${
            isSelected
              ? 'bg-gradient-to-r from-pine-green-600 to-pine-green-700 text-white cursor-not-allowed shadow-lg'
              : isDisabled
              ? 'bg-silver-200 text-silver-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-pine-green-600 via-pine-green-500 to-gold-500 text-white hover:from-pine-green-700 hover:via-pine-green-600 hover:to-gold-600 shadow-lg hover:shadow-2xl hover:scale-105 shimmer'
          }`}
        >
          {isSelected ? (
            <span className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Added to Schedule
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add to Schedule
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;