import { FcHome } from "react-icons/fc";
import { MdDeliveryDining } from "react-icons/md";
import { GiArchiveRegister } from "react-icons/gi";
import { VscSignIn } from "react-icons/vsc";
import { NavLink, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

export default function DesktoNav() {
  const itemsArray = [
    { icon: <FcHome size="30px" />, text: "Home", link: "/" },
    {
      icon: <GiArchiveRegister size="30px" />,
      text: "Book Delivery",
      link: "/book_delivery",
    },
    {
      icon: <MdDeliveryDining size="30px" />,
      text: "Deliver Item(s)",
      link: "/deliver_product",
    },
    { icon: <VscSignIn size="30px" />, text: "Sign/login", link: "/login" },
  ];

  const navContainerRef = useRef();
  const navigate = useNavigate();
  // const [showNav, setShowNav] = useState(false);

  const handleNavLinkClick = (link) => {
    navigate(link);
    // setShowNav(false);
  };

  return (
    <nav className="desktop-nav flex justify-center items-center shadow w-full" ref={navContainerRef}>
      <ul className="list-items flex items-center justify-center py-2 px-2 w-full">
        {itemsArray.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className="link flex mb-4 mx-4 justify-start items-center text-red-600"
            onClick={() => handleNavLinkClick(item.link)}
          >
            <span className="mx-2">{item.icon}</span>
            {item.text}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
