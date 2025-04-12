import { TypeAnimation } from 'react-type-animation';
import user1 from "../image/portfolio_img1.jpg";
import user2 from "../image/portfolio_img2.jpg";

const Herosection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-center tracking-wide text-center">
        <TypeAnimation
          sequence={[
            "Virtual tech tools  for Developers", // The text to type
            1000,
            "Built by Doncrown",1000,
            "Virtual tech tools  for Developers", // The text to type
            1000,
             // Wait time after finishing
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity} // Only type once
          className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"
        />
      </h1>

      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ut aspernatur rerum sapiente, minus voluptate impedit numquam assumenda saepe reiciendis doloremque ea repellendus suscipit praesentium nemo hic inventore illum magni.
      </p>

      <div className="flex justify-center my-10">
        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">Start for free</a>
        <a href="#" className="py-3 px-4 rounded-md border">Documentation</a>
      </div>

      <div className="flex mt-10 justify-center">
        <img className="rounded-lg w-1/2 border-orange-700 shadow-orange-400 mx-2 my-4" src={user1} alt="image" />
        <img className="rounded-lg w-1/2 border-orange-700 shadow-orange-400 mx-2 my-4" src={user2} alt="image" />
      </div>
    </div>
  );
};

export default Herosection;
