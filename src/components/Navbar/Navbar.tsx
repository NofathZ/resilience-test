import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import ResilienceTestLogo from "../../assets/rt-logo.png";

const LogoStyle = {
  height: "50px",
  width: "auto",
};

const style = {
  height: "88px",
  filter: "drop-shadow(0px 4px 15px rgba(55, 184, 136, 0.1))",
  boxShadow: "0px 4px 15px rgba(55, 184, 136, 0.1)",
  transition: ".2s",
  zIndex: "999",
};

export default function NavbarBGChanged() {
  const location = useLocation();

  useEffect(() => {
    if (window.location.pathname === "/") {
      setUseBGChange(true)
      window.addEventListener("scroll", () => changeBackground(), true);
    }
    else {
      setUseBGChange(false)
      setChangeBG(true)
    }
  }, [location]);

  const [useBGChange, setUseBGChange] = useState(true);
  const [changeBG, setChangeBG] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 88) {
      setChangeBG(true);
    } else {
      setChangeBG(false);
    }
  };

  return (
    <div
      className={`w-full flex justify-center items-center bg-transparent ${useBGChange && "top-0 fixed"}`}
      style={{
        ...style,
        ...(changeBG && { backgroundColor: "#F3F4F6" }),
      }}
    >
      <Link to={"/"}>
        <img className="cursor-pointer" src={ResilienceTestLogo} style={LogoStyle} alt="" />
      </Link>
    </div>
  );
}
