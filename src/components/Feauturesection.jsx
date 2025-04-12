 import { features } from "../constants";
 const Feauturesection = () => {
  return (
    <section id="features">
    <div className="relative mt-20 border-b borer-neutral-800 min-h-[800px]">
        <div className="text-center">
            <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">feature</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide">Easily build <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">{""} your code</span></h2>
        </div>
        <div className="flex flex-wrap  mt-10 lg:mt-20">
         {features.map((Items, index)=>(
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 ">
               <div className="text-3xl mb-4 text-orange-500 py-2">{Items.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{Items.title}</h3>
            <p className="text-sm text-neutral-400 px-2">{Items.description}</p>
            </div>
         ))}
        </div>
    </div>
    </section>
  )
}
export default Feauturesection;