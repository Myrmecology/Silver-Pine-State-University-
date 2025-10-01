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
    <div className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-1">
      {/* Header with gradient accent */}
      <div className="h-2 bg-gradient-to-r from-spsu-blue-600 via-spsu-blue-500 to-cyan-500"></div>
      
      <div className="p-6">
        {/* Course Title Section */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-spsu-blue-700 transition-colors">
              {course.title}
            </h3>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-spsu-blue-100 text-spsu-blue-800 border border-spsu-blue-200">
                {course.id}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-5 text-sm leading-relaxed line-clamp-3">
          {course.description}
        </p>

        {/* Course Details */}
        <div className="space-y-3 mb-5">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-5 h-5 text-spsu-blue-600 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Professor</p>
              <p className="text-sm font-medium text-gray-900">{course.professor}</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-5 h-5 text-spsu-green-600 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Schedule</p>
              <p className="text-sm font-medium text-gray-900">{course.days.join(', ')}</p>
              <p className="text-sm text-gray-600">{course.time}</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-5 h-5 text-amber-600 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Location</p>
              <p className="text-sm font-medium text-gray-900">{course.building}</p>
              <p className="text-sm text-gray-600">Room {course.room}</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleAddCourse}
          disabled={isSelected || isDisabled}
          className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md ${
            isSelected
              ? 'bg-gradient-to-r from-spsu-green-600 to-spsu-green-500 text-white cursor-not-allowed shadow-green-200'
              : isDisabled
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
              : 'bg-gradient-to-r from-spsu-blue-700 to-spsu-blue-600 text-white hover:from-spsu-blue-800 hover:to-spsu-blue-700 hover:shadow-lg hover:shadow-blue-200 transform hover:scale-[1.02]'
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
            'Add to Schedule'
          )}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;