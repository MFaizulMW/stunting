import Image from "next/image"
import { Baby, Heart, Users, Utensils, Shield, BookOpen } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function StuntingLandingPage() {
  const faqData = [
  {
    id: "ciri-anak-stunting",
    question: "Bagaimana ciri-ciri anak yang terkena stunting?",
    answer:
      "Ciri-ciri anak stunting meliputi tinggi badan yang lebih pendek dari anak seusianya, wajah tampak lebih muda, berat badan rendah, serta perkembangan motorik dan kognitif yang lebih lambat.",
  },
  {
    id: "stunting-keluarga-miskin",
    question: "Apakah stunting hanya terjadi pada keluarga miskin?",
    answer:
      "Tidak. Meski lebih sering terjadi di keluarga dengan ekonomi rendah, stunting juga dapat terjadi pada keluarga mampu jika pola makan, kebersihan, dan pola asuh anak kurang diperhatikan.",
  },
  {
    id: "penanganan-stunting",
    question: "Bagaimana penanganan stunting?",
    answer:
      "Penanganan stunting melibatkan pemberian nutrisi seimbang, perbaikan sanitasi dan kebersihan, pemantauan pertumbuhan secara rutin, serta edukasi kepada orang tua tentang pola asuh dan pemberian makan yang tepat.",
  },
  {
    id: "anak-pendek-stunting",
    question: "Apakah anak pendek selalu stunting?",
    answer:
      "Tidak selalu. Anak pendek bisa disebabkan oleh faktor genetik. Namun, jika tinggi badannya jauh di bawah rata-rata usia dan disertai masalah perkembangan, bisa jadi itu merupakan tanda stunting.",
  },
  {
    id: "anak-stunting-normal",
    question: "Apakah anak yang mengalami stunting bisa kembali normal?",
    answer:
      "Pemulihan penuh sulit dilakukan setelah usia 2 tahun, namun intervensi gizi, stimulasi, dan perawatan kesehatan yang tepat dapat membantu memperbaiki kualitas hidup dan tumbuh kembang anak secara signifikan.",
  },
  {
    id: "kesadaran-masyarakat",
    question: "Bagaimana cara meningkatkan kesadaran masyarakat tentang stunting?",
    answer:
      "Edukasi melalui posyandu, kampanye publik, penyuluhan ibu hamil, serta kolaborasi dengan tokoh masyarakat dapat membantu meningkatkan pemahaman dan kesadaran kolektif akan pentingnya pencegahan stunting.",
  },
  {
    id: "dampak-stunting",
    question: "Dampak apa yang akan terjadi pada anak bila stunting?",
    answer:
      "Anak yang mengalami stunting berisiko mengalami keterlambatan belajar, penurunan daya tahan tubuh, gangguan perkembangan otak, serta kesulitan bersaing di masa depan secara fisik maupun intelektual.",
  },
  {
    id: "stunting-disembuhkan",
    question: "Apakah stunting dapat disembuhkan dan pertumbuhan anak dapat kembali normal?",
    answer:
      "Stunting sulit disembuhkan sepenuhnya jika sudah lewat usia 2 tahun. Namun, dengan perbaikan nutrisi dan stimulasi yang konsisten, anak tetap bisa tumbuh lebih sehat dan produktif.",
  },
  {
    id: "apa-itu-stunting",
    question: "Apa itu stunting?",
    answer:
      "Stunting adalah kondisi gagal tumbuh pada anak balita akibat kekurangan gizi kronis, terutama dalam 1000 hari pertama kehidupan, yang menyebabkan tinggi badan di bawah standar dan gangguan perkembangan.",
  },
  {
    id: "pencegahan-kehamilan",
    question: "Bagaimana pencegahan stunting pada masa kehamilan?",
    answer:
      "Pencegahan saat hamil mencakup konsumsi gizi lengkap, rutin periksa kehamilan, minum tablet tambah darah, hindari zat berbahaya seperti rokok dan alkohol, serta menjaga kesehatan mental dan fisik ibu.",
  },
  {
    id: "faktor-paling-berpengaruh",
    question: "Faktor apa yang paling berpengaruh terhadap terjadinya stunting?",
    answer:
      "Faktor utama penyebab stunting adalah kekurangan gizi jangka panjang, pola makan yang tidak sesuai usia, infeksi berulang, sanitasi buruk, dan kurangnya pengetahuan orang tua tentang perawatan anak.",
  },
  {
    id: "peran-posyandu",
    question: "Apa peran Posyandu dalam pencegahan stunting?",
    answer:
      "Posyandu memiliki peran penting dalam memantau pertumbuhan anak, memberikan imunisasi, edukasi gizi kepada ibu, mendeteksi dini masalah kesehatan, serta menghubungkan masyarakat dengan layanan kesehatan.",
  },
]


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
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
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
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <Utensils className="h-16 w-16 text-teal-600 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Mulai Langkah Pencegahan Sekarang</h2>
            <p className="text-lg text-gray-600 mb-8">
              Konsultasikan dengan tenaga kesehatan terdekat untuk mendapatkan panduan yang tepat sesuai kondisi ibu dan
              bayi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3">
                Cari Puskesmas Terdekat
              </Button>
             
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
