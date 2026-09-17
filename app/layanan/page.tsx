"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  BadgeCheck,
  Building2,
  ChevronRight,
  ClipboardList,
  FlaskConical,
  HeartPulse,
  Hospital,
  Search,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Users,
  UserRound,
  X,
} from "lucide-react";

type ClusterId =
  | "semua"
  | "klaster1"
  | "klaster2"
  | "klaster3"
  | "klaster4"
  | "lintas";

type Service = {
  id: number;
  cluster: Exclude<ClusterId, "semua">;
  clusterNumber: string;
  clusterName: string;
  title: string;
  description: string;
  icon: React.ElementType;
  requirements: string[];
};

const categories = [
  {
    id: "semua" as ClusterId,
    number: "ALL",
    title: "Semua",
    description: "Seluruh layanan",
  },
  {
    id: "klaster1" as ClusterId,
    number: "01",
    title: "Manajemen",
    description: "Tata kelola",
  },
  {
    id: "klaster2" as ClusterId,
    number: "02",
    title: "Ibu & Anak",
    description: "Kesehatan keluarga",
  },
  {
    id: "klaster3" as ClusterId,
    number: "03",
    title: "Dewasa & Lansia",
    description: "Usia produktif",
  },
  {
    id: "klaster4" as ClusterId,
    number: "04",
    title: "Penyakit Menular",
    description: "Pencegahan & pengendalian",
  },
  {
    id: "lintas" as ClusterId,
    number: "05",
    title: "Lintas Klaster",
    description: "Layanan pendukung",
  },
];

