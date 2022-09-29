import style from "./Result.module.css";
import { useState, useEffect } from "react";
import Container from "../components/Container/Container";
import { ButtonWhatsapp } from "../components/Button/Button";
import { useParams } from "react-router-dom";

import ResultHeadImage from "../assets/result-head.png";
import TanyaAhliImage from "../assets/tanya-ahli.png";

export default function Result() {
  const { type } = useParams();

  const [scoreDesc] = useState([
    {
      category: "Developing",
      description:
        "Anda merupakan seseorang yang tidak ingin dikasihani saat mengalami kesulitan dan masih menunjukkan rasa ingin bangkit serta menghadapi masalah yang anda alami.",
    },
    {
      category: "Established",
      description:
        "Pada level ini anda dapat mengalami stres saat berada di situasi yang sulit. Namun saat mengalami stres, anda tidak mudah menyerah dan mencoba untuk bangkit dalam menghadapi permasalahan yang anda alami.",
    },
    {
      category: "Strong",
      description:
        "Memiliki resilient coping cukup baik dan dalam situasi sulit, anda juga mudah mengubah kesulitan menjadi peluang.",
    },
    {
      category: "Exceptional",
      description:
        "Level ini merupakan level resilient coping tertinggi yang berarti anda memiliki ketahanan yang sangat baik dan pada level ini anda selalu bangkit meskipun mengalami berbagai kesulitan dalam hidup.",
    },
  ]);

  const [showSolution, setShowSolution] = useState(0);
  const [solutions] = useState([
    {
      key: "Punya Gambaran Kesuksesan",
      value: (
        <div>
          <p className="bold-normal text-system-black mb-2">
            <span className="show-on-mobile-only">1. </span>
            Punya Gambaran Kesuksesan
          </p>
          <p className="regular-small text-system-black text-justify mb-8">
            Orang yang tangguh mempunyai visi kesuksesan mereka sendiri. ini
            membantu mereka mencapai tujuan mereka dengan memberikan pemahaman
            yang jelas tentang tujuan yang ingin mereka capai. Orang yang
            tangguh cenderung memaksimalkan waktu yang ia miliki untuk mencapai
            visi yang telah mereka tetapkan.
          </p>
          <p className="regular-small text-system-black text-justify">
            Visi yang dibuat harus bulat dan terencana dengan baik sehingga
            tidak membuang waktu untuk mimpi yang tidak mungkin atau mendambakan
            hal-hal yang tidak akan pernah mereka miliki.
          </p>
        </div>
      ),
    },
    {
      key: "Meningkatkan value diri",
      value: (
        <div>
          <p className="bold-normal text-system-black mb-2">
            <span className="show-on-mobile-only">2. </span>
            Meningkatkan value diri
          </p>
          <p className="regular-small text-system-black text-justify">
            Beberapa orang secara alami diberkahi dengan harga diri yang tinggi.
            Sedangkan yang lainnya perlu berupaya. Cara meningkatkan harga diri
            adalah dengan memahami harga diri itu berasal dan apa yang membuat
            seseorang merasa lebih baik dengan dirinya sendiri. Ceklis dibawah
            ini mungkin dapat membantu.
          </p>
          <ol className="regular-small text-system-black text-justify list-decimal pl-5">
            <li>Identifikasi apa yang anda kuasai.</li>
            <li>Ingatkan diri anda tentang hal-hal ini secara teratur.</li>
            <li>Kenali apa yang orang lain apresiasi tentang anda.</li>
            <li>Biarkan orang lain memuji anda.</li>
            <li>
              Saat sesuatu menjadi buruk, hindari menyalahkan diri sendiri.
            </li>
            <li>Jangan bandingkan dirimu dengan orang lain.</li>
            <li>
              Ikut merasa senang saat segala sesuatunya berjalan dengan baik
              kepada orang lain.
            </li>
            <li>
              Nikmati ketika sesuatu berjalan lebih baik dari yang anda
              harapkan.
            </li>
            <li>Memuji diri sendiri.</li>
          </ol>
        </div>
      ),
    },
    {
      key: "Meningkatkan dan mengendalikan keberhasilan dalam hidup",
      value: (
        <div>
          <p className="bold-normal text-system-black mb-2">
            <span className="show-on-mobile-only">3. </span>
            Meningkatkan dan mengendalikan keberhasilan dalam hidup
          </p>
          <p className="regular-small text-system-black text-justify mb-8">
            Seseorang yang memiliki resiliensi baik merupakan orang yang
            tangguh. Mereka dapat percaya pada diri sendiri bahwa mereka itu
            berbeda dan dapat mencapai keberhasilan dalam hidup. Sementara
            seseorang dengan resiliensi yang kurang baik cenderung tidak
            tangguh, mereka menderita karena hambatan dari pikiran mereka
            sendiri.
          </p>
          <p className="regular-small text-system-black text-justify">
            Berikut merupakan pikiran-pikiran yang kerap mengambat anda untuk
            bangkit kembali dari suatu permasalahan:
          </p>
          <ul className="regular-small text-system-black text-justify list-disc pl-5">
            <li className="mb-5">
              “Saya korban dalam pemasalahan di hidup saya”
              <br />
              Anda selalu memposisikan diri anda sebagai korban. Walaupun
              masalah tersebut telah berdampak kurang baik pada masa lalu
              ataupun kehidupan anda saat ini, tetap saja hal itu tidak bisa
              dijadikan alasan untuk tidak mengembangkan diri anda lebih baik
              lagi sekarang maupun di masa mendatang.
            </li>
            <li className="mb-5">
              “Saya merasa tidak pantas memulai banyak hal”
              <br />
              Anda terlalu banyak berpikir daripada melakuakan aksi. Akibatnya,
              anda menjadi sulit menyadari bahwa begitu banyak hal yang harus
              dilakukan sehingga anda tidak tahu harus memulai sesuatu dari
              mana. Menurut psikolog, hal tersebut merupakan ‘agglomeration’,
              yaitu seseorang merasa kewalahan terhadap beban masalah yang
              rumit. Hal pertama yang mesti anda lakukan adalah segera pecahkan
              masalah, kemudian tetapkan prioritas, selanjutnya mulailah
              melakuakan hal yang telah anda prioritaskan dalam memecahkan
              masalah tersebut terlebih dahulu.
            </li>
            <li className="mb-5">
              “Aku serahkan pada diri sendiri”
              <br />
              Memang akan lebih mudah jika percaya ada diri sendiri, berpikir
              bahwa hanya anda yang menderita atau dirugikan dalam masalah ini,
              juga merasa anda harus menghadapi permasalahan ini sendirian.
              Namun anda perlu untuk berdiskusi atau bercerita dengan
              orang-orang yang anda rasa nyaman atau anda percaya. Dengan begitu
              anda akan menjadi lebih baik dalam menyelesaikan permasalahan
              tersebut. Sharing bukanlan tanda kelemahan, melainkan sumber
              kekuatan anda dalam berjuang menghadapi masalah.
            </li>
            <li className="mb-5">
              “Hal ini tidak adil”
              <br />
              Menurut ahli, pelaku kejahatan sembuh lebih cepat daripada
              korbannya. Umumnya, jika Anda yakin bahwa Anda telah berkontribusi
              pada suatu masalah, Anda mungkin merasa lebih termotivasi untuk
              menyelesaikannya. Jika Anda menyalahkan diri Anda sendiri, anda
              akan malah lebih memikirkan ketidakadilan suatu permasalahan
              tersebut daripada melakukan apa yang bisa anda lakukan.
            </li>
          </ul>
          <p className="regular-small text-system-black text-justify">
            Kenalilah hal ini jika anda tengah memiliki pemikiran negatif,
            segera renungkan dan kontrol kembali sehingga anda dapat
            mengembalikan pikiran positif.
          </p>
        </div>
      ),
    },
    {
      key: "Lebih Optimis",
      value: (
        <div>
          <p className="bold-normal text-system-black mb-2">
            <span className="show-on-mobile-only">4. </span>
            Lebih Optimis
          </p>
          <p className="regular-small text-system-black text-justify">
            Optimis adalah salah satu karakteristik yang paling penting dari
            orang yang tangguh. Penting bagi seseorang untuk dapat melihat sisi
            baik dari suatu kejadian, memiliki kepercayaan diri dengan
            kemampuannya, menyelamatkan apa yang bisa dilakukan saat dihadapkan
            dengan situasi yang problematik.
          </p>
        </div>
      ),
    },
    {
      key: "Mengelola Stress",
      value: (
        <div>
          <p className="bold-normal text-system-black mb-2">
            <span className="show-on-mobile-only">5. </span>
            Mengelola Stress
          </p>
          <p className="regular-small text-system-black text-justify mb-8">
            Stress merupakan bagian dari kehiduan kita. Ketika tubuh merasakan
            ancaman (atau stresor), tubuh akan menjadi sangat waspada, dan
            begitu ancaman itu berlalu, tubuh dengan cepat pulih. Setidaknya
            begitulah cara kerjanya. Stresor dapat mencakup masalah kesehatan,
            pekerjaan, uang, masalah keluarga, rasisme atau ketidaksetaraan
            gender, dan kegiatan rutin sehari-hari. Dengan stres yang tak
            henti-hentinya atau terlalu banyak, tubuh Anda mungkin berada dalam
            keadaan siaga tinggi yang konstan, yang menyebabkan konsentrasi yang
            buruk, suasana hati yang buruk, kelelahan, dan masalah kesehatan
            mental dan fisik.
          </p>
          <p className="regular-small text-system-black text-justify">
            Ketika stres menjadi kronis, tubuh tidak dapat kembali berfungsi
            normal. Stres kronis dapat dikaitkan dengan kondisi kesehatan
            seperti penyakit jantung, tekanan darah tinggi, diabetes, depresi,
            dan kecemasan. Untuk mencegah hal tersebut, ada beberapa hal yang
            bisa dilakukan untuk mengatasi stress :
          </p>
          <ol className="regular-small text-system-black text-justify list-decimal pl-5">
            <li>Kenali dan lawan tanda-tanda stress.</li>
            <li>Luangkan waktu untuk diri sendiri.</li>
            <li>Coba rutinitas/hal baru.</li>
            <li>Tetap berkomunikasi dengan orang lain.</li>
            <li>Lihat masalah dari sudut pandang yang berbeda.</li>
            <li>Mencari bantuan apabila masalah tidak teratasi.</li>
            <li>
              Segera menghubungi tenaga kesehatan jika stress mempengaruhi
              kesejahteraan anda dan anda tidak mampu mengatasinya.
            </li>
          </ol>
        </div>
      ),
    },
    {
      key: "Meningkatkan Kemampuan Pengambilan Keputusan",
      value: (
        <div>
          <p className="bold-normal text-system-black mb-2">
            <span className="show-on-mobile-only">6. </span>
            Meningkatkan Kemampuan Pengambilan Keputusan
          </p>
          <p className="regular-small text-system-black text-justify">
            Resiliensi mengharuskan Anda untuk membuat keputusan daripada
            menghindarinya. Orang yang tangguh mempercayai penilaian mereka
            sendiri, tetapi tidak takut pula untuk menantang pikiran mereka.
            Mereka tahu bahwa memahami pendekatan pengambilan keputusan adalah
            langkah penting untuk membangun resiliensi. Untuk orang yang
            memiliki resiliensi yang baik akan memanfaatkan pengalaman dalam
            pengambilan keputusan, memperhatikan keuntungan dan kerugian pada
            setiap pilihan, mengantisipasi hasil terburuk, dan selalu meminta
            pendapat orang yang lebih ahli sebelum memutuskan sebuah keputusan.
          </p>
        </div>
      ),
    },
    {
      key: "Minta Bantuan",
      value: (
        <div>
          <p className="bold-normal text-system-black mb-2">
            <span className="show-on-mobile-only">7. </span>
            Minta Bantuan
          </p>
          <p className="regular-small text-system-black text-justify">
            Dalam menghadapi suatu masalah, Anda tidak boleh merasa sendirian.
            Seseorang yang tangguh tahu kapan waktunya meminta bantuan orang
            lain dan siapa yang terbaik untuk dipercayai. Apabila anda sedang
            menghadapi suatu masalah, mintalah bantuan kepada orang terdekat
            anda yang anda percayai.
          </p>
        </div>
      ),
    },
    {
      key: "Menghadapi Konflik",
      value: (
        <div>
          <p className="bold-normal text-system-black mb-2">
            <span className="show-on-mobile-only">8. </span>
            Menghadapi Konflik
          </p>
          <p className="regular-small text-system-black text-justify">
            Konflik terjadi saat pandangan anda berbeda dengan orang lain,
            sehingga anda harus menghadapi konflik setiap hari. Konflik akan
            selalu ada dan anda harus menghadapinya. Kemampuan untuk
            menanganinya secara terstruktur adalah bagian penting dari
            resiliensi yaitu untuk memastikan teknik penyelesaian masalah yang
            sesuai mengingat sifat konflik dan keterlibatan pihak lain.{" "}
          </p>
        </div>
      ),
    },
    {
      key: "Belajar dari Pengalaman",
      value: (
        <div>
          <p className="bold-normal text-system-black mb-2">
            <span className="show-on-mobile-only">9. </span>
            Belajar dari Pengalaman
          </p>
          <p className="regular-small text-system-black text-justify">
            Berpikirlah dengan bijak mengenai pelajaran apa yang anda dapatkan
            dari pengalaman anda, dan tingkatkan kemampuan dalam membentuk
            resiliensi yang baik. Temukan cara belajar yang banyak anda dapatkan
            dalam pengalaman hidup anda sendiri.
          </p>
        </div>
      ),
    },
    {
      key: "Menjadi Diri Sendiri",
      value: (
        <div>
          <p className="bold-normal text-system-black mb-2">
            <span className="show-on-mobile-only">10. </span>
            Menjadi Diri Sendiri
          </p>
          <p className="regular-small text-system-black text-justify">
            Yang paling penting, Resilient adalah sesuatu yang dinamis. Hal ini
            dapat berubah tergantung dari diri kita masing-masing. Salah satu
            cara untuk meningkatkan resilient adalah dengan menjadi diri
            sendiri. Menjadi diri sendiri dimulai dengan mengetahui kekurangan
            kita dan berdamai dengan hal tersebut karena ada banyak kelebihan
            yang bisa kita kembangkan. Selain itu yang perlu diketahui adalah
            satu-satunya orang yang dapat mengontrol kita adalah diri kita
            sendiri. Mulailah belajar untuk mengembangkan potensi diri,
            ekspresikan diri anda dengan tetap berpedoman pada nilai dan norma
            yang ada.
          </p>
        </div>
      ),
    },
  ]);

  const [showSolutionsMobile, setShowSolutionMobile] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <div className={`w-full ${style["header"]} flex mb-16 mobile:px-4`}>
          <img className="show-on-desktop-only" src={ResultHeadImage} alt="" />
          <div className="flex flex-col justify-center">
            <p className="medium-normal text-brand-primary">
              <b>Hasil Tes Kamu</b>
            </p>
            {scoreDesc.map(
              (desc) =>
                desc.category.toLowerCase() === type && (
                  <div key={desc.category}>
                    <p
                      className={`${style["cat-title"]} text-system-black mb-4`}
                    >
                      {desc.category} Level
                    </p>
                    <p className="regular-normal text-system-black text-justify">
                      {desc.description}
                    </p>
                  </div>
                )
            )}
          </div>
        </div>
      </Container>
      <Container>
        <div
          className={`bold-head-1 text-system-black text-center mb-10 mobile:px-4`}
        >
          10 Cara yang dapat{" "}
          <span className="text-brand-secondary">membuat kamu</span> untuk{" "}
          <span className="text-brand-secondary">
            lebih tangguh hadapi permasalahan
          </span>
        </div>
      </Container>
      <Container>
        <div className={`${style["solutions"]} mobile:px-4`}>
          <div className="pr-16 show-on-desktop-only">
            {solutions.map((solution, idx) => (
              <div
                className={`${
                  showSolution === idx
                    ? "bold-normal text-brand-secondary"
                    : "regular-normal text-system-black"
                } mb-6 cursor-pointer`}
                key={idx}
                onClick={() => setShowSolution(idx)}
              >
                <div className="flex">
                  <span className="mr-4">{idx + 1}.</span>
                  <span>{solution.key}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="show-on-desktop-only">
            {solutions[showSolution].value}
          </div>
          <div className="mb-6 show-on-mobile-only">
            {solutions[showSolutionsMobile * 2 - 1 - 1].value}
          </div>
          <div className="mb-6 show-on-mobile-only">
            {solutions[showSolutionsMobile * 2 - 1].value}
          </div>
        </div>
        <div className="mobile:px-4 flex justify-between items-center show-on-mobile-only mt-10">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() =>
              setShowSolutionMobile((prev) => {
                if (prev - 1 > 0) return prev - 1;
                return prev;
              })
            }
          >
            <path
              d="M17 4L9 12L17 20"
              stroke="#323232"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <>
            {Array.apply(null, Array(5)).map((x, idx) => {
              return (
                <button
                  key={idx}
                  className={`bold-normal ${
                    showSolutionsMobile === idx + 1
                      ? "bg-brand-secondary text-system-white"
                      : "text-brand-secondary"
                  }`}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "5px",
                  }}
                  onClick={() => setShowSolutionMobile(idx + 1)}
                >
                  {idx + 1}
                </button>
              );
            })}
          </>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() =>
              setShowSolutionMobile((prev) => {
                if (prev + 1 < 6) return prev + 1;
                return prev;
              })
            }
          >
            <path
              d="M7 4L15 12L7 20"
              stroke="#323232"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Container>
      <div className="py-10 my-20 mobile">
        <Container>
          <div
            className={`${style["card"]} w-full bg-brand-secondary-tint relative`}
          >
            <div>
              <p className="bold-head-1 text-system-black mb-6">
                Masih bingung soal resiliensi? Yuk tanya ahlinya!
              </p>
              <ButtonWhatsapp>Tanya Sekarang</ButtonWhatsapp>
            </div>
            <img
              src={TanyaAhliImage}
              alt=""
              className="show-on-desktop-only absolute top-0 right-0"
            />
          </div>
        </Container>
      </div>
    </>
  );
}
