import Container from "../components/Container/Container";
import LayoutDefault from "../layouts/Default";
import style from "./Questionnaire.module.css";
import homeStyle from "./Home.module.css";
import { useEffect, useState } from "react";
import { Button, ButtonDisabled } from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

import PencilGreenIcon from "../assets/icon/pencil-green.svg";
import ArrowTopIcon from "../assets/icon/arrow-top-red.svg";
import PersonIcon from "../assets/icon/person-yellow.svg";
import Question from "../components/Question/Question";

export default function Questionnaire() {
  let navigate = useNavigate();

  const [questionData] = useState([
    "Dalam situasi sulit, saya langsung beralih ke apa yang bisa saya lakukan untuk memperbaiki keadaan",
    "Saya bertindak semampu saya, daripada mengkhawatirkan apa yang tidak dapat saya lakukan",
    "Saya tidak mengambil hati sebuah kritikan",
    "Saya biasanya mampu melihat sesuatu dari segala sudut pandang",
    "Saya bisa tenang ketika menghadapi situasi yang gawat",
    "Saya pandai dalam menemukan solusi untuk suatu masalah",
    "Saya bukanlah sosok pencemas",
    "Saya cenderung tidak lari dari masalah",
    "Saya mecoba untuk mengontrol situasi/keadaan daripada menjadi korban suatu kejadian",
    "Saya memercayai intuisi/naluri saya",
    "Saya mengelola tingkat stress saya dengan baik",
    "Saya merasa percaya diri dan aman di posisi saya",
  ]);

  const [questionAnswer, setQuestionAnswer] = useState<number[]>(
    Array.apply(null, Array(questionData.length)).map(
      Number.prototype.valueOf,
      0
    )
  );

  const [buttonStatus, setButtonStatus] = useState<boolean>(false);

  const [scoreCat] = useState([
    {
      scoreMin: 0,
      scoreMax: 37,
      category: "developing",
    },
    {
      scoreMin: 38,
      scoreMax: 43,
      category: "established",
    },
    { scoreMin: 44, scoreMax: 48, category: "strong" },
    {
      scoreMin: 49,
      scoreMax: 60,
      category: "exceptional",
    },
  ]);

  useEffect(() => {
    if (!questionAnswer.includes(0)) {
      setButtonStatus(true);
    }
  }, [questionAnswer]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const setScore = () => {
    let totalScore = questionAnswer.reduce((acc, curr) => acc + curr, 0);
    console.log(totalScore);

    let cat = scoreCat.find(
      (score) => totalScore >= score.scoreMin && totalScore <= score.scoreMax
    );

    return navigate(`/hasil/${cat?.category}`)
  };

  return (
    <LayoutDefault>
      <div className={`w-full bg-brand-secondary-tint ${style["header"]}`}>
        <p className={`${style["text"]} text-system-black text-center`}>
          Tes Resiliensi
        </p>
        <p className="regular-normal text-center">
          Adaptasi Dari Nicholson McBride Resilience Questionnaire
        </p>
      </div>
      <Container>
        <div
          className={`${homeStyle["goals-item"]} relative`}
          style={{ top: "-120px" }}
        >
          <div
            className={`bg-system-white ${homeStyle["item"]} px-4 py-6 flex flex-col justify-center items-center`}
          >
            <img className="mb-2" src={PencilGreenIcon} alt="" />
            <p className="bold-normal text-system-black text-center mb-2">
              Selesaikan Soal
            </p>
            <p className="regular-small text-system-black text-center">
              Isilah jawaban dibawah ini sesuai dengan kepribadianmu
            </p>
          </div>
          <div
            className={`bg-system-white ${homeStyle["item"]} px-4 py-6 flex flex-col justify-center items-center`}
          >
            <img className="mb-2" src={PersonIcon} alt="" />
            <p className="bold-normal text-system-black text-center mb-2">
              Dapatkan Hasil Tes
            </p>
            <p className="regular-small text-system-black text-center">
              Hasil tes berisi berisi tentang tingkat resiliensimu
            </p>
          </div>
          <div
            className={`bg-system-white ${homeStyle["item"]} px-4 py-6 flex flex-col justify-center items-center`}
          >
            <img className="mb-2" src={ArrowTopIcon} alt="" />
            <p className="bold-normal text-system-black text-center mb-2">
              Tingkatkan Resiliensimu
            </p>
            <p className="regular-small text-system-black text-center">
              Dapatkan saran pengembangan sesuai dengan hasil tes
            </p>
          </div>
        </div>
      </Container>
      <div style={{ marginBottom: "72px" }}>
        <Container>
          <div className="mx-auto" style={{ maxWidth: "860px" }}>
            {questionData.map((question, idx) => (
              <Question
                key={idx}
                qID={idx}
                qText={question}
                qAnswer={questionAnswer}
                setQAnswer={setQuestionAnswer}
              />
            ))}
            <div className="flex justify-center items-center">
              {buttonStatus ? (
                <Button onClick={() => setScore()}>Simpan Jawaban</Button>
              ) : (
                <ButtonDisabled>Simpan Jawaban</ButtonDisabled>
              )}
            </div>
          </div>
        </Container>
      </div>
    </LayoutDefault>
  );
}
