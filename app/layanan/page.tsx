"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
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

type ClusterId = "semua" | "klaster1" | "klaster2" | "klaster3" | "klaster4" | "lintas";

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

const categories: {
  id: ClusterId;
  label: string;
  shortLabel: string;
  description: string;
}[] = [
  {
    id: "semua",
    label: "Semua Layanan",
    shortLabel: "Semua",
    description: "Lihat seluruh layanan berdasarkan klaster ILP.",
  },
  {
    id: "klaster1",
    label: "Klaster 1",
    shortLabel: "Manajemen",
    description: "Manajemen dan tata kelola Puskesmas.",
  },
  {
    id: "klaster2",
    label: "Klaster 2",
    shortLabel: "Ibu & Anak",
    description: "Pelayanan kesehatan ibu, bayi, anak, dan remaja.",
  },
  {
    id: "klaster3",
    label: "Klaster 3",
    shortLabel: "Dewasa & Lansia",
    description: "Pelayanan kesehatan usia dewasa dan lanjut usia.",
  },
  {
    id: "klaster4",
    label: "Klaster 4",
    shortLabel: "Penyakit Menular",
    description: "Pencegahan, surveilans, dan pengendalian penyakit menular.",
  },
  {
    id: "lintas",
    label: "Lintas Klaster",
    shortLabel: "Lintas Klaster",
    description: "Layanan pendukung yang terintegrasi dengan berbagai klaster.",
  },
];

/*
 * DAFTAR LAYANAN
 *
 * Catatan:
 * Data di bawah adalah contoh struktur layanan berdasarkan pembagian ILP.
 * Silakan sesuaikan dengan layanan yang benar-benar tersedia
 * di Puskesmas Tarailu Sampaga.
 */
