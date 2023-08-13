import PropTypes from 'prop-types';
const SemesterInput = ({ semesterName, earnedCredit, earnedGpa, onCourseChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onCourseChange(name, value);
  };
 
  return (
    <>
      <div className="my-4 flex flex-col sm:flex-row justify-between gap-4">
        <div className="w-full sm:w-1/3 relative">
          <label htmlFor="semesterName" className="block font-medium mb-1">Semester Name</label>
          <input
            type="text"
            id="semesterName"
            name="semesterName"
            className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={semesterName}
            onChange={handleInputChange}
            readOnly
          />
        </div>


        <div className="w-full sm:w-1/3 relative">
          <label htmlFor="earnedGpa" className="block font-medium mb-1">Earned GPA</label>
          <input
            type="number"
            id="earnedGpa"
            name="earnedGpa"
            className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={earnedGpa}
            onChange={handleInputChange}
            placeholder="Earned GPA"
          />
        </div>


        <div className="w-full sm:w-1/3 relative">
          <label htmlFor="earnedCredit" className="block font-medium mb-1">Earned Credit</label>
          <input
            type="number"
            id="earnedCredit"
            name="earnedCredit"
            className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={earnedCredit}
            onChange={handleInputChange}
            placeholder="Enter earned credit"
          />
        </div>
      </div>
    </>
  );
};

SemesterInput.propTypes = {
  semesterName: PropTypes.string.isRequired,
  earnedCredit: PropTypes.string.isRequired,
  earnedGpa: PropTypes.string.isRequired,
  onCourseChange: PropTypes.func.isRequired,
};

export default SemesterInput;
