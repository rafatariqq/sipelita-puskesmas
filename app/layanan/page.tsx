"use client";

import { useMemo, useState } from "react";
import {
  Activity,
  Ambulance,
  Baby,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  HandHelping,
  Heart,
  HeartPulse,
  Hospital,
  Microscope,
  Monitor,
  Pill,
  ScanHeart,
  Search,
  ShieldPlus,
  Stethoscope,
  Syringe,
  UserRound,
  Users,
  X,
} from "lucide-react";

type ClusterId =
  | "all"
  | "cluster1"
  | "cluster2"
  | "cluster3"
  | "cluster4"
  | "lintas";

type Service = {
  id: number;
  name: string;
  description: string;
  detail: string;
  cluster: ClusterId;
  clusterName: string;
  icon: any;
};

const services: Service[] = [
  // =====================================================
  // KLASTER 1
  // =====================================================
  {
    id: 1,
    name: "Administrasi",
    description:
      "Pelayanan administrasi dan pengelolaan dokumen Puskesmas.",
    detail:
      "Pelayanan administrasi meliputi pengelolaan dokumen, informasi administrasi, serta kebutuhan administrasi masyarakat yang berkaitan dengan pelayanan Puskesmas.",
    cluster: "cluster1",
    clusterName: "Klaster 1 • Manajemen",
    icon: FileText,
  },
  {
    id: 2,
    name: "Sistem Informasi",
    description:
      "Pengelolaan sistem informasi dan data pelayanan kesehatan.",
    detail:
      "Sistem informasi mendukung pengelolaan data dan informasi pelayanan kesehatan sehingga proses pelayanan dapat berjalan secara lebih terintegrasi.",
    cluster: "cluster1",
    clusterName: "Klaster 1 • Manajemen",
    icon: Monitor,
  },
  {
    id: 3,
    name: "Manajemen Mutu",
    description:
      "Pengelolaan dan peningkatan mutu pelayanan kesehatan.",
    detail:
      "Manajemen mutu berfokus pada pemantauan dan peningkatan kualitas pelayanan agar pelayanan kesehatan dapat diberikan secara aman, efektif, dan berkesinambungan.",
    cluster: "cluster1",
    clusterName: "Klaster 1 • Manajemen",
    icon: ClipboardCheck,
  },
  {
    id: 4,
    name: "Pengaduan",
    description:
      "Penerimaan dan pengelolaan pengaduan masyarakat.",
    detail:
      "Masyarakat dapat menyampaikan pengaduan, saran, maupun masukan mengenai pelayanan Puskesmas untuk menjadi bahan evaluasi dan peningkatan kualitas pelayanan.",
    cluster: "cluster1",
    clusterName: "Klaster 1 • Manajemen",
    icon: HandHelping,
  },

  // =====================================================
  // KLASTER 2
  // =====================================================
  {
    id: 5,
    name: "Ibu Hamil",
    description:
      "Pelayanan pemeriksaan dan pemantauan kesehatan ibu selama kehamilan.",
    detail:
      "Pelayanan ibu hamil meliputi pemeriksaan kehamilan, pemantauan kondisi ibu dan janin, edukasi kesehatan, serta pelayanan sesuai kebutuhan dan ketentuan yang berlaku.",
    cluster: "cluster2",
    clusterName: "Klaster 2 • Ibu dan Anak",
    icon: HeartPulse,
  },
  {
    id: 6,
    name: "Bayi & Balita",
    description:
      "Pemantauan kesehatan dan tumbuh kembang bayi serta balita.",
    detail:
      "Pelayanan bayi dan balita mencakup pemantauan pertumbuhan dan perkembangan, pemeriksaan kesehatan, imunisasi sesuai jadwal, serta edukasi kepada orang tua.",
    cluster: "cluster2",
    clusterName: "Klaster 2 • Ibu dan Anak",
    icon: Baby,
  },
  {
    id: 7,
    name: "Anak & Remaja",
    description:
      "Pelayanan kesehatan bagi anak dan kelompok usia remaja.",
    detail:
      "Pelayanan anak dan remaja mendukung pemantauan kesehatan, pertumbuhan, perkembangan, edukasi kesehatan, dan kebutuhan kesehatan sesuai kelompok usia.",
    cluster: "cluster2",
    clusterName: "Klaster 2 • Ibu dan Anak",
    icon: Users,
  },
  {
    id: 8,
    name: "Kesehatan Reproduksi",
    description:
      "Pelayanan dan edukasi mengenai kesehatan reproduksi.",
    detail:
      "Pelayanan kesehatan reproduksi memberikan informasi, edukasi, pemeriksaan, dan dukungan kesehatan reproduksi sesuai kebutuhan masyarakat.",
    cluster: "cluster2",
    clusterName: "Klaster 2 • Ibu dan Anak",
    icon: Heart,
  },

  // =====================================================
  // KLASTER 3
  // =====================================================
  {
    id: 9,
    name: "Usia Produktif",
    description:
      "Pelayanan kesehatan bagi masyarakat usia dewasa dan produktif.",
    detail:
      "Pelayanan usia produktif membantu masyarakat menjaga dan memantau kondisi kesehatan melalui pemeriksaan serta edukasi mengenai pola hidup sehat.",
    cluster: "cluster3",
    clusterName: "Klaster 3 • Usia Dewasa dan Lansia",
    icon: UserRound,
  },
  {
    id: 10,
    name: "Skrining PTM",
    description:
      "Skrining dan deteksi dini penyakit tidak menular.",
    detail:
      "Skrining penyakit tidak menular dilakukan untuk membantu mendeteksi faktor risiko dan kondisi kesehatan tertentu sejak dini.",
    cluster: "cluster3",
    clusterName: "Klaster 3 • Usia Dewasa dan Lansia",
    icon: ScanHeart,
  },
  {
    id: 11,
    name: "Lansia",
    description:
      "Pelayanan kesehatan dan pemantauan kesehatan lanjut usia.",
    detail:
      "Pelayanan lansia mendukung pemantauan kondisi kesehatan, deteksi dini masalah kesehatan, edukasi, dan pelayanan sesuai kebutuhan lanjut usia.",
    cluster: "cluster3",
    clusterName: "Klaster 3 • Usia Dewasa dan Lansia",
    icon: Users,
  },
  {
    id: 12,
    name: "Pemeriksaan Kesehatan",
    description:
      "Pemeriksaan kesehatan umum dan deteksi dini gangguan kesehatan.",
    detail:
      "Pemeriksaan kesehatan membantu mengetahui kondisi kesehatan masyarakat dan mendukung deteksi dini terhadap berbagai masalah kesehatan.",
    cluster: "cluster3",
    clusterName: "Klaster 3 • Usia Dewasa dan Lansia",
    icon: Stethoscope,
  },

  // =====================================================
  // KLASTER 4
  // =====================================================
  {
    id: 13,
    name: "Surveilans",
    description:
      "Pemantauan dan pengumpulan data penyakit di masyarakat.",
    detail:
      "Surveilans kesehatan digunakan untuk melakukan pemantauan terhadap kejadian penyakit dan kondisi kesehatan masyarakat sebagai bagian dari upaya pengendalian penyakit.",
    cluster: "cluster4",
    clusterName: "Klaster 4 • Penanggulangan Penyakit Menular",
    icon: Activity,
  },
  {
    id: 14,
    name: "Pengendalian Penyakit",
    description:
      "Upaya pencegahan dan pengendalian penyakit menular.",
    detail:
      "Pelayanan pengendalian penyakit menular mencakup kegiatan pencegahan, pemantauan, penanganan, dan pengendalian sesuai dengan program kesehatan yang tersedia.",
    cluster: "cluster4",
    clusterName: "Klaster 4 • Penanggulangan Penyakit Menular",
    icon: ShieldPlus,
  },
  {
    id: 15,
    name: "Kesehatan Lingkungan",
    description:
      "Pemantauan faktor lingkungan yang berpengaruh terhadap kesehatan.",
    detail:
      "Pelayanan kesehatan lingkungan mendukung upaya menjaga lingkungan yang sehat melalui pemantauan faktor lingkungan yang dapat memengaruhi kesehatan masyarakat.",
    cluster: "cluster4",
    clusterName: "Klaster 4 • Penanggulangan Penyakit Menular",
    icon: Building2,
  },
  {
    id: 16,
    name: "Pencegahan Penyakit",
    description:
      "Edukasi dan kegiatan pencegahan untuk menjaga kesehatan masyarakat.",
    detail:
      "Kegiatan pencegahan penyakit bertujuan meningkatkan kesadaran masyarakat terhadap faktor risiko dan langkah-langkah menjaga kesehatan.",
    cluster: "cluster4",
    clusterName: "Klaster 4 • Penanggulangan Penyakit Menular",
    icon: Syringe,
  },

  // =====================================================
  // LINTAS KLASTER
  // =====================================================
  {
    id: 17,
    name: "Kegawatdaruratan",
    description:
      "Pelayanan awal dan penanganan kondisi kegawatdaruratan.",
    detail:
      "Pelayanan kegawatdaruratan memberikan penanganan awal terhadap kondisi yang membutuhkan tindakan segera sesuai kemampuan dan fasilitas Puskesmas.",
    cluster: "lintas",
    clusterName: "Lintas Klaster • Layanan Pendukung",
    icon: Ambulance,
  },
  {
    id: 18,
    name: "Laboratorium",
    description:
      "Pemeriksaan laboratorium untuk mendukung pelayanan kesehatan.",
    detail:
      "Pelayanan laboratorium menyediakan pemeriksaan penunjang sesuai jenis pemeriksaan yang tersedia di Puskesmas untuk membantu proses pelayanan kesehatan.",
    cluster: "lintas",
    clusterName: "Lintas Klaster • Layanan Pendukung",
    icon: Microscope,
  },
  {
    id: 19,
    name: "Kefarmasian",
    description:
      "Pelayanan obat dan informasi penggunaan obat.",
    detail:
      "Pelayanan kefarmasian meliputi pengelolaan dan pelayanan obat serta pemberian informasi penggunaan obat sesuai kebutuhan pelayanan kesehatan.",
    cluster: "lintas",
    clusterName: "Lintas Klaster • Layanan Pendukung",
    icon: Pill,
  },
  {
    id: 20,
    name: "Layanan Pendukung",
    description:
      "Pelayanan pendukung untuk menunjang pelayanan kesehatan.",
    detail:
      "Layanan pendukung membantu memastikan berbagai kebutuhan pelayanan kesehatan dapat berjalan secara terintegrasi dan sesuai dengan kebutuhan masyarakat.",
    cluster: "lintas",
    clusterName: "Lintas Klaster • Layanan Pendukung",
    icon: Hospital,
  },
];

