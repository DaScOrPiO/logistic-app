import { FaHome } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { FaSearchLocation } from "react-icons/fa";

export default function Homepage() {
  return (
    <div className="homepage-contents w-full">
      <header className="py-5 px-3 flex flex-col items-center justify-center">
        <div className="hero-image w-full h-full">
          <div className="text-container flex flex-col items-start justify-center md:w-3/4 h-full mt-8 ml-12 py-5">
            <h2 className="lg:text-6xl md:text-3xl text-gray-300">
              Empower Your Business With Better Logistics
            </h2>
            <p className="text-gray-300 md:text-xl mt-2">
              We Provide Quality Logistic Services Around The World
            </p>

            <div className="flex justify-center md:w-2/4 mt-2">
              <button className="px-4 py-2 bg-red-600 text-gray-300">
                GET STARTED
              </button>
            </div>
          </div>
        </div>

        <section className="card-section-1 w-full flex flex-col flex-wrap justify-center py-2 px-2">
          <div className="inner-content w-full flex justify-evenly items-center lg:flex-nowrap md:flex-wrap py-2 px-2">
            <div className="item-1 md:mr-3 shadow md:w-2/5 py-2 flex bg-gray-300 px-4">
              <span className="icon-element w-1/4 flex items-center">
                <MdAddCall size="40px" color="orange" />
              </span>

              <span>
                <h2 className="mb-4 text-2xl text-blue-900 border-b-4 border-orange-500">
                  Contact Us
                </h2>
                <p>Give us a call at (+234) 10 6483 92</p>
              </span>
            </div>

            <div className="item-2 md:mr-3 shadow md:w-2/5 py-2 flex bg-gray-300 px-4">
              <span className="icon-element w-1/4 flex items-center">
                <FaHome size="40px" color="orange" />
              </span>

              <span>
                <h2 className="mb-4 text-2xl text-blue-900 border-b-4 border-orange-500 f">
                  Contact Us
                </h2>
                <p>Pay us a visit at 11, Maryland Avenue, Ikeja</p>
              </span>
            </div>

            <div
              className="item-3 flex flex-col justify-center md:mr-3 shadow md:w-3/4
             px-4 py-2 bg-blue-700 text-gray-300"
            >
              <h2 className="mb-4 text-2xl">Trace & Track</h2>
              <div className="w-full flex">
                <label htmlFor="search-location" hidden></label>
                <input
                  type="text"
                  id="search-location"
                  placeholder="Enter Your Shipping ID here"
                  className="w-3/4"
                />
                <button
                  type="submit"
                  className="bg-orange-500 px-3 py-2 w-1/4 flex justify-center"
                >
                  <FaSearchLocation size="25px" color="white" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}
