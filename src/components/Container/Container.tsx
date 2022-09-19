import { ReactNode } from "react";

const style = {
  maxWidth: "1120px",
  margin: "0 auto",
};

export default function Container({ children, className }: { children: ReactNode, className?: string }) {
  return <div className={`${className} w-full h-full m-5`} style={style}>{children}</div>;
}
