export default function Navbar() {
  return (
    <nav className="nav px-4 md:px-8 py-4 bg-slate-800  flex justify-between items-center rounded-lg">
        
        <a href={"/"}><div className="text-white text-xl md:text-2xl font-bold">CGPA Calculator</div></a>
        <div className="text-white">
          {/* <a  href="">GPA Calculator</a>
          <a href="">CGPA Calculator</a> */}
          <i className="fa-solid fa-user text-2xl"></i>
        </div>
    </nav>
  )
}