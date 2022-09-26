import { ReactNode } from "react";
import Footer from "../components/Footer/Footer";
import { NavbarBGChanged } from "../components/Navbar/Navbar";

export default function BackgroundChange({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col justify-between" style={{ minHeight: "100vh" }}>
      <NavbarBGChanged />
      {children}
      <Footer />
    </div>
  );
}
