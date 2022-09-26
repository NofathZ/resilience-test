import { Link } from "react-router-dom";
import { Button, ButtonOutline } from "../components/Button/Button";
import Container from "../components/Container/Container";
import LayoutDefault from "../layouts/Default";

export default function Guide() {
  return (
    <LayoutDefault>
      <div style={{ paddingTop: "152px" }}>
        <Container>
          <p className="bold-head-2 text-system-black text-center mb-4">
            Baca panduan pengisiannya, yuk!
          </p>
          <ol className="regular-normal text-system-black list-decimal pl-6 mb-4">
            <li>
              Gak ada jawaban yang benar atau salah. Isilah dengan jujur sesuai
              kepribadianmu.
            </li>
            <li>Santai aja, tes ini gak diberi waktu, kok.</li>
            <li>
              Cari tempat yang nyaman dan kondusif supaya kamu lebih fokus.
            </li>
            <li>
              Bacalah setiap pertanyaan dengan cermat dan mengindikasikan
              pilihan yang terbaik bagimu.
            </li>
            <li>
              Mungkin ada beberapa pertanyaan yang menggambarkan situasi yang
              mungkin kamu rasa tidak relevan dengan kehidupan kamu. Dalam
              situasi seperti itu, pilihlah jawaban yang kemungkinan besar akan
              kamu pilih jika kamu pernah berada dalam situasi seperti itu.
            </li>
            <li>
              Hasil tes bisa kamu dapatkan setelah mengisi semua pertanyaan
              dengan lengkap.
            </li>
          </ol>
          <p className="bold-normal text-brand-accent1 mb-8">
            Perhatian! <br />
            Tes ini merupakan screening awal untuk mengetahui tingkat resiliensi
            anda. Tes ini bukan sebagai uji diagnostik yang menggantikan
            pemeriksaan dokter atau psikiater dalam menentukan derajat coping
            anda melainkan untuk mengetahui kecenderungan anda dalam beradaptasi
            untuk bangkit saat menghadapi situasi sulit.
          </p>

          <div className="flex justify-center items-center mt-16">
            <Link to={"/"}>
              <ButtonOutline minWidth="201px">Batal</ButtonOutline>
            </Link>
            <div className="mx-2"></div>
            <Link to={"/kuesioner"}>
              <Button>OK, Ikuti Tes</Button>
            </Link>
          </div>
        </Container>
      </div>
    </LayoutDefault>
  );
}
