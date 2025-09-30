import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../context/RegistrationContext';
import Header from '../components/Header';

const LandingPage = () => {
  const [name, setName] = useState('');
  const { saveStudentName } = useRegistration();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      saveStudentName(name.trim());
      navigate('/catalog');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-spsu-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-5xl">🌲</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                Welcome to Silver Pine State University
              </h2>
              <p className="text-gray-600 text-lg">
                Begin your course registration journey
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="studentName" 
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Enter Your Full Name
                </label>
                <input
                  type="text"
                  id="studentName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spsu-blue focus:border-transparent outline-none transition-all text-gray-800"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-spsu-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
              >
                Begin Registration
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-sm text-gray-500">
                Register for up to 5 courses per semester
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;