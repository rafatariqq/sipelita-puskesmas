'use client';
import {useState} from "react";
import Link from "next/link";
export default function Pendaftaran(){
 const [done,setDone]=useState(false);
 return <main><Header title="Pendaftaran Online"/><section className="formWrap">
 {done ? <div className="success"><div className="bigCheck">✓</div><h1>Pendaftaran berhasil</h1><p>Gunakan kode berikut saat datang ke Puskesmas.</p><div className="ticket"><small>Nomor pendaftaran</small><strong>A-023</strong><span>Poli Umum · 20 September 2026 · 09.00–10.00</span><div className="qr">QR</div></div><Link className="primary center" href="/antrean">Cek Antrean</Link></div> :
 <form className="formCard" onSubmit={e=>{e.preventDefault();setDone(true)}}><span className="eyebrow">PENDAFTARAN</span><h1>Daftar pelayanan</h1><label>Nama pasien<input required placeholder="Nama lengkap"/></label><label>Nomor identitas<input required placeholder="Nomor identitas"/></label><div className="two"><label>Tanggal<input type="date" required/></label><label>Poli<select><option>Poli Umum</option><option>Poli Gigi</option><option>KIA</option></select></label></div><label>Jadwal<select><option>09.00–10.00</option><option>10.00–11.00</option><option>13.00–14.00</option></select></label><button className="primary" type="submit">Konfirmasi Pendaftaran</button></form>}
 </section></main>
}
function Header({title}:{title:string}){return <header className="simpleHead"><Link href="/" className="back">← SIPELITA</Link><span>{title}</span></header>}
