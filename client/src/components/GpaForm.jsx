import React, { useState, useEffect } from 'react';
import Courseinput from './Courseinput';

export default function GpaForm() {
  const initialCourses = [
    { courseName: '', credit: '', grade: '' },
    { courseName: '', credit: '', grade: '' },
    { courseName: '', credit: '', grade: '' },
  ];
  const [courses, setCourses] = useState(initialCourses);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [cgpa, setCGPA] = useState('0.00');

  useEffect(() => {
    const calculateCGPA = () => {
    
      const totalCreditPoints = courses.reduce(
        (sum, course) => {
          const credit = parseFloat(course.credit) || 0;
          const grade = parseFloat(course.grade) || 0;
          console.log(`Credit: ${credit}, Grade: ${grade}`);
          return sum + credit * grade;
        },
        0
      );
  
      const totalCredits = courses.reduce(
        (sum, course) => {
          const credit = parseFloat(course.credit) || 0;
          console.log(`Credit: ${credit}`);
          return sum + credit;
        },
        0
      );
  
  
      return totalCreditPoints / totalCredits;
    };
  
    setShowRemoveButton(courses.length > 3);
    setCGPA(calculateCGPA().toFixed(2));
  }, [courses]);
  

  const handleAddCourse = () => {
    setCourses(prevCourses => [...prevCourses, { courseName: '', credit: '', grade: '' }]);
  };

  const handleRemoveCourse = () => {
    if (courses.length > 3) {
      setCourses(prevCourses => prevCourses.slice(0, -1));
    }
  };

  const handleChangeCourse = (index, fieldName, value) => {
    const updatedCourses = [...courses];
    updatedCourses[index][fieldName] = value;
    setCourses(updatedCourses);
  };

  return (
    <>
        <div className=' bg-slate-200 text-center p-4 text-xl font-extrabold mt-8 md:text-3xl'>
            GPA Calculation
        </div>

        <div className="container mx-auto my-2 p-6 bg-gray-100 rounded-lg">
            <div className="flex flex-col gap-6">
               
                {courses.map((course, index) => (
                <React.Fragment key={index}>
               
                    <Courseinput
                    courseName={course.courseName}
                    credit={course.credit}
                    grade={course.grade}
                    onCourseChange={(fieldName, value) => handleChangeCourse(index, fieldName, value)}
                    />

                    {/* Divider */}
                    {index !== courses.length - 1 && <hr className="border-t-2 border-gray-300" />}
                </React.Fragment>
                ))}
            </div>

            {/* "Add Course" Button */}
            <button
                className="px-4 py-2 mt-6 mr-4 bg-slate-800 text-white rounded-md hover:bg-slate-900 focus:outline-none"
                onClick={handleAddCourse}
            >
                Add Course
            </button>

            {/* "Remove Course" Button (Show only when courses.length > 3) */}
            {showRemoveButton && (
                <button
                className="px-4 py-2 my-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                onClick={handleRemoveCourse}
                >
                Remove
                </button>
            )}

            {/* CGPA Display */}
            <div className="my-4 text-3xl">
                GPA: <strong>  {isNaN(cgpa) ? '0.00' : cgpa} </strong> 
            </div>
        </div>
    
    
    </>
    
  );
}