const filters: {
  id: ClusterId;
  label: string;
}[] = [
  {
    id: "all",
    label: "Semua",
  },
  {
    id: "cluster1",
    label: "Klaster 1",
  },
  {
    id: "cluster2",
    label: "Klaster 2",
  },
  {
    id: "cluster3",
    label: "Klaster 3",
  },
  {
    id: "cluster4",
    label: "Klaster 4",
  },
  {
    id: "lintas",
    label: "Lintas Klaster",
  },
];

const clusterColors: Record<
  ClusterId,
  {
    icon: string;
    iconBg: string;
    badge: string;
  }
> = {
  all: {
    icon: "text-emerald-700",
    iconBg: "bg-emerald-50",
    badge: "bg-emerald-50 text-emerald-700",
  },
  cluster1: {
    icon: "text-blue-600",
    iconBg: "bg-blue-50",
    badge: "bg-blue-50 text-blue-700",
  },
  cluster2: {
    icon: "text-pink-600",
    iconBg: "bg-pink-50",
    badge: "bg-pink-50 text-pink-700",
  },
  cluster3: {
    icon: "text-red-600",
    iconBg: "bg-red-50",
    badge: "bg-red-50 text-red-700",
  },
  cluster4: {
    icon: "text-green-600",
    iconBg: "bg-green-50",
    badge: "bg-green-50 text-green-700",
  },
  lintas: {
    icon: "text-purple-600",
    iconBg: "bg-purple-50",
    badge: "bg-purple-50 text-purple-700",
  },
};

