import Link from "next/link";
import { CalendarDays, ClipboardList, MessageSquare, MapPin, Stethoscope, Clock3, ArrowRight, ShieldCheck } from "lucide-react";

const services = [
  ["Pendaftaran Online","Ambil nomor pendaftaran sebelum datang.","/pendaftaran",ClipboardList],
  ["Cek Antrean","Pantau antrean pelayanan secara langsung.","/antrean",Clock3],
  ["Jadwal Pelayanan","Lihat jadwal poli dan tenaga kesehatan.","/jadwal",CalendarDays],
  ["Pengaduan","Sampaikan kritik, saran, atau pengaduan.","/pengaduan",MessageSquare]
];

export default function Home(){
  return <main>
    <header className="nav">
      <div className="brand"><div className="logo">S</div><div><b>SIPELITA</b><span>Portal Layanan Puskesmas</span></div></div>
      <nav><Link href="/">Beranda</Link><Link href="#layanan">Layanan</Link><Link href="/jadwal">Jadwal</Link><Link href="/informasi">Informasi</Link><Link href="/kontak">Kontak</Link></nav>
      <Link className="login" href="/login">Masuk</Link>
    </header>

    <section className="hero">
      <div className="heroText">
        <div className="pill"><ShieldCheck size={16}/> Layanan publik digital</div>
        <h1>Satu portal untuk<br/><em>semua layanan</em> Puskesmas.</h1>
        <p>Informasi, pendaftaran, antrean, jadwal pelayanan, dan pengaduan masyarakat dalam satu tempat yang mudah digunakan.</p>
        <div className="actions"><Link className="primary" href="/pendaftaran">Daftar Berobat <ArrowRight size={18}/></Link><Link className="secondary" href="/antrean">Cek Antrean</Link></div>
      </div>
      <div className="heroCard">
        <div className="miniTop"><span>Antrean hari ini</span><b>Live</b></div>
        <div className="queueNumber">A-023</div>
        <div className="queueLabel">Nomor Anda</div>
        <div className="queueRow"><span>Sedang dilayani</span><strong>A-018</strong></div>
        <div className="progress"><i></i></div>
        <small>5 pasien sebelum Anda</small>
      </div>
    </section>

    <section className="section" id="layanan">
      <div className="sectionHead"><div><span className="eyebrow">LAYANAN UTAMA</span><h2>Yang Anda butuhkan,<br/>tersedia di sini.</h2></div><p>Dirancang agar masyarakat dapat mengakses layanan administratif Puskesmas dengan lebih sederhana.</p></div>
      <div className="serviceGrid">{services.map(([title,desc,href,Icon])=><Link className="service" href={href as string} key={title as string}><div className="icon"><Icon size={23}/></div><h3>{title as string}</h3><p>{desc as string}</p><span>Lihat layanan <ArrowRight size={16}/></span></Link>)}</div>
    </section>

    <section className="infoBand">
      <div><span className="eyebrow">JADWAL HARI INI</span><h2>Pelayanan Senin–Jumat</h2><p>08.00–16.00 · Jam dapat menyesuaikan kebijakan Puskesmas.</p></div>
      <Link className="whiteBtn" href="/jadwal">Lihat Jadwal <ArrowRight size={17}/></Link>
    </section>

    <section className="section news"><div className="sectionHead"><div><span className="eyebrow">INFORMASI TERBARU</span><h2>Pengumuman Puskesmas</h2></div></div>
      <div className="newsGrid"><article><span>17 SEP 2026</span><h3>Informasi pelayanan dan jadwal hari ini</h3><p>Periksa jadwal sebelum melakukan pendaftaran online.</p><Link href="/informasi">Baca selengkapnya →</Link></article><article><span>15 SEP 2026</span><h3>Panduan pendaftaran online</h3><p>Ikuti langkah pendaftaran untuk mendapatkan nomor antrean.</p><Link href="/informasi">Baca selengkapnya →</Link></article></div>
    </section>

    <footer><div><b>SIPELITA</b><p>Sistem Pelayanan Terintegrasi Puskesmas.</p></div><div><span>© 2026 SIPELITA · Prototype</span></div></footer>
  </main>
}