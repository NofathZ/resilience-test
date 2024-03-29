import { useEffect } from "react";
import { Button } from "../components/Button/Button";
import style from "./Home.module.css";
import Container from "../components/Container/Container";
import { Link } from "react-router-dom";

import HomeDescImage from "../assets/home-desc.png";
import PencilGreenIcon from "../assets/icon/pencil-green.svg";
import ArrowTopIcon from "../assets/icon/arrow-top-red.svg";
import PersonIcon from "../assets/icon/person-yellow.svg";
import IkutiTesImage from "../assets/ikuti-tes.png";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center mb-10">
        <div
          className={`${style["head-rectangle"]} desktop:px-32 flex justify-center items-center pt-20 mobile:px-4`}
        >
          <div>
            <p className="medium-tiny text-brand-primary text-center mb-1">
              Adaptasi dari
            </p>
            <p className="medium-tiny text-brand-primary text-center mb-1">
              Nicholson McBride Resilience Questionnaire (NMRQ)
            </p>
            <div className="text-system-black text-center   mb-4">
              <span className={style["title"]}>Ketahui</span>
              <span className={style["title-2"]}>
                {" "}
                <b>Resiliensimu</b>{" "}
              </span>
              <span className={style["title"]}>Pahami Dirimu</span>
            </div>
            <p className="regular-normal text-center px-10 mb-12">
              Ikuti tes untuk mengetahui tingkat resiliensimu dan dapatkan saran
              menarik yang telah tervalidasi
            </p>
            <div className="flex justify-center items-center">
              <Link to={"/panduan"}>
                <Button>Ikuti Tes</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style["description-box"]} mb-10 mobile:px-4`}>
        <Container>
          <div className={`w-full ${style["description"]}`}>
            <img className="show-on-desktop-only" src={HomeDescImage} alt="" />
            <div className="show-on-mobile-only flex justify-center mb-6">
              <img width={282} src={HomeDescImage} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="bold-head-1 text-system-black mb-6">
                Apa itu Resiliensi?
              </p>
              <p className="regular-normal text-system-black mb-6">
                Resiliensi merupakan kemampuan menemukan cara untuk menghadapi
                suatu tekanan sehingga dapat beradaptasi dan bertahan dalam
                kondisi tersebut.
              </p>
              <p className="regular-normal text-system-black">
                Seseorang dengan resiliensi yang baik biasanya cenderung
                memiliki keyakian, rasa percaya terhadap diri sendiri serta
                orang lain, harapan, tujuan hidup, serta rencana masa depan yang
                diikuti ambisi positif untuk mampu bertahan di berbagai
                kesulitan.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div
        className={`w-full ${style["goals"]} bg-brand-secondary-tint mb-10 mobile:px-4`}
      >
        <Container>
          <div className={`${style["goals-desc"]} mb-10`}>
            <p className="bold-head-1 text-brand-secondary">Tes Resiliensi</p>
            <div>
              <p className="medium-normal text-system-black mb-2">
                <b>
                  Adaptasi Dari <br />
                  Nicholson McBride Resilience Questionnaire
                </b>
              </p>
              <p className="regular-normal text-system-black">
                Tes ini digunakan untuk mengetahui kecendrungan seseorang dalam
                beradaptasi untuk bangkit saat menghadapi situasi sulit.
              </p>
            </div>
          </div>
          <div className={`${style["goals-item"]}`}>
            <div
              className={`bg-system-white ${style["item"]} px-4 py-6 flex desktop:flex-col mobile:flex-row desktop:justify-center mobile:justify-start desktop:items-center mobile:items-start`}
            >
              <img className="mb-2 mobile:mr-4" src={PencilGreenIcon} alt="" />
              <div className="flex flex-col">
                <p className="bold-normal text-system-black desktop:text-center mobile:text-left mb-2">
                  Selesaikan Soal
                </p>
                <p className="regular-small text-system-black desktop:text-center mobile:text-left">
                  Isilah jawaban dibawah ini sesuai dengan kepribadianmu
                </p>
              </div>
            </div>
            <div
              className={`bg-system-white ${style["item"]} px-4 py-6 flex desktop:flex-col mobile:flex-row desktop:justify-center mobile:justify-start desktop:items-center mobile:items-start`}
            >
              <img className="mb-2 mobile:mr-4" src={PersonIcon} alt="" />
              <div className="flex flex-col">
                <p className="bold-normal text-system-black desktop:text-center mobile:text-left mb-2">
                  Dapatkan Hasil Tes
                </p>
                <p className="regular-small text-system-black desktop:text-center mobile:text-left">
                  Hasil tes berisi berisi tentang tingkat resiliensimu
                </p>
              </div>
            </div>
            <div
              className={`bg-system-white ${style["item"]} px-4 py-6 flex desktop:flex-col mobile:flex-row desktop:justify-center mobile:justify-start desktop:items-center mobile:items-start`}
            >
              <img className="mb-2 mobile:mr-4" src={ArrowTopIcon} alt="" />
              <div className="flex flex-col">
                <p className="bold-normal text-system-black desktop:text-center mobile:text-left mb-2">
                  Tingkatkan Resiliensimu
                </p>
                <p className="regular-small text-system-black desktop:text-center mobile:text-left">
                  Dapatkan saran pengembangan sesuai dengan hasil tes
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="py-10 mb-10">
        <Container>
          <div
            className={`${style["card"]} w-full bg-brand-primary-tint relative`}
          >
            <div>
              <p className="bold-head-1 text-system-black mb-6">
                Penasaran dengan tingkat resiliensi yang dimiliki?
              </p>
              <Link className="flex" to={"/panduan"}>
                <Button>Ikuti Tes</Button>
              </Link>
            </div>
            <img
              src={IkutiTesImage}
              alt=""
              className="absolute top-0 right-0 show-on-desktop-only"
            />
          </div>
        </Container>
      </div>
    </>
  );
}
