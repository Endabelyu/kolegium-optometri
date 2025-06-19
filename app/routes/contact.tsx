import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { Link } from "@remix-run/react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        category: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      details: ["+62 21 1234 5678", "+62 21 8765 4321"],
      description: "Senin - Jumat, 08:00 - 17:00 WIB",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["kolegiumoptometry@gmail.com", "info@kolegiumoptometry.id"],
      description: "Respon dalam 24 jam",
    },
    {
      icon: MapPin,
      title: "Alamat",
      details: ["Jl. Kesehatan No. 123", "Jakarta Pusat 10430"],
      description: "Indonesia",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: ["Senin - Jumat: 08:00 - 17:00", "Sabtu: 08:00 - 12:00"],
      description: "Minggu dan hari libur tutup",
    },
  ];

  const faqItems = [
    {
      question: "Bagaimana cara mendaftar ujian kompetensi?",
      answer:
        "Anda dapat mendaftar melalui halaman pendaftaran online di website kami atau menghubungi kantor sekretariat.",
    },
    {
      question: "Berapa biaya ujian kompetensi?",
      answer:
        "Biaya ujian kompetensi adalah Rp 750.000 per peserta, sudah termasuk materi ujian dan sertifikat.",
    },
    {
      question: "Kapan jadwal ujian kompetensi selanjutnya?",
      answer:
        "Ujian kompetensi diselenggarakan 2 kali dalam setahun, biasanya pada bulan Juni dan September.",
    },
    {
      question: "Dokumen apa saja yang diperlukan untuk pendaftaran?",
      answer:
        "Dokumen yang diperlukan meliputi ijazah, transkrip, KTP, pas foto, surat sehat, dan surat pernyataan etik profesi.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Hubungi Kami
            </h1>
            <p className="text-lg sm:text-xl text-teal-100">
              Kami siap membantu Anda dengan pertanyaan seputar optometri dan
              ujian kompetensi
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
                </CardHeader>
                <CardContent>
                  {submitSuccess && (
                    <Alert className="mb-6 border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-600">
                        Pesan Anda telah berhasil dikirim. Kami akan merespons
                        dalam 24 jam.
                      </AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nama Lengkap *</Label>
                        <Input
                          id="name"
                          placeholder="Masukkan nama lengkap"
                          value={formData.name}
                          onChange={e =>
                            setFormData(prev => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="nama@email.com"
                          value={formData.email}
                          onChange={e =>
                            setFormData(prev => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Nomor Telepon</Label>
                        <Input
                          id="phone"
                          placeholder="08xxxxxxxxxx"
                          value={formData.phone}
                          onChange={e =>
                            setFormData(prev => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Kategori *</Label>
                        <Select
                          onValueChange={value =>
                            setFormData(prev => ({ ...prev, category: value }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih kategori" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ujian">
                              Ujian Kompetensi
                            </SelectItem>
                            <SelectItem value="sertifikasi">
                              Sertifikasi
                            </SelectItem>
                            <SelectItem value="regulasi">Regulasi</SelectItem>
                            <SelectItem value="keanggotaan">
                              Keanggotaan
                            </SelectItem>
                            <SelectItem value="lainnya">Lainnya</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subjek *</Label>
                      <Input
                        id="subject"
                        placeholder="Masukkan subjek pesan"
                        value={formData.subject}
                        onChange={e =>
                          setFormData(prev => ({
                            ...prev,
                            subject: e.target.value,
                          }))
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Pesan *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tulis pesan Anda di sini..."
                        rows={6}
                        value={formData.message}
                        onChange={e =>
                          setFormData(prev => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-teal-600 hover:bg-teal-700"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Mengirim...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Kirim Pesan
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Informasi Kontak</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                        <p className="text-gray-500 text-xs mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle>Pertanyaan Umum</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqItems.map((faq, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 pb-4 last:border-b-0"
                    >
                      <h4 className="font-medium text-gray-900 mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
