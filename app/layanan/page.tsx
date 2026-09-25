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
  X,
} from "lucide-react";

const clusters = [
  {
    number: "01",
    title: "Klaster 1",
    subtitle: "Manajemen",
    description:
      "Pengelolaan administrasi, informasi, mutu, dan koordinasi pelayanan Puskesmas.",
    icon: Building2,
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
          "Pemeriksaan awal untuk membantu mengenali kondisi dan faktor risiko kesehatan.",
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
  const [selectedCluster, setSelectedCluster] =
    useState<(typeof clusters)[number] | null>(null);

  return (
    <main className="layananPage">
      {/* HEADER */}
      <header className="layananHeader">
        <Link href="/" className="layananBrand">
          <div className="layananLogo">
            <HeartPulse size={22} />
          </div>

          <div>
            <strong>PUSKESMAS TARAILU</strong>
            <span>SAMPAGA · Portal Informasi</span>
          </div>
        </Link>

        <Link href="/" className="layananBack">
          <ArrowLeft size={16} />
          Kembali ke Beranda
        </Link>
      </header>

      {/* HERO */}
      <section className="layananHero">
        <div className="layananHeroInner">
          <div className="layananEyebrow">
            <Hospital size={16} />
            LAYANAN PUSKESMAS
          </div>

          <div className="layananHeroContent">
            <div>
              <h1>
                Pelayanan kesehatan
                <br />
                <span>dalam satu tempat.</span>
              </h1>
            </div>

            <div className="layananHeroDescription">
              <p>
                Kenali kelompok pelayanan kesehatan di Puskesmas Tarailu
                Sampaga. Pilih klaster untuk melihat layanan yang tersedia
                di dalamnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLUSTERS */}
      <section className="clusterSection">
        <div className="clusterGrid">
          {clusters.map((cluster) => {
            const Icon = cluster.icon;

            return (
              <article className="clusterCard" key={cluster.number}>
                <div className="clusterNumber">{cluster.number}</div>

                <div className="clusterIcon">
                  <Icon size={25} />
                </div>

                <div className="clusterContent">
                  <span className="clusterLabel">
                    {cluster.title}
                  </span>

                  <h2>{cluster.subtitle}</h2>

                  <p>{cluster.description}</p>
                </div>

                <div className="clusterFooter">
                  <div className="clusterCount">
                    <CheckCircle2 size={16} />
                    {cluster.services.length} layanan
                  </div>

                  <button
                    type="button"
                    className="clusterDetail"
                    onClick={() => setSelectedCluster(cluster)}
                  >
                    Lihat detail
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* INFO */}
      <section className="layananInfo">
        <div className="layananInfoInner">
          <div>
            <span>INFORMASI PELAYANAN</span>

            <h2>
              Siapkan kebutuhan sebelum mendapatkan pelayanan.
            </h2>

            <p>
              Periksa persyaratan pelayanan terlebih dahulu agar proses
              administrasi dapat berjalan lebih mudah.
            </p>
          </div>

          <Link href="/persyaratan" className="layananInfoButton">
            Lihat Persyaratan
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="layananFooter">
        <div>
          <strong>PUSKESMAS TARAILU SAMPAGA</strong>
          <p>Portal Informasi Pelayanan Kesehatan Masyarakat.</p>
        </div>

        <span>© 2026 Puskesmas Tarailu Sampaga</span>
      </footer>

      {/* MODAL DETAIL */}
      {selectedCluster && (
        <div
          className="clusterModalOverlay"
          onClick={() => setSelectedCluster(null)}
        >
          <div
            className="clusterModal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="clusterModalClose"
              onClick={() => setSelectedCluster(null)}
              aria-label="Tutup"
            >
              <X size={20} />
            </button>

            <div className="clusterModalHeader">
              <div className="clusterModalIcon">
                <selectedCluster.icon size={26} />
              </div>

              <div>
                <span>{selectedCluster.title}</span>
                <h2>{selectedCluster.subtitle}</h2>
              </div>
            </div>

            <p className="clusterModalDescription">
              {selectedCluster.description}
            </p>

            <div className="modalDivider" />

            <div className="modalSectionTitle">
              <span>LAYANAN DALAM KLASTER</span>
              <h3>Pilihan pelayanan</h3>
            </div>

            <div className="modalServiceGrid">
              {selectedCluster.services.map((service, index) => (
                <div className="modalService" key={service.title}>
                  <div className="modalServiceNumber">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>

                  <ChevronRight
                    size={18}
                    className="modalServiceArrow"
                  />
                </div>
              ))}
            </div>

            <div className="modalBottom">
              <div>
                <strong>Perlu informasi lebih lanjut?</strong>
                <p>
                  Periksa persyaratan atau hubungi Puskesmas.
                </p>
              </div>

              <Link
                href="/persyaratan"
                onClick={() => setSelectedCluster(null)}
              >
                Persyaratan
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