const services: Service[] = [
  // KLASTER 1
  {
    id: 1,
    cluster: "klaster1",
    clusterNumber: "KLASTER 01",
    clusterName: "Manajemen",
    title: "Administrasi & Informasi",
    description:
      "Layanan informasi, administrasi, dan kebutuhan umum masyarakat terkait pelayanan Puskesmas.",
    icon: ClipboardList,
    requirements: [
      "Identitas diri",
      "Data administrasi yang diperlukan",
    ],
  },
  {
    id: 2,
    cluster: "klaster1",
    clusterNumber: "KLASTER 01",
    clusterName: "Manajemen",
    title: "Informasi Pelayanan",
    description:
      "Informasi mengenai layanan, jadwal, persyaratan, serta berbagai informasi Puskesmas.",
    icon: Building2,
    requirements: [
      "Tidak ada persyaratan khusus",
      "Menyampaikan kebutuhan informasi",
    ],
  },
  {
    id: 3,
    cluster: "klaster1",
    clusterNumber: "KLASTER 01",
    clusterName: "Manajemen",
    title: "Pengaduan & Masukan",
    description:
      "Media untuk menyampaikan pengaduan, saran, dan masukan mengenai pelayanan Puskesmas.",
    icon: ShieldCheck,
    requirements: [
      "Uraian pengaduan",
      "Identitas jika diperlukan",
    ],
  },

  // KLASTER 2
  {
    id: 4,
    cluster: "klaster2",
    clusterNumber: "KLASTER 02",
    clusterName: "Ibu dan Anak",
    title: "Kesehatan Ibu",
    description:
      "Pelayanan kesehatan bagi ibu sesuai dengan kebutuhan pada masa kehamilan hingga setelah persalinan.",
    icon: HeartPulse,
    requirements: [
      "Kartu identitas",
      "Buku KIA jika tersedia",
    ],
  },
  {
    id: 5,
    cluster: "klaster2",
    clusterNumber: "KLASTER 02",
    clusterName: "Ibu dan Anak",
    title: "Kesehatan Bayi & Balita",
    description:
      "Pelayanan kesehatan bayi dan balita termasuk pemantauan pertumbuhan dan perkembangan.",
    icon: Baby,
    requirements: [
      "Identitas anak/orang tua",
      "Buku KIA jika tersedia",
    ],
  },
  {
    id: 6,
    cluster: "klaster2",
    clusterNumber: "KLASTER 02",
    clusterName: "Ibu dan Anak",
    title: "Imunisasi",
    description:
      "Pelayanan imunisasi sesuai dengan program dan jadwal yang berlaku.",
    icon: Syringe,
    requirements: [
      "Buku KIA atau catatan imunisasi",
      "Kartu identitas",
    ],
  },
  {
    id: 7,
    cluster: "klaster2",
    clusterNumber: "KLASTER 02",
    clusterName: "Ibu dan Anak",
    title: "Kesehatan Anak & Remaja",
    description:
      "Pelayanan kesehatan untuk anak usia sekolah dan remaja sesuai kebutuhan.",
    icon: Users,
    requirements: [
      "Kartu identitas",
      "Kartu pelajar jika diperlukan",
    ],
  },

  // KLASTER 3
  {
    id: 8,
    cluster: "klaster3",
    clusterNumber: "KLASTER 03",
    clusterName: "Usia Dewasa & Lansia",
    title: "Kesehatan Dewasa",
    description:
      "Pelayanan kesehatan bagi masyarakat usia dewasa dan usia produktif.",
    icon: Stethoscope,
    requirements: [
      "Kartu identitas",
      "Kartu JKN jika tersedia",
    ],
  },
  {
    id: 9,
    cluster: "klaster3",
    clusterNumber: "KLASTER 03",
    clusterName: "Usia Dewasa & Lansia",
    title: "Kesehatan Lansia",
    description:
      "Pelayanan kesehatan bagi masyarakat lanjut usia sesuai kebutuhan kesehatan.",
    icon: UserRound,
    requirements: [
      "Kartu identitas",
      "Dokumen kesehatan jika ada",
    ],
  },
  {
    id: 10,
    cluster: "klaster3",
    clusterNumber: "KLASTER 03",
    clusterName: "Usia Dewasa & Lansia",
    title: "Skrining Kesehatan",
    description:
      "Pemeriksaan dan skrining untuk membantu mengenali faktor risiko kesehatan.",
    icon: HeartPulse,
    requirements: [
      "Kartu identitas",
      "Mengikuti prosedur pemeriksaan",
    ],
  },

  // KLASTER 4
  {
    id: 11,
    cluster: "klaster4",
    clusterNumber: "KLASTER 04",
    clusterName: "Penyakit Menular",
    title: "Pencegahan & Pengendalian",
    description:
      "Kegiatan pencegahan dan pengendalian penyakit menular di wilayah kerja Puskesmas.",
    icon: ShieldCheck,
    requirements: [
      "Kartu identitas",
      "Informasi kondisi atau keluhan",
    ],
  },
  {
    id: 12,
    cluster: "klaster4",
    clusterNumber: "KLASTER 04",
    clusterName: "Penyakit Menular",
    title: "Surveilans Penyakit",
    description:
      "Pemantauan dan pelaporan situasi penyakit menular sebagai bagian dari kegiatan kesehatan masyarakat.",
    icon: ClipboardList,
    requirements: [
      "Informasi kejadian",
      "Data pendukung jika diperlukan",
    ],
  },
  {
    id: 13,
    cluster: "klaster4",
    clusterNumber: "KLASTER 04",
    clusterName: "Penyakit Menular",
    title: "Kesehatan Lingkungan",
    description:
      "Kegiatan yang berkaitan dengan kondisi lingkungan untuk mendukung kesehatan masyarakat.",
    icon: Building2,
    requirements: [
      "Informasi lokasi",
      "Data pendukung jika diperlukan",
    ],
  },

  // LINTAS KLASTER
  {
    id: 14,
    cluster: "lintas",
    clusterNumber: "LINTAS KLASTER",
    clusterName: "Pelayanan Pendukung",
    title: "Kegawatdaruratan",
    description:
      "Pelayanan untuk kondisi yang membutuhkan penanganan kegawatdaruratan sesuai kemampuan Puskesmas.",
    icon: Hospital,
    requirements: [
      "Segera melapor kepada petugas",
      "Identitas jika tersedia",
    ],
  },
  {
    id: 15,
    cluster: "lintas",
    clusterNumber: "LINTAS KLASTER",
    clusterName: "Pelayanan Pendukung",
    title: "Laboratorium",
    description:
      "Pelayanan pemeriksaan laboratorium sesuai dengan jenis pemeriksaan yang tersedia.",
    icon: FlaskConical,
    requirements: [
      "Kartu identitas",
      "Permintaan pemeriksaan",
    ],
  },
  {
    id: 16,
    cluster: "lintas",
    clusterNumber: "LINTAS KLASTER",
    clusterName: "Pelayanan Pendukung",
    title: "Kefarmasian",
    description:
      "Pelayanan kefarmasian untuk mendukung kebutuhan pengobatan sesuai ketentuan.",
    icon: BadgeCheck,
    requirements: [
      "Resep atau dokumen pelayanan",
      "Kartu identitas jika diperlukan",
    ],
  },
  {
    id: 17,
    cluster: "lintas",
    clusterNumber: "LINTAS KLASTER",
    clusterName: "Pelayanan Pendukung",
    title: "Gigi & Mulut",
    description:
      "Pelayanan kesehatan gigi dan mulut sesuai jenis pelayanan yang tersedia.",
    icon: Stethoscope,
    requirements: [
      "Kartu identitas",
      "Kartu JKN jika tersedia",
    ],
  },
];

