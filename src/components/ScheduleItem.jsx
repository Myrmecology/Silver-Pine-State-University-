const ScheduleItem = ({ course }) => {
  return (
    <div className="group bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 overflow-hidden">
      {/* Color accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-spsu-blue-600 via-spsu-blue-500 to-cyan-500"></div>
      
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-spsu-blue-700 transition-colors">
              {course.title}
            </h3>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-spsu-blue-100 text-spsu-blue-800 border border-spsu-blue-200">
              {course.id}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Professor Info */}
          <div className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-spsu-blue-600 flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Professor</p>
              <p className="text-sm font-bold text-gray-900 truncate">{course.professor}</p>
            </div>
          </div>

          {/* Schedule Info */}
          <div className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-spsu-green-600 flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Schedule</p>
              <p className="text-sm font-bold text-gray-900">{course.days.join(', ')}</p>
              <p className="text-xs text-gray-600 mt-0.5">{course.time}</p>
            </div>
          </div>

          {/* Location Info */}
          <div className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Location</p>
              <p className="text-sm font-bold text-gray-900 truncate">{course.building}</p>
              <p className="text-xs text-gray-600 mt-0.5">Room {course.room}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleItem;