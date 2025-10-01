const ScheduleItem = ({ course }) => {
  return (
    <div className="group bg-white rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 border-2 border-silver-200 overflow-hidden transform hover:-translate-y-1">
      {/* Top accent gradient */}
      <div className="h-2 bg-gradient-to-r from-pine-green-600 via-gold-500 to-pine-green-600"></div>
      
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-silver-900 mb-2 group-hover:text-pine-green-700 transition-colors">
              {course.title}
            </h3>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-gradient-to-r from-pine-green-100 to-gold-100 text-pine-green-800 border-2 border-pine-green-200 shadow-sm">
              {course.id}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Professor Info */}
          <div className="flex items-start space-x-3 p-5 rounded-xl bg-gradient-to-br from-silver-50 via-silver-100 to-silver-50 border-2 border-silver-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-pine-green-600 to-pine-green-700 flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-silver-500 uppercase tracking-wide mb-1">Professor</p>
              <p className="text-sm font-bold text-silver-900 truncate">{course.professor}</p>
            </div>
          </div>

          {/* Schedule Info */}
          <div className="flex items-start space-x-3 p-5 rounded-xl bg-gradient-to-br from-gold-50 via-gold-100 to-gold-50 border-2 border-gold-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-gold-700 uppercase tracking-wide mb-1">Schedule</p>
              <p className="text-sm font-bold text-silver-900">{course.days.join(', ')}</p>
              <p className="text-xs text-silver-600 mt-1 font-medium">{course.time}</p>
            </div>
          </div>

          {/* Location Info */}
          <div className="flex items-start space-x-3 p-5 rounded-xl bg-gradient-to-br from-pine-green-50 via-emerald-50 to-pine-green-50 border-2 border-pine-green-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-silver-700 to-silver-800 flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-pine-green-700 uppercase tracking-wide mb-1">Location</p>
              <p className="text-sm font-bold text-silver-900 truncate">{course.building}</p>
              <p className="text-xs text-silver-600 mt-1 font-medium">Room {course.room}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleItem;