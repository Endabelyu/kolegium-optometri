"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import BoxImage from "src/components/BoxImage";
import { Button } from "src/components/ui/button";
import { Link } from "@remix-run/react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/src/components/ui/card";
import { Badge } from "~/src/components/ui/badge";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentGallery, setCurrentGallery] = useState(0);

  // Hero carousel data
  const heroSlides = [
    {
      image: "/logo-kolegium.png?height=600&width=1200",
      title: "Memajukan Profesi Optometri Indonesia",
      subtitle:
        "Bergabunglah dengan komunitas optometris terdepan di Indonesia",
      cta: "Daftar Ujian Kompetensi",
      ctaLink: "/exam-registration",
    },
    {
      image: "/logo-kolegium.png?height=600&width=1200",
      title: "Ujian Kompetensi Nasional",
      subtitle:
        "Raih sertifikasi profesi optometri yang diakui secara nasional",
      cta: "Lihat Jadwal Ujian",
      ctaLink: "/exams",
    },
    {
      image: "/logo-kolegium.png?height=600&width=1200",
      title: "Standar Praktik Terkini",
      subtitle: "Akses regulasi dan panduan praktik optometri terbaru",
      cta: "Akses Regulasi",
      ctaLink: "/regulations",
    },
  ];

  // Gallery data
  const galleryItems = [
    {
      type: "image",
      src: "/logo-kolegium.png?height=400&width=400",
      title: "Ujian Kompetensi 2024",
    },
    {
      type: "image",
      src: "/logo-kolegium.png?height=400&width=400",
      title: "Seminar Nasional Optometri",
    },
    {
      type: "image",
      src: "/logo-kolegium.png?height=400&width=400",
      title: "Workshop Teknologi Terbaru",
    },
    {
      type: "image",
      src: "/logo-kolegium.png?height=400&width=400",
      title: "Pelantikan Anggota Baru",
    },
    {
      type: "image",
      src: "/logo-kolegium.png?height=400&width=400",
      title: "Kunjungan Industri",
    },
    {
      type: "image",
      src: "/logo-kolegium.png?height=400&width=400",
      title: "Pelatihan Praktisi",
    },
  ];

  // Auto-advance hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () =>
    setCurrentSlide(prev => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length);

  const nextGallery = () =>
    setCurrentGallery(prev => (prev + 1) % Math.ceil(galleryItems.length / 3));
  const prevGallery = () =>
    setCurrentGallery(
      prev =>
        (prev - 1 + Math.ceil(galleryItems.length / 3)) %
        Math.ceil(galleryItems.length / 3),
    );

  return (
    <div className="min-h-screen">
      {/* Hero Carousel - Container Width */}
      <section className="py-12 sm:py-16 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[50vh] overflow-hidden rounded-lg">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative h-full w-full">
                  <BoxImage
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    className="object-cover w-full h-full rounded-lg"
                    // priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-teal-600/60 rounded-lg" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl px-4 sm:px-6 lg:px-8">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        {slide.title}
                      </h1>
                      <p className="text-base sm:text-lg md:text-xl mb-6 text-teal-100">
                        {slide.subtitle}
                      </p>
                      <Button
                        asChild
                        size="default"
                        className="bg-lime-500 text-teal-900 hover:bg-lime-400 font-semibold"
                      >
                        <Link to={slide.ctaLink}>{slide.cta}</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-lime-400" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                Berita Terbaru
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Informasi dan update terkini dari Kolegium Optometris
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-50 shrink-0"
            >
              <Link to="/news">
                Lihat Semua
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-teal-600">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-teal-100 text-teal-800">
                    Pengumuman
                  </Badge>
                  <span className="text-sm text-gray-500">15 Maret 2024</span>
                </div>
                <CardTitle className="text-lg">
                  Jadwal Ujian Kompetensi Q2 2024
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Pendaftaran ujian kompetensi periode April-Juni 2024 telah
                  dibuka. Pastikan dokumen Anda lengkap...
                </p>
                <Button asChild variant="link" className="p-0 text-teal-600">
                  <Link to="/news/ujian-q2-2024">Baca Selengkapnya</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-lime-500">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-lime-100 text-lime-800">Regulasi</Badge>
                  <span className="text-sm text-gray-500">10 Maret 2024</span>
                </div>
                <CardTitle className="text-lg">
                  Update Standar Praktik Optometri
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Pembaruan standar praktik optometri sesuai dengan perkembangan
                  teknologi dan kebutuhan masyarakat...
                </p>
                <Button asChild variant="link" className="p-0 text-teal-600">
                  <Link to="/news/standar-praktik-update">
                    Baca Selengkapnya
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-teal-400 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant="outline"
                    className="border-teal-600 text-teal-600"
                  >
                    Acara
                  </Badge>
                  <span className="text-sm text-gray-500">5 Maret 2024</span>
                </div>
                <CardTitle className="text-lg">
                  Seminar Nasional Optometri 2024
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Seminar nasional dengan tema &ldquoInovasi Teknologi dalam
                  Praktik Optometri&ldquo akan segera diselenggarakan...
                </p>
                <Button asChild variant="link" className="p-0 text-teal-600">
                  <Link to="/news/seminar-nasional-2024">
                    Baca Selengkapnya
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exam Registration CTA Section - Container Width */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Daftar Ujian Kompetensi
            </h2>
            <p className="text-lg sm:text-xl text-teal-100 mb-6 sm:mb-8">
              Bergabunglah dengan ribuan optometris profesional. Daftarkan diri
              Anda untuk ujian kompetensi nasional dan raih sertifikasi resmi.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-lime-400 mb-2">
                  2x
                </div>
                <p className="text-teal-100 text-sm sm:text-base">
                  Ujian per Tahun
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-lime-400 mb-2">
                  95%
                </div>
                <p className="text-teal-100 text-sm sm:text-base">
                  Tingkat Kelulusan
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-lime-400 mb-2">
                  30
                </div>
                <p className="text-teal-100 text-sm sm:text-base">
                  Hari Proses
                </p>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-lime-500 text-teal-900 hover:bg-lime-400 font-semibold"
            >
              <Link to="/exam-registration">Daftar Sekarang</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Carousel */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              Galeri Kegiatan
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Dokumentasi kegiatan dan pencapaian Kolegium Optometris
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentGallery * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(galleryItems.length / 3) }).map(
                  (_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {galleryItems
                          .slice(slideIndex * 3, slideIndex * 3 + 3)
                          .map((item, index) => (
                            <div
                              key={index}
                              className="relative group cursor-pointer"
                            >
                              <div className="relative h-48 sm:h-64 rounded-lg overflow-hidden">
                                <BoxImage
                                  src={item.src || "/placeholder.svg"}
                                  alt={item.title}
                                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <h3 className="font-semibold text-sm sm:text-base">
                                    {item.title}
                                  </h3>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Gallery Controls */}
            <button
              onClick={prevGallery}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={nextGallery}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>

            {/* Gallery Indicators */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {Array.from({ length: Math.ceil(galleryItems.length / 3) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentGallery(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                      index === currentGallery ? "bg-teal-600" : "bg-gray-300"
                    }`}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
