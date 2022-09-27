import ButtonRadio from "../Button/ButtonRadio";

export default function Question({
  qID,
  qText,
  qAnswer,
  setQAnswer,
}: {
  qID: number;
  qText: string;
  qAnswer: Array<number>;
  setQAnswer: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  return (
    <div style={{ marginBottom: newFunction() }}>
      <p className="bold-head-3 text-system-black text-center mb-4">{qText}</p>
      <div className="flex justify-between items-center">
        <p className="regular-tiny text-system-black text-right show-on-desktop-only">
          Sangat <br />
          Tidak Setuju
        </p>
        <ButtonRadio
          qID={qID}
          oID={`${qID}1`}
          qAnswer={qAnswer}
          setQAnswer={setQAnswer}
        >
          1
        </ButtonRadio>
        <ButtonRadio
          qID={qID}
          oID={`${qID}2`}
          qAnswer={qAnswer}
          setQAnswer={setQAnswer}
        >
          2
        </ButtonRadio>
        <ButtonRadio
          qID={qID}
          oID={`${qID}3`}
          qAnswer={qAnswer}
          setQAnswer={setQAnswer}
        >
          3
        </ButtonRadio>
        <ButtonRadio
          qID={qID}
          oID={`${qID}4`}
          qAnswer={qAnswer}
          setQAnswer={setQAnswer}
        >
          4
        </ButtonRadio>
        <ButtonRadio
          qID={qID}
          oID={`${qID}5`}
          qAnswer={qAnswer}
          setQAnswer={setQAnswer}
        >
          5
        </ButtonRadio>
        <p className="regular-tiny text-system-black text-left show-on-desktop-only">
          Sangat Setuju
        </p>
      </div>
      <div className="flex justify-between items-center show-on-mobile-only">
        <p className="regular-tiny text-system-black text-center">
          Sangat <br />
          Tidak Setuju
        </p>
        <p className="regular-tiny text-system-black text-center">
          Sangat <br />
          Setuju
        </p>
      </div>
    </div>
  );
}
function newFunction() {
  return "53px";
}
