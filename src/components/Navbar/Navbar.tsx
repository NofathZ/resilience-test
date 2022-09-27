import { useEffect, useState } from "react";

export function Navbar() {
  const style = {
    height: "88px",
    filter: "drop-shadow(0px 4px 15px rgba(55, 184, 136, 0.1))",
    transition: ".2s",
    boxShadow: "0px 4px 15px rgba(55, 184, 136, 0.1)",
    zIndex: "999",
  };

  return (
    <div
      className="w-full flex justify-center items-center bg-transparent"
      style={style}
    >
      <p className="extra-bold-head-3">Logo</p>
    </div>
  );
}

export function NavbarBGChanged() {
  const style = {
    height: "88px",
    filter: "drop-shadow(0px 4px 15px rgba(55, 184, 136, 0.1))",
    transition: ".2s",
    zIndex: "999",
  };

  useEffect(() => {
    window.addEventListener("scroll", () => changeBackground(), true);
  });

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
      className="w-full flex justify-center items-center bg-transparent top-0 fixed"
      style={{
        ...style,
        ...(changeBG && { backgroundColor: "black" }),
      }}
    >
      <p className="extra-bold-head-3">Logo</p>
    </div>
  );
}