export default function LayananPage() {
  const [activeCategory, setActiveCategory] =
    useState<ClusterId>("semua");

  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = useMemo(() => {
    const keyword = searchQuery.toLowerCase().trim();

    return services.filter((service) => {
      const categoryMatch =
        activeCategory === "semua" ||
        service.cluster === activeCategory;

      const searchMatch =
        !keyword ||
        service.title.toLowerCase().includes(keyword) ||
        service.description.toLowerCase().includes(keyword) ||
        service.clusterName.toLowerCase().includes(keyword) ||
        service.clusterNumber.toLowerCase().includes(keyword);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-[#f6faf8] text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-teal-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-10 lg:px-8 lg:pb-20 lg:pt-14">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-emerald-600"
          >
            <ArrowRight className="rotate-180" size={16} />
            Kembali ke Beranda
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_300px]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Integrasi Pelayanan Kesehatan Primer
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Layanan Kesehatan
                <span className="block text-emerald-600">
                  Puskesmas Tarailu Sampaga
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                Temukan berbagai informasi pelayanan kesehatan
                berdasarkan klaster Integrasi Pelayanan Kesehatan
                Primer (ILP).
              </p>
            </div>

            <div className="hidden lg:flex lg:justify-end">
              <div className="relative flex h-64 w-64 items-center justify-center rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-sm">
                <div className="absolute h-40 w-40 rounded-full bg-white shadow-sm" />

                <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-emerald-600 text-white shadow-xl shadow-emerald-600/20">
                  <HeartPulse size={48} strokeWidth={1.7} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        {/* TITLE */}
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
              Daftar Pelayanan
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Pilih layanan yang kamu butuhkan
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Gunakan kategori ILP atau pencarian untuk menemukan
              layanan dengan lebih cepat.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Stethoscope size={20} />
            </div>

            <div>
              <p className="text-2xl font-bold leading-none text-slate-900">
                {filteredServices.length}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                layanan tersedia
              </p>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className="mb-7 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
          <div className="flex items-center gap-3 px-3">
            <Search size={21} className="text-slate-400" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari layanan, misalnya imunisasi, laboratorium..."
              className="h-12 min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* CATEGORY */}
        <div className="mb-10 overflow-x-auto pb-2">
          <div className="flex min-w-max gap-3">
            {categories.map((category) => {
              const active = activeCategory === category.id;

              const count =
                category.id === "semua"
                  ? services.length
                  : services.filter(
                      (item) => item.cluster === category.id
                    ).length;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category.id)
                  }
                  className={`group flex min-w-[150px] items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-200 ${
                    active
                      ? "border-emerald-600 bg-emerald-600 text-white shadow-lg shadow-emerald-600/15"
                      : "border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                      active
                        ? "bg-white/15 text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-emerald-50 group-hover:text-emerald-600"
                    }`}
                  >
                    {category.number}
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      {category.title}
                    </p>

                    <p
                      className={`mt-0.5 text-[11px] ${
                        active
                          ? "text-emerald-50"
                          : "text-slate-400"
                      }`}
                    >
                      {count} layanan
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* RESULT INFO */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-slate-900">
              {categories.find(
                (item) => item.id === activeCategory
              )?.title}
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Menampilkan {filteredServices.length} layanan
            </p>
          </div>

          {activeCategory !== "semua" && (
            <button
              type="button"
              onClick={() => setActiveCategory("semua")}
              className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Lihat semua
            </button>
          )}
        </div>

        {/* SERVICE GRID */}
        {filteredServices.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.id}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  {/* TOP */}
                  <div className="flex items-start justify-between p-6 pb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                      <Icon size={27} strokeWidth={1.7} />
                    </div>

                    <span className="rounded-full bg-slate-50 px-3 py-1.5 text-[10px] font-bold tracking-wider text-slate-400">
                      {service.clusterNumber}
                    </span>
                  </div>

                  {/* BODY */}
                  <div className="flex flex-1 flex-col px-6 pb-5">
                    <p className="mb-2 text-xs font-semibold text-emerald-600">
                      {service.clusterName}
                    </p>

                    <h3 className="text-xl font-bold leading-snug text-slate-900">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {service.description}
                    </p>

                    {/* REQUIREMENT */}
                    <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <BadgeCheck
                          size={17}
                          className="text-emerald-600"
                        />

                        <span className="text-xs font-bold text-slate-700">
                          Persyaratan umum
                        </span>
                      </div>

                      <ul className="space-y-2">
                        {service.requirements.map(
                          (requirement, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-xs leading-5 text-slate-500"
                            >
                              <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[9px] font-bold text-emerald-600">
                                ✓
                              </span>

                              {requirement}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div className="border-t border-slate-100 px-6 py-4">
                    <Link
                      href="/persyaratan"
                      className="flex items-center justify-between text-sm font-semibold text-slate-600 transition group-hover:text-emerald-600"
                    >
                      <span>
                        Lihat persyaratan lengkap
                      </span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 transition group-hover:bg-emerald-50">
                        <ChevronRight size={17} />
                      </span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* EMPTY */
          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
              <Search size={28} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Layanan tidak ditemukan
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Coba gunakan kata pencarian lain atau pilih
              kategori layanan yang berbeda.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("semua");
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
            >
              Tampilkan semua layanan
              <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* BOTTOM CTA */}
        <div className="mt-12 overflow-hidden rounded-[2rem] bg-slate-900">
          <div className="relative px-7 py-9 sm:px-10 lg:px-12">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                  Butuh informasi lebih lanjut?
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  Hubungi Puskesmas Tarailu Sampaga
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                  Dapatkan informasi mengenai jadwal, persyaratan,
                  dan layanan yang tersedia.
                </p>
              </div>

              <Link
                href="/kontak"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
              >
                Hubungi Kami
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
