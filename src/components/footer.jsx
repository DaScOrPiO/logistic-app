import fedex from "../assets/images/fedex.png";
import amazon from "../assets/images/amazon.png";
import airbnb from "../assets/images/airbnb.png";
import dhl from "../assets/images/dhl.png";

export default function Footer() {
  return (
    <footer className="w-full flex px-6 py-4 justify-center items-center bg-blue-600">
      <div className="image-container w-full py-2 px-2 flex flex-wrap justify-evenly items-center">
        <span className="image-2 md:w-1/4 w-full">
          <img src={fedex} alt="" />
        </span>
        <span className="image-2 md:w-1/4 w-full">
          <img src={airbnb} alt="" />
        </span>
        <span className="image-2 md:w-1/4 w-full">
          <img src={amazon} alt="" />
        </span>
        <span className="image-2 md:w-1/4 w-full">
          <img src={dhl} alt="" />
        </span>
      </div>
    </footer>
  );
}
