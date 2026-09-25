import Link from "next/link";
import { MapPin, Phone, Clock3, MessageCircle } from "lucide-react";

export default function Kontak() {
  // Format nomor untuk wa.me menggunakan kode negara (6282353685324)
  const whatsappNumber = "6282353685324";
  const whatsappMessage = encodeURIComponent(
    "Halo SIPELITA, saya ingin bertanya mengenai layanan Puskesmas."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Tautan Google Maps ke Puskesmas Satelit Tarailu
  const googleMapsUrl =
    "https://www.google.com/maps/place/Puskesmas+Satelit+Tarailu/@-2.3111475,119.1754624,18z/data=!4m23!1m16!4m15!1m6!1m2!1s0x2d92d833d4d70f27:0xec8b6ecb8c7bb406!2sJl.+Poros+Mamuju+-+Topoyo,+Sulawesi+Barat!2m2!1d119.1621854!2d-2.4195697!1m6!1m2!1s0x2d9290f914f05173:0xb0b84e39a98a507!2sTarailu,+Kec.+Sampaga,+Kabupaten+Mamuju,+Sulawesi+Barat!2m2!1d119.179765!2d-2.3173016!3e0!3m5!1s0x2d9291e7019333a9:0x7ba3c2a8525060fc!8m2!3d-2.3112276!4d119.1766989!16s%2Fg%2F11ghsjk6wk";

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
                Puskesmas Satelit Tarailu, Kec. Sampaga, Kab. Mamuju, Sulawesi Barat
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
