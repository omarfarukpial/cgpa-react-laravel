import calculationPic from '../assets/calculationPic.png'
export default function Hero1() {
  return (
    <div className="max-w-full flex flex-col md:flex-row ">
    <div className="flex-1 flex items-center justify-center">
        <img src={calculationPic} alt="Illustration" />
    </div>
    <div className="select-noneflex-1 flex flex-col items-center justify-center">
        <div className='select-none py-2 text-2xl md:text-4xl font-extrabold'>
            Welcome to <span className='italic text-orange-500'>CGPA Calculator</span> 
        </div>
        <div className='select-none py-2 animate-pulse text-slate-700 text-lg md:text-2xl font-extrabold'>
            Empowering Your Academic Journey!
        </div>
    </div>
    </div>
  )
}
