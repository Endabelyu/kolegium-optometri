import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft } from "lucide-react";
import { Link } from "@remix-run/react";

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "Jadwal Ujian Kompetensi Q2 2024",
      excerpt:
        "Pendaftaran ujian kompetensi periode April-Juni 2024 telah dibuka. Pastikan dokumen Anda lengkap dan sesuai dengan persyaratan yang telah ditetapkan.",
      category: "Pengumuman",
      date: "15 Maret 2024",
      slug: "ujian-q2-2024",
      featured: true,
    },
    {
      id: 2,
      title: "Update Standar Praktik Optometri",
      excerpt:
        "Pembaruan standar praktik optometri sesuai dengan perkembangan teknologi dan kebutuhan masyarakat dalam pelayanan kesehatan mata.",
      category: "Regulasi",
      date: "10 Maret 2024",
      slug: "standar-praktik-update",
      featured: true,
    },
    {
      id: 3,
      title: "Seminar Nasional Optometri 2024",
      excerpt:
        "Seminar nasional dengan tema 'Inovasi Teknologi dalam Praktik Optometri' akan segera diselenggarakan pada bulan April 2024.",
      category: "Acara",
      date: "5 Maret 2024",
      slug: "seminar-nasional-2024",
      featured: true,
    },
    {
      id: 4,
      title: "Peluncuran Program Sertifikasi Lanjutan",
      excerpt:
        "Kolegium Optometris meluncurkan program sertifikasi lanjutan untuk meningkatkan kompetensi praktisi optometri di Indonesia.",
      category: "Program",
      date: "28 Februari 2024",
      slug: "sertifikasi-lanjutan",
      featured: false,
    },
    {
      id: 5,
      title: "Workshop Teknologi Refraksi Terbaru",
      excerpt:
        "Workshop mengenai teknologi refraksi terbaru dan aplikasinya dalam praktik optometri modern akan diselenggarakan bulan depan.",
      category: "Pelatihan",
      date: "25 Februari 2024",
      slug: "workshop-refraksi",
      featured: false,
    },
    {
      id: 6,
      title: "Kerjasama dengan Universitas Terkemuka",
      excerpt:
        "Kolegium Optometris menjalin kerjasama strategis dengan beberapa universitas terkemuka untuk pengembangan kurikulum optometri.",
      category: "Kerjasama",
      date: "20 Februari 2024",
      slug: "kerjasama-universitas",
      featured: false,
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Pengumuman":
        return "bg-teal-100 text-teal-800";
      case "Regulasi":
        return "bg-lime-100 text-lime-800";
      case "Acara":
        return "bg-blue-100 text-blue-800";
      case "Program":
        return "bg-purple-100 text-purple-800";
      case "Pelatihan":
        return "bg-orange-100 text-orange-800";
      case "Kerjasama":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Berita & Pengumuman
            </h1>
            <p className="text-lg sm:text-xl text-teal-100">
              Informasi terkini seputar kegiatan dan perkembangan Kolegium
              Optometris Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button
              asChild
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-50"
            >
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Beranda
              </Link>
            </Button>
          </div>

          {/* Featured News */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Berita Utama
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {newsArticles
                .filter(article => article.featured)
                .map(article => (
                  <Card
                    key={article.id}
                    className="hover:shadow-lg transition-shadow border-l-4 border-l-teal-600"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={getCategoryColor(article.category)}>
                          {article.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {article.date}
                        </div>
                      </div>
                      <CardTitle className="text-lg sm:text-xl">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <Button
                        asChild
                        variant="link"
                        className="p-0 text-teal-600"
                      >
                        <Link to={`/news/${article.slug}`}>
                          Baca Selengkapnya
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* All News */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Semua Berita
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {newsArticles.map(article => (
                <Card
                  key={article.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(article.category)}>
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <Button
                      asChild
                      variant="link"
                      className="p-0 text-teal-600"
                    >
                      <Link to={`/news/${article.slug}`}>
                        Baca Selengkapnya
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
