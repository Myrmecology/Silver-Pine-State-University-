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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Course Catalog
          </h2>
          <p className="text-gray-600">
            Welcome, <span className="font-semibold text-spsu-blue">{studentName}</span>! Browse and select your courses below.
          </p>
        </div>

        {/* Selection Status Banner */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold text-gray-800">
              Classes Selected: <span className="text-spsu-blue">{selectedCourses.length} of 5</span>
            </p>
            {selectedCourses.length === 5 && (
              <p className="text-sm text-spsu-green font-medium mt-1">
                Maximum classes selected!
              </p>
            )}
          </div>
          
          {selectedCourses.length > 0 && (
            <button
              onClick={handleRegister}
              className="bg-spsu-green text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
            >
              Register Classes →
            </button>
          )}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;