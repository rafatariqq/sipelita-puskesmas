"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Baby,
  Building2,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  FlaskConical,
  HeartPulse,
  Hospital,
  ShieldCheck,
  Stethoscope,
  Syringe,
  UserRound,
  Users,
  X,
} from "lucide-react";

type Cluster = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  services: string[];
};

const clusters: Cluster[] = [
  {
    id: "klaster1",
    number: "01",
    title: "Manajemen",
    subtitle: "Klaster 1",
    description:
      "Pelayanan dan pengelolaan manajemen Puskesmas untuk mendukung penyelenggaraan pelayanan kesehatan yang terintegrasi.",
    icon: Building2,
    services: [
      "Administrasi & Informasi Puskesmas",
      "Informasi Pelayanan",
      "Pengaduan & Masukan Masyarakat",
      "Pengelolaan Data dan Informasi",
    ],
  },
  {
    id: "klaster2",
    number: "02",
    title: "Ibu & Anak",
    subtitle: "Klaster 2",
    description:
      "Pelayanan kesehatan yang berfokus pada ibu, bayi, balita, anak, dan remaja sesuai kebutuhan.",
    icon: Baby,
    services: [
      "Pelayanan Kesehatan Ibu",
      "Pelayanan Bayi & Balita",
      "Imunisasi",
      "Kesehatan Anak & Remaja",
    ],
  },
  {
    id: "klaster3",
    number: "03",
    title: "Dewasa & Lansia",
    subtitle: "Klaster 3",
    description:
      "Pelayanan kesehatan bagi usia dewasa, usia produktif, dan lanjut usia untuk mendukung kesehatan sepanjang kehidupan.",
    icon: UserRound,
    services: [
      "Pelayanan Kesehatan Dewasa",
      "Pelayanan Kesehatan Lansia",
      "Skrining Kesehatan",
      "Pemantauan Faktor Risiko",
    ],
  },
  {
    id: "klaster4",
    number: "04",
    title: "Penyakit Menular",
    subtitle: "Klaster 4",
    description:
      "Kegiatan pencegahan, surveilans, pengendalian, dan penanggulangan penyakit menular di wilayah kerja Puskesmas.",
    icon: ShieldCheck,
    services: [
      "Pencegahan & Pengendalian Penyakit Menular",
      "Surveilans Penyakit",
      "Penanggulangan Kejadian Penyakit",
      "Kesehatan Lingkungan",
    ],
  },
  {
    id: "lintas",
    number: "05",
    title: "Lintas Klaster",
    subtitle: "Pelayanan Pendukung",
    description:
      "Pelayanan pendukung yang dapat digunakan untuk menunjang kebutuhan masyarakat dari berbagai kelompok pelayanan.",
    icon: Hospital,
    services: [
      "Pelayanan Kegawatdaruratan",
      "Laboratorium",
      "Kefarmasian",
      "Pelayanan Gigi & Mulut",
    ],
  },
];

const iconList = [
  Stethoscope,
  HeartPulse,
  Syringe,
  FlaskConical,
  ClipboardList,
  Users,
];

