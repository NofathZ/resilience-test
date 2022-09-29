import { ReactNode } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Default({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex flex-col justify-between"
      style={{ minHeight: "100vh" }}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
