// // import { useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import { Alert, AlertDescription } from "@/components/ui/alert";
// // import { Progress } from "@/components/ui/progress";
// // import {
// //   CheckCircle,
// //   AlertCircle,
// //   FileText,
// //   User,
// //   GraduationCap,
// //   MapPin,
// //   ArrowLeft,
// // } from "lucide-react";

// // import { Link } from "@remix-run/react";
// // import {
// //   ExamRegistrationFormData,
// //   examRegistrationSchema,
// // } from "@/lib/validation/exam-registration";

// // export default function ExamRegistrationPage() {
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [submitSuccess, setSubmitSuccess] = useState(false);

// //   const completedFields = Object.values(watchedFields).filter(Boolean).length;
// //   const totalFields = Object.keys(examRegistrationSchema.shape).length;
// //   const progressPercentage = Math.round((completedFields / totalFields) * 100);

// //   const onSubmit = async (data: ExamRegistrationFormData) => {
// //     setIsSubmitting(true);

// //     try {
// //       // Simulate API call
// //       await new Promise(resolve => setTimeout(resolve, 2000));

// //       console.log("Form submitted:", data);
// //       setSubmitSuccess(true);
// //     } catch (error) {
// //       console.error("Submission error:", error);
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   if (submitSuccess) {
// //     return (
// //       <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white flex items-center justify-center p-4">
// //         <Card className="w-full max-w-md text-center">
// //           <CardHeader>
// //             <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
// //               <CheckCircle className="h-8 w-8 text-green-600" />
// //             </div>
// //             <CardTitle className="text-2xl font-bold text-green-600">
// //               Pendaftaran Berhasil!
// //             </CardTitle>
// //             <CardDescription>
// //               Terima kasih telah mendaftar ujian kompetensi. Kami akan
// //               menghubungi Anda dalam 3-5 hari kerja.
// //             </CardDescription>
// //           </CardHeader>
// //           <CardContent>
// //             <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
// //               <Link to="/">Kembali ke Beranda</Link>
// //             </Button>
// //           </CardContent>
// //         </Card>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white py-8">
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Header */}
// //         <div className="text-center mb-8">
// //           <div className="mb-6">
// //             <Button
// //               asChild
// //               variant="outline"
// //               className="border-teal-600 text-teal-600 hover:bg-teal-50"
// //             >
// //               <Link to="/">
// //                 <ArrowLeft className="mr-2 h-4 w-4" />
// //                 Kembali ke Beranda
// //               </Link>
// //             </Button>
// //           </div>
// //           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// //             Pendaftaran Ujian Kompetensi
// //           </h1>
// //           <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
// //             Lengkapi formulir di bawah ini untuk mendaftar ujian kompetensi
// //             optometri nasional
// //           </p>
// //         </div>

// //         {/* Progress Bar */}
// //         <Card className="mb-8 max-w-4xl mx-auto">
// //           <CardContent className="pt-6">
// //             <div className="flex items-center justify-between mb-2">
// //               <span className="text-sm font-medium text-gray-700">
// //                 Progress Pengisian
// //               </span>
// //               <span className="text-sm font-medium text-teal-600">
// //                 {progressPercentage}%
// //               </span>
// //             </div>
// //             <Progress value={progressPercentage} className="h-2" />
// //           </CardContent>
// //         </Card>

// //         <form onSubmit={handleSubmit(onSubmit)} className="max-w-6xl mx-auto">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
// //             {/* Personal Information */}
// //             <Card>
// //               <CardHeader>
// //                 <CardTitle className="flex items-center gap-2">
// //                   <User className="h-5 w-5 text-teal-600" />
// //                   Informasi Pribadi
// //                 </CardTitle>
// //                 <CardDescription>Data pribadi dan identitas</CardDescription>
// //               </CardHeader>
// //               <CardContent className="space-y-4">
// //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                   <div className="space-y-2">
// //                     <Label htmlFor="firstName">Nama Depan *</Label>
// //                     <Input
// //                       id="firstName"
// //                       placeholder="Masukkan nama depan"
// //                       {...register("firstName")}
// //                       className={errors.firstName ? "border-red-500" : ""}
// //                     />
// //                     {errors.firstName && (
// //                       <p className="text-sm text-red-500">
// //                         {errors.firstName.message}
// //                       </p>
// //                     )}
// //                   </div>

