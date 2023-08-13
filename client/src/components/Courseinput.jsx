import PropTypes from 'prop-types';
const Courseinput = ({ courseName, credit, grade, onCourseChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onCourseChange(name, value);
  };

  return (
    <>
      <div className="my-4 flex flex-col sm:flex-row justify-between gap-4">

        <div className="w-full sm:w-1/3 relative">
          <label htmlFor="courseName" className="block font-medium mb-1">Course Name</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={courseName}
            onChange={handleInputChange}
            placeholder="Enter Course Name"
          />
        </div>

        <div className="w-full sm:w-1/3">
          <label htmlFor="grade" className="block font-medium mb-1">Grade</label>
          <select
            id="grade"
            name="grade"
            className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={grade}
            onChange={handleInputChange}
          >
            <option disabled value="">Select Grade</option>
            <option value="4.00">A+ [80-100]</option>
            <option value="3.75">A [75-79]</option>
            <option value="3.50">A- [70-74]</option>
            <option value="3.25">B+ [65-69]</option>
            <option value="3.00">B [60-64]</option>
            <option value="2.75">B- [55-59]</option>
            <option value="2.50">C+ [50-54]</option>
            <option value="2.25">C [45-49]</option>
            <option value="2.00">D [40-44]</option>
            <option value="0.00">F [0-39]</option>
          </select>
        </div>

     
        <div className="w-full sm:w-1/3 relative">
          <label htmlFor="courseCredit" className="block font-medium mb-1">Course Credit</label>
          <input
            type="number"
            id="courseCredit"
            name="credit"
            className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={credit}
            onChange={handleInputChange}
            placeholder="Enter Course Credit"
          />
        </div>
      </div>
    </>
  );
};

Courseinput.propTypes = {
    courseName: PropTypes.string.isRequired,
    credit: PropTypes.string.isRequired,
    grade: PropTypes.string.isRequired,
    onCourseChange: PropTypes.func.isRequired,
  };

export default Courseinput;
