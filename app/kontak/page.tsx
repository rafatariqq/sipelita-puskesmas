import Link from "next/link";
import { MapPin, Phone, Clock3, MessageCircle } from "lucide-react";

export default function Kontak() {
  // Format nomor untuk wa.me menggunakan kode negara (6282353685324)
  const whatsappNumber = "6282353685324";
  const whatsappMessage = encodeURIComponent(
    "Halo SIPELITA, saya ingin bertanya mengenai layanan Puskesmas."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Link Google Maps berdasarkan koordinat Lat Long
  const googleMapsUrl = "https://www.google.com/maps?q=-2.3112276,119.1766989";

  return (
    <main>
      <header className="simpleHead">
        <Link href="/">← SIPELITA</Link>
        <span>Kontak</span>
      </header>

      <section className="contentPage">
        <span className="eyebrow">KONTAK</span>
        <h1>Hubungi Puskesmas</h1>

        <div className="contactGrid">
          <div>
            <MapPin />
            <h3>Alamat</h3>
            <p>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "inherit",
                  textDecoration: "underline",
                }}
              >
                Jl. Contoh No. 10, Indonesia
              </a>
            </p>
          </div>

          <div>
            <Phone />
            <h3>Telepon</h3>
            <p>0823-5368-5324</p>
          </div>

          <div>
            <Clock3 />
            <h3>Jam pelayanan</h3>
            <p>Senin–Jumat, 08.00–16.00</p>
          </div>
        </div>

        {/* Tombol Langsung ke WhatsApp */}
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#25D366",
              color: "#ffffff",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              fontWeight: "600",
              textDecoration: "none",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <MessageCircle size={20} />
            Chat via WhatsApp (082353685324)
          </a>
        </div>
      </section>
    </main>
  );
}
