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
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-bold text-spsu-blue">{course.title}</h3>
          <p className="text-sm text-gray-600 font-medium">{course.id}</p>
        </div>
      </div>

      <p className="text-gray-700 mb-4 text-sm leading-relaxed">{course.description}</p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-semibold mr-2">Professor:</span>
          <span>{course.professor}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-semibold mr-2">Schedule:</span>
          <span>{course.days.join(', ')} • {course.time}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-semibold mr-2">Location:</span>
          <span>{course.building}, Room {course.room}</span>
        </div>
      </div>

      <button
        onClick={handleAddCourse}
        disabled={isSelected || isDisabled}
        className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
          isSelected
            ? 'bg-spsu-green text-white cursor-not-allowed'
            : isDisabled
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-spsu-blue text-white hover:bg-blue-800'
        }`}
      >
        {isSelected ? 'Added to Schedule' : 'Add to Schedule'}
      </button>
    </div>
  );
};

export default CourseCard;