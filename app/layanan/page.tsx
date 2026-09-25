"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Baby,
  Building2,
  CheckCircle2,
  ChevronRight,
  HeartPulse,
  Hospital,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const clusters = [
  {
    number: "01",
    title: "Klaster 1",
    subtitle: "Manajemen",
    description:
      "Pengelolaan administrasi, informasi, mutu, dan koordinasi pelayanan Puskesmas.",
    icon: Building2,
    accent: "bg-emerald-50 text-emerald-700",
    services: [
      {
        title: "Administrasi & Informasi Puskesmas",
        description:
          "Informasi mengenai administrasi dan pelayanan yang tersedia di Puskesmas.",
      },
      {
        title: "Pengelolaan Data dan Informasi",
        description:
          "Pengelolaan informasi untuk mendukung pelayanan dan kegiatan Puskesmas.",
      },
      {
        title: "Informasi Pelayanan",
        description:
          "Informasi mengenai jenis pelayanan, jadwal, dan kebutuhan pelayanan.",
      },
      {
        title: "Pengaduan & Masukan Masyarakat",
        description:
          "Sarana untuk menyampaikan kritik, saran, dan masukan dari masyarakat.",
      },
    ],
  },

  {
    number: "02",
    title: "Klaster 2",
    subtitle: "Ibu dan Anak",
    description:
      "Pelayanan kesehatan bagi ibu, bayi, balita, anak, dan remaja.",
    icon: Baby,
    accent: "bg-pink-50 text-pink-700",
    services: [
      {
        title: "Pelayanan Kesehatan Ibu",
        description:
          "Pelayanan kesehatan yang berkaitan dengan kebutuhan kesehatan ibu.",
      },
      {
        title: "Pelayanan Bayi & Balita",
        description:
          "Pelayanan kesehatan untuk mendukung tumbuh kembang bayi dan balita.",
      },
      {
        title: "Imunisasi",
        description:
          "Pelayanan imunisasi sesuai dengan kebutuhan dan jadwal yang berlaku.",
      },
      {
        title: "Kesehatan Anak & Remaja",
        description:
          "Pelayanan kesehatan yang mendukung kesehatan anak dan remaja.",
      },
    ],
  },

  {
    number: "03",
    title: "Klaster 3",
    subtitle: "Usia Dewasa & Lansia",
    description:
      "Pelayanan kesehatan untuk masyarakat usia dewasa hingga lanjut usia.",
    icon: UserRound,
    accent: "bg-blue-50 text-blue-700",
    services: [
      {
        title: "Pelayanan Kesehatan Dewasa",
        description:
          "Pelayanan kesehatan untuk memenuhi kebutuhan masyarakat usia dewasa.",
      },
      {
        title: "Pelayanan Kesehatan Lansia",
        description:
          "Pelayanan kesehatan yang mendukung kesehatan dan kebutuhan lanjut usia.",
      },
      {
        title: "Skrining Kesehatan",
        description:
          "Pelayanan pemeriksaan awal untuk membantu mengenali kondisi dan faktor risiko kesehatan.",
      },
      {
        title: "Pemantauan Faktor Risiko",
        description:
          "Pemantauan berbagai faktor yang dapat memengaruhi kondisi kesehatan.",
      },
    ],
  },

  {
    number: "04",
    title: "Klaster 4",
    subtitle: "Penanggulangan Penyakit Menular",
    description:
      "Upaya pencegahan, pemantauan, dan pengendalian penyakit menular.",
    icon: ShieldCheck,
    accent: "bg-amber-50 text-amber-700",
    services: [
      {
        title: "Pencegahan & Pengendalian Penyakit Menular",
        description:
          "Upaya untuk mencegah dan mengendalikan penyebaran penyakit menular.",
      },
      {
        title: "Surveilans Penyakit",
        description:
          "Pemantauan kondisi dan perkembangan penyakit di masyarakat.",
      },
      {
        title: "Penanggulangan Kejadian Penyakit",
        description:
          "Upaya penanganan terhadap kejadian penyakit yang membutuhkan perhatian.",
      },
      {
        title: "Kesehatan Lingkungan",
        description:
          "Upaya menjaga lingkungan agar mendukung kesehatan masyarakat.",
      },
    ],
  },

  {
    number: "05",
    title: "Lintas Klaster",
    subtitle: "Pelayanan Pendukung",
    description:
      "Pelayanan yang mendukung kebutuhan kesehatan lintas kelompok dan kondisi khusus.",
    icon: Hospital,
    accent: "bg-violet-50 text-violet-700",
    services: [
      {
        title: "Pelayanan Kegawatdaruratan",
        description:
          "Pelayanan untuk kondisi kesehatan yang membutuhkan penanganan segera.",
      },
      {
        title: "Laboratorium",
        description:
          "Pelayanan pemeriksaan laboratorium untuk mendukung kebutuhan pelayanan kesehatan.",
      },
      {
        title: "Kefarmasian",
        description:
          "Pelayanan terkait obat dan informasi penggunaannya.",
      },
      {
        title: "Pelayanan Gigi & Mulut",
        description:
          "Pelayanan kesehatan yang berkaitan dengan gigi dan kesehatan mulut.",
      },
    ],
  },
];

