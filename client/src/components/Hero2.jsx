import calculationPic from '../assets/calculationPic.png';
export default function Hero2() {
  return (
    <div className="max-w-full min-h-screen flex flex-col md:flex-row">
        <div className="select-none flex-1 flex flex-col items-center justify-center">
            <div className='select-none text-xl py-2  md:text-4xl font-extrabold'>
                You can also calculate<span className='italic text-orange-500'>Total CGPA</span> 
            </div>
            <div className='select-none text-sm py-2 animate-pulse text-slate-700  md:text-2xl font-extrabold'>
                Give a try!
            </div>
        </div>
        <div className="select-none flex-1 flex items-center justify-center">
            <img src={calculationPic} alt="Illustration" onContextMenu={(e) => e.preventDefault()}/>
        </div>
    </div>
  )
}
