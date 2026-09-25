import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock3,
  MessageCircle,
  ArrowRight,
  ExternalLink,
  Heart,
  Building2,
} from "lucide-react";

export default function Kontak() {
  // Format nomor WA menggunakan kode negara (6282353685324)
  const whatsappNumber = "6282353685324";
  const whatsappMessage = encodeURIComponent(
    "Halo SIPELITA, saya ingin bertanya mengenai layanan Puskesmas Tarailu Sampaga."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Tautan Google Maps ke Puskesmas Satelit Tarailu
  const googleMapsUrl =
    "https://www.google.com/maps/place/Puskesmas+Satelit+Tarailu/@-2.3111475,119.1754624,18z/data=!4m23!1m16!4m15!1m6!1m2!1s0x2d92d833d4d70f27:0xec8b6ecb8c7bb406!2sJl.+Poros+Mamuju+-+Topoyo,+Sulawesi+Barat!2m2!1d119.1621854!2d-2.4195697!1m6!1m2!1s0x2d9290f914f05173:0xb0b84e39a98a507!2sTarailu,+Kec.+Sampaga,+Kabupaten+Mamuju,+Sulawesi+Barat!2m2!1d119.179765!2d-2.3173016!3e0!3m5!1s0x2d9291e7019333a9:0x7ba3c2a8525060fc!8m2!3d-2.3112276!4d119.1766989!16s%2Fg%2F11ghsjk6wk";

  return (
    <div className="sipelita-page">
      {/* ===== EMBEDDED STANDALONE STYLES ===== */}
      <style>{`
        .sipelita-page {
          min-height: 100vh;
          background-color: #f7fbf9;
          color: #1f2937;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .sipelita-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background-color: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid #eef2f0;
          padding: 16px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sipelita-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: inherit;
        }

        .sipelita-logo-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background-color: #e6f4ee;
          border: 1px solid #c2e5d5;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0d7a5f;
        }

        .sipelita-logo-title {
          font-weight: 900;
          font-size: 15px;
          letter-spacing: -0.3px;
          color: #111827;
          text-transform: uppercase;
          line-height: 1.1;
        }

        .sipelita-logo-sub {
          font-size: 11px;
          font-weight: 600;
          color: #8896a6;
          letter-spacing: 0.5px;
        }

        .sipelita-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .sipelita-nav a {
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          color: #4b5563;
          transition: color 0.2s;
        }

        .sipelita-nav a:hover, .sipelita-nav a.active {
          color: #0d7a5f;
          font-weight: 700;
        }

        .sipelita-btn-outline {
          padding: 8px 20px;
          border-radius: 9999px;
          border: 1px solid #d1d5db;
          background-color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          color: #1f2937;
          text-decoration: none;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
        }

        .sipelita-btn-outline:hover {
          border-color: #0d7a5f;
          color: #0d7a5f;
          box-shadow: 0 2px 8px rgba(13, 122, 95, 0.12);
        }

        .sipelita-main {
          max-width: 1140px;
          margin: 0 auto;
          padding: 48px 24px 80px 24px;
        }

        .sipelita-hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: center;
          margin-bottom: 64px;
        }

        @media (max-width: 900px) {
          .sipelita-hero {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .sipelita-nav {
            display: none;
          }
          .sipelita-header {
            padding: 16px 20px;
          }
        }

        .sipelita-eyebrow {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #0d7a5f;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: block;
        }

        .sipelita-hero-title {
          font-size: 48px;
          font-weight: 900;
          line-height: 1.1;
          color: #111827;
          margin: 0 0 20px 0;
          letter-spacing: -1px;
        }

        .sipelita-hero-title span {
          color: #0d7a5f;
        }

        .sipelita-hero-desc {
          font-size: 15px;
          line-height: 1.6;
          color: #6b7280;
          margin-bottom: 32px;
          max-width: 520px;
        }

        .sipelita-btn-group {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 16px;
        }

        .sipelita-btn-primary {
          background-color: #0d7a5f;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s;
          box-shadow: 0 4px 12px rgba(13, 122, 95, 0.25);
        }

        .sipelita-btn-primary:hover {
          background-color: #0a634d;
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(13, 122, 95, 0.35);
        }

        .sipelita-btn-link {
          color: #0d7a5f;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 12px 16px;
          border-radius: 12px;
          transition: background-color 0.2s;
        }

        .sipelita-btn-link:hover {
          background-color: #e6f4ee;
        }

        /* Hero Right Graphic */
        .sipelita-graphic-wrapper {
          display: flex;
          justify-content: center;
          position: relative;
        }

        .sipelita-circle-bg {
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(230, 244, 238, 0.9) 0%, rgba(240, 249, 245, 0.4) 100%);
          border: 1px solid #d3ebd8;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .sipelita-circle-inner {
          width: 240px;
          height: 240px;
          border-radius: 50%;
          border: 2px dashed #b3e0cd;
          background-color: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(4px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
        }

        .sipelita-badge {
          position: absolute;
          bottom: 10px;
          right: -10px;
          background-color: #ffffff;
          padding: 12px 18px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          border: 1px solid #f3f4f6;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sipelita-badge-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background-color: #e6f4ee;
          color: #0d7a5f;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Content Cards Section */
        .sipelita-section {
          border-top: 1px solid #eef2f0;
          padding-top: 48px;
        }

        .sipelita-section-header {
          margin-bottom: 32px;
        }

        .sipelita-section-title {
          font-size: 32px;
          font-weight: 900;
          color: #111827;
          margin: 4px 0 0 0;
          letter-spacing: -0.5px;
        }

        .sipelita-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 850px) {
          .sipelita-grid {
            grid-template-columns: 1fr;
          }
        }

        .sipelita-card {
          background-color: #ffffff;
          border-radius: 24px;
          padding: 28px;
          border: 1px solid #f0f0f0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.03);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 20px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .sipelita-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
        }

        .sipelita-card-accent {
          background-color: #e6f4ee;
          border-color: #d1eae0;
        }

        .sipelita-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background-color: #e6f4ee;
          color: #0d7a5f;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sipelita-card-accent .sipelita-card-icon {
          background-color: #ffffff;
        }

        .sipelita-card-label {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          color: #0d7a5f;
          text-transform: uppercase;
          margin-top: 12px;
          display: block;
        }

        .sipelita-card-heading {
          font-size: 18px;
          font-weight: 800;
          color: #111827;
          margin: 6px 0;
        }

        .sipelita-card-desc {
          font-size: 13px;
          color: #6b7280;
          line-height: 1.5;
          margin: 0;
        }

        .sipelita-card-action {
          font-size: 13px;
          font-weight: 700;
          color: #0d7a5f;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: auto;
        }

        .sipelita-card-action:hover {
          text-decoration: underline;
        }
      `}</style>

      {/* ===== NAVBAR HEADER ===== */}
      <header className="sipelita-header">
        <Link href="/" className="sipelita-logo">
          <div className="sipelita-logo-icon">
            <Building2 size={22} />
          </div>
          <div>
            <span className="sipelita-logo-title">PUSKESMAS TARAILU</span>
            <div className="sipelita-logo-sub">SAMPAGA · Portal Informasi</div>
          </div>
        </Link>

        <nav className="sipelita-nav">
          <Link href="/">Beranda</Link>
          <Link href="/profil" className="active">
            Profil
          </Link>
          <Link href="/layanan">Layanan</Link>
          <Link href="/persyaratan">Persyaratan</Link>
          <Link href="/jadwal">Jadwal</Link>
          <Link href="/informasi">Informasi</Link>
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="sipelita-btn-outline"
        >
          Hubungi Kami
        </a>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="sipelita-main">
        {/* HERO SECTION */}
        <section className="sipelita-hero">
          <div>
            <span className="sipelita-eyebrow">PROFIL PUSKESMAS & KONTAK</span>
            <h1 className="sipelita-hero-title">
              Mengenal <br />
              <span>Puskesmas</span> <br />
              <span>Tarailu Sampaga.</span>
            </h1>
            <p className="sipelita-hero-desc">
              Informasi mengenai profil, arah pelayanan, lokasi, serta layanan konsultasi cepat langsung terhubung dengan petugas Puskesmas Tarailu Sampaga.
            </p>

            <div className="sipelita-btn-group">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sipelita-btn-primary"
              >
                <MessageCircle size={18} />
                Chat via WhatsApp
                <ArrowRight size={18} />
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sipelita-btn-link"
              >
                Lihat di Google Maps
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* GRAPHIC CIRCLE */}
          <div className="sipelita-graphic-wrapper">
            <div className="sipelita-circle-bg">
              <div className="sipelita-circle-inner">
                <Building2 size={48} color="#0d7a5f" style={{ marginBottom: 8 }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: "#374151" }}>
                  Logo Puskesmas Tarailu
                </span>
                <span style={{ fontSize: 11, color: "#9ca3af" }}>Sampaga</span>
              </div>

              {/* Floating Badge */}
              <div className="sipelita-badge">
                <div className="sipelita-badge-icon">
                  <Heart size={20} fill="#0d7a5f" />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#111827" }}>
                    Pelayanan Kesehatan
                  </div>
                  <div style={{ fontSize: 11, color: "#9ca3af" }}>Untuk masyarakat</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INFORMASI SECTION */}
        <section className="sipelita-section">
          <div className="sipelita-section-header">
            <span className="sipelita-eyebrow">HUBUNGI KAMI</span>
            <h2 className="sipelita-section-title">
              Pelayanan kesehatan untuk masyarakat.
            </h2>
          </div>

          <div className="sipelita-grid">
            {/* Card 1: Lokasi */}
            <div className="sipelita-card sipelita-card-accent">
              <div>
                <div className="sipelita-card-icon">
                  <MapPin size={22} />
                </div>
                <span className="sipelita-card-label">LOKASI</span>
                <h3 className="sipelita-card-heading">
                  Desa Tarailu, Kecamatan Sampaga
                </h3>
                <p className="sipelita-card-desc">
                  Puskesmas Satelit Tarailu, Kec. Sampaga, Kab. Mamuju, Sulawesi Barat.
                </p>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sipelita-card-action"
              >
                Buka Peta Google Maps <ExternalLink size={14} />
              </a>
            </div>

            {/* Card 2: WhatsApp / Telepon */}
            <div className="sipelita-card">
              <div>
                <div className="sipelita-card-icon">
                  <Phone size={22} />
                </div>
                <span className="sipelita-card-label">TELEPON / WHATSAPP</span>
                <h3 className="sipelita-card-heading">0823-5368-5324</h3>
                <p className="sipelita-card-desc">
                  Layanan konsultasi cepat dan pendaftaran melalui pesan resmi WhatsApp.
                </p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sipelita-card-action"
              >
                Chat WhatsApp Sekarang <ArrowRight size={14} />
              </a>
            </div>

            {/* Card 3: Jam Operasional */}
            <div className="sipelita-card">
              <div>
                <div className="sipelita-card-icon">
                  <Clock3 size={22} />
                </div>
                <span className="sipelita-card-label">JAM OPERASIONAL</span>
                <h3 className="sipelita-card-heading">Senin – Jumat</h3>
                <p className="sipelita-card-desc">Jam Pelayanan: 08.00 – 16.00 WITA</p>
              </div>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#0d7a5f",
                  backgroundColor: "#e6f4ee",
                  padding: "6px 12px",
                  borderRadius: 999,
                  width: "max-content",
                }}
              >
                Pelayanan Buka
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
