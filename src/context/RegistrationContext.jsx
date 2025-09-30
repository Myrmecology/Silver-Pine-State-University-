import { createContext, useContext, useState, useEffect } from 'react';

const RegistrationContext = createContext();

export const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error('useRegistration must be used within RegistrationProvider');
  }
  return context;
};

export const RegistrationProvider = ({ children }) => {
  const [studentName, setStudentName] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedName = localStorage.getItem('studentName');
    const savedCourses = localStorage.getItem('selectedCourses');

    if (savedName) {
      setStudentName(savedName);
    }
    if (savedCourses) {
      setSelectedCourses(JSON.parse(savedCourses));
    }
  }, []);

  // Save student name to localStorage
  const saveStudentName = (name) => {
    setStudentName(name);
    localStorage.setItem('studentName', name);
  };

  // Add course to schedule
  const addCourse = (course) => {
    if (selectedCourses.length < 5 && !selectedCourses.find(c => c.id === course.id)) {
      const updatedCourses = [...selectedCourses, course];
      setSelectedCourses(updatedCourses);
      localStorage.setItem('selectedCourses', JSON.stringify(updatedCourses));
    }
  };

  // Remove course from schedule
  const removeCourse = (courseId) => {
    const updatedCourses = selectedCourses.filter(c => c.id !== courseId);
    setSelectedCourses(updatedCourses);
    localStorage.setItem('selectedCourses', JSON.stringify(updatedCourses));
  };

  // Clear all schedule data
  const clearSchedule = () => {
    setSelectedCourses([]);
    localStorage.removeItem('selectedCourses');
  };

  // Check if course is already selected
  const isCourseSelected = (courseId) => {
    return selectedCourses.some(c => c.id === courseId);
  };

  const value = {
    studentName,
    selectedCourses,
    saveStudentName,
    addCourse,
    removeCourse,
    clearSchedule,
    isCourseSelected,
  };

  return (
    <RegistrationContext.Provider value={value}>
      {children}
    </RegistrationContext.Provider>
  );
};