import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  FileText,
  HeartPulse,
  Info,
  UserRound,
} from "lucide-react";

const groups = [
  {
    title: "Persyaratan Umum Berobat",
    icon: UserRound,
    items: [
      "Identitas diri yang masih berlaku.",
      "Kartu JKN/BPJS apabila terdaftar sebagai peserta.",
      "Dokumen atau kartu pelayanan yang dimiliki bila diperlukan.",
      "Sampaikan kebutuhan pelayanan kepada petugas saat datang.",
    ],
  },
  {
    title: "Administrasi Pelayanan",
    icon: FileCheck2,
    items: [
      "Menyiapkan dokumen sesuai jenis pelayanan.",
      "Membawa dokumen rujukan atau permintaan pemeriksaan jika diperlukan.",
      "Pastikan data identitas sesuai dengan dokumen yang dibawa.",
      "Ikuti arahan petugas untuk proses administrasi.",
    ],
  },
  {
    title: "Pelayanan Ibu & Anak",
    icon: HeartPulse,
    items: [
      "Identitas ibu atau anak.",
      "Buku KIA atau kartu imunisasi apabila tersedia.",
      "Dokumen kepesertaan JKN/BPJS apabila ada.",
      "Dokumen tambahan mengikuti jenis pelayanan yang dipilih.",
    ],
  },
];

const checklist = [
  "Kartu identitas",
  "Kartu JKN/BPJS jika ada",
  "Buku KIA/kartu imunisasi jika diperlukan",
  "Surat rujukan atau dokumen pendukung bila diperlukan",
];

export default function PersyaratanPage() {
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

          <span className="eyebrow">
            PERSYARATAN PELAYANAN
          </span>

          <h1>
            Siapkan dokumen
            <br />
            <em>sebelum datang.</em>
          </h1>

          <p>
            Halaman ini membantu masyarakat mengetahui dokumen umum
            yang perlu disiapkan sebelum mendapatkan pelayanan di
            Puskesmas Tarailu Sampaga.
          </p>
        </div>

        <div className="pageHeroCard">
          <FileText size={32} />
          <strong>Persiapan Pelayanan</strong>
          <span>Periksa dokumen sesuai jenis layanan.</span>
        </div>
      </section>

      <section className="requirements">
        <div className="sectionHead">
          <div>
            <span className="eyebrow">
              DOKUMEN YANG DISIAPKAN
            </span>

            <h2>Checklist umum.</h2>
          </div>

          <p>
            Persyaratan di bawah merupakan informasi umum.
            Persyaratan khusus dapat berbeda berdasarkan jenis
            pelayanan.
          </p>
        </div>

        <div className="checklist">
          {checklist.map((item, index) => (
            <div className="checkItem" key={item}>
              <CheckCircle2 size={20} />

              <div>
                <small>0{index + 1}</small>
                <strong>{item}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="requirementCards">
        {groups.map(({ title, icon: Icon, items }) => (
          <article
            className="requirementLargeCard"
            key={title}
          >
            <div className="icon">
              <Icon size={24} />
            </div>

            <h3>{title}</h3>

            <ul>
              {items.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/layanan">
              Lihat layanan
              <ArrowRight size={15} />
            </Link>
          </article>
        ))}
      </section>

      <section className="notice">
        <div className="noticeIcon">
          <Info size={23} />
        </div>

        <div>
          <strong>Perhatian</strong>

          <p>
            Informasi persyaratan pada portal ini bersifat
            informatif. Untuk persyaratan khusus, perubahan
            kebijakan, atau dokumen tertentu, silakan konfirmasi
            kepada petugas Puskesmas sebelum berkunjung.
          </p>
        </div>
      </section>

      <section className="infoStrip">
        <div>
          <span className="eyebrow">MASIH BINGUNG?</span>

          <h2>
            Hubungi Puskesmas untuk informasi lebih lanjut.
          </h2>

          <p>
            Gunakan halaman kontak untuk melihat informasi
            komunikasi dan lokasi Puskesmas Tarailu Sampaga.
          </p>
        </div>

        <Link className="primary" href="/kontak">
          Halaman Kontak
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
