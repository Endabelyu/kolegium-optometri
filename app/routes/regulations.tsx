import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Calendar, Eye } from "lucide-react";
import { Link } from "@remix-run/react";

export default function RegulationsPage() {
  const regulations = [
    {
      id: 1,
      title: "Standar Kompetensi Optometris Indonesia",
      description:
        "Dokumen yang mengatur standar kompetensi minimal yang harus dimiliki oleh praktisi optometri di Indonesia",
      category: "Standar Kompetensi",
      date: "15 Januari 2024",
      version: "v2.1",
      size: "2.5 MB",
      downloads: 1250,
      featured: true,
    },
    {
      id: 2,
      title: "Kode Etik Profesi Optometri",
      description:
        "Pedoman etika dan perilaku profesional yang harus dipatuhi oleh seluruh anggota profesi optometri",
      category: "Etika Profesi",
      date: "10 Februari 2024",
      version: "v1.3",
      size: "1.8 MB",
      downloads: 980,
      featured: true,
    },
    {
      id: 3,
      title: "Panduan Praktik Klinis Optometri",
      description:
        "Panduan lengkap mengenai praktik klinis optometri yang sesuai dengan standar internasional",
      category: "Panduan Praktik",
      date: "5 Maret 2024",
      version: "v3.0",
      size: "4.2 MB",
      downloads: 756,
      featured: true,
    },
    {
      id: 4,
      title: "Regulasi Penggunaan Alat Optometri",
      description:
        "Peraturan mengenai penggunaan dan kalibrasi alat-alat optometri dalam praktik profesional",
      category: "Regulasi Alat",
      date: "20 Februari 2024",
      version: "v1.5",
      size: "3.1 MB",
      downloads: 642,
      featured: false,
    },
    {
      id: 5,
      title: "Standar Pelayanan Optometri",
      description:
        "Standar minimal pelayanan yang harus diberikan dalam praktik optometri kepada pasien",
      category: "Standar Pelayanan",
      date: "28 Januari 2024",
      version: "v2.0",
      size: "2.8 MB",
      downloads: 534,
      featured: false,
    },
    {
      id: 6,
      title: "Pedoman Continuing Education",
      description:
        "Panduan mengenai pendidikan berkelanjutan yang wajib diikuti oleh praktisi optometri",
      category: "Pendidikan",
      date: "12 Februari 2024",
      version: "v1.2",
      size: "1.9 MB",
      downloads: 423,
      featured: false,
    },
  ];

  const categories = [
    {
      name: "Semua",
      count: regulations.length,
      color: "bg-gray-100 text-gray-800",
    },
    {
      name: "Standar Kompetensi",
      count: 1,
      color: "bg-teal-100 text-teal-800",
    },
    { name: "Etika Profesi", count: 1, color: "bg-lime-100 text-lime-800" },
    { name: "Panduan Praktik", count: 1, color: "bg-blue-100 text-blue-800" },
    { name: "Regulasi Alat", count: 1, color: "bg-purple-100 text-purple-800" },
    {
      name: "Standar Pelayanan",
      count: 1,
      color: "bg-orange-100 text-orange-800",
    },
    { name: "Pendidikan", count: 1, color: "bg-green-100 text-green-800" },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Standar Kompetensi":
        return "bg-teal-100 text-teal-800";
      case "Etika Profesi":
        return "bg-lime-100 text-lime-800";
      case "Panduan Praktik":
        return "bg-blue-100 text-blue-800";
      case "Regulasi Alat":
        return "bg-purple-100 text-purple-800";
      case "Standar Pelayanan":
        return "bg-orange-100 text-orange-800";
      case "Pendidikan":
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
              Regulasi & Dokumen
            </h1>
            <p className="text-lg sm:text-xl text-teal-100">
              Akses dokumen regulasi, standar, dan panduan praktik optometri
              terbaru
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

          {/* Categories */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Kategori Dokumen
            </h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <Badge
                  key={index}
                  className={`${category.color} px-4 py-2 text-sm cursor-pointer hover:opacity-80`}
                >
                  {category.name} ({category.count})
                </Badge>
              ))}
            </div>
          </div>

          {/* Featured Documents */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Dokumen Utama
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {regulations
                .filter(reg => reg.featured)
                .map(regulation => (
                  <Card
                    key={regulation.id}
                    className="hover:shadow-lg transition-shadow border-l-4 border-l-teal-600"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          className={getCategoryColor(regulation.category)}
                        >
                          {regulation.category}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {regulation.version}
                        </span>
                      </div>
                      <CardTitle className="text-lg">
                        {regulation.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 text-sm">
                        {regulation.description}
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {regulation.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          {regulation.downloads}x
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1 bg-teal-600 hover:bg-teal-700"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download ({regulation.size})
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-teal-600 text-teal-600"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* All Documents */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Semua Dokumen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {regulations.map(regulation => (
                <Card
                  key={regulation.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(regulation.category)}>
                        {regulation.category}
                      </Badge>
                      <span className="text-xs text-gray-500">
                        {regulation.version}
                      </span>
                    </div>
                    <CardTitle className="text-lg">
                      {regulation.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm">
                      {regulation.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {regulation.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="h-3 w-3" />
                        {regulation.downloads}x
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-teal-600 hover:bg-teal-700"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download ({regulation.size})
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-teal-600 text-teal-600"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
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
