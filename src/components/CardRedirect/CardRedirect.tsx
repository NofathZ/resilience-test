import { Button } from "../Button/Button";
import style from "./CardRedirect.module.css";

import IkutiTesImage from '../../assets/ikuti-tes.png'

export default function CardRedirect() {
  return (
    <div className={`${style["card"]} w-full bg-brand-primary-tint relative`}>
      <div>
        <p className="bold-head-1 text-system-black mb-6">
          Penasaran dengan tingkat resiliensi yang dimiliki?
        </p>
        <Button>Ikuti Tes</Button>
      </div>
      <img src={IkutiTesImage} alt="" className="absolute top-0 right-0" />
    </div>
  );
}