export default function LayananPage() {
  const [selectedCluster, setSelectedCluster] = useState<
    (typeof clusters)[number] | null
  >(null);

  return (
    <main className="min-h-screen bg-[#f7faf8] text-slate-900">
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
              <HeartPulse size={23} />
            </div>

            <div>
              <div className="text-sm font-bold tracking-wide text-slate-900">
                PUSKESMAS TARAILU
              </div>
              <div className="text-xs text-slate-500">
                SAMPAGA · Portal Informasi
              </div>
            </div>
          </Link>

          <Link
            href="/"
            className="hidden items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-emerald-700 sm:flex"
          >
            <ArrowLeft size={16} />
            Kembali ke Beranda
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-14 lg:px-8 lg:pt-20">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold tracking-widest text-emerald-700">
            <Hospital size={15} />
            LAYANAN PUSKESMAS
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Pelayanan kesehatan
            <br />
            <span className="text-emerald-700">
              dalam satu tempat.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Kenali kelompok pelayanan kesehatan di Puskesmas Tarailu
            Sampaga. Pilih klaster untuk melihat layanan yang tersedia
            di dalamnya.
          </p>
        </div>
      </section>

      {/* CLUSTER LIST */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {clusters.map((cluster) => {
            const Icon = cluster.icon;

            return (
              <div
                key={cluster.number}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* NUMBER */}
                <div className="absolute right-6 top-5 text-5xl font-black tracking-tighter text-slate-100">
                  {cluster.number}
                </div>

                {/* ICON */}
                <div
                  className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${cluster.accent}`}
                >
                  <Icon size={26} />
                </div>

                {/* TITLE */}
                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                    {cluster.title}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                    {cluster.subtitle}
                  </h2>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">
                    {cluster.description}
                  </p>
                </div>

                {/* FOOTER CARD */}
                <div className="relative mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <CheckCircle2
                      size={16}
                      className="text-emerald-600"
                    />
                    {cluster.services.length} layanan
                  </div>

                  <button
                    onClick={() => setSelectedCluster(cluster)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 transition group-hover:gap-3 hover:text-emerald-800"
                  >
                    Lihat detail
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* INFORMATION BAND */}
      <section className="border-y border-emerald-100 bg-emerald-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="text-sm font-bold text-emerald-700">
              INFORMASI PELAYANAN
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-900">
              Ingin mengetahui persyaratan sebelum datang?
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Periksa dokumen dan persyaratan pelayanan terlebih dahulu.
            </p>
          </div>

          <Link
            href="/persyaratan"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800"
          >
            Lihat Persyaratan
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="font-bold text-slate-800">
              PUSKESMAS TARAILU SAMPAGA
            </p>
            <p className="mt-1">
              Portal Informasi Pelayanan Kesehatan Masyarakat.
            </p>
          </div>

          <div>© 2026 Puskesmas Tarailu Sampaga</div>
        </div>
      </footer>

      {/* DETAIL MODAL */}
      {selectedCluster && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4 py-6 backdrop-blur-sm"
          onClick={() => setSelectedCluster(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* MODAL HEADER */}
            <div className="border-b border-slate-100 px-6 pb-6 pt-7 sm:px-8">
              <button
                onClick={() => setSelectedCluster(null)}
                className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-emerald-700"
              >
                <ArrowLeft size={16} />
                Kembali
              </button>

              <div className="flex items-start gap-4">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${selectedCluster.accent}`}
                >
                  <selectedCluster.icon size={26} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                    {selectedCluster.title}
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
                    {selectedCluster.subtitle}
                  </h2>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-600">
                {selectedCluster.description}
              </p>
            </div>

            {/* SERVICES */}
            <div className="px-6 py-7 sm:px-8">
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                  LAYANAN DALAM KLASTER
                </p>

                <h3 className="mt-1 text-xl font-bold text-slate-900">
                  Pilihan pelayanan
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {selectedCluster.services.map((service, index) => (
                  <div
                    key={service.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-emerald-200 hover:bg-emerald-50/50"
                  >
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-bold text-emerald-700 shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h4 className="font-bold leading-6 text-slate-900">
                      {service.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* MODAL FOOTER */}
            <div className="border-t border-slate-100 bg-slate-50 px-6 py-5 sm:px-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-500">
                  Informasi pelayanan dapat berubah sesuai kebijakan
                  Puskesmas.
                </p>

                <Link
                  href="/persyaratan"
                  onClick={() => setSelectedCluster(null)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800"
                >
                  Lihat persyaratan
                  <ChevronRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