// //                   <div className="space-y-2">
// //                     <Label htmlFor="lastName">Nama Akhir *</Label>
// //                     <Input
// //                       id="lastName"
// //                       placeholder="Masukkan nama akhir"
// //                       {...register("lastName")}
// //                       className={errors.lastName ? "border-red-500" : ""}
// //                     />
// //                     {errors.lastName && (
// //                       <p className="text-sm text-red-500">
// //                         {errors.lastName.message}
// //                       </p>
// //                     )}
// //                   </div>
// //                 </div>

// //                 <div className="space-y-2">
// //                   <Label htmlFor="noKTP">No. KTP *</Label>
// //                   <Input
// //                     id="noKTP"
// //                     placeholder="Masukkan nomor KTP (16 digit)"
// //                     {...register("noKTP")}
// //                     className={errors.noKTP ? "border-red-500" : ""}
// //                   />
// //                   {errors.noKTP && (
// //                     <p className="text-sm text-red-500">
// //                       {errors.noKTP.message}
// //                     </p>
// //                   )}
// //                 </div>

// //                 <div className="space-y-2">
// //                   <Label htmlFor="nomorTelepon">Nomor Telepon *</Label>
// //                   <Input
// //                     id="nomorTelepon"
// //                     placeholder="Masukkan nomor telepon"
// //                     {...register("nomorTelepon")}
// //                     className={errors.nomorTelepon ? "border-red-500" : ""}
// //                   />
// //                   {errors.nomorTelepon && (
// //                     <p className="text-sm text-red-500">
// //                       {errors.nomorTelepon.message}
// //                     </p>
// //                   )}
// //                 </div>
// //               </CardContent>
// //             </Card>

// //             {/* Academic Information */}
// //             <Card>
// //               <CardHeader>
// //                 <CardTitle className="flex items-center gap-2">
// //                   <GraduationCap className="h-5 w-5 text-teal-600" />
// //                   Informasi Akademik
// //                 </CardTitle>
// //                 <CardDescription>Data pendidikan dan institusi</CardDescription>
// //               </CardHeader>
// //               <CardContent className="space-y-4">
// //                 <div className="space-y-2">
// //                   <Label htmlFor="kodePTS">Kode PTS *</Label>
// //                   <Input
// //                     id="kodePTS"
// //                     placeholder="Masukkan kode PTS"
// //                     {...register("kodePTS")}
// //                     className={errors.kodePTS ? "border-red-500" : ""}
// //                   />
// //                   {errors.kodePTS && (
// //                     <p className="text-sm text-red-500">
// //                       {errors.kodePTS.message}
// //                     </p>
// //                   )}
// //                 </div>

// //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                   <div className="space-y-2">
// //                     <Label htmlFor="sks">SKS *</Label>
// //                     <Input
// //                       id="sks"
// //                       placeholder="Masukkan jumlah SKS"
// //                       {...register("sks")}
// //                       className={errors.sks ? "border-red-500" : ""}
// //                     />
// //                     {errors.sks && (
// //                       <p className="text-sm text-red-500">
// //                         {errors.sks.message}
// //                       </p>
// //                     )}
// //                   </div>

// //                   <div className="space-y-2">
// //                     <Label htmlFor="tahunMasuk">Tahun Masuk *</Label>
// //                     <Input
// //                       id="tahunMasuk"
// //                       placeholder="Masukkan tahun masuk"
// //                       {...register("tahunMasuk")}
// //                       className={errors.tahunMasuk ? "border-red-500" : ""}
// //                     />
// //                     {errors.tahunMasuk && (
// //                       <p className="text-sm text-red-500">
// //                         {errors.tahunMasuk.message}
// //                       </p>
// //                     )}
// //                   </div>
// //                 </div>

