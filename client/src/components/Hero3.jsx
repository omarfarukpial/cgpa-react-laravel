import maintenanceIcon from '../assets/MaintenanceIcon.svg';
export default function Hero3() {
  return (
    <div className="max-w-full min-h-screen flex flex-col md:flex-row">
        <div className="select-none flex-1 flex items-center justify-center">
            <img src={maintenanceIcon} alt="Illustration" onContextMenu={(e) => e.preventDefault()}/>
        </div>
        <div className="select-none flex-1 flex flex-col items-center justify-center">
            <div className='select-none text-xl py-2  md:text-4xl font-extrabold'>
                If you face any issue,<span className='italic text-orange-500'> <a href="https://www.linkedin.com/in/omar-faruk-pial-9b5437156/">Click here!</a></span> 
            </div>
            <div className='select-none text-sm py-2 animate-pulse text-slate-700  md:text-2xl font-extrabold'>
                Good bye!
            </div>
        </div>
    </div>
  )
}
