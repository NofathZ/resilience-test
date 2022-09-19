import { Link } from "react-router-dom";
import { Button, ButtonOutline } from "../Button/Button";
import style from "./Modal.module.css";

export default function Modal({
  show,
  setShow,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`flex fixed justify-center ${show && style["modal-bg"]}`}
      style={{ top: "0", left: "0", right: "0" }}
    >
      <div
        className={`${style["modal-box"]} bg-system-white p-8 fixed ${
          show && style["modal-show"]
        }`}
        style={{ width: "940px", borderRadius: "20px" }}
      >
        <p className="bold-head-2 text-system-black text-center mb-4">
          Baca panduan pengisiannya, yuk!
        </p>
        <ol className="regular-normal text-system-black list-decimal pl-6 mb-4">
          <li>
            Gak ada jawaban yang benar atau salah. Isilah dengan jujur sesuai
            kepribadianmu.
          </li>
          <li>Santai aja, tes ini gak diberi waktu, kok.</li>
          <li>Cari tempat yang nyaman dan kondusif supaya kamu lebih fokus.</li>
          <li>
            Bacalah setiap pertanyaan dengan cermat dan mengindikasikan pilihan
            yang terbaik bagimu.
          </li>
          <li>
            Mungkin ada beberapa pertanyaan yang menggambarkan situasi yang
            mungkin kamu rasa tidak relevan dengan kehidupan kamu. Dalam situasi
            seperti itu, pilihlah jawaban yang kemungkinan besar akan kamu pilih
            jika kamu pernah berada dalam situasi seperti itu.
          </li>
          <li>
            Hasil tes bisa kamu dapatkan setelah mengisi semua pertanyaan dengan
            lengkap.
          </li>
        </ol>
        <p className="bold-normal text-brand-accent1 mb-8">
          Tes ini bukan sebagai alat uji diagnostik dalam menentukan kondisi
          mental seseorang, melainkan berguna untuk mengetahui kecendrungan
          seseorang dalam beradaptasi untuk bangkit saat menghadapi situasi
          sulit.
        </p>

        <div className="flex justify-center items-center">
          <ButtonOutline onClick={() => setShow(false)}>Batal</ButtonOutline>
          <div className="mx-2"></div>
          <Link to={"/kuesioner"}>
            <Button>OK, Ikuti Tes</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
