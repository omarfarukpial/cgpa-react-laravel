import hero1 from '../assets/hero1.png'
export default function Hero1() {
  return (
    <div className="max-w-full  h-[calc(100vh-74px)] overflow-auto flex flex-col md:flex-row">
      <div className="select-none flex-1 flex items-center justify-center">
          <img src={hero1} alt="Illustration" onContextMenu={(e) => e.preventDefault()}/>
      </div>
      <div className="select-none flex-1 flex flex-col items-center justify-center">
          <div className='select-none text-xl py-2  md:text-4xl font-extrabold'>
              Welcome to <span className='italic text-orange-500'>CGPA Calculator</span> 
          </div>
          <div className='select-none text-sm py-2 animate-pulse text-slate-700  md:text-2xl font-extrabold'>
              Empowering Your Academic Journey!
          </div>
      </div>
    </div>
  )
}
