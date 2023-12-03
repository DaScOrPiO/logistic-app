import { useState } from "react";
import DesktoNav from "./desktoNav";
import MobileNav from "./mobileNav";
import { useEffect } from "react";

export default function Navigation() {
  const [DeviceWidth] = useState(window.innerWidth);
  const [isSmallDevice, SetIsSmallDevice] = useState(false);

  useEffect(() => {
    if (DeviceWidth <= 767) {
      SetIsSmallDevice(true);
    } else {
      SetIsSmallDevice(false);
    }
  }, [DeviceWidth]);

  return (
    <div className="navigation-container">
      {isSmallDevice ? <MobileNav /> : <DesktoNav />}
    </div>
  );
}
