"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  HeartPulse,
  MapPin,
  Users,
} from "lucide-react";

export default function ProfilPage() {
  return (
    <main className="profilePage">

      {/* =========================
          HEADER
      ========================= */}
      <header className="profileHeader">

        <Link href="/" className="profileBrand">
          <div className="profileBrandLogo">
            <Image
              src="/logo-puskesmas.png"
              alt="Logo Puskesmas Tarailu Sampaga"
              width={42}
              height={42}
            />
          </div>

          <div>
            <strong>PUSKESMAS TARAILU</strong>
            <span>SAMPAGA · Portal Informasi</span>
          </div>
        </Link>

        <nav className="profileNav">
          <Link href="/">Beranda</Link>
          <Link href="/profil" className="active">
            Profil
          </Link>
          <Link href="/layanan">Layanan</Link>
          <Link href="/persyaratan">Persyaratan</Link>
          <Link href="/jadwal">Jadwal</Link>
          <Link href="/informasi">Informasi</Link>
        </nav>

        <Link href="/kontak" className="profileContactButton">
          Hubungi Kami
        </Link>

      </header>


      {/* =========================
          HERO PROFIL
      ========================= */}
      <section className="profileHero">

        <div className="profileHeroInner">

          <div className="profileHeroText">

            <span className="profileEyebrow">
              PROFIL PUSKESMAS
            </span>

            <h1>
              Mengenal
              <br />
              <em>Puskesmas Tarailu Sampaga.</em>
            </h1>

            <p>
              Informasi mengenai profil, arah pelayanan, organisasi,
              dan sumber daya pelayanan kesehatan Puskesmas Tarailu Sampaga.
            </p>

            <div className="profileHeroActions">
              <a href="#tentang" className="profilePrimaryButton">
                Tentang Puskesmas
                <ArrowRight size={17} />
              </a>

              <a href="#struktur" className="profileSecondaryButton">
                Lihat Struktur
              </a>
            </div>

          </div>


          <div className="profileHeroVisual">

            <div className="profileLogoCircle">
              <Image
                src="/logo-puskesmas.png"
                alt="Logo Puskesmas Tarailu Sampaga"
                width={150}
                height={150}
              />
            </div>

            <div className="profileFloatingCard">
              <HeartPulse size={20} />
              <div>
                <strong>Pelayanan Kesehatan</strong>
                <span>Untuk masyarakat</span>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          TENTANG
      ========================= */}
      <section className="profileSection" id="tentang">

        <div className="profileSectionHeading">
          <span className="profileEyebrow">
            TENTANG PUSKESMAS
          </span>

          <h2>
            Pelayanan kesehatan
            <br />
            untuk masyarakat.
          </h2>
        </div>


        <div className="aboutGrid">

          <div className="aboutMainCard">

            <div className="aboutIcon">
              <Building2 size={25} />
            </div>

            <span className="aboutNumber">01</span>

            <h3>Puskesmas Tarailu Sampaga</h3>

            <p>
              Puskesmas Tarailu Sampaga merupakan fasilitas pelayanan
              kesehatan yang memberikan pelayanan kesehatan kepada
              masyarakat di wilayah Kecamatan Sampaga dan sekitarnya.
            </p>

            <p>
              Portal ini dibuat untuk membantu masyarakat memperoleh
              informasi mengenai layanan, persyaratan, jadwal,
              informasi kegiatan, serta kontak Puskesmas dengan
              lebih mudah.
            </p>

          </div>


          <div className="aboutSide">

            <div className="aboutSmallCard">
              <div className="aboutSmallIcon">
                <MapPin size={20} />
              </div>

              <div>
                <span>LOKASI</span>
                <strong>
                  Desa Tarailu, Kecamatan Sampaga
                </strong>
              </div>
            </div>


            <div className="aboutSmallCard">
              <div className="aboutSmallIcon">
                <Users size={20} />
              </div>

              <div>
                <span>FOKUS PELAYANAN</span>
                <strong>
                  Kesehatan masyarakat
                </strong>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          VISI MISI
      ========================= */}
      <section className="visionSection">

        <div className="visionHeader">
          <span className="profileEyebrow">
            ARAH PELAYANAN
          </span>

          <h2>
            Visi & Misi
          </h2>

          <p>
            Informasi mengenai arah dan tujuan pelayanan Puskesmas.
          </p>
        </div>


        <div className="visionGrid">

          <div className="visionCard visionMain">

            <span className="visionLabel">
              VISI
            </span>

            <div className="visionQuote">
              <span>“</span>

              <p>
                Pelayanan kesehatan masyarakat yang mudah
                diakses, berkualitas, dan berorientasi pada
                kebutuhan masyarakat.
              </p>
            </div>

          </div>


          <div className="visionCard">

            <span className="visionLabel">
              MISI
            </span>

            <div className="missionList">

              <div>
                <CheckCircle2 size={18} />
                <span>
                  Memberikan pelayanan kesehatan yang
                  mudah diakses masyarakat.
                </span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>
                  Mendukung peningkatan kualitas kesehatan
                  masyarakat.
                </span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>
                  Mengembangkan pelayanan yang berorientasi
                  pada kebutuhan masyarakat.
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          STRUKTUR ORGANISASI
      ========================= */}
      <section className="structureSection" id="struktur">

        <div className="structureHeader">

          <div>
            <span className="profileEyebrow">
              STRUKTUR ORGANISASI
            </span>

            <h2>
              Struktur Puskesmas
              <br />
              Tarailu Sampaga.
            </h2>
          </div>

          <p>
            Struktur organisasi Puskesmas Tarailu Sampaga
            beserta pembagian kelompok pelayanan berdasarkan
            klaster.
          </p>

        </div>


        <div className="structureCard">

          <div className="structureCardTop">

            <div className="structureIcon">
              <Building2 size={23} />
            </div>

            <div>
              <strong>
                Struktur Organisasi UPTD Puskesmas Tarailu
              </strong>

              <span>
                Susunan organisasi dan pembagian pelayanan
              </span>
            </div>

          </div>


          <div className="structureImageWrapper">

            <Image
              src="/struktur-organisasi.png"
              alt="Struktur Organisasi UPTD Puskesmas Tarailu"
              width={1600}
              height={950}
              className="structureImage"
            />

          </div>

          <div className="structureNote">
            <span>ℹ</span>

            <p>
              Struktur organisasi ditampilkan berdasarkan
              dokumen struktur organisasi Puskesmas Tarailu
              yang tersedia.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          KLASTER PELAYANAN
      ========================= */}
      <section className="clusterSection">

        <div className="clusterHeader">

          <span className="profileEyebrow">
            KELOMPOK PELAYANAN
          </span>

          <h2>
            Pelayanan berdasarkan klaster.
          </h2>

          <p>
            Pelayanan Puskesmas dikelompokkan untuk memudahkan
            masyarakat memahami jenis pelayanan yang tersedia.
          </p>

        </div>


        <div className="clusterGrid">

          <div className="clusterCard">
            <span>01</span>
            <h3>Klaster 1</h3>
            <strong>Manajemen</strong>
            <p>
              Pengelolaan administrasi, informasi, mutu,
              dan koordinasi pelayanan Puskesmas.
            </p>
            <Link href="/layanan">
              Lihat layanan <ChevronRight size={16} />
            </Link>
          </div>


          <div className="clusterCard">
            <span>02</span>
            <h3>Klaster 2</h3>
            <strong>Ibu dan Anak</strong>
            <p>
              Pelayanan kesehatan bagi ibu, bayi, balita,
              anak, dan remaja.
            </p>
            <Link href="/layanan">
              Lihat layanan <ChevronRight size={16} />
            </Link>
          </div>


          <div className="clusterCard">
            <span>03</span>
            <h3>Klaster 3</h3>
            <strong>Dewasa dan Lansia</strong>
            <p>
              Pelayanan kesehatan untuk usia dewasa
              hingga lanjut usia.
            </p>
            <Link href="/layanan">
              Lihat layanan <ChevronRight size={16} />
            </Link>
          </div>


          <div className="clusterCard">
            <span>04</span>
            <h3>Klaster 4</h3>
            <strong>Penyakit Menular</strong>
            <p>
              Pencegahan, pemantauan, dan pengendalian
              penyakit menular.
            </p>
            <Link href="/layanan">
              Lihat layanan <ChevronRight size={16} />
            </Link>
          </div>


          <div className="clusterCard">
            <span>05</span>
            <h3>Lintas Klaster</h3>
            <strong>Pelayanan Pendukung</strong>
            <p>
              Pelayanan pendukung untuk kebutuhan
              kesehatan lintas kelompok.
            </p>
            <Link href="/layanan">
              Lihat layanan <ChevronRight size={16} />
            </Link>
          </div>

        </div>

      </section>


      {/* =========================
          CONTACT CTA
      ========================= */}
      <section className="profileCta">

        <div>
          <span className="profileEyebrow">
            INFORMASI LEBIH LANJUT
          </span>

          <h2>
            Butuh informasi Puskesmas?
          </h2>

          <p>
            Lihat alamat, nomor kontak, email, dan informasi
            lokasi Puskesmas Tarailu Sampaga.
          </p>
        </div>

        <Link href="/kontak" className="profileCtaButton">
          Hubungi Kami
          <ArrowRight size={18} />
        </Link>

      </section>


      {/* =========================
          FOOTER
      ========================= */}
      <footer className="profileFooter">

        <div className="profileFooterBrand">

          <Image
            src="/logo-puskesmas.png"
            alt="Logo Puskesmas Tarailu Sampaga"
            width={42}
            height={42}
          />

          <div>
            <strong>PUSKESMAS TARAILU SAMPAGA</strong>
            <span>
              Portal Informasi Pelayanan Kesehatan Masyarakat
            </span>
          </div>

        </div>

        <span>
          © 2026 Puskesmas Tarailu Sampaga
        </span>

      </footer>

    </main>
  );
}
