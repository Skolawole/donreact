import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Feauturesection from "./components/Feauturesection";
import Workflow from "./components/workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footersection from "./components/Footersection";
const App = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6"> <Herosection/>
    <Feauturesection/>
    <Workflow/>
    <Pricing/>
    <Testimonials/>
    <Footersection/>
    </div>

   
    </>
  )
}

export default App