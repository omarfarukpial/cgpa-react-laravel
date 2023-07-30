import Footer from "./Footer";
import Navbar from "./navbar";
import Home from "./pages/Home";

export default function Layout() {
  return (
    <div className=" max-w-7xl p-3 mx-auto">
        <Navbar/>
        <Home/>
        <Footer/>
    </div>
    
  )
}