export default function LayananPage() {
  const [selectedCluster, setSelectedCluster] =
    useState<Cluster | null>(null);

  return (
    <main className="min-h-screen bg-[#f7faf8] text-slate-800">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-white">
        {/* Background decoration */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-teal-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-8 sm:pt-10 lg:px-8 lg:pb-20">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-emerald-600"
          >
            <ArrowLeft size={16} />
            Kembali ke Beranda
          </Link>

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Pelayanan Kesehatan Primer
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Layanan Puskesmas
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              Jelajahi berbagai layanan kesehatan Puskesmas
              Tarailu Sampaga berdasarkan kelompok Integrasi
              Pelayanan Kesehatan Primer.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE SECTION
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        {/* Section heading */}
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
            Kelompok Pelayanan
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Temukan Layanan yang Kamu Butuhkan
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
            Pilih salah satu kelompok pelayanan untuk melihat
            jenis layanan yang tersedia.
          </p>
        </div>

        {/* =====================================================
            5 CLUSTER CARDS
        ===================================================== */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {clusters.map((cluster, index) => {
            const Icon = cluster.icon;

            /*
             * Card terakhir dibuat sedikit lebih lebar
             * pada desktop supaya layout terlihat seimbang.
             */
            const isLast = index === clusters.length - 1;

            return (
              <article
                key={cluster.id}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-200/60 ${
                  isLast ? "lg:col-span-1" : ""
                }`}
              >
                {/* Decorative number */}
                <span className="pointer-events-none absolute -right-3 -top-8 text-[110px] font-black leading-none text-slate-50">
                  {cluster.number}
                </span>

                {/* Icon */}
                <div className="relative flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                    <Icon size={27} strokeWidth={1.7} />
                  </div>

                  <span className="rounded-full bg-slate-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {cluster.subtitle}
                  </span>
                </div>

                {/* Content */}
                <div className="relative mt-7">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {cluster.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {cluster.description}
                  </p>
                </div>

                {/* Service preview */}
                <div className="relative mt-6 rounded-2xl bg-slate-50 p-4">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Contoh layanan
                  </p>

                  <div className="space-y-2">
                    {cluster.services.slice(0, 2).map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-2 text-xs font-medium text-slate-600"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[9px] font-bold text-emerald-600">
                          ✓
                        </span>

                        <span className="line-clamp-1">
                          {service}
                        </span>
                      </div>
                    ))}

                    {cluster.services.length > 2 && (
                      <p className="pt-1 text-[11px] font-medium text-slate-400">
                        + {cluster.services.length - 2} layanan
                        lainnya
                      </p>
                    )}
                  </div>
                </div>

                {/* Button */}
                <button
                  type="button"
                  onClick={() => setSelectedCluster(cluster)}
                  className="relative mt-5 flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  <span>Lihat Detail Layanan</span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 transition group-hover:bg-white">
                    <ChevronRight size={17} />
                  </span>
                </button>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            INFORMATION BANNER
        ===================================================== */}
        <div className="mt-10 overflow-hidden rounded-[1.75rem] bg-emerald-600">
          <div className="relative px-6 py-8 sm:px-8 lg:px-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white sm:flex">
                  <HeartPulse size={24} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-100">
                    Informasi Pelayanan
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-white">
                    Butuh informasi lebih lanjut?
                  </h3>

                  <p className="mt-1 max-w-xl text-sm leading-6 text-emerald-50">
                    Lihat persyaratan dan informasi pelayanan
                    sebelum berkunjung ke Puskesmas.
                  </p>
                </div>
              </div>

              <Link
                href="/persyaratan"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-50"
              >
                Lihat Persyaratan
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MODAL DETAIL
      ===================================================== */}
      {selectedCluster && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedCluster(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-hidden rounded-[2rem] bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal header */}
            <div className="bg-emerald-600 px-6 pb-7 pt-6 text-white">
              <button
                type="button"
                onClick={() => setSelectedCluster(null)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 transition hover:bg-white/20"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                  {(() => {
                    const Icon = selectedCluster.icon;
                    return <Icon size={28} />;
                  })()}
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-100">
                    {selectedCluster.subtitle}
                  </p>

                  <h3 className="mt-1 text-2xl font-bold">
                    {selectedCluster.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Modal body */}
            <div className="max-h-[55vh] overflow-y-auto px-6 py-6">
              <p className="text-sm leading-6 text-slate-500">
                {selectedCluster.description}
              </p>

              <div className="mt-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Layanan yang tersedia
                </p>

                <div className="space-y-3">
                  {selectedCluster.services.map(
                    (service, index) => {
                      const Icon =
                        iconList[index % iconList.length];

                      return (
                        <div
                          key={service}
                          className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
                            <Icon size={19} />
                          </div>

                          <div className="flex-1">
                            <p className="text-sm font-semibold text-slate-700">
                              {service}
                            </p>
                          </div>

                          <ChevronRight
                            size={17}
                            className="text-slate-300"
                          />
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>

            {/* Modal footer */}
            <div className="border-t border-slate-100 bg-white px-6 py-4">
              <button
                type="button"
                onClick={() => setSelectedCluster(null)}
                className="w-full rounded-xl bg-slate-100 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
