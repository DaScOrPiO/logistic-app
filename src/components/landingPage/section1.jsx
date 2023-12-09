import docks from "../../assets/images/docks.jpg";
import { TbWorldPin } from "react-icons/tb";
import { MdLocalShipping } from "react-icons/md";

export default function Section1() {
  return (
    <section className="section-1 lg:mt-20 w-full px-5">
      <div className="md:flex w-full px-4">
        <div className="image-container md:w-2/4 flex items-center">
          <img src={docks} alt="our loading docks" width="60%" height="40%" className="image" />
        </div>

        <div className="md:w-2/4 py-5 flex flex-col items-center">
          <h2 className="text-orange-500 text-xl">About Gargo</h2>
          <p className="text-2xl text-blue-900">
            Perfect Company With Perfct Solutions
          </p>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              voluptate soluta aliquam! Eligendi laboriosam illum corrupti
              maxime iure est? Atque asperiores quas harum voluptatibus ducimus
              soluta, odio libero velit illo.
            </p>
          </div>

          <div className="md:flex w-full">
            <div className="flex px-4 py-2">
              <span className="flex items-center mr-4">
                <TbWorldPin size="30px" className="text-orange-500" />
              </span>

              <span>
                <h2 className="text-xl text-blue-900">Worldwide Service</h2>
                <p>Get your item(s) delivered to you wherever you are.</p>
              </span>
            </div>

            <div className="flex px-4 py-2">
              <span className="flex items-center mr-4">
                <MdLocalShipping size="30px" className="text-orange-500" />
              </span>

              <span>
                <h2 className="text-xl text-blue-900">Local Service</h2>
                <p>Get your item(s) delivered to you locally.</p>
              </span>
            </div>
          </div>

          <div className="w-full flex justify-start">
            <button className="bg-red-600 px-4 py-2">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
