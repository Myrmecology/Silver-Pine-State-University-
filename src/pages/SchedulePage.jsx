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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Schedule for {studentName}
            </h2>
            <p className="text-gray-600">
              You are registered for <span className="font-semibold text-spsu-blue">{selectedCourses.length}</span> {selectedCourses.length === 1 ? 'course' : 'courses'} this semester
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <button
              onClick={handleBackToCatalog}
              className="bg-spsu-blue text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
            >
              ← Back to Catalog
            </button>
            <button
              onClick={handleClearSchedule}
              className="bg-red-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-md hover:shadow-lg"
            >
              🗑 Clear Schedule
            </button>
          </div>

          {/* Schedule List */}
          {selectedCourses.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <p className="text-xl text-gray-600 mb-4">No classes registered yet.</p>
              <button
                onClick={handleBackToCatalog}
                className="bg-spsu-blue text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Browse Course Catalog
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {selectedCourses.map((course) => (
                <ScheduleItem key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;