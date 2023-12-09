import { CiDeliveryTruck } from "react-icons/ci";
import { GiBattleship, GiAirplaneDeparture } from "react-icons/gi";
import { IoTrainSharp } from "react-icons/io5";
import { MdWarehouse } from "react-icons/md";
import { FaDropbox } from "react-icons/fa";
import { LuBike, LuPackageOpen } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Section3() {
  return (
    <section className="section-3 w-full px-6 py-4 flex flex-col items-center justify-center">
      <div className="section-contents w-full py-2 flex items-center justify-center flex-col">
        <div className="w-full text-center px-12">
          <h3 className="text-orange-500">Our Service</h3>
          <h1 className="text-xl text-blue-900">What we can do or you</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            natus facilis eaque laboriosam, explicabo est debitis nobis quas
            blanditiis exercitationem consequuntur id, unde recusandae nihil
            nostrum, similique labore laudantium! Pariatur.
          </p>
        </div>

        <section className="w-full flex flex-wrap mt-6 justify-center">
          <div className=" md:w-1/4 w-full mx-3 mt-3 px-2 py-3 shadow bg-gray-300">
            <div className="icon-container">
              <CiDeliveryTruck size="30px" className="text-orange-500" />
            </div>

            <div className="mt-2">
              <h6 className="text-blue-900 text-xl">Road Transport</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              </p>
            </div>

            <div>
              <Link to="#" className="text-orange-500 text-xl">
                Read More
              </Link>
            </div>
          </div>

          <div className=" md:w-1/4 w-full mx-3 mt-3 px-2 py-3 shadow bg-gray-300 flex flex-wrap">
            <div className="icon-container">
              <GiBattleship size="30px" className="text-orange-500" />
            </div>

            <div className="mt-2">
              <h6 className="text-blue-900 text-xl">Ocean Flight</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              </p>
            </div>

            <div>
              <Link to="#" className="text-orange-500 text-xl">
                Read More
              </Link>
            </div>
          </div>

          <div className="md:w-1/4 w-full mx-3 mt-3 px-2 py-3 shadow bg-gray-300 flex flex-wrap">
            <div className="icon-container">
              <GiAirplaneDeparture size="30px" className="text-orange-500" />
            </div>

            <div className="mt-2">
              <h6 className="text-blue-900 text-xl">Air Flight</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              </p>
            </div>

            <div>
              <Link to="#" className="text-orange-500 text-xl">
                Read More
              </Link>
            </div>
          </div>

          <div className="md:w-1/4 w-full mx-3 mt-3 px-2 py-3 shadow bg-gray-300 flex flex-wrap">
            <div className="icon-container">
              <IoTrainSharp size="30px" className="text-orange-500" />
            </div>

            <div className="mt-2">
              <h6 className="text-blue-900 text-xl">Rail Transport</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              </p>
            </div>

            <div>
              <Link to="#" className="text-orange-500 text-xl">
                Read More
              </Link>
            </div>
          </div>

          <div className="md:w-1/4 w-full mx-3 mt-3 px-2 py-3 shadow bg-gray-300 flex flex-wrap">
            <div className="icon-container">
              <MdWarehouse size="30px" className="text-orange-500" />
            </div>

            <div className="mt-2">
              <h6 className="text-blue-900 text-xl">Warehousing</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              </p>
            </div>

            <div>
              <Link to="#" className="text-orange-500 text-xl">
                Read More
              </Link>
            </div>
          </div>

          <div className="md:w-1/4 w-full mx-3 mt-3 px-2 py-3 shadow bg-gray-300 flex flex-wrap">
            <div className="icon-container">
              <LuBike size="30px" className="text-orange-500" />
            </div>

            <div className="mt-2">
              <h6 className="text-blue-900 text-xl">Home Delivery</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              </p>
            </div>

            <div>
              <Link to="#" className="text-orange-500 text-xl">
                Read More
              </Link>
            </div>
          </div>

          <div className="md:w-1/4 w-full mx-3 mt-3 px-2 py-3 shadow bg-gray-300 flex flex-wrap">
            <div className="icon-container">
              <LuPackageOpen size="30px" className="text-orange-500" />
            </div>

            <div className="mt-2">
              <h6 className="text-blue-900 text-xl">Packaging</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              </p>
            </div>

            <div>
              <Link to="#" className="text-orange-500 text-xl">
                Read More
              </Link>
            </div>
          </div>

          <div className="md:w-1/4 w-full mx-3 mt-3 px-2 py-3 shadow bg-gray-300 flex flex-wrap">
            <div className="icon-container">
              <FaDropbox size="30px" className="text-orange-500" />
            </div>

            <div className="mt-2">
              <h6 className="text-blue-900 text-xl">Express Shipping</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              </p>
            </div>

            <div>
              <Link to="#" className="text-orange-500 text-xl">
                Read More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
