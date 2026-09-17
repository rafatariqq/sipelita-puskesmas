```tsx
"use client";

import { useState } from "react";
import {
  Building2,
  Baby,
  HeartPulse,
  ShieldPlus,
  Hospital,
  FileText,
  Monitor,
  ClipboardCheck,
  MessageSquare,
  Heart,
  Stethoscope,
  ScanHeart,
  UserRound,
  Syringe,
  Activity,
  Microscope,
  Pill,
  Ambulance,
  HandHelping,
  Users,
  Search,
} from "lucide-react";

type ClusterId = "all" | "cluster1" | "cluster2" | "cluster3" | "cluster4" | "lintas";

interface Service {
  name: string;
  description: string;
  icon: React.ElementType;
}

interface Cluster {
  id: ClusterId;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  services: Service[];
  bg: string;
  border: string;
  iconBg: string;
  iconColor: string;
  badge: string;
}

const clusters: Cluster[] = [
  {
    id: "cluster1",
    number: "KLASTER 1",
    title: "MANAJEMEN",
    subtitle: "Manajemen dan tata kelola pelayanan Puskesmas",
    icon: Building2,
    bg: "bg-blue-50",
    border: "border-blue-100",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    badge: "bg-blue-100 text-blue-700",
    services: [
      {
        name: "Administrasi",
        description: "Pelayanan administrasi dan pengelolaan dokumen Puskesmas.",
        icon: FileText,
      },
      {
        name: "Sistem Informasi",
        description: "Pengelolaan sistem informasi dan data pelayanan kesehatan.",
        icon: Monitor,
      },
      {
        name: "Manajemen Mutu",
        description: "Pengelolaan dan peningkatan mutu pelayanan kesehatan.",
        icon: ClipboardCheck,
      },
      {
        name: "Pengaduan",
        description: "Penerimaan dan pengelolaan pengaduan masyarakat.",
        icon: MessageSquare,
      },
    ],
  },

  {
    id: "cluster2",
    number: "KLASTER 2",
    title: "IBU DAN ANAK",
    subtitle: "Pelayanan kesehatan ibu, bayi, anak dan remaja",
    icon: Baby,
    bg: "bg-pink-50",
    border: "border-pink-100",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    badge: "bg-pink-100 text-pink-700",
    services: [
      {
        name: "Ibu Hamil",
        description: "Pemeriksaan dan pemantauan kesehatan ibu selama kehamilan.",
        icon: Heart,
      },
      {
        name: "Bayi & Balita",
        description: "Pelayanan kesehatan, pemantauan tumbuh kembang bayi dan balita.",
        icon: Baby,
      },
      {
        name: "Anak & Remaja",
        description: "Pelayanan kesehatan bagi anak dan kelompok usia remaja.",
        icon: Users,
      },
      {
        name: "Kesehatan Reproduksi",
        description: "Pelayanan dan edukasi mengenai kesehatan reproduksi.",
        icon: HeartPulse,
      },
    ],
  },

  {
    id: "cluster3",
    number: "KLASTER 3",
    title: "USIA DEWASA DAN LANSIA",
    subtitle: "Pelayanan kesehatan usia produktif dan lanjut usia",
    icon: HeartPulse,
    bg: "bg-red-50",
    border: "border-red-100",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    badge: "bg-red-100 text-red-700",
    services: [
      {
        name: "Usia Produktif",
        description: "Pelayanan kesehatan bagi masyarakat usia dewasa dan produktif.",
        icon: UserRound,
      },
      {
        name: "Skrining PTM",
        description: "Skrining dan deteksi dini penyakit tidak menular.",
        icon: ScanHeart,
      },
      {
        name: "Lansia",
        description: "Pelayanan kesehatan dan pemantauan kesehatan lanjut usia.",
        icon: Users,
      },
      {
        name: "Pemeriksaan Kesehatan",
        description: "Pemeriksaan kesehatan umum dan deteksi dini gangguan kesehatan.",
        icon: Stethoscope,
      },
    ],
  },

  {
    id: "cluster4",
    number: "KLASTER 4",
    title: "PENANGGULANGAN PENYAKIT MENULAR",
    subtitle: "Pencegahan, pengendalian dan surveilans penyakit",
    icon: ShieldPlus,
    bg: "bg-green-50",
    border: "border-green-100",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    badge: "bg-green-100 text-green-700",
    services: [
      {
        name: "Surveilans",
        description: "Pemantauan dan pengumpulan data penyakit di masyarakat.",
        icon: Activity,
      },
      {
        name: "Pengendalian Penyakit",
        description: "Upaya pencegahan dan pengendalian penyakit menular.",
        icon: ShieldPlus,
      },
      {
        name: "Kesehatan Lingkungan",
        description: "Pemantauan faktor lingkungan yang berpengaruh terhadap kesehatan.",
        icon: Hospital,
      },
    ],
  },

  {
    id: "lintas",
    number: "LINTAS KLASTER",
    title: "LAYANAN PENDUKUNG",
    subtitle: "Pelayanan yang mendukung seluruh klaster kesehatan",
    icon: Hospital,
    bg: "bg-purple-50",
    border: "border-purple-100",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    badge: "bg-purple-100 text-purple-700",
    services: [
      {
        name: "Kegawatdaruratan",
        description: "Pelayanan awal dan penanganan kondisi kegawatdaruratan.",
        icon: Ambulance,
      },
      {
        name: "Laboratorium",
        description: "Pemeriksaan laboratorium untuk mendukung diagnosis.",
        icon: Microscope,
      },
      {
        name: "Kefarmasian",
        description: "Pelayanan obat dan informasi penggunaan obat.",
        icon: Pill,
      },
      {
        name: "Layanan Pendukung",
        description: "Pelayanan pendukung untuk menunjang pelayanan kesehatan.",
        icon: HandHelping,
      },
    ],
  },
];

const filters = [
  {
    id: "all" as ClusterId,
    label: "Semua",
  },
  {
    id: "cluster1" as ClusterId,
    label: "Klaster 1",
  },
  {
    id: "cluster2" as ClusterId,
    label: "Klaster 2",
  },
  {
    id: "cluster3" as ClusterId,
    label: "Klaster 3",
  },
  {
    id: "cluster4" as ClusterId,
    label: "Klaster 4",
  },
  {
    id: "lintas" as ClusterId,
    label: "Lintas Klaster",
  },
];

export default function LayananPage() {
  const [activeFilter, setActiveFilter] = useState<ClusterId>("all");
  const [search, setSearch] = useState("");

  const filteredClusters = clusters
    .filter((cluster) => {
      if (activeFilter === "all") return true;
      return cluster.id === activeFilter;
    })
    .map((cluster) => {
      if (!search.trim()) return cluster;

      const keyword = search.toLowerCase();

      const filteredServices = cluster.services.filter(
        (service) =>
          service.name.toLowerCase().includes(keyword) ||
          service.description.toLowerCase().includes(keyword)
      );

      return {
        ...cluster,
        services: filteredServices,
      };
    })
    .filter((cluster) => cluster.services.length > 0);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-green-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <Stethoscope className="h-4 w-4" />
              Pelayanan Puskesmas
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Layanan Puskesmas
            </h1>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Temukan berbagai layanan kesehatan berdasarkan klaster
              Integrasi Layanan Primer (ILP) di Puskesmas.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER */}
      <section className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* FILTER BUTTON */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {filters.map((filter) => {
                const isActive = activeFilter === filter.id;

                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            {/* SEARCH */}
            <div className="relative w-full lg:max-w-xs">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari layanan..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {filteredClusters.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
              <Search className="h-7 w-7 text-slate-400" />
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-900">
              Layanan tidak ditemukan
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Coba gunakan kata kunci pencarian yang berbeda.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveFilter("all");
              }}
              className="mt-6 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Tampilkan Semua Layanan
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredClusters.map((cluster) => {
              const ClusterIcon = cluster.icon;

              return (
                <article
                  key={cluster.id}
                  className={`overflow-hidden rounded-3xl border ${cluster.border} ${cluster.bg} shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg`}
                >
                  {/* CLUSTER HEADER */}
                  <div className="px-5 pb-5 pt-6 sm:px-7 sm:pt-7">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${cluster.iconBg}`}
                      >
                        <ClusterIcon
                          className={`h-7 w-7 ${cluster.iconColor}`}
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-bold ${cluster.badge}`}
                          >
                            {cluster.number}
                          </span>
                        </div>

                        <h2 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
                          {cluster.title}
                        </h2>

                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {cluster.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* SERVICES */}
                  <div className="border-t border-white/80 bg-white/70 p-4 sm:p-6">
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {cluster.services.map((service) => {
                        const ServiceIcon = service.icon;

                        return (
                          <div
                            key={service.name}
                            className="group rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-200 hover:shadow-md"
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${cluster.iconBg}`}
                              >
                                <ServiceIcon
                                  className={`h-5 w-5 ${cluster.iconColor}`}
                                />
                              </div>

                              <div className="min-w-0">
                                <h3 className="font-semibold text-slate-900">
                                  {service.name}
                                </h3>

                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* BOTTOM INFORMATION */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8 text-white shadow-lg sm:px-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="mb-3 flex items-center gap-2">
                  <Hospital className="h-6 w-6" />
                  <span className="font-semibold">
                    Integrasi Layanan Primer
                  </span>
                </div>

                <h2 className="text-2xl font-bold sm:text-3xl">
                  Pelayanan kesehatan yang terintegrasi
                </h2>

                <p className="mt-3 text-sm leading-6 text-blue-100 sm:text-base">
                  Puskesmas menyediakan pelayanan kesehatan berdasarkan
                  kebutuhan masyarakat melalui pendekatan klaster dan layanan
                  yang terintegrasi.
                </p>
              </div>

              <div className="shrink-0">
                <div className="rounded-2xl bg-white/10 px-6 py-5 text-center backdrop-blur">
                  <p className="text-3xl font-bold">{clusters.length}</p>
                  <p className="mt-1 text-sm text-blue-100">
                    Kelompok Layanan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
```
