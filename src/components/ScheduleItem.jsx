const ScheduleItem = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-5 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-bold text-spsu-blue">{course.title}</h3>
          <p className="text-sm text-gray-600 font-medium">{course.id}</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center text-sm text-gray-700">
          <span className="font-semibold mr-2">Professor:</span>
          <span>{course.professor}</span>
        </div>
        <div className="flex items-center text-sm text-gray-700">
          <span className="font-semibold mr-2">Schedule:</span>
          <span>{course.days.join(', ')} • {course.time}</span>
        </div>
        <div className="flex items-center text-sm text-gray-700">
          <span className="font-semibold mr-2">Location:</span>
          <span>{course.building}, Room {course.room}</span>
        </div>
      </div>
    </div>
  );
};

export default ScheduleItem;