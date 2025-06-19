import { z } from "zod";

export const examRegistrationSchema = z.object({
  firstName: z
    .string()
    .min(2, "Nama depan minimal 2 karakter")
    .max(50, "Nama depan maksimal 50 karakter")
    .regex(/^[a-zA-Z\s]+$/, "Nama depan hanya boleh berisi huruf dan spasi"),

  lastName: z
    .string()
    .min(2, "Nama akhir minimal 2 karakter")
    .max(50, "Nama akhir maksimal 50 karakter")
    .regex(/^[a-zA-Z\s]+$/, "Nama akhir hanya boleh berisi huruf dan spasi"),

  kodePTS: z
    .string()
    .min(3, "Kode PTS minimal 3 karakter")
    .max(10, "Kode PTS maksimal 10 karakter")
    .regex(
      /^[A-Z0-9]+$/,
      "Kode PTS hanya boleh berisi huruf kapital dan angka",
    ),

  sks: z
    .string()
    .regex(/^\d+$/, "SKS harus berupa angka")
    .transform(Number)
    .refine(val => val >= 120 && val <= 200, "SKS harus antara 120-200"),

  tahunMasuk: z
    .string()
    .regex(/^\d{4}$/, "Tahun masuk harus 4 digit")
    .transform(Number)
    .refine(
      val => val >= 2000 && val <= new Date().getFullYear(),
      "Tahun masuk tidak valid",
    ),

  noKTP: z.string().regex(/^\d{16}$/, "Nomor KTP harus 16 digit angka"),

  departemen: z
    .string()
    .min(3, "Departemen minimal 3 karakter")
    .max(100, "Departemen maksimal 100 karakter"),

  alamatInstitusi: z
    .string()
    .min(10, "Alamat institusi minimal 10 karakter")
    .max(200, "Alamat institusi maksimal 200 karakter"),

  programStudi: z
    .string()
    .min(3, "Program studi minimal 3 karakter")
    .max(100, "Program studi maksimal 100 karakter"),

  nomorTelepon: z
    .string()
    .regex(/^(\+62|62|0)[0-9]{9,13}$/, "Format nomor telepon tidak valid"),

  kota: z
    .string()
    .min(2, "Nama kota minimal 2 karakter")
    .max(50, "Nama kota maksimal 50 karakter"),

  negara: z
    .string()
    .min(2, "Nama negara minimal 2 karakter")
    .max(50, "Nama negara maksimal 50 karakter")
    .default("Indonesia"),
});

export type ExamRegistrationFormData = z.infer<typeof examRegistrationSchema>;
