import { NavLink, useNavigate } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { MdDeliveryDining } from "react-icons/md";
import { GiArchiveRegister, GiHamburgerMenu } from "react-icons/gi";
import { VscSignIn } from "react-icons/vsc";
import { useState, useEffect, useRef } from "react";

export default function MobileNav() {
  const itemsArray = [
    { icon: <FcHome />, text: "Home", link: "/" },
    {
      icon: <GiArchiveRegister />,
      text: "Book Delivery",
      link: "/book_delivery",
    },
    {
      icon: <MdDeliveryDining />,
      text: "Deliver Item(s)",
      link: "/deliver_product",
    },
    { icon: <VscSignIn />, text: "Sign/login", link: "/login" },
  ];

  const [showNav, setShowNav] = useState(false);
  const navContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const closeNavOnOutsideClick = (event) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target)
      ) {
        setShowNav(false);
      }
    };

    document.addEventListener("click", closeNavOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeNavOnOutsideClick);
    };
  }, []);

  const handleNavLinkClick = (link) => {
    navigate(link);
    setShowNav(false);
  };

  return (
    <nav className="mobile-nav shadow w-full" ref={navContainerRef}>
      <div
        className="hamburger absolute right-0 z-10"
        onClick={() => setShowNav(!showNav)}
      >
        <GiHamburgerMenu size="30px" />
      </div>
      {showNav && (
        <ul className="list-items flex flex-col py-4 px-2 w-full">
          {itemsArray.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className="link flex mb-4 justify-start items-center py-4 px-2 text-red-600 shadow"
              onClick={() => handleNavLinkClick(item.link)}
            >
              <span className="mx-2">{item.icon}</span>
              {item.text}
            </NavLink>
          ))}
        </ul>
      )}
    </nav>
  );
}