// //                 <div className="space-y-2">
// //                   <Label htmlFor="departemen">Departemen *</Label>
// //                   <Input
// //                     id="departemen"
// //                     placeholder="Masukkan departemen"
// //                     {...register("departemen")}
// //                     className={errors.departemen ? "border-red-500" : ""}
// //                   />
// //                   {errors.departemen && (
// //                     <p className="text-sm text-red-500">
// //                       {errors.departemen.message}
// //                     </p>
// //                   )}
// //                 </div>

// //                 <div className="space-y-2">
// //                   <Label htmlFor="programStudi">Program Studi *</Label>
// //                   <Input
// //                     id="programStudi"
// //                     placeholder="Masukkan program studi"
// //                     {...register("programStudi")}
// //                     className={errors.programStudi ? "border-red-500" : ""}
// //                   />
// //                   {errors.programStudi && (
// //                     <p className="text-sm text-red-500">
// //                       {errors.programStudi.message}
// //                     </p>
// //                   )}
// //                 </div>
// //               </CardContent>
// //             </Card>

// //             {/* Location Information */}
// //             <Card className="lg:col-span-2">
// //               <CardHeader>
// //                 <CardTitle className="flex items-center gap-2">
// //                   <MapPin className="h-5 w-5 text-teal-600" />
// //                   Informasi Lokasi
// //                 </CardTitle>
// //                 <CardDescription>Alamat institusi dan lokasi</CardDescription>
// //               </CardHeader>
// //               <CardContent className="space-y-4">
// //                 <div className="space-y-2">
// //                   <Label htmlFor="alamatInstitusi">Alamat Institusi *</Label>
// //                   <Input
// //                     id="alamatInstitusi"
// //                     placeholder="Masukkan alamat institusi lengkap"
// //                     {...register("alamatInstitusi")}
// //                     className={errors.alamatInstitusi ? "border-red-500" : ""}
// //                   />
// //                   {errors.alamatInstitusi && (
// //                     <p className="text-sm text-red-500">
// //                       {errors.alamatInstitusi.message}
// //                     </p>
// //                   )}
// //                 </div>

// //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                   <div className="space-y-2">
// //                     <Label htmlFor="kota">Kota *</Label>
// //                     <Input
// //                       id="kota"
// //                       placeholder="Masukkan nama kota"
// //                       {...register("kota")}
// //                       className={errors.kota ? "border-red-500" : ""}
// //                     />
// //                     {errors.kota && (
// //                       <p className="text-sm text-red-500">
// //                         {errors.kota.message}
// //                       </p>
// //                     )}
// //                   </div>

// //                   <div className="space-y-2">
// //                     <Label htmlFor="negara">Negara *</Label>
// //                     <Input
// //                       id="negara"
// //                       placeholder="Masukkan nama negara"
// //                       {...register("negara")}
// //                       className={errors.negara ? "border-red-500" : ""}
// //                     />
// //                     {errors.negara && (
// //                       <p className="text-sm text-red-500">
// //                         {errors.negara.message}
// //                       </p>
// //                     )}
// //                   </div>
// //                 </div>
// //               </CardContent>
// //             </Card>
// //           </div>

// //           {/* Submit Section */}
// //           <Card className="mt-8">
// //             <CardContent className="pt-6">
// //               {Object.keys(errors).length > 0 && (
// //                 <Alert className="mb-6 border-red-200 bg-red-50">
// //                   <AlertCircle className="h-4 w-4 text-red-600" />
// //                   <AlertDescription className="text-red-600">
// //                     Mohon perbaiki kesalahan pada formulir sebelum mengirim.
// //                   </AlertDescription>
// //                 </Alert>
// //               )}

// //               <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //                 <Button
// //                   type="button"
// //                   variant="outline"
// //                   className="border-teal-600 text-teal-600 hover:bg-teal-50"
// //                   onClick={() => window.history.back()}
// //                 >
// //                   Kembali
// //                 </Button>
// //                 <Button
// //                   type="submit"
// //                   disabled={isSubmitting || !isValid}
// //                   className="bg-teal-600 hover:bg-teal-700 min-w-[200px]"
// //                 >
// //                   {isSubmitting ? (
// //                     <>
// //                       <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
// //                       Memproses...
// //                     </>
// //                   ) : (
// //                     <>
// //                       <FileText className="h-4 w-4 mr-2" />
// //                       Kirim Pendaftaran
// //                     </>
// //                   )}
// //                 </Button>
// //               </div>
// //             </CardContent>
// //           </Card>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // // app/routes/exam-registration.route.tsx
// // import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
// // import { json, redirect } from "@remix-run/node";
// // import { useActionData, Form, useNavigation } from "@remix-run/react";
// // import { examRegistrationSchema } from "~/lib/validations/exam-registration";
// // import type { ExamRegistrationFormData } from "~/lib/validations/exam-registration";

