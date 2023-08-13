import React, { useState, useEffect } from 'react';
import SemesterInput from './Semesterinput';

export default function CgpaForm() {
  const initialSemesters = [
    { semesterName: 'Semester 1', earnedCredit: '', earnedGpa: '' },
    { semesterName: 'Semester 2', earnedCredit: '', earnedGpa: '' },
    { semesterName: 'Semester 3', earnedCredit: '', earnedGpa: '' },
  ];
  const [semesters, setSemesters] = useState(initialSemesters);
  const [showRemoveSemesterButton, setShowRemoveSemesterButton] = useState(false);
  const [tcgpa, setTCGPA] = useState('0.00');


  
  useEffect(() => {
    const calcTCGPA = () => {
      let totalCredits = 0;
      let weightedGPASum = 0;
  
      semesters.forEach((semester) => {
        const earnedCredit = parseFloat(semester.earnedCredit);
        const earnedGpa = parseFloat(semester.earnedGpa);
  
        if (!isNaN(earnedCredit) && !isNaN(earnedGpa)) {
          totalCredits += earnedCredit;
          weightedGPASum += earnedCredit * earnedGpa;
        }
      });
  
      const calculatedTCGPA = (weightedGPASum / totalCredits);
      return calculatedTCGPA;
    };

    setTCGPA(calcTCGPA().toFixed(2));
    setShowRemoveSemesterButton(semesters.length > 3);
  }, [semesters]);



  

  const handleAddSemester = () => {
    const nextSemesterNumber = semesters.length + 1;
    const nextSemesterName = `Semester ${nextSemesterNumber}`;
    setSemesters(prevSemesters => [...prevSemesters, { semesterName: nextSemesterName, earnedCredit: '', earnedGpa: '' }]);
  };

  const handleRemoveSemester = () => {
    if (semesters.length > 3) {
      setSemesters(prevSemesters => prevSemesters.slice(0, -1));
    }
  };

  const handleChangeSemester = (index, fieldName, value) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[index][fieldName] = value;
    setSemesters(updatedSemesters);
  };


  return (
    <>
        <div className=' bg-slate-200 text-center p-4 text-xl font-extrabold mt-8 md:text-3xl'>
            CGPA Calculation
        </div>

        <div className="container mx-auto my-2 p-6 bg-gray-100 rounded-lg">
            <div className="flex flex-col gap-6">
            {semesters.map((semester, index) => (
                <React.Fragment key={index}>
               
                    <SemesterInput
                    semesterName={semester.semesterName}
                    earnedCredit={semester.earnedCredit}
                    earnedGpa={semester.earnedGpa}
                    onCourseChange={(fieldName, value) => handleChangeSemester(index, fieldName, value)}
                    />
                    {index !== semesters.length - 1 && <hr className="border-t-2 border-gray-300" />}
                </React.Fragment>
                ))}               
            </div>
            <button
                className="px-4 py-2 mt-6 mr-4 bg-slate-800 text-white rounded-md hover:bg-slate-900 focus:outline-none"
                onClick={handleAddSemester}
            >
                Add Semester
            </button>

            {/* "Remove Course" Button (Show only when courses.length > 3) */}
            {showRemoveSemesterButton && (
                <button
                className="px-4 py-2 my-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                onClick={handleRemoveSemester}
                >
                Remove
                </button>
            )}

            {/* CGPA Display */}
            <div className="my-4 text-3xl">
                CGPA: <strong>  {isNaN(tcgpa) ? '0.00' : tcgpa} </strong> 
            </div>
        </div>
    
    
    </>
  )
}
