import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@remix-run/react";
import {
  ArrowLeft,
  Eye,
  Target,
  Users,
  Award,
  BookOpen,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Eye,
      title: "Profesionalisme",
      description:
        "Menjunjung tinggi standar profesional dalam setiap aspek pelayanan optometri",
    },
    {
      icon: Target,
      title: "Inovasi",
      description:
        "Mendorong pengembangan teknologi dan metode terbaru dalam praktik optometri",
    },
    {
      icon: Users,
      title: "Kolaborasi",
      description:
        "Membangun kerjasama yang kuat antar praktisi dan institusi pendidikan",
    },
    {
      icon: Award,
      title: "Kualitas",
      description:
        "Memastikan standar kualitas tertinggi dalam pendidikan dan praktik optometri",
    },
  ];

  const achievements = [
    { number: "2,500+", label: "Anggota Terdaftar" },
    { number: "1,200+", label: "Lulusan Bersertifikat" },
    { number: "50+", label: "Regulasi & Panduan" },
    { number: "15", label: "Tahun Pengalaman" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Tentang Kolegium Optometris
            </h1>
            <p className="text-lg sm:text-xl text-teal-100">
              Organisasi profesi yang memajukan standar praktik optometri di
              Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
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

          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="border-l-4 border-l-teal-600">
              <CardContent className="pt-6">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Kolegium Optometris Indonesia adalah organisasi profesi yang
                  didirikan untuk mengembangkan, mengatur, dan memajukan standar
                  praktik optometri di Indonesia. Kami berkomitmen untuk
                  meningkatkan kualitas pelayanan kesehatan mata melalui
                  pendidikan, sertifikasi, dan pengembangan profesional
                  berkelanjutan.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Sebagai wadah bagi para praktisi optometri, kami berupaya
                  menciptakan ekosistem yang mendukung pertumbuhan profesi
                  optometri yang berkualitas, inovatif, dan sesuai dengan
                  perkembangan teknologi terkini dalam bidang kesehatan mata.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-teal-800">
                  <Eye className="h-6 w-6" />
                  Visi Kami
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-teal-700 text-lg leading-relaxed">
                  Menjadi organisasi profesi optometri terdepan di Indonesia
                  yang menghasilkan praktisi berkualitas tinggi dan
                  berkontribusi dalam meningkatkan kesehatan mata masyarakat
                  Indonesia.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lime-800">
                  <Target className="h-6 w-6" />
                  Misi Kami
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-lime-700 space-y-2">
                  <li>
                    • Menyelenggarakan ujian kompetensi nasional optometri
                  </li>
                  <li>• Mengembangkan standar praktik dan etika profesi</li>
                  <li>• Memberikan sertifikasi dan akreditasi berkelanjutan</li>
                  <li>• Memfasilitasi pengembangan profesional anggota</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
              Nilai-Nilai Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-teal-600" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
              Pencapaian Kami
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="text-center bg-gradient-to-br from-teal-600 to-teal-700 text-white"
                >
                  <CardContent className="pt-6">
                    <div className="text-3xl sm:text-4xl font-bold mb-2">
                      {achievement.number}
                    </div>
                    <p className="text-teal-100">{achievement.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
              Layanan Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle>Ujian Kompetensi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Menyelenggarakan ujian kompetensi nasional untuk sertifikasi
                    praktisi optometri profesional.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-lime-600" />
                  </div>
                  <CardTitle>Sertifikasi Profesi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Memberikan sertifikasi dan akreditasi untuk memastikan
                    standar kualitas praktik optometri.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Pengembangan Profesi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Memfasilitasi pengembangan profesional berkelanjutan melalui
                    pelatihan dan workshop.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
