import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Share2, Clock } from "lucide-react";
import { Link, useParams } from "@remix-run/react";
import { ErrorBoundary } from "@/root";

// Mock data - in real app this would come from database
const newsArticles = {
  "ujian-q2-2024": {
    id: 1,
    title: "Jadwal Ujian Kompetensi Q2 2024",
    content: `
      <p>Kolegium Optometris Indonesia dengan bangga mengumumkan bahwa pendaftaran ujian kompetensi periode April-Juni 2024 telah resmi dibuka. Ujian ini merupakan bagian penting dalam proses sertifikasi profesi optometri di Indonesia.</p>
      
      <h2>Jadwal Pelaksanaan</h2>
      <p>Ujian kompetensi Q2 2024 akan dilaksanakan pada:</p>
      <ul>
        <li><strong>Tanggal:</strong> 15 Juni 2024</li>
        <li><strong>Waktu:</strong> 08:00 - 17:00 WIB</li>
        <li><strong>Lokasi:</strong> Jakarta, Surabaya, dan Medan</li>
      </ul>
      
      <h2>Persyaratan Pendaftaran</h2>
      <p>Untuk dapat mengikuti ujian kompetensi, peserta harus memenuhi persyaratan berikut:</p>
      <ul>
        <li>Memiliki ijazah S1/D4 Optometri yang telah dilegalisir</li>
        <li>Transkrip nilai yang telah dilegalisir</li>
        <li>Fotocopy KTP yang masih berlaku</li>
        <li>Pas foto 4x6 latar belakang merah (3 lembar)</li>
        <li>Surat keterangan sehat dari dokter</li>
        <li>Surat pernyataan tidak pernah melakukan pelanggaran etik profesi</li>
      </ul>
      
      <h2>Biaya Pendaftaran</h2>
      <p>Biaya pendaftaran ujian kompetensi adalah <strong>Rp 750.000</strong> per peserta, yang sudah mencakup:</p>
      <ul>
        <li>Materi ujian</li>
        <li>Sertifikat kompetensi (bagi yang lulus)</li>
        <li>Konsumsi selama ujian</li>
      </ul>
      
      <h2>Cara Pendaftaran</h2>
      <p>Pendaftaran dapat dilakukan melalui:</p>
      <ol>
        <li>Website resmi Kolegium Optometris Indonesia</li>
        <li>Mengisi formulir pendaftaran online</li>
        <li>Upload dokumen persyaratan</li>
        <li>Melakukan pembayaran setelah verifikasi dokumen</li>
      </ol>
      
      <p><strong>Batas waktu pendaftaran:</strong> 30 Mei 2024</p>
      
      <p>Untuk informasi lebih lanjut, silakan hubungi sekretariat Kolegium Optometris Indonesia di nomor telepon +62 21 1234 5678 atau email kolegiumoptometry@gmail.com</p>
    `,
    category: "Pengumuman",
    date: "15 Maret 2024",
    author: "Tim Kolegium Optometris",
    readTime: "5 menit",
    featured: true,
  },
  "standar-praktik-update": {
    id: 2,
    title: "Update Standar Praktik Optometri",
    content: `
      <p>Kolegium Optometris Indonesia telah merilis pembaruan terbaru untuk standar praktik optometri yang berlaku di Indonesia. Pembaruan ini merupakan hasil dari evaluasi menyeluruh terhadap perkembangan teknologi dan kebutuhan masyarakat dalam pelayanan kesehatan mata.</p>
      
      <h2>Latar Belakang Pembaruan</h2>
      <p>Pembaruan standar praktik ini dilakukan berdasarkan beberapa faktor penting:</p>
      <ul>
        <li>Perkembangan teknologi optometri yang pesat</li>
        <li>Kebutuhan masyarakat akan pelayanan kesehatan mata yang berkualitas</li>
        <li>Harmonisasi dengan standar internasional</li>
        <li>Masukan dari praktisi optometri di seluruh Indonesia</li>
      </ul>
      
      <h2>Poin-Poin Utama Pembaruan</h2>
      
      <h3>1. Standar Kompetensi Teknis</h3>
      <p>Pembaruan mencakup peningkatan standar kompetensi teknis yang harus dimiliki oleh praktisi optometri, termasuk:</p>
      <ul>
        <li>Kemampuan menggunakan teknologi refraksi terbaru</li>
        <li>Pemahaman tentang deteksi dini penyakit mata</li>
        <li>Keterampilan konseling pasien</li>
      </ul>
      
      <h3>2. Etika Profesi</h3>
      <p>Penguatan aspek etika profesi dalam praktik sehari-hari, meliputi:</p>
      <ul>
        <li>Prinsip-prinsip pelayanan yang berpusat pada pasien</li>
        <li>Transparansi dalam pemberian informasi</li>
        <li>Kerahasiaan data pasien</li>
      </ul>
      
      <h3>3. Continuing Professional Development</h3>
      <p>Kewajiban mengikuti program pengembangan profesional berkelanjutan dengan:</p>
      <ul>
        <li>Minimal 20 SKP (Satuan Kredit Profesi) per tahun</li>
        <li>Partisipasi dalam seminar dan workshop</li>
        <li>Publikasi ilmiah atau penelitian</li>
      </ul>
      
      <h2>Implementasi</h2>
      <p>Standar praktik yang telah diperbarui ini akan mulai berlaku efektif pada <strong>1 Juli 2024</strong>. Seluruh praktisi optometri di Indonesia diharapkan untuk:</p>
      <ol>
        <li>Mempelajari dokumen standar praktik terbaru</li>
        <li>Mengikuti sosialisasi yang akan diselenggarakan</li>
        <li>Menyesuaikan praktik dengan standar baru</li>
      </ol>
      
      <h2>Sosialisasi dan Pelatihan</h2>
      <p>Untuk mendukung implementasi standar baru, Kolegium Optometris Indonesia akan menyelenggarakan:</p>
      <ul>
        <li>Webinar sosialisasi pada April 2024</li>
        <li>Workshop regional di 5 kota besar</li>
        <li>Pelatihan online melalui platform e-learning</li>
      </ul>
      
      <p>Dokumen lengkap standar praktik optometri terbaru dapat diunduh melalui halaman regulasi di website resmi kami.</p>
    `,
    category: "Regulasi",
    date: "10 Maret 2024",
    author: "Komite Standar Profesi",
    readTime: "7 menit",
    featured: true,
  },
  "seminar-nasional-2024": {
    id: 3,
    title: "Seminar Nasional Optometri 2024",
    content: `
      <p>Kolegium Optometris Indonesia dengan bangga mengumumkan penyelenggaraan Seminar Nasional Optometri 2024 dengan tema "Inovasi Teknologi dalam Praktik Optometri". Acara ini akan menjadi platform utama untuk berbagi pengetahuan dan pengalaman terkini dalam bidang optometri.</p>
      
      <h2>Detail Acara</h2>
      <ul>
        <li><strong>Tanggal:</strong> 20-21 April 2024</li>
        <li><strong>Waktu:</strong> 08:00 - 17:00 WIB</li>
        <li><strong>Tempat:</strong> Hotel Grand Indonesia, Jakarta</li>
        <li><strong>Kapasitas:</strong> 500 peserta</li>
      </ul>
      
      <h2>Tema dan Sub-Tema</h2>
      <p>Seminar ini akan membahas berbagai topik penting dalam perkembangan optometri modern:</p>
      
      <h3>Hari Pertama - Teknologi dan Inovasi</h3>
      <ul>
        <li>Artificial Intelligence dalam Diagnosis Mata</li>
        <li>Teknologi Refraksi Digital Terbaru</li>
        <li>Telemedicine dalam Pelayanan Optometri</li>
        <li>Virtual Reality untuk Terapi Penglihatan</li>
      </ul>
      
      <h3>Hari Kedua - Praktik Klinis dan Penelitian</h3>
      <ul>
        <li>Evidence-Based Practice dalam Optometri</li>
        <li>Manajemen Myopia pada Anak dan Remaja</li>
        <li>Deteksi Dini Glaukoma dengan Teknologi OCT</li>
        <li>Rehabilitasi Low Vision</li>
        <li>Penelitian Terkini dalam Bidang Optometri</li>
      </ul>
      
      <h2>Pembicara Utama</h2>
      <p>Seminar ini akan menghadirkan pembicara-pembicara terkemuka dari dalam dan luar negeri:</p>
      <ul>
        <li><strong>Prof. Dr. John Smith</strong> - University of California, Berkeley (USA)</li>
        <li><strong>Dr. Maria Garcia</strong> - European Council of Optometry and Optics</li>
        <li><strong>Prof. Dr. Hiroshi Tanaka</strong> - Tokyo University of Science (Japan)</li>
        <li><strong>Dr. Sarah Johnson</strong> - Australian College of Optometry</li>
        <li><strong>Prof. Dr. Ahmad Wijaya</strong> - Universitas Indonesia</li>
      </ul>
      
      <h2>Fasilitas dan Benefit</h2>
      <p>Peserta seminar akan mendapatkan:</p>
      <ul>
        <li>Sertifikat 15 SKP (Satuan Kredit Profesi)</li>
        <li>Materi seminar dalam bentuk digital</li>
        <li>Networking session dengan praktisi internasional</li>
        <li>Exhibition teknologi optometri terbaru</li>
        <li>Coffee break dan lunch selama 2 hari</li>
        <li>Welcome dinner (khusus peserta early bird)</li>
      </ul>
      
      <h2>Biaya Pendaftaran</h2>
      <table>
        <tr>
          <td><strong>Early Bird (sebelum 31 Maret)</strong></td>
          <td>Rp 1.500.000</td>
        </tr>
        <tr>
          <td><strong>Regular (1-15 April)</strong></td>
          <td>Rp 1.800.000</td>
        </tr>
        <tr>
          <td><strong>Mahasiswa</strong></td>
          <td>Rp 750.000</td>
        </tr>
      </table>
      
      <h2>Cara Pendaftaran</h2>
      <p>Pendaftaran dapat dilakukan melalui:</p>
      <ol>
        <li>Website resmi Kolegium Optometris Indonesia</li>
        <li>Transfer ke rekening BCA 1234567890 a.n. Kolegium Optometris Indonesia</li>
        <li>Konfirmasi pembayaran via WhatsApp ke +62 812 3456 7890</li>
        <li>Upload bukti transfer dan data peserta</li>
      </ol>
      
      <p>Jangan lewatkan kesempatan emas ini untuk mengembangkan pengetahuan dan jaringan profesional Anda. Daftarkan diri Anda sekarang juga!</p>
      
      <p>Untuk informasi lebih lanjut, hubungi panitia di email: seminar2024@kolegiumoptometry.id atau telepon +62 21 1234 5678.</p>
    `,
    category: "Acara",
    date: "5 Maret 2024",
    author: "Panitia Seminar Nasional",
    readTime: "6 menit",
    featured: true,
  },
};

