import { ReactNode } from "react";
import "./ButtonRadio.css";

interface ButtonType {
  qID: number;
  oID: string;
  children: ReactNode;
  qAnswer: Array<number>;
  setQAnswer: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function ButtonRadio({
  qID,
  oID,
  children,
  qAnswer,
  setQAnswer,
}: ButtonType) {
  const handleInput = () => {
    let answer = parseInt(oID.slice(-1));
    let qAnswerTemp = [...qAnswer];
    qAnswerTemp[qID] = answer;
    setQAnswer(qAnswerTemp)
  };

  return (
    <div>
      <input
        type="radio"
        name={qID.toString()}
        id={oID}
        className="absolute invisible"
        onChange={() => handleInput()}
      />
      <label htmlFor={oID}>
        <div
          className={`radio-button-outer bold-head-2 text-brand-primary flex justify-center items-center cursor-pointer`}
        >
          <div
            className={`${"radio-button-inner"} flex justify-center items-center`}
          >
            {children}
          </div>
        </div>
      </label>
    </div>
  );
}
