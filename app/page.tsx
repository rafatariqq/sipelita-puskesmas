import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  FileText,
  HeartPulse,
  Hospital,
  Info,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Users,
  Building2,
} from "lucide-react";

const services = [
  {
    title: "Klaster 1",
    subtitle: "Manajemen",
    description:
      "Pengelolaan administrasi, informasi, mutu, dan sistem pelayanan Puskesmas.",
    icon: Building2,
  },
  {
    title: "Klaster 2",
    subtitle: "Ibu dan Anak",
    description:
      "Pelayanan kesehatan bagi ibu, bayi, balita, anak, dan remaja.",
    icon: HeartPulse,
  },
  {
    title: "Klaster 3",
    subtitle: "Usia Dewasa dan Lansia",
    description:
      "Pelayanan kesehatan untuk masyarakat usia dewasa hingga lanjut usia.",
    icon: Users,
  },
  {
    title: "Klaster 4",
    subtitle: "Penanggulangan Penyakit Menular",
    description:
      "Upaya pencegahan, pemantauan, dan pengendalian penyakit menular.",
    icon: ShieldCheck,
  },
  {
    title: "Lintas Klaster",
    subtitle: "Pelayanan Pendukung",
    description:
      "Pelayanan yang mendukung kebutuhan kesehatan lintas kelompok dan kondisi khusus.",
    icon: Hospital,
  },
];

