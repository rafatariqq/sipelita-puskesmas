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
    <div className="min-h-screen bg-[#fcfdfe] text-gray-800 font-sans">
      {/* ===== NAVBAR HEADER ===== */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 lg:px-16 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 font-bold group-hover:scale-105 transition-transform">
            <Building2 className="w-5 h-5 text-emerald-700" />
          </div>
          <div>
            <span className="block font-black text-gray-900 tracking-tight text-base uppercase leading-none">
              PUSKESMAS TARAILU
            </span>
            <span className="text-[11px] font-semibold text-gray-400 tracking-wider">
              SAMPAGA · Portal Informasi
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-emerald-700 transition-colors">
            Beranda
          </Link>
          <Link href="/profil" className="hover:text-emerald-700 transition-colors">
            Profil
          </Link>
          <Link href="/layanan" className="hover:text-emerald-700 transition-colors">
            Layanan
          </Link>
          <Link href="/persyaratan" className="hover:text-emerald-700 transition-colors">
            Persyaratan
          </Link>
          <Link href="/jadwal" className="hover:text-emerald-700 transition-colors">
            Jadwal
          </Link>
          <Link href="/informasi" className="hover:text-emerald-700 transition-colors">
            Informasi
          </Link>
        </nav>

        {/* CTA Hubungi Kami Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full border border-gray-300 text-sm font-semibold text-gray-800 hover:border-emerald-600 hover:text-emerald-700 transition-all shadow-sm"
        >
          Hubungi Kami
        </a>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-16 py-12 lg:py-16 space-y-20">
        {/* ===== HERO SECTION ===== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs font-extrabold tracking-widest text-emerald-800 uppercase">
              PROFIL PUSKESMAS & KONTAK
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.15] tracking-tight">
              Mengenal <br />
              <span className="text-[#0d7a5f]">Puskesmas</span> <br />
              <span className="text-[#0d7a5f]">Tarailu Sampaga.</span>
            </h1>

            <p className="text-gray-500 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Informasi mengenai profil, arah pelayanan, lokasi, serta layanan konsultasi cepat langsung terhubung dengan petugas Puskesmas Tarailu Sampaga.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0d7a5f] hover:bg-[#0a634d] text-white px-6 py-3.5 rounded-2xl font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                Chat via WhatsApp
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-800 hover:text-emerald-900 font-bold text-sm px-4 py-3 rounded-xl hover:bg-emerald-50 transition-colors"
              >
                Lihat di Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Graphic Element */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-emerald-100/70 to-emerald-50/30 flex items-center justify-center p-8 border border-emerald-100/50 shadow-inner">
              <div className="w-full h-full rounded-full border-2 border-dashed border-emerald-200/60 flex flex-col items-center justify-center text-center p-6 bg-white/40 backdrop-blur-sm">
                <Building2 className="w-16 h-16 text-emerald-700/80 mb-2" />
                <span className="text-sm font-bold text-gray-700">
                  Logo Puskesmas Tarailu
                </span>
                <span className="text-xs text-gray-400">Sampaga</span>
              </div>

              {/* Floating Badge (seperti di gambar) */}
              <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-0 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3.5 backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 fill-emerald-600 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-snug">
                    Pelayanan Kesehatan
                  </h4>
                  <p className="text-xs text-gray-400">Untuk masyarakat</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== INFORMASI KONTAK & LOKASI SECTION ===== */}
        <section className="space-y-8 pt-6 border-t border-gray-100">
          <div className="space-y-2">
            <span className="text-xs font-extrabold tracking-widest text-emerald-800 uppercase">
              HUBUNGI KAMI
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Pelayanan kesehatan untuk masyarakat.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Alamat */}
            <div className="bg-emerald-50/50 rounded-3xl p-6 border border-emerald-100/80 hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white text-emerald-700 flex items-center justify-center shadow-sm">
                  <MapPin className="w-5 h-5 text-emerald-700" />
                </div>
                <span className="block text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  LOKASI
                </span>
                <h3 className="text-base font-extrabold text-gray-900 leading-snug">
                  Desa Tarailu, Kecamatan Sampaga
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Puskesmas Satelit Tarailu, Kec. Sampaga, Kab. Mamuju, Sulawesi Barat.
                </p>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-900 hover:underline pt-2"
              >
                Buka Peta Google Maps <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 2: WhatsApp / Telepon */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-emerald-700" />
                </div>
                <span className="block text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  TELEPON / WHATSAPP
                </span>
                <h3 className="text-base font-extrabold text-gray-900 leading-snug">
                  0823-5368-5324
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Layanan konsultasi cepat dan pendaftaran melalui pesan resmi WhatsApp.
                </p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d7a5f] hover:underline pt-2"
              >
                Chat WhatsApp Sekarang <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 3: Jam Pelayanan */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Clock3 className="w-5 h-5 text-emerald-700" />
                </div>
                <span className="block text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  JAM OPERASIONAL
                </span>
                <h3 className="text-base font-extrabold text-gray-900 leading-snug">
                  Senin – Jumat
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Jam Pelayanan: 08.00 – 16.00 WITA
                </p>
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full w-max">
                Pelayanan Buka
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