// // export async function action({ request }: ActionFunctionArgs) {
// //   const formData = await request.formData();

// //   const rawData = Object.fromEntries(formData) as Record<string, string>;
// //   const parseResult = examRegistrationSchema.safeParse(rawData);

// //   if (!parseResult.success) {
// //     return json(
// //       {
// //         errors: parseResult.error.flatten().fieldErrors,
// //         values: rawData,
// //       },
// //       { status: 400 },
// //     );
// //   }

// //   // Submit to DB or API here...
// //   console.log("Valid form data:", parseResult.data);

// //   return redirect("/exam-registration/success");
// // }

// import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
// import { Form, useActionData, useNavigation } from "@remix-run/react";
// import { Progress } from "@/components/ui/progress";
// import { FormField } from "@/components/FormField";
// import { useState } from "react";
// import { examRegistrationSchema } from "@/lib/validation/exam-registration";

// export async function action({ request }: ActionFunctionArgs) {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);
//   const result = examRegistrationSchema.safeParse(data);

//   if (!result.success) {
//     return json(
//       { errors: result.error.flatten().fieldErrors, values: data },
//       { status: 400 },
//     );
//   }

//   // Simulate API call or save to DB
//   await new Promise(res => setTimeout(res, 1000));

//   return redirect("/exam-registration/success");
// }

// const fieldConfigs = [
//   { name: "firstName", label: "Nama Depan" },
//   { name: "lastName", label: "Nama Akhir" },
//   { name: "noKTP", label: "No. KTP" },
//   { name: "nomorTelepon", label: "Nomor Telepon" },
//   { name: "kodePTS", label: "Kode PTS" },
//   { name: "sks", label: "SKS" },
//   { name: "tahunMasuk", label: "Tahun Masuk" },
//   { name: "departemen", label: "Departemen" },
//   { name: "programStudi", label: "Program Studi" },
//   { name: "alamatInstitusi", label: "Alamat Institusi" },
//   { name: "kota", label: "Kota" },
//   { name: "negara", label: "Negara" },
// ];

// export default function ExamRegistrationPage() {
//   const actionData = useActionData<typeof action>();
//   const navigation = useNavigation();
//   const values = actionData?.values || {};
//   const errors = actionData?.errors || {};
//   const isSubmitting = navigation.state === "submitting";
//   const [formValues, setFormValues] = useState<Record<string, string>>(
//     Object.fromEntries(fieldConfigs.map(f => [f.name, ""])),
//   );
//   const totalFields = fieldConfigs.length;
//   const completed = Object.values(formValues).filter(
//     v => v.trim() !== "",
//   ).length;
//   const progress = Math.round((completed / totalFields) * 100);

//   return (
//     <div className="min-h-screen bg-teal-50 py-10">
//       <div className="container mx-auto px-4 max-w-5xl">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
//           Pendaftaran Ujian Kompetensi
//         </h1>

//         <div className="mb-8">
//           <div className="flex items-center justify-between mb-1">
//             <span className="text-sm text-gray-600">Progress Pengisian</span>
//             <span className="text-sm font-medium text-teal-600">
//               {progress}%
//             </span>
//           </div>
//           <Progress value={progress} className="h-2" />
//         </div>

//         <Form method="post">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {fieldConfigs.map(field => (
//               <FormField
//                 key={field.name}
//                 name={field.name}
//                 label={field.label}
//                 value={formValues[field.name]}
//                 onChange={e =>
//                   setFormValues(prev => ({
//                     ...prev,
//                     [field.name]: e.target.value,
//                   }))
//                 }
//                 errors={errors}
//               />
//             ))}
//           </div>

