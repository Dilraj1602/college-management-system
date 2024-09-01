import { useState, useEffect, createContext } from "react";

// Create the context
export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [numberOfCourses, setNumberOfCourses] = useState(0);
  const [semester, setSemester] = useState(1);
  const [courses, setCourses] = useState([]);
  const [availableCourses, setAvailableCourses] = useState([]);

  async function getSemesterCourses() {
    const response = await fetch(`https://api.courses.com/semester/${semester}`);
    const data = await response.json();

    setNumberOfCourses(data.length);
    setAvailableCourses(data);
  }

  function addCourse(course) {
    setCourses([...courses, course]);
  }

  useEffect(() => {
    getSemesterCourses();
  }, [semester]);

  const value = {
    numberOfCourses,
    setNumberOfCourses,
    semester,
    setSemester,
    courses,
    setCourses,
    addCourse,
    getSemesterCourses,
    availableCourses,
    setAvailableCourses
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
