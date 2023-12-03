import { GiWorld } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { IoBusinessOutline } from "react-icons/io5";

export default function Section2() {
  return (
    <section className="section-2 w-full flex justify-center items-center">
      <div className="w-full items-container flex justify-center items-center py-12 px-6">
        <div className="md:w-3/4 flex justify-center items-center">
          <div className="md:w-1/3 mr-4 flex justify-center items-center flex-col">
            <div className="icon w-full flex justify-center items-center flex-col">
              <span>
                <GiWorld size="30px" className="text-orange-500" />
              </span>
            </div>
            <h2 className="text-gray-300">88+</h2>
            <p className="text-gray-300">Countries Covered</p>
          </div>

          <div className="md:w-1/3 mr-4 flex justify-center items-center flex-col">
            <div className="icon w-full flex justify-center items-center flex-col">
              <span>
                <IoBusinessOutline size="30px" className="text-orange-500" />
              </span>
            </div>
            <h2 className="text-gray-300">259+</h2>
            <p className="text-gray-300">Offices Worldwide</p>
          </div>

          <div className="md:w-1/3 mr-4 flex justify-center items-center flex-col">
            <div className="icon w-full flex justify-center items-center flex-col">
              <span>
                <IoIosPeople size="30px" className="text-orange-500" />
              </span>
            </div>
            <h2 className="text-gray-300">57,080+</h2>
            <p className="text-gray-300">Clients Satisfied</p>
          </div>
        </div>
      </div>
    </section>
  );
}
