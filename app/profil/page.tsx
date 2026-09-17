import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  HeartPulse,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const values = [
  {
    title: "Pelayanan Berorientasi Masyarakat",
    description:
      "Mengutamakan kebutuhan masyarakat dengan pelayanan yang ramah, jelas, dan mudah dipahami.",
    icon: HeartPulse,
  },
  {
    title: "Profesional & Bertanggung Jawab",
    description:
      "Mendukung pelayanan yang tertib, profesional, dan sesuai dengan standar yang berlaku.",
    icon: ShieldCheck,
  },
  {
    title: "Kerja Sama",
    description:
      "Membangun kolaborasi antara tenaga kesehatan, masyarakat, dan pihak terkait untuk mendukung kesehatan wilayah.",
    icon: Users,
  },
];

const staff = [
  { role: "Kepala Puskesmas", name: "Nama Kepala Puskesmas" },
  { role: "Dokter", name: "Nama Tenaga Kesehatan" },
  { role: "Perawat", name: "Nama Tenaga Kesehatan" },
  { role: "Bidan", name: "Nama Tenaga Kesehatan" },
];

export default function ProfilPage() {
  return (
    <main>
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
          <Link href="/#jadwal">Jadwal</Link>
        </nav>

        <Link href="/#kontak" className="navContact">
          Hubungi Kami
        </Link>
      </header>

      <section className="pageHero profileHero">
        <div>
          <Link href="/" className="backLink">
            <ArrowLeft size={15} /> Kembali ke Beranda
          </Link>
          <span className="eyebrow">PROFIL PUSKESMAS</span>
          <h1>Mengenal Puskesmas Tarailu Sampaga</h1>
          <p>
            Informasi mengenai profil, arah pelayanan, nilai kerja, dan sumber
            daya manusia Puskesmas Tarailu Sampaga.
          </p>
        </div>
        <div className="pageHeroCard">
          <div className="profileHeroIcon">
            <Building2 size={58} />
          </div>
          <strong>Puskesmas Tarailu Sampaga</strong>
          <span>Pelayanan kesehatan untuk masyarakat</span>
        </div>
      </section>

      <section className="section profileIntro">
        <div className="sectionHead">
          <div>
            <span className="eyebrow">TENTANG KAMI</span>
            <h2>Pusat pelayanan kesehatan masyarakat</h2>
          </div>
        </div>

        <div className="profileAboutGrid">
          <article className="profileAboutMain">
            <p>
              Puskesmas Tarailu Sampaga merupakan fasilitas pelayanan kesehatan
              tingkat pertama yang memberikan pelayanan kesehatan kepada
              masyarakat di wilayah kerjanya.
            </p>
            <p>
              Melalui pelayanan promotif, preventif, kuratif, dan kegiatan
              kesehatan masyarakat, Puskesmas berupaya mendukung peningkatan
              derajat kesehatan masyarakat secara berkelanjutan.
            </p>
            <p className="demoNote">
              Catatan: isi profil, wilayah kerja, dan data resmi perlu
              disesuaikan dengan informasi yang diberikan oleh Puskesmas.
            </p>
          </article>

          <aside className="profileFactCard">
            <span>IDENTITAS</span>
            <div>
              <strong>Nama</strong>
              <p>Puskesmas Tarailu Sampaga</p>
            </div>
            <div>
              <strong>Jenis Fasilitas</strong>
              <p>Pusat Kesehatan Masyarakat</p>
            </div>
            <div>
              <strong>Wilayah</strong>
              <p>Sampaga, Kabupaten Mamuju</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="splitBand profileMission">
        <div>
          <span className="eyebrow">VISI</span>
          <h2>Mewujudkan masyarakat yang sehat melalui pelayanan yang mudah diakses.</h2>
          <p>
            Rumusan visi ini merupakan contoh dan dapat diganti dengan visi
            resmi Puskesmas Tarailu Sampaga.
          </p>
        </div>
        <div className="missionCard">
          <div className="missionIcon">
            <Target size={25} />
          </div>
          <strong>MISI</strong>
          <ul>
            <li>Meningkatkan akses dan mutu pelayanan kesehatan.</li>
            <li>Mendorong perilaku hidup bersih dan sehat.</li>
            <li>Memperkuat kegiatan promotif dan preventif.</li>
            <li>Membangun kerja sama dengan masyarakat dan lintas sektor.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <div>
            <span className="eyebrow">NILAI PELAYANAN</span>
            <h2>Prinsip dalam memberikan pelayanan</h2>
          </div>
          <p>
            Nilai berikut menjadi contoh isi awal dan dapat disesuaikan dengan
            budaya kerja resmi Puskesmas.
          </p>
        </div>

        <div className="profileValues">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <article className="profileValue" key={item.title}>
                <div className="icon">
                  <Icon size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section staffSection">
        <div className="sectionHead">
          <div>
            <span className="eyebrow">TENAGA KESEHATAN</span>
            <h2>Tim Puskesmas</h2>
          </div>
          <p>
            Daftar nama di bawah merupakan data contoh. Ganti dengan data resmi
            setelah mendapatkan izin untuk dipublikasikan.
          </p>
        </div>

        <div className="staffGrid">
          {staff.map((person) => (
            <article className="staffCard" key={person.role}>
              <div className="staffAvatar">
                <Users size={22} />
              </div>
              <div>
                <span>{person.role}</span>
                <strong>{person.name}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contactCta">
        <div>
          <span className="eyebrow">INFORMASI LEBIH LANJUT</span>
          <h2>Butuh informasi tentang pelayanan Puskesmas?</h2>
          <p>
            Hubungi Puskesmas Tarailu Sampaga melalui kontak resmi untuk
            mendapatkan informasi yang paling terbaru.
          </p>
        </div>
        <Link href="/#kontak" className="primary">
          Lihat Kontak <ArrowRight size={16} />
        </Link>
      </section>

      <footer>
        <div className="footerBrand">
          <div className="footerLogo">
            <HeartPulse size={20} />
          </div>
          <div>
            <b>PUSKESMAS TARAILU SAMPAGA</b>
            <p>Portal informasi pelayanan kesehatan masyarakat.</p>
          </div>
        </div>
        <div className="footerRight">
          <span>Informasi Publik</span>
          <span>Pelayanan Kesehatan</span>
        </div>
      </footer>
    </main>
  );
}
