import { useState } from 'react';

const SemesterForm = () => {
  // State variables to store input values
  const [semester1GPA, setSemester1GPA] = useState('');
  const [semester1Credit, setSemester1Credit] = useState('');

  // Add more state variables and corresponding setters for additional semesters if needed.

  // Function to handle input changes for Semester 1
  const handleSemester1Change = (e) => {
    const { name, value } = e.target;
    if (name === 'semester1GPA') {
      setSemester1GPA(value);
    } else if (name === 'semester1Credit') {
      setSemester1Credit(value);
    }
  };



  // Add more handle change functions for additional semesters if needed.

  return (
    <div className="my-4 flex flex-col sm:flex-row justify-between gap-4">
      {/* Semester 1 */}
      <div className="w-full sm:w-1/3 relative">
        <span className="font-medium">Semester 1</span>
        <div className="flex items-center">
          <input
            type="number"
            id="semester1GPA"
            name="semester1GPA"
            className="w-20 mr-2 border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={semester1GPA}
            onChange={handleSemester1Change}
            placeholder="GPA"
          />
          <span>earned credit:</span>
          <input
            type="number"
            id="semester1Credit"
            name="semester1Credit"
            className="w-20 ml-2 border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={semester1Credit}
            onChange={handleSemester1Change}
            placeholder="Credit"
          />
        </div>
      </div>

     

      {/* Add more semesters here */}
    </div>
  );
};

export default SemesterForm;
