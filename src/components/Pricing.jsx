import { CheckCircle2 } from "lucide-react";
import { priceOptions } from "../constants";

const Pricing = () => {
  return (
    <section id="pricing">
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap justify-center">
        {priceOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl h-full flex flex-col justify-between">
              <div>
                <p className="text-4xl font-semibold mb-4">{option.title}</p>
                <p className="text-2xl text-orange-500 font-bold mb-6">
                  {option.price}
                </p>
                <ul className="space-y-4 mb-8">
                  {option.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-neutral-300"
                    >
                      <CheckCircle2 className="text-green-500 w-5 h-5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5  pd-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200">
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Pricing;