const announcements = [
  {
    date: "17 SEP 2026",
    title: "Informasi pelayanan Puskesmas",
    description:
      "Dapatkan informasi terbaru mengenai pelayanan dan kegiatan Puskesmas Tarailu Sampaga.",
  },
  {
    date: "15 SEP 2026",
    title: "Informasi persyaratan pelayanan",
    description:
      "Periksa dokumen dan persyaratan yang perlu disiapkan sebelum mendapatkan pelayanan.",
  },
  {
    date: "12 SEP 2026",
    title: "Kegiatan kesehatan masyarakat",
    description:
      "Ikuti informasi kegiatan kesehatan dan penyuluhan yang dilaksanakan oleh Puskesmas.",
  },
];

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <header className="nav">
        <Link href="/" className="brand" aria-label="Puskesmas Tarailu Sampaga">
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
          <Link href="/profil">Profil</Link>
          <Link href="/layanan">Layanan</Link>
          <Link href="/persyaratan">Persyaratan</Link>
          <Link href="#jadwal">Jadwal</Link>
          <Link href="#informasi">Informasi</Link>
        </nav>

        <Link className="navContact" href="/kontak">
          Kontak
        </Link>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="heroText">
          <div className="pill">
            <Hospital size={16} />
            Pelayanan kesehatan masyarakat
          </div>

          <h1>
            Pelayanan kesehatan
            <br />
            <em>lebih mudah</em> diakses.
          </h1>

          <p>
            Selamat datang di portal informasi Puskesmas Tarailu Sampaga.
            Temukan layanan, persyaratan, jadwal, informasi, dan kontak
            Puskesmas dalam satu tempat.
          </p>

          <div className="actions">
            <Link className="primary" href="#layanan">
              Jelajahi Layanan <ArrowRight size={18} />
            </Link>

            <Link className="secondary" href="/kontak">
              Hubungi Kami
            </Link>
          </div>

          <div className="heroNote">
            <span className="noteDot" />
            Informasi resmi untuk masyarakat
          </div>
        </div>

        <div className="heroVisual">
          <div className="visualGlow" />

          <div className="healthCard">
            <div className="healthCardTop">
              <div className="healthIcon">
                <HeartPulse size={25} />
              </div>

              <span>LAYANAN KESEHATAN</span>
            </div>

            <div className="healthIllustration">
              <div className="cross crossOne">+</div>
              <div className="cross crossTwo">+</div>

              <div className="circlePulse">
                <HeartPulse size={54} />
              </div>
            </div>

            <div className="healthCardBottom">
              <div>
                <small>Fasilitas</small>
                <strong>Puskesmas Tarailu</strong>
              </div>

              <div className="openBadge">
                <span />
                Pelayanan
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="quickInfo">
        <div className="quickItem">
          <div className="quickIcon">
            <Info size={21} />
          </div>

          <div>
            <strong>Informasi Terpusat</strong>
            <span>
              Layanan dan informasi Puskesmas dalam satu portal.
            </span>
          </div>
        </div>

        <div className="quickItem">
          <div className="quickIcon">
            <FileText size={21} />
          </div>

          <div>
            <strong>Persyaratan Jelas</strong>
            <span>
              Ketahui dokumen yang perlu disiapkan sebelum pelayanan.
            </span>
          </div>
        </div>

        <div className="quickItem">
          <div className="quickIcon">
            <MessageSquare size={21} />
          </div>

          <div>
            <strong>Pengaduan Masyarakat</strong>
            <span>
              Sampaikan kritik, saran, dan masukan kepada kami.
            </span>
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section className="section" id="layanan">
        <div className="sectionHead">
          <div>
            <span className="eyebrow">LAYANAN PUSKESMAS</span>

            <h2>
              Temukan layanan
              <br />
              yang Anda butuhkan.
            </h2>
          </div>

          <p>
            Pilih klaster untuk mendapatkan informasi mengenai kelompok
            pelayanan kesehatan yang tersedia di Puskesmas Tarailu Sampaga.
          </p>
        </div>

        <div className="serviceGrid">
          {services.map(
            ({ title, subtitle, description, icon: Icon }) => (
              <Link
                className="service"
                href="/layanan"
                key={title}
              >
                <div className="icon">
                  <Icon size={23} />
                </div>

                <h3>{title}</h3>

                <strong
                  style={{
                    display: "block",
                    marginTop: "4px",
                    marginBottom: "10px",
                    fontSize: "15px",
                  }}
                >
                  {subtitle}
                </strong>

                <p>{description}</p>

                <span>
                  Lihat detail <ArrowRight size={16} />
                </span>
              </Link>
            )
          )}
        </div>
      </section>

      {/* PERSYARATAN */}
      <section className="splitBand" id="persyaratan">
        <div className="splitContent">
          <span className="eyebrow">PERSYARATAN PELAYANAN</span>

          <h2>Siapkan dokumen sebelum datang.</h2>

          <p>
            Periksa persyaratan pelayanan terlebih dahulu agar proses
            administrasi dapat dilakukan dengan lebih mudah.
          </p>

          <Link className="whiteBtn" href="/persyaratan">
            Lihat Persyaratan <ArrowRight size={17} />
          </Link>
        </div>

        <div className="requirementCard">
          <div className="requirementIcon">
            <FileText size={24} />
          </div>

          <div>
            <strong>Dokumen pelayanan</strong>

            <p>
              Informasi persyaratan dapat berbeda sesuai dengan jenis layanan.
            </p>
          </div>

          <ChevronRight size={20} />
        </div>
      </section>

      {/* JADWAL */}
      <section className="section scheduleSection" id="jadwal">
        <div className="sectionHead">
          <div>
            <span className="eyebrow">JADWAL PELAYANAN</span>
            <h2>Ketahui waktu pelayanan.</h2>
          </div>

          <Link className="textLink" href="/jadwal">
            Lihat jadwal lengkap <ArrowRight size={16} />
          </Link>
        </div>

        <div className="scheduleGrid">
          <div className="scheduleMain">
            <div className="scheduleIcon">
              <CalendarDays size={25} />
            </div>

            <div>
              <span>JAM OPERASIONAL</span>
              <strong>Senin – Jumat</strong>
              <p>08.00 – 16.00</p>
            </div>
          </div>

          <div className="scheduleSmall">
            <Clock3 size={21} />

            <div>
              <strong>Jadwal dapat berubah</strong>
              <p>Periksa informasi terbaru sebelum berkunjung.</p>
            </div>
          </div>

          <div className="scheduleSmall">
            <MapPin size={21} />

            <div>
              <strong>Lokasi Puskesmas</strong>
              <p>
                Tarailu, Kecamatan Sampaga, Kabupaten Mamuju.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INFORMASI */}
      <section className="section news" id="informasi">
        <div className="sectionHead">
          <div>
            <span className="eyebrow">INFORMASI TERBARU</span>
            <h2>Berita & pengumuman.</h2>
          </div>

          <Link className="textLink" href="/informasi">
            Semua informasi <ArrowRight size={16} />
          </Link>
        </div>

        <div className="newsGrid">
          {announcements.map((item) => (
            <article key={item.title}>
              <span>{item.date}</span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <Link href="/informasi">
                Baca selengkapnya <ArrowRight size={15} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* PROFIL */}
      <section className="profileBand" id="profil">
        <div className="profileVisual">
          <div className="profileSquare">
            <Hospital size={55} />
          </div>
        </div>

        <div className="profileText">
          <span className="eyebrow">PROFIL PUSKESMAS</span>

          <h2>Puskesmas Tarailu Sampaga</h2>

          <p>
            Puskesmas Tarailu Sampaga hadir sebagai bagian dari pelayanan
            kesehatan masyarakat di wilayah Sampaga. Portal ini menyediakan
            informasi publik mengenai layanan, jadwal, persyaratan, kegiatan,
            dan kontak Puskesmas.
          </p>

          <div className="profileLinks">
            <Link href="/profil">
              Tentang Puskesmas <ArrowRight size={16} />
            </Link>

            <Link href="/profil#struktur">
              Struktur Organisasi <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="contactCta">
        <div>
          <span className="eyebrow">BUTUH INFORMASI?</span>

          <h2>Hubungi Puskesmas Tarailu Sampaga.</h2>

          <p>
            Gunakan halaman kontak untuk melihat alamat, nomor yang dapat
            dihubungi, jam pelayanan, dan lokasi Puskesmas.
          </p>
        </div>

        <Link className="primary" href="/kontak">
          Buka Halaman Kontak <ArrowRight size={18} />
        </Link>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footerBrand">
          <div className="footerLogo">
            <HeartPulse size={21} />
          </div>

          <div>
            <b>PUSKESMAS TARAILU SAMPAGA</b>
            <p>Portal Informasi Pelayanan Kesehatan Masyarakat.</p>
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