export default function LayananPage() {
  const [activeFilter, setActiveFilter] = useState<ClusterId>("all");
  const [search, setSearch] = useState("");
  const [selectedService, setSelectedService] = useState<Service | null>(
    null
  );

  const filteredServices = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return services.filter((service) => {
      const matchCluster =
        activeFilter === "all" || service.cluster === activeFilter;

      const matchSearch =
        keyword === "" ||
        service.name.toLowerCase().includes(keyword) ||
        service.description.toLowerCase().includes(keyword) ||
        service.clusterName.toLowerCase().includes(keyword);

      return matchCluster && matchSearch;
    });
  }, [activeFilter, search]);

  return (
    <main className="min-h-screen bg-[#f7faf9]">
      {/* =====================================================
          HEADER / HERO
      ====================================================== */}
      <section className="bg-[#f7faf9]">
        <div className="mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-6 lg:px-8 lg:pb-10 lg:pt-16">
          <div className="grid items-end gap-8 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-2 text-sm font-semibold text-emerald-700">
                <Stethoscope className="h-4 w-4" />
                Pelayanan Kesehatan
              </div>

              <h1 className="max-w-xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Layanan yang Anda butuhkan.
              </h1>
            </div>

            {/* RIGHT */}
            <div className="lg:pb-1">
              <p className="max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                Pilih layanan berdasarkan klaster untuk mendapatkan informasi
                mengenai pelayanan kesehatan yang tersedia di Puskesmas
                Tarailu Sampaga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FILTER + SEARCH
      ====================================================== */}
      <section className="bg-[#f7faf9]">
        <div className="mx-auto max-w-7xl px-5 pb-7 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* FILTER */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {filters.map((filter) => {
                const active = activeFilter === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveFilter(filter.id)}
                    className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      active
                        ? "bg-emerald-700 text-white shadow-sm"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            {/* SEARCH */}
            <div className="relative w-full lg:max-w-xs">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari layanan..."
                className="h-11 w-full rounded-full border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE GRID
      ====================================================== */}
      <section className="bg-[#f7faf9]">
        <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
          {/* RESULT INFO */}
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              Menampilkan{" "}
              <span className="font-semibold text-slate-700">
                {filteredServices.length}
              </span>{" "}
              layanan
            </p>

            {(search || activeFilter !== "all") && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveFilter("all");
                }}
                className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Reset filter
              </button>
            )}
          </div>

          {/* CARDS */}
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {filteredServices.map((service) => {
                const ServiceIcon = service.icon;
                const colors = clusterColors[service.cluster];

                return (
                  <article
                    key={service.id}
                    className="group flex min-h-[270px] flex-col rounded-[22px] border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                  >
                    {/* ICON */}
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors.iconBg}`}
                    >
                      <ServiceIcon
                        className={`h-7 w-7 ${colors.icon}`}
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* TITLE */}
                    <div className="mt-6">
                      <h2 className="text-lg font-bold text-slate-900">
                        {service.name}
                      </h2>

                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">
                        {service.description}
                      </p>
                    </div>

                    {/* FOOTER */}
                    <div className="mt-auto pt-6">
                      <div className="mb-4">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${colors.badge}`}
                        >
                          {service.clusterName}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 transition-all group-hover:gap-3 hover:text-emerald-800"
                      >
                        Lihat detail
                        <span className="text-lg leading-none">→</span>
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            /* EMPTY STATE */
            <div className="rounded-[24px] border border-slate-200 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                <Search className="h-7 w-7 text-slate-400" />
              </div>

              <h2 className="mt-5 text-xl font-bold text-slate-900">
                Layanan tidak ditemukan
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                Tidak ada layanan yang sesuai dengan pencarian atau filter
                yang dipilih.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveFilter("all");
                }}
                className="mt-6 rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                Tampilkan Semua
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          INFORMATION BANNER
      ====================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[26px] bg-emerald-700 px-6 py-8 sm:px-10 sm:py-10">
            <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-100">
                  <HeartPulse className="h-5 w-5" />
                  Integrasi Layanan Primer
                </div>

                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Pelayanan kesehatan untuk masyarakat
                </h2>

                <p className="mt-3 text-sm leading-6 text-emerald-100 sm:text-base">
                  Puskesmas menyediakan berbagai layanan kesehatan yang
                  terintegrasi untuk mendukung kebutuhan masyarakat di setiap
                  kelompok usia.
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <div className="rounded-2xl bg-white/10 px-5 py-4 text-center backdrop-blur-sm">
                  <p className="text-3xl font-bold text-white">5</p>
                  <p className="mt-1 text-xs text-emerald-100">
                    Kelompok Layanan
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 px-5 py-4 text-center backdrop-blur-sm">
                  <p className="text-3xl font-bold text-white">20</p>
                  <p className="mt-1 text-xs text-emerald-100">
                    Jenis Layanan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DETAIL MODAL
      ====================================================== */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-[26px] bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* MODAL HEADER */}
            <div className="border-b border-slate-100 px-6 pb-5 pt-6 sm:px-7">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-700"
                aria-label="Tutup"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-start gap-4 pr-8">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                    clusterColors[selectedService.cluster].iconBg
                  }`}
                >
                  <selectedService.icon
                    className={`h-7 w-7 ${
                      clusterColors[selectedService.cluster].icon
                    }`}
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                      clusterColors[selectedService.cluster].badge
                    }`}
                  >
                    {selectedService.clusterName}
                  </span>

                  <h2 className="mt-2 text-2xl font-bold text-slate-900">
                    {selectedService.name}
                  </h2>
                </div>
              </div>
            </div>

            {/* MODAL CONTENT */}
            <div className="px-6 py-6 sm:px-7">
              <p className="text-sm leading-7 text-slate-600">
                {selectedService.detail}
              </p>

              <div className="mt-6 rounded-2xl bg-emerald-50 p-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />

                  <div>
                    <p className="text-sm font-semibold text-emerald-900">
                      Informasi pelayanan
                    </p>

                    <p className="mt-1 text-xs leading-5 text-emerald-700">
                      Untuk informasi lebih lanjut mengenai jadwal dan
                      ketentuan pelayanan, silakan menghubungi Puskesmas.
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="mt-6 w-full rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800"
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
