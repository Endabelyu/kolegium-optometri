import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowLeft,
  FileText,
  CheckCircle,
} from "lucide-react";
import { Link } from "@remix-run/react";

export default function ExamsPage() {
  const upcomingExams = [
    {
      id: 1,
      title: "Ujian Kompetensi Nasional Q2 2024",
      date: "15 Juni 2024",
      time: "08:00 - 17:00 WIB",
      location: "Jakarta, Surabaya, Medan",
      registrationDeadline: "30 Mei 2024",
      capacity: 500,
      registered: 342,
      status: "open",
      fee: "Rp 750.000",
    },
    {
      id: 2,
      title: "Ujian Kompetensi Nasional Q3 2024",
      date: "15 September 2024",
      time: "08:00 - 17:00 WIB",
      location: "Jakarta, Bandung, Yogyakarta",
      registrationDeadline: "31 Agustus 2024",
      capacity: 600,
      registered: 0,
      status: "soon",
      fee: "Rp 750.000",
    },
  ];

  const examRequirements = [
    "Ijazah S1/D4 Optometri yang telah dilegalisir",
    "Transkrip nilai yang telah dilegalisir",
    "Fotocopy KTP yang masih berlaku",
    "Pas foto 4x6 latar belakang merah (3 lembar)",
    "Surat keterangan sehat dari dokter",
    "Surat pernyataan tidak pernah melakukan pelanggaran etik profesi",
  ];

  const examProcess = [
    {
      step: 1,
      title: "Pendaftaran Online",
      description:
        "Lengkapi formulir pendaftaran dan upload dokumen yang diperlukan",
    },
    {
      step: 2,
      title: "Verifikasi Dokumen",
      description:
        "Tim kami akan memverifikasi kelengkapan dan keabsahan dokumen Anda",
    },
    {
      step: 3,
      title: "Pembayaran",
      description:
        "Lakukan pembayaran biaya ujian setelah dokumen diverifikasi",
    },
    {
      step: 4,
      title: "Kartu Ujian",
      description:
        "Unduh kartu ujian yang berisi informasi lokasi dan jadwal ujian",
    },
    {
      step: 5,
      title: "Pelaksanaan Ujian",
      description:
        "Ikuti ujian sesuai jadwal dengan membawa kartu ujian dan identitas",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Ujian Kompetensi
            </h1>
            <p className="text-lg sm:text-xl text-teal-100">
              Informasi lengkap mengenai ujian kompetensi optometri nasional
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

          {/* Upcoming Exams */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Jadwal Ujian Mendatang
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {upcomingExams.map(exam => (
                <Card
                  key={exam.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        className={
                          exam.status === "open"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }
                      >
                        {exam.status === "open"
                          ? "Pendaftaran Dibuka"
                          : "Segera Dibuka"}
                      </Badge>
                      <span className="text-lg font-bold text-teal-600">
                        {exam.fee}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{exam.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exam.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{exam.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{exam.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="h-4 w-4" />
                        <span className="text-sm">
                          {exam.registered}/{exam.capacity} peserta
                        </span>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">
                        Batas pendaftaran:{" "}
                        <strong>{exam.registrationDeadline}</strong>
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-teal-600 h-2 rounded-full"
                          style={{
                            width: `${
                              (exam.registered / exam.capacity) * 100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-teal-600 hover:bg-teal-700"
                      disabled={exam.status !== "open"}
                    >
                      <Link to="/exam-registration">
                        {exam.status === "open"
                          ? "Daftar Sekarang"
                          : "Segera Dibuka"}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Persyaratan Ujian
            </h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-teal-600" />
                  Dokumen yang Diperlukan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {examRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Process */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Alur Pendaftaran
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {examProcess.map((process, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                        {process.step}
                      </div>
                      <CardTitle className="text-lg">{process.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{process.description}</p>
                  </CardContent>
                  {index < examProcess.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <div className="w-6 h-0.5 bg-teal-300"></div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
