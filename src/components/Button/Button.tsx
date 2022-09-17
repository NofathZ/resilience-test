import { ReactNode } from "react";

const style = {
  paddingTop: "17px",
  paddingBottom: "17px",
  borderRadius: "10px",
};

function Button({ children }: { children: ReactNode }) {
  return (
    <div
      className="bg-brand-secondary text-system-white px-10 bold-normal cursor-pointer inline-block"
      style={style}
    >
      {children}
    </div>
  );
}

function ButtonDisabled({ children }: { children: ReactNode }) {
  return (
    <div
      className="bg-brand-secondary-tint text-system-white px-10 bold-normal cursor-pointer inline-block"
      style={style}
    >
      {children}
    </div>
  );
}

export { Button, ButtonDisabled };