//           <div className="mt-6 text-center">
//             <button
//               type="submit"
//               className="bg-teal-600 text-white px-6 py-2 rounded"
//             >
//               Kirim Pendaftaran
//             </button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { z } from "zod";
import { Form, Link } from "@remix-run/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  FileText,
  User,
  GraduationCap,
  MapPin,
  ArrowLeft,
} from "lucide-react";

const schema = z.object({
  firstName: z.string().min(1, "Nama depan wajib diisi"),
  lastName: z.string().min(1, "Nama akhir wajib diisi"),
  noKTP: z.string().length(16, "Nomor KTP harus 16 digit angka"),
  nomorTelepon: z
    .string()
    .regex(/^\d{10,15}$/, "Format nomor telepon tidak valid"),
  kodePTS: z.string().min(3, "Kode PTS minimal 3 karakter"),
  sks: z.string().regex(/^\d+$/, "SKS harus berupa angka"),
  tahunMasuk: z.string().length(4, "Tahun masuk harus 4 digit"),
  departemen: z.string().min(3, "Departemen minimal 3 karakter"),
  programStudi: z.string().min(3, "Program studi minimal 3 karakter"),
  alamatInstitusi: z.string().min(10, "Alamat institusi minimal 10 karakter"),
  kota: z.string().min(2, "Nama kota minimal 2 karakter"),
  negara: z.string().min(2, "Nama negara minimal 2 karakter"),
});