const services: Service[] = [
  // =====================================================
  // KLASTER 1 — MANAJEMEN
  // =====================================================
  {
    id: 1,
    cluster: "klaster1",
    clusterNumber: "Klaster 1",
    clusterName: "Manajemen",
    title: "Administrasi & Informasi Puskesmas",
    description:
      "Layanan administrasi, informasi, pengelolaan data, dan kebutuhan informasi pelayanan Puskesmas.",
    icon: ClipboardList,
    requirements: [
      "Identitas diri",
      "Data administrasi yang diperlukan",
      "Mengikuti prosedur pelayanan",
    ],
  },
  {
    id: 2,
    cluster: "klaster1",
    clusterNumber: "Klaster 1",
    clusterName: "Manajemen",
    title: "Informasi Pelayanan",
    description:
      "Informasi mengenai jenis layanan, jadwal pelayanan, persyaratan, serta informasi umum Puskesmas.",
    icon: Building2,
    requirements: [
      "Tidak ada persyaratan khusus",
      "Menyampaikan kebutuhan informasi",
    ],
  },
  {
    id: 3,
    cluster: "klaster1",
    clusterNumber: "Klaster 1",
    clusterName: "Manajemen",
    title: "Pengaduan & Masukan",
    description:
      "Media bagi masyarakat untuk menyampaikan pengaduan, saran, dan masukan terkait pelayanan.",
    icon: ShieldCheck,
    requirements: [
      "Identitas pelapor jika diperlukan",
      "Uraian pengaduan atau masukan",
    ],
  },

  // =====================================================
  // KLASTER 2 — IBU DAN ANAK
  // =====================================================
  {
    id: 4,
    cluster: "klaster2",
    clusterNumber: "Klaster 2",
    clusterName: "Ibu dan Anak",
    title: "Pelayanan Kesehatan Ibu",
    description:
      "Pelayanan kesehatan bagi ibu sesuai kebutuhan pada masa kehamilan, persalinan, dan masa setelah persalinan.",
    icon: HeartPulse,
    requirements: [
      "Kartu identitas",
      "Kartu JKN jika tersedia",
      "Buku KIA jika tersedia",
    ],
  },
  {
    id: 5,
    cluster: "klaster2",
    clusterNumber: "Klaster 2",
    clusterName: "Ibu dan Anak",
    title: "Pelayanan Bayi & Balita",
    description:
      "Pelayanan kesehatan untuk bayi dan balita termasuk pemantauan tumbuh kembang sesuai kebutuhan.",
    icon: Baby,
    requirements: [
      "Kartu identitas anak/orang tua",
      "Buku KIA jika tersedia",
      "Kartu JKN jika tersedia",
    ],
  },
  {
    id: 6,
    cluster: "klaster2",
    clusterNumber: "Klaster 2",
    clusterName: "Ibu dan Anak",
    title: "Imunisasi",
    description:
      "Pelayanan imunisasi sesuai program dan jadwal yang berlaku di Puskesmas.",
    icon: Syringe,
    requirements: [
      "Buku KIA atau catatan imunisasi",
      "Kartu identitas",
      "Mengikuti jadwal pelayanan",
    ],
  },
  {
    id: 7,
    cluster: "klaster2",
    clusterNumber: "Klaster 2",
    clusterName: "Ibu dan Anak",
    title: "Kesehatan Anak & Remaja",
    description:
      "Pelayanan kesehatan untuk anak usia sekolah dan remaja sesuai kebutuhan kesehatan.",
    icon: Users,
    requirements: [
      "Kartu identitas",
      "Kartu pelajar jika diperlukan",
      "Kartu JKN jika tersedia",
    ],
  },

  // =====================================================
  // KLASTER 3 — DEWASA DAN LANSIA
  // =====================================================
  {
    id: 8,
    cluster: "klaster3",
    clusterNumber: "Klaster 3",
    clusterName: "Usia Dewasa dan Lansia",
    title: "Pelayanan Kesehatan Dewasa",
    description:
      "Pelayanan kesehatan untuk masyarakat usia dewasa dan usia produktif sesuai kebutuhan.",
    icon: Stethoscope,
    requirements: [
      "Kartu identitas",
      "Kartu JKN jika tersedia",
      "Dokumen pemeriksaan sebelumnya jika ada",
    ],
  },
  {
    id: 9,
    cluster: "klaster3",
    clusterNumber: "Klaster 3",
    clusterName: "Usia Dewasa dan Lansia",
    title: "Pelayanan Kesehatan Lansia",
    description:
      "Pelayanan kesehatan yang ditujukan bagi masyarakat lanjut usia dengan pendekatan sesuai kebutuhan.",
    icon: UserRound,
    requirements: [
      "Kartu identitas",
      "Kartu JKN jika tersedia",
      "Dokumen kesehatan sebelumnya jika ada",
    ],
  },
  {
    id: 10,
    cluster: "klaster3",
    clusterNumber: "Klaster 3",
    clusterName: "Usia Dewasa dan Lansia",
    title: "Skrining & Pemeriksaan Kesehatan",
    description:
      "Pemeriksaan dan skrining kesehatan untuk membantu mengenali faktor risiko serta kondisi kesehatan.",
    icon: HeartPulse,
    requirements: [
      "Kartu identitas",
      "Kartu JKN jika tersedia",
      "Mengikuti prosedur pemeriksaan",
    ],
  },

  // =====================================================
  // KLASTER 4 — PENANGGULANGAN PENYAKIT MENULAR
  // =====================================================
  {
    id: 11,
    cluster: "klaster4",
    clusterNumber: "Klaster 4",
    clusterName: "Penanggulangan Penyakit Menular",
    title: "Pencegahan & Pengendalian Penyakit Menular",
    description:
      "Pelayanan dan kegiatan pencegahan serta pengendalian penyakit menular di wilayah kerja Puskesmas.",
    icon: ShieldCheck,
    requirements: [
      "Kartu identitas",
      "Informasi kondisi atau keluhan",
      "Mengikuti arahan petugas kesehatan",
    ],
  },
  {
    id: 12,
    cluster: "klaster4",
    clusterNumber: "Klaster 4",
    clusterName: "Penanggulangan Penyakit Menular",
    title: "Surveilans Penyakit",
    description:
      "Pemantauan dan pelaporan situasi penyakit menular sebagai bagian dari kegiatan kesehatan masyarakat.",
    icon: ClipboardList,
    requirements: [
      "Informasi kejadian atau kondisi",
      "Data pendukung jika diperlukan",
    ],
  },
  {
    id: 13,
    cluster: "klaster4",
    clusterNumber: "Klaster 4",
    clusterName: "Penanggulangan Penyakit Menular",
    title: "Kesehatan Lingkungan",
    description:
      "Kegiatan yang berkaitan dengan pengawasan dan peningkatan kondisi kesehatan lingkungan masyarakat.",
    icon: Building2,
    requirements: [
      "Informasi lokasi atau kondisi lingkungan",
      "Data pendukung jika diperlukan",
    ],
  },

  // =====================================================
  // LINTAS KLASTER
  // =====================================================
  {
    id: 14,
    cluster: "lintas",
    clusterNumber: "Lintas Klaster",
    clusterName: "Pelayanan Pendukung",
    title: "Kegawatdaruratan",
    description:
      "Pelayanan untuk kondisi yang membutuhkan penanganan kegawatdaruratan sesuai kemampuan fasilitas Puskesmas.",
    icon: Hospital,
    requirements: [
      "Segera melapor kepada petugas",
      "Identitas pasien jika tersedia",
      "Dokumen kesehatan jika tersedia",
    ],
  },
  {
    id: 15,
    cluster: "lintas",
    clusterNumber: "Lintas Klaster",
    clusterName: "Pelayanan Pendukung",
    title: "Laboratorium",
    description:
      "Pelayanan pemeriksaan laboratorium sesuai jenis pemeriksaan yang tersedia di Puskesmas.",
    icon: FlaskConical,
    requirements: [
      "Kartu identitas",
      "Formulir atau permintaan pemeriksaan",
      "Mengikuti persiapan pemeriksaan jika diperlukan",
    ],
  },
  {
    id: 16,
    cluster: "lintas",
    clusterNumber: "Lintas Klaster",
    clusterName: "Pelayanan Pendukung",
    title: "Kefarmasian",
    description:
      "Pelayanan kefarmasian untuk mendukung kebutuhan pengobatan sesuai resep dan ketentuan yang berlaku.",
    icon: BadgeCheck,
    requirements: [
      "Resep atau dokumen pelayanan",
      "Kartu identitas jika diperlukan",
      "Mengikuti prosedur pelayanan farmasi",
    ],
  },
  {
    id: 17,
    cluster: "lintas",
    clusterNumber: "Lintas Klaster",
    clusterName: "Pelayanan Pendukung",
    title: "Pelayanan Gigi & Mulut",
    description:
      "Pelayanan kesehatan gigi dan mulut sesuai jenis pelayanan yang tersedia di Puskesmas.",
    icon: Stethoscope,
    requirements: [
      "Kartu identitas",
      "Kartu JKN jika tersedia",
      "Mengikuti prosedur pemeriksaan",
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
      const matchCategory =
        activeCategory === "semua" ||
        service.cluster === activeCategory;

      const matchSearch =
        keyword === "" ||
        service.title.toLowerCase().includes(keyword) ||
        service.description.toLowerCase().includes(keyword) ||
        service.clusterNumber.toLowerCase().includes(keyword) ||
        service.clusterName.toLowerCase().includes(keyword);

      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const activeCategoryData = categories.find(
    (category) => category.id === activeCategory
  );

  return (
    <main>
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="pageHero">
        <div className="pageHeroCard">
          <Link href="/" className="backLink">
            <ArrowLeft size={17} />
            Kembali ke Beranda
          </Link>

          <div className="pageHeroContent">
            <div>
              <span className="eyebrow">INTEGRASI PELAYANAN PRIMER</span>

              <h1>
                Layanan
                <span> Puskesmas Tarailu Sampaga</span>
              </h1>

              <p>
                Temukan informasi layanan Puskesmas berdasarkan sistem
                Integrasi Pelayanan Kesehatan Primer (ILP).
              </p>
            </div>

            <div className="pageHeroIcon">
              <HeartPulse size={46} strokeWidth={1.7} />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CATALOG
      ===================================================== */}
      <section className="catalog">
        <div className="catalogTop">
          <div>
            <span className="sectionKicker">DAFTAR LAYANAN</span>

            <h2>
              Layanan berdasarkan
              <span> klaster ILP</span>
            </h2>

            <p>
              Pilih klaster untuk melihat layanan yang tersedia
              atau gunakan pencarian di bawah.
            </p>
          </div>

          <div className="catalogCount">
            <strong>{filteredServices.length}</strong>
            <span>Layanan</span>
          </div>
        </div>

        {/* =====================================================
            SEARCH
        ===================================================== */}
        <div className="searchBox">
          <Search size={20} />

          <input
            type="text"
            value={searchQuery}
            onChange={(event) =>
              setSearchQuery(event.target.value)
            }
            placeholder="Cari layanan, klaster, atau jenis pelayanan..."
            aria-label="Cari layanan"
          />

          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="clearSearch"
              aria-label="Hapus pencarian"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* =====================================================
            CATEGORY FILTER
        ===================================================== */}
        <div className="categoryFilter">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;

            const count =
              category.id === "semua"
                ? services.length
                : services.filter(
                    (service) => service.cluster === category.id
                  ).length;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`categoryButton ${
                  isActive ? "active" : ""
                }`}
              >
                <span>{category.shortLabel}</span>
                <small>{count}</small>
              </button>
            );
          })}
        </div>

        {/* =====================================================
            ACTIVE FILTER INFO
        ===================================================== */}
        <div className="activeFilterInfo">
          <div>
            <strong>{activeCategoryData?.label}</strong>
            <span>{activeCategoryData?.description}</span>
          </div>

          {activeCategory !== "semua" && (
            <button
              type="button"
              onClick={() => setActiveCategory("semua")}
              className="resetFilter"
            >
              Tampilkan semua
              <X size={15} />
            </button>
          )}
        </div>

        {/* =====================================================
            SERVICE GRID
        ===================================================== */}
        {filteredServices.length > 0 ? (
          <div className="serviceGrid">
            {filteredServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.id}
                  className="serviceDetailCard"
                >
                  {/* Card header */}
                  <div className="serviceCardHead">
                    <div className="serviceIcon">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <div className="serviceCluster">
                      <span>{service.clusterNumber}</span>
                      <small>{service.clusterName}</small>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="serviceCardBody">
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <div className="requirementsTitle">
                      <BadgeCheck size={17} />
                      <span>Persyaratan umum</span>
                    </div>

                    <ul className="miniRequirements">
                      {service.requirements.map(
                        (requirement, index) => (
                          <li key={index}>
                            <span className="checkDot">✓</span>
                            {requirement}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Card footer */}
                  <div className="serviceCardFooter">
                    <Link href="/persyaratan">
                      Lihat persyaratan lengkap
                      <ChevronRight size={17} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* =================================================
             EMPTY STATE
          ================================================== */
          <div className="emptyState">
            <div className="emptyIcon">
              <Search size={30} />
            </div>

            <h3>Layanan tidak ditemukan</h3>

            <p>
              Tidak ada layanan yang sesuai dengan kata pencarian
              <strong>
                {searchQuery ? ` "${searchQuery}"` : ""}
              </strong>
              .
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("semua");
              }}
              className="emptyButton"
            >
              Tampilkan semua layanan
            </button>
          </div>
        )}

        {/* =====================================================
            INFORMATION STRIP
        ===================================================== */}
        <div className="infoStrip">
          <div className="infoStripIcon">
            <Stethoscope size={25} />
          </div>

          <div>
            <strong>Informasi pelayanan</strong>
            <p>
              Jenis layanan, jadwal, persyaratan, dan ketentuan
              dapat disesuaikan dengan pelayanan yang tersedia di
              Puskesmas Tarailu Sampaga.
            </p>
          </div>

          <Link href="/kontak">
            Hubungi Puskesmas
            <ChevronRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