export default function NewsDetailPage() {
  // const navigate = useNavigate();
  const { slug } = useParams();

  const article = newsArticles[slug as keyof typeof newsArticles];

  if (!article) {
    <ErrorBoundary />;
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Pengumuman":
        return "bg-teal-100 text-teal-800";
      case "Regulasi":
        return "bg-lime-100 text-lime-800";
      case "Acara":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  // const handleGoBack = () => {
  //   navigate(-1); // This goes back to the previous page
  // };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button
                asChild
                className="border-white/20 text-white bg-teal-600 hover:bg-teal-700"
              >
                <Link to="/news">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Kembali ke Berita
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className={getCategoryColor(article.category)}>
                {article.category}
              </Badge>
              <div className="flex items-center gap-4 text-teal-100 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {article.author}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </div>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-8">
                <div className="flex items-center justify-between mb-8 pb-6 border-b">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {article.author}
                      </p>
                      <p className="text-sm text-gray-500">
                        Dipublikasikan {article.date}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Bagikan
                  </Button>
                </div>

                <div
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                <div className="mt-12 pt-8 border-t">
                  <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">
                        Bagikan artikel ini:
                      </p>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-blue-600 text-blue-600 hover:bg-blue-50"
                        >
                          Facebook
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-sky-600 text-sky-600 hover:bg-sky-50"
                        >
                          Twitter
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-green-600 text-green-600 hover:bg-green-50"
                        >
                          WhatsApp
                        </Button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-2">
                        Butuh informasi lebih lanjut?
                      </p>
                      <Button asChild className="bg-teal-600 hover:bg-teal-700">
                        <Link to="/contact">Hubungi Kami</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