export default function ExamRegistrationForm() {
  const [values, setValues] = useState<Record<string, string>>({
    firstName: "",
    lastName: "",
    noKTP: "",
    nomorTelepon: "",
    kodePTS: "",
    sks: "",
    tahunMasuk: "",
    departemen: "",
    programStudi: "",
    alamatInstitusi: "",
    kota: "",
    negara: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // const isAnyFieldFilled = Object.values(values).some(v => v.trim() !== "");
    // if (!isAnyFieldFilled) {
    //   setErrors({});
    //   return;
    // }
    // const result = schema.safeParse(values);
    // if (!result.success) {
    //   setErrors(
    //     Object.fromEntries(
    //       Object.entries(result.error.flatten().fieldErrors).map(([k, v]) => [
    //         k,
    //         v?.[0] || "",
    //       ]),
    //     ),
    //   );
    // } else {
    //   setErrors({});
    // }

    const filled = Object.values(values).filter(v => v.trim() !== "").length;
    setProgress(Math.round((filled / Object.keys(values).length) * 100));
  }, [values]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const result = schema.safeParse(values);
    if (!result.success) {
      setErrors(
        Object.fromEntries(
          Object.entries(result.error.flatten().fieldErrors).map(([k, v]) => [
            k,
            v?.[0] || "",
          ]),
        ),
      );
      setIsSubmitting(false);
      return;
    }

    console.log("Valid submission", values);
    await new Promise(r => setTimeout(r, 1000));
    setIsSubmitting(false);
  }

  return (
    <div className=" bg-gradient-to-b from-teal-100 to-teal-50 min-h-[100vh] py-10 md:px-0 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="container mb-6 text-left">
          <Button
            asChild
            variant="outline"
            className="border-teal-600  hover:bg-teal-600 hover:text-white "
          >
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Link>
          </Button>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Pendaftaran Ujian Kompetensi
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Lengkapi formulir di bawah ini untuk mendaftar ujian kompetensi
          optometri nasional
        </p>
      </div>

      <Form onSubmit={handleSubmit} className="max-w-6xl mx-auto ">
        {/* Progress Bar */}
        <Card className="mb-8  mx-auto">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Progress Pengisian
              </span>
              <span className="text-sm font-medium text-teal-600">
                {progress}%
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Example Section: Personal Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-teal-600" /> Informasi Pribadi
              </CardTitle>
              <CardDescription>Data pribadi dan identitas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nama Depan *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500">{errors.firstName}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nama Akhir *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="noKTP">No. KTP *</Label>
                <Input
                  id="noKTP"
                  name="noKTP"
                  value={values.noKTP}
                  onChange={handleChange}
                  className={errors.noKTP ? "border-red-500" : ""}
                />
                {errors.noKTP && (
                  <p className="text-sm text-red-500">{errors.noKTP}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="nomorTelepon">Nomor Telepon *</Label>
                <Input
                  id="nomorTelepon"
                  name="nomorTelepon"
                  value={values.nomorTelepon}
                  onChange={handleChange}
                  className={errors.nomorTelepon ? "border-red-500" : ""}
                />
                {errors.nomorTelepon && (
                  <p className="text-sm text-red-500">{errors.nomorTelepon}</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Informasi Akademik */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-teal-600" /> Informasi
                Akademik
              </CardTitle>
              <CardDescription>Data pendidikan dan institusi</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="kodePTS">Kode PTS *</Label>
                <Input
                  id="kodePTS"
                  name="kodePTS"
                  value={values.kodePTS}
                  onChange={handleChange}
                  className={errors.kodePTS ? "border-red-500" : ""}
                />
                {errors.kodePTS && (
                  <p className="text-sm text-red-500">{errors.kodePTS}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sks">SKS *</Label>
                  <Input
                    id="sks"
                    name="sks"
                    value={values.sks}
                    onChange={handleChange}
                    className={errors.sks ? "border-red-500" : ""}
                  />
                  {errors.sks && (
                    <p className="text-sm text-red-500">{errors.sks}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tahunMasuk">Tahun Masuk *</Label>
                  <Input
                    id="tahunMasuk"
                    name="tahunMasuk"
                    value={values.tahunMasuk}
                    onChange={handleChange}
                    className={errors.tahunMasuk ? "border-red-500" : ""}
                  />
                  {errors.tahunMasuk && (
                    <p className="text-sm text-red-500">{errors.tahunMasuk}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="departemen">Departemen *</Label>
                <Input
                  id="departemen"
                  name="departemen"
                  value={values.departemen}
                  onChange={handleChange}
                  className={errors.departemen ? "border-red-500" : ""}
                />
                {errors.departemen && (
                  <p className="text-sm text-red-500">{errors.departemen}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="programStudi">Program Studi *</Label>
                <Input
                  id="programStudi"
                  name="programStudi"
                  value={values.programStudi}
                  onChange={handleChange}
                  className={errors.programStudi ? "border-red-500" : ""}
                />
                {errors.programStudi && (
                  <p className="text-sm text-red-500">{errors.programStudi}</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Informasi Lokasi */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-teal-600" /> Informasi Lokasi
              </CardTitle>
              <CardDescription>Alamat institusi dan lokasi</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="alamatInstitusi">Alamat Institusi *</Label>
                <Input
                  id="alamatInstitusi"
                  name="alamatInstitusi"
                  value={values.alamatInstitusi}
                  onChange={handleChange}
                  className={errors.alamatInstitusi ? "border-red-500" : ""}
                />
                {errors.alamatInstitusi && (
                  <p className="text-sm text-red-500">
                    {errors.alamatInstitusi}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="kota">Kota *</Label>
                  <Input
                    id="kota"
                    name="kota"
                    value={values.kota}
                    onChange={handleChange}
                    className={errors.kota ? "border-red-500" : ""}
                  />
                  {errors.kota && (
                    <p className="text-sm text-red-500">{errors.kota}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="negara">Negara *</Label>
                  <Input
                    id="negara"
                    name="negara"
                    value={values.negara}
                    onChange={handleChange}
                    className={errors.negara ? "border-red-500" : ""}
                  />
                  {errors.negara && (
                    <p className="text-sm text-red-500">{errors.negara}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Submit Section */}
        <Card className="mt-8">
          <CardContent className="pt-6">
            {Object.keys(errors).length > 0 && (
              <Alert className="mb-6 border-red-200 bg-red-50">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-600">
                  Mohon perbaiki kesalahan pada formulir sebelum mengirim.
                </AlertDescription>
              </Alert>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                type="button"
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50"
                onClick={() => window.history.back()}
              >
                Kembali
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-teal-600 hover:bg-teal-700 min-w-[200px]"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Memproses...
                  </>
                ) : (
                  <>
                    <FileText className="h-4 w-4 mr-2" /> Kirim Pendaftaran
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </Form>
    </div>
  );
}
