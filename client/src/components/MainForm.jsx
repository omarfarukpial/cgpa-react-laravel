
import React, { useState } from "react";
import Courseinput from "./Courseinput";

export default function MainForm() {
    const [numCourses, setNumCourses] = useState(3);

    const handleAddCourse = () => {
      setNumCourses(prevNumCourses => prevNumCourses + 1);
    };
    const handleRemoveCourse = () => {
        if (numCourses > 3) {
          setNumCourses(prevNumCourses => prevNumCourses - 1);
        }
    };

  return (
    <>
        <div className="min-h-screen">
            <div className="mx-auto mt-5 text-center">
                <h1 className="text-3xl font-extrabold">GPA Calculation</h1>
            </div>
            <div className="container mx-auto my-8 p-6 bg-gray-100 rounded-lg">
                <div className="flex flex-col gap-6">
                    {/* Render Courseinput components based on numCourses */}
                    {Array.from({ length: numCourses }).map((_, index) => (
                    <React.Fragment key={index}>
                        {/* Course Input */}
                        <Courseinput />

                        {/* Divider */}
                        {index !== numCourses - 1 && <hr className="border-t-2 border-gray-300" />}
                    </React.Fragment>
                    ))}
                </div>

                {/* "Add Course" Button */}
                <button
                    className="select-none mr-3 px-4 py-2 mt-6 bg-slate-800 text-white rounded-md hover:bg-slate-900 focus:outline-none"
                    onClick={handleAddCourse}
                >
                    Add Course
                </button>

                {/* "Remove Course" Button (Show only when numCourses > 3) */}
                {numCourses > 3 && (
                    <button
                    className="select-none px-4 py-2 mx-3 mt-6 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                    onClick={handleRemoveCourse}
                    >
                    Remove Course
                    </button>
                )}

                
            </div>
        </div>
    
    </>
 
    
  )
}
