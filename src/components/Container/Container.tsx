import { ReactNode } from "react";

const style = {
  maxWidth: "1120px",
  margin: "0 auto",
};

export default function Container({ children }: { children: ReactNode }) {
  return <div className="w-full h-full" style={style}>{children}</div>;
}
