import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  HeartPulse,
  Hospital,
  Pill,
  Search,
  Stethoscope,
  Syringe,
  Users,
} from "lucide-react";

const services = [
  {
    category: "Pelayanan Dasar",
    title: "Poli Umum",
    description:
      "Pelayanan pemeriksaan kesehatan umum dan konsultasi awal sesuai kebutuhan pasien.",
    icon: Stethoscope,
    requirements: [
      "Identitas diri",
      "Kartu JKN/BPJS jika ada",
      "Dokumen pendukung bila diperlukan",
    ],
  },
  {
    category: "Pelayanan Dasar",
    title: "Poli Gigi",
    description:
      "Pelayanan pemeriksaan dan perawatan kesehatan gigi serta mulut.",
    icon: HeartPulse,
    requirements: [
      "Identitas diri",
      "Kartu JKN/BPJS jika ada",
      "Dokumen pendukung bila diperlukan",
    ],
  },
  {
    category: "Ibu & Anak",
    title: "KIA & KB",
    description:
      "Pelayanan kesehatan ibu dan anak serta informasi dan pelayanan keluarga berencana.",
    icon: Users,
    requirements: [
      "Identitas diri",
      "Buku KIA bila tersedia",
      "Dokumen kepesertaan JKN/BPJS bila ada",
    ],
  },
  {
    category: "Ibu & Anak",
    title: "Imunisasi",
    description:
      "Pelayanan imunisasi dan informasi jadwal imunisasi bagi masyarakat.",
    icon: Syringe,
    requirements: [
      "Identitas anak",
      "Buku KIA/kartu imunisasi bila tersedia",
      "Dokumen pendukung bila diperlukan",
    ],
  },
  {
    category: "Penunjang",
    title: "Laboratorium",
    description:
      "Informasi dan pelayanan pemeriksaan laboratorium sesuai kebutuhan dan rujukan pelayanan.",
    icon: FileText,
    requirements: [
      "Identitas diri",
      "Permintaan pemeriksaan/rujukan bila diperlukan",
      "Dokumen kepesertaan bila ada",
    ],
  },
  {
    category: "Penunjang",
    title: "Farmasi",
    description:
      "Pelayanan obat dan informasi penggunaan obat sesuai pelayanan yang diterima.",
    icon: Pill,
    requirements: [
      "Identitas diri",
      "Resep atau dokumen pelayanan bila diperlukan",
    ],
  },
  {
    category: "Kesehatan Masyarakat",
    title: "Promosi Kesehatan",
    description:
      "Edukasi dan penyuluhan untuk meningkatkan pengetahuan serta perilaku hidup sehat.",
    icon: HeartPulse,
    requirements: [
      "Tidak ada persyaratan khusus untuk informasi umum",
    ],
  },
  {
    category: "Kesehatan Masyarakat",
    title: "Layanan Kesehatan Masyarakat",
    description:
      "Informasi mengenai berbagai kegiatan dan pelayanan kesehatan masyarakat di wilayah kerja.",
    icon: Hospital,
    requirements: [
      "Menyesuaikan jenis kegiatan atau pelayanan",
    ],
  },
];

const categories = [
  "Semua Layanan",
  "Pelayanan Dasar",
  "Ibu & Anak",
  "Penunjang",
  "Kesehatan Masyarakat",
];

export default function LayananPage() {
  return (
    <main>
      <header className="nav">
        <Link href="/" className="brand">
          <div className="logo">
            <HeartPulse size={22} />
          </div>

          <div>
            <b>PUSKESMAS TARAILU</b>
            <span>SAMPAGA · Portal Informasi</span>
          </div>
        </Link>

        <nav>
          <Link href="/">Beranda</Link>
          <Link href="/#profil">Profil</Link>
          <Link href="/layanan">Layanan</Link>
          <Link href="/persyaratan">Persyaratan</Link>
          <Link href="/#jadwal">Jadwal</Link>
          <Link href="/#informasi">Informasi</Link>
        </nav>

        <Link className="navContact" href="/kontak">
          Kontak
        </Link>
      </header>

      <section className="pageHero">
        <div>
          <Link className="backLink" href="/">
            <ArrowLeft size={15} />
            Kembali ke Beranda
          </Link>

          <span className="eyebrow">LAYANAN PUSKESMAS</span>

          <h1>
            Layanan kesehatan
            <br />
            <em>untuk masyarakat.</em>
          </h1>

          <p>
            Jelajahi berbagai layanan yang tersedia di Puskesmas Tarailu
            Sampaga beserta informasi singkat dan persyaratan yang perlu
            dipersiapkan.
          </p>
        </div>

        <div className="pageHeroCard">
          <Hospital size={32} />
          <strong>Informasi Pelayanan</strong>
          <span>Temukan layanan sesuai kebutuhan Anda.</span>
        </div>
      </section>

      <section className="catalog">
        <div className="catalogTop">
          <div>
            <span className="eyebrow">KATALOG LAYANAN</span>
            <h2>Daftar layanan</h2>
          </div>

          <div className="searchBox">
            <Search size={17} />
            <input
              aria-label="Cari layanan"
              placeholder="Cari layanan..."
            />
          </div>
        </div>

        <div className="categoryRow">
          {categories.map((category, index) => (
            <button
              className={index === 0 ? "active" : ""}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="catalogGrid">
          {services.map(
            ({
              category,
              title,
              description,
              icon: Icon,
              requirements,
            }) => (
              <article
                className="serviceDetailCard"
                key={title}
              >
                <div className="serviceCardHead">
                  <div className="icon">
                    <Icon size={23} />
                  </div>

                  <span>{category}</span>
                </div>

                <h3>{title}</h3>

                <p>{description}</p>

                <div className="miniRequirements">
                  <strong>Persyaratan umum</strong>

                  <ul>
                    {requirements.slice(0, 2).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <Link href="/persyaratan">
                  Lihat persyaratan
                  <ArrowRight size={15} />
                </Link>
              </article>
            )
          )}
        </div>
      </section>

      <section className="infoStrip">
        <div>
          <span className="eyebrow">CATATAN</span>

          <h2>Informasi layanan dapat berubah.</h2>

          <p>
            Jenis pelayanan, persyaratan, dan jadwal dapat disesuaikan
            dengan kebijakan Puskesmas. Pastikan memeriksa informasi
            terbaru sebelum berkunjung.
          </p>
        </div>

        <Link className="primary" href="/kontak">
          Hubungi Kami
          <ArrowRight size={17} />
        </Link>
      </section>

      <footer>
        <div className="footerBrand">
          <div className="footerLogo">
            <HeartPulse size={21} />
          </div>

          <div>
            <b>PUSKESMAS TARAILU SAMPAGA</b>
            <p>
              Portal Informasi Pelayanan Kesehatan Masyarakat.
            </p>
          </div>
        </div>

        <div className="footerRight">
          <span>© 2026 Puskesmas Tarailu Sampaga</span>
          <span>Portal Informasi Publik</span>
        </div>
      </footer>
    </main>
  );
}
