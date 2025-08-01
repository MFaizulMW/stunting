"use client"
import React from "react"

import Image from "next/image"


import { Baby, Heart, Users, Utensils, Shield, BookOpen, Activity, Stethoscope } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function StuntingLandingPage() {
  const faqData = [
  // FAQ yang sudah ada sebelumnya

  {
    id: "what-is-stunting",
    question: "Apakah itu stunting?",
    answer:
      "Stunting adalah kondisi gagal tumbuh pada anak balita akibat kekurangan gizi kronis dan infeksi berulang, terutama pada 1000 Hari Pertama Kehidupan (HPK). Kondisi ini ditandai dengan panjang atau tinggi badan anak yang berada di bawah standar usianya.",
  },
  
  {
    id: "prevention-pregnancy",
    question: "Bagaimana mencegah stunting sejak kehamilan?",
    answer:
      "Pencegahan stunting dimulai sejak masa kehamilan dengan: 1) Konsumsi makanan bergizi seimbang yang kaya protein, zat besi, asam folat, dan kalsium. 2) Rutin memeriksakan kehamilan ke tenaga kesehatan. 3) Konsumsi tablet tambah darah sesuai anjuran dokter. 4) Hindari rokok, alkohol, dan zat berbahaya lainnya. 5) Jaga kebersihan diri dan lingkungan. 6) Kelola stress dengan baik dan istirahat yang cukup.",
  },
  {
    id: "nutrition-1000-days",
    question: "Apa saja nutrisi penting selama 1000 hari pertama?",
    answer:
      "Nutrisi penting dalam 1000 hari pertama kehidupan meliputi: 1) Protein untuk pertumbuhan sel dan jaringan. 2) Zat besi untuk mencegah anemia dan mendukung perkembangan otak. 3) Kalsium untuk pembentukan tulang dan gigi. 4) Vitamin A untuk kesehatan mata dan sistem imun. 5) Asam folat untuk perkembangan sistem saraf. 6) Omega-3 untuk perkembangan otak. 7) Zinc untuk pertumbuhan dan sistem imun.",
  },
  {
    id: "breastfeeding-role",
    question: "Bagaimana peran ASI dalam mencegah stunting?",
    answer:
      "ASI berperan vital dalam mencegah stunting karena: 1) Mengandung nutrisi lengkap dan mudah diserap tubuh bayi. 2) Memberikan antibodi untuk melindungi dari infeksi. 3) Mendukung perkembangan sistem pencernaan yang sehat. 4) ASI eksklusif 6 bulan pertama memberikan nutrisi optimal. 5) Dilanjutkan hingga 2 tahun dengan makanan pendamping yang tepat. 6) Bonding antara ibu dan bayi yang mendukung perkembangan emosional.",
  },
  {
    id: "complementary-feeding",
    question: "Kapan dan bagaimana memberikan MPASI yang tepat?",
    answer:
      "MPASI (Makanan Pendamping ASI) diberikan mulai usia 6 bulan dengan prinsip: 1) Tepat waktu: dimulai saat bayi berusia 6 bulan. 2) Tepat jumlah: porsi sesuai usia dan kebutuhan. 3) Tepat tekstur: dari halus bertahap ke kasar. 4) Tepat variasi: beragam jenis makanan untuk nutrisi lengkap. 5) Tepat kebersihan: selalu dalam kondisi higienis. 6) Responsive feeding: perhatikan tanda lapar dan kenyang bayi.",
  },
  {
    id: "growth-monitoring",
    question: "Mengapa penting memantau pertumbuhan anak secara rutin?",
    answer:
      "Pemantauan pertumbuhan rutin penting karena: 1) Mendeteksi dini gangguan pertumbuhan termasuk stunting. 2) Memastikan anak tumbuh sesuai kurva pertumbuhan normal. 3) Evaluasi efektivitas pemberian nutrisi. 4) Mendapat intervensi tepat waktu jika ada masalah. 5) Monitoring dilakukan di Posyandu, Puskesmas, atau fasilitas kesehatan. 6) Pencatatan dalam KMS (Kartu Menuju Sehat) untuk tracking jangka panjang.",
  },
  {
    id: "environmental-factors",
    question: "Bagaimana lingkungan mempengaruhi risiko stunting?",
    answer:
      "Faktor lingkungan yang mempengaruhi stunting: 1) Sanitasi buruk meningkatkan risiko infeksi dan diare. 2) Air bersih yang tidak memadai menyebabkan penyakit. 3) Polusi udara mengganggu kesehatan pernapasan. 4) Kemiskinan membatasi akses nutrisi berkualitas. 5) Pendidikan orang tua mempengaruhi pola asuh. 6) Akses layanan kesehatan yang terbatas. 7) Praktik kebersihan yang kurang baik di rumah tangga.",
  },

  // --- Tambahan FAQ Baru ---

  {
    id: "stunting-characteristics",
    question: "Bagaimana ciri-ciri anak yang terkena stunting?",
    answer:
      "Ciri utama anak stunting adalah tinggi badannya lebih pendek dari standar anak seusianya. Tanda lainnya bisa berupa pertumbuhan yang melambat, berat badan sulit naik, dan performa buruk pada tes perhatian dan memori belajar. Deteksi pasti dilakukan dengan membandingkan data pertumbuhan anak dengan kurva pertumbuhan standar di Posyandu atau Puskesmas.",
  },
  {
    id: "short-vs-stunted",
    question: "Apakah anak pendek selalu stunting?",
    answer:
      "Tidak. Anak pendek bisa disebabkan oleh faktor genetik (keturunan). Perbedaannya, stunting adalah kondisi gagal tumbuh akibat kekurangan gizi yang berdampak pada perkembangan kognitifnya. Anak pendek karena genetik tetap tumbuh proporsional dan memiliki perkembangan kognitif yang normal.",
  },
  {
    id: "stunting-impacts",
    question: "Dampak apa yang akan terjadi pada anak bila stunting?",
    answer:
      "Dampak stunting tidak hanya fisik (pendek), tetapi juga meliputi: 1) Gangguan perkembangan otak yang menyebabkan penurunan kecerdasan. 2) Menurunnya kemampuan belajar dan produktivitas di masa depan. 3) Meningkatnya risiko menderita penyakit tidak menular (seperti diabetes dan penyakit jantung) saat dewasa.",
  },
  {
    id: "can-stunting-be-cured",
    question: "Apakah anak yang mengalami stunting bisa kembali normal?",
    answer:
      "Stunting dapat diperbaiki, namun peluang kembali normal sangat bergantung pada usia anak. Intervensi gizi dan stimulasi yang dilakukan sebelum anak berusia 2 tahun (periode emas) memberikan peluang terbaik untuk mengejar ketertinggalan pertumbuhan. Setelah usia 2 tahun, dampak stunting, terutama pada otak, menjadi lebih sulit diperbaiki.",
  },
  {
    id: "stunting-treatment",
    question: "Bagaimana penanganan stunting?",
    answer:
      "Penanganan berfokus pada intervensi gizi untuk mengejar ketertinggalan tumbuh kembang. Ini meliputi: 1) Pemberian asupan gizi yang adekuat, terutama kaya protein hewani. 2) Mengatasi penyakit infeksi yang diderita. 3) Memberikan stimulasi psikososial yang tepat. 4) Rutin memantau pertumbuhan di fasilitas kesehatan untuk evaluasi.",
  },
  {
    id: "not-only-poor",
    question: "Apakah stunting hanya terjadi pada keluarga miskin?",
    answer:
      "Tidak. Meskipun kemiskinan adalah faktor risiko karena membatasi akses ke gizi, stunting bisa terjadi di keluarga mampu. Faktor lain seperti kurangnya pengetahuan gizi, pola asuh yang salah, seringnya anak sakit karena sanitasi buruk, dan tidak rutin ke Posyandu juga merupakan penyebab penting.",
  },
  {
    id: "most-influential-factor",
    question: "Faktor apa yang paling berpengaruh terhadap terjadinya stunting?",
    answer:
      "Faktor yang paling berpengaruh adalah asupan gizi yang tidak memadai dan infeksi berulang. Ini dipengaruhi oleh berbagai hal, seperti kesehatan ibu saat hamil, praktik pemberian ASI dan MPASI yang kurang tepat, kebersihan lingkungan, serta terbatasnya akses ke layanan kesehatan.",
  },
  {
    id: "posyandu-role",
    question: "Apa peran Posyandu dalam pencegahan stunting?",
    answer:
      "Posyandu berperan sebagai garda terdepan untuk: 1) Memantau pertumbuhan anak secara rutin (timbang berat dan ukur tinggi badan). 2) Memberikan edukasi gizi kepada ibu hamil dan balita. 3) Melakukan deteksi dini jika ada tanda gangguan pertumbuhan dan merujuk ke Puskesmas. 4) Memberikan layanan kesehatan dasar seperti imunisasi dan vitamin A.",
  },
  {
    id: "raising-awareness",
    question: "Bagaimana cara meningkatkan kesadaran masyarakat tentang stunting?",
    answer:
      "Kesadaran dapat ditingkatkan melalui: 1) Edukasi berkelanjutan di Posyandu dan Puskesmas. 2) Kampanye media massa dan digital yang mudah dipahami. 3) Pelibatan tokoh masyarakat dan agama sebagai panutan. 4) Memastikan informasi stunting mudah diakses oleh semua lapisan masyarakat.",
  },
];

  const handleFindNearbyPuskesmas = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        const mapsUrl = `https://www.google.com/maps/search/puskesmas/@${latitude},${longitude},15z`
        window.open(mapsUrl, "_blank") // buka di tab baru
      },
      (error) => {
        alert("Gagal mendapatkan lokasi. Pastikan izin lokasi diaktifkan.")
        console.error(error)
      }
    )
  } else {
    alert("Browser tidak mendukung fitur lokasi.")
  }
}


  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E0F7FA" }}>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center space-x-2">
            <Baby className="h-8 w-8 text-teal-600" />
            <h1 className="text-2xl font-bold text-gray-800">Cegah Stunting, Wujudkan Generasi Sehat</h1>
          </div>
        </div>
      </header>

      {/* Hero Section with Poster */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mari Bersama Cegah Stunting</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stunting dapat dicegah dengan pengetahuan dan tindakan yang tepat. Pelajari cara melindungi si kecil dari
              risiko stunting.
            </p>
          </div>

          <div className="flex justify-center mb-8">
  <Image
    src="/images/poster-2.jpg"
    alt="Poster Penyuluhan Stunting - Panduan Pencegahan untuk Ibu dan Bayi"
    width={1041}
    height={736}
    className="w-full h-auto object-contain"
    priority
  />
</div>



          {/* Statistics Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">1000 Hari Pertama</h3>
                <p className="text-gray-600">Periode emas pencegahan stunting</p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">ASI Eksklusif</h3>
                <p className="text-gray-600">6 bulan pertama kehidupan</p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Keluarga Sehat</h3>
                <p className="text-gray-600">Dukungan lingkungan yang baik</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Background hanya untuk area ini */}
          <div className="bg-white/50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <BookOpen className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Pertanyaan Seputar Stunting</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Temukan jawaban untuk pertanyaan umum tentang pencegahan stunting
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="bg-white rounded-lg shadow-sm border-0">
                    <AccordionTrigger
                      className="px-6 py-4 text-left hover:no-underline rounded-lg"
                      style={{
                        backgroundColor: "#FFE0B2",
                        color: "#4E342E",
                      }}
                    >
                      <span className="font-semibold text-base md:text-lg pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 text-gray-700 leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
  <div className="container mx-auto px-4 text-center">
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
      <Stethoscope className="h-16 w-16 text-teal-600 mx-auto mb-6" />
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Mulai Langkah Pencegahan Sekarang</h2>
      <p className="text-lg text-gray-600 mb-8">
        Konsultasikan dengan tenaga kesehatan terdekat untuk mendapatkan panduan yang tepat sesuai kondisi ibu dan bayi.
      </p>

<div className="flex flex-wrap justify-center gap-4">
  {/* Tombol Cari Puskesmas */}
  <button
    className="flex-1 min-w-[200px] max-w-[250px] px-6 py-3 text-white bg-teal-600 hover:bg-teal-700 rounded-lg text-base font-medium shadow-md transition duration-300"
    onClick={handleFindNearbyPuskesmas}
  >
    Cari Puskesmas Terdekat
  </button>

  {/* Tombol Kritik & Saran */}
  <a
  href="https://forms.gle/dzziPiEwTSFdHzAq7"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center flex-1 min-w-[200px] max-w-[250px] px-6 py-3 text-center text-white bg-teal-600 hover:bg-teal-700 rounded-lg text-base font-medium shadow-md transition duration-300"
>
  Kritik & Saran
</a>


  {/* Tombol Konsultasi WA */}
  <a
    href="https://wa.me/6281326834466?text=Halo%20saya%20ingin%20konsultasi%20kesehatan%20lebih%20lanjut."
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 min-w-[200px] max-w-[250px] px-6 py-3 text-white bg-teal-600 hover:bg-teal-700 rounded-lg text-base font-medium shadow-md transition duration-300"
  >
    Konsultasi Kesehatan Online
  </a>
</div>


    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Baby className="h-6 w-6" />
            <span className="font-semibold">Cegah Stunting Indonesia</span>
          </div>
          <p className="text-gray-400">Bersama wujudkan generasi Indonesia yang sehat dan cerdas</p>
        </div>
      </footer>
    </div>
  )
}
