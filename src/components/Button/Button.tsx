import { ReactNode } from "react";
import style from "./Button.module.css";

import WhatsappLogo from "../../assets/icon/whatsapp.png";

function Button({
  children,
  onClick,
  minWidth,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  minWidth?: string;
  className?: string;
}) {
  return (
    <div
      onClick={onClick}
      className={`bg-brand-secondary text-system-white px-10 bold-normal cursor-pointer inline-block ${style["button"]} ${style["button-default"]} flex justify-center items-center ${className}`}
      style={{
        minWidth: minWidth,
      }}
    >
      {children}
    </div>
  );
}

function ButtonDisabled({ children }: { children: ReactNode }) {
  return (
    <div
      className={`bg-brand-secondary-tint text-system-white px-10 bold-normal cursor-default inline-block ${style["button"]}`}
    >
      {children}
    </div>
  );
}

function ButtonWhatsapp({
  children,
  redirectTo,
}: {
  children: ReactNode;
  redirectTo: string;
}) {
  return (
    <a
      className="cursor-pointer"
      target="_blank"
      href={redirectTo}
      rel="noreferrer"
    >
      <div
        className={`bg-brand-primary text-system-white px-10 bold-normal inline-block ${style["button"]}`}
      >
        <div className="w-full h-full flex justify-center items-center">
          <span>
            <img
              className="float-left mr-3"
              src={WhatsappLogo}
              width={24}
              height={24}
              alt=""
            />
          </span>
          <div>{children}</div>
        </div>
      </div>
    </a>
  );
}

function ButtonOutline({
  children,
  onClick,
  minWidth,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  minWidth?: string;
  className?: string;
}) {
  return (
    <div
      onClick={onClick}
      className={`text-center bg-brand-secondary-tint text-brand-secondary px-10 bold-normal cursor-pointer inline-block ${style["button"]} ${style["button-outline"]} ${className}`}
      style={{
        minWidth: minWidth,
      }}
    >
      {children}
    </div>
  );
}

export { Button, ButtonDisabled, ButtonWhatsapp, ButtonOutline };
