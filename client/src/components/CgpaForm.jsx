import Semesterinput from "./Semesterinput";


export default function CgpaForm() {
  return (
    <>

        <div className=' bg-slate-200 text-center p-4 text-xl font-extrabold mt-8 md:text-3xl'>
            Total CGPA Calculation
        </div>
        <div className="container mx-auto my-2 p-6 bg-gray-100 rounded-lg">
            <Semesterinput/>
        </div>

    </>
  )
}
