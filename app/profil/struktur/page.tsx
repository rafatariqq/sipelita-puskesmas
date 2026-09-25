"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  Camera,
  ChevronDown,
  HeartPulse,
  Hospital,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import { useState } from "react";

type Person = {
  name: string;
  position?: string;
  photo?: string;
};

type Section = {
  title: string;
  people: Person[];
};

type Cluster = {
  number: string;
  title: string;
  coordinator: Person;
  icon: React.ElementType;
  description: string;
  sections: Section[];
};

const clusters: Cluster[] = [
  {
    number: "01",
    title: "Manajemen",
    coordinator: {
      name: "Apt. Muhammad Rahmatullah., S.Si",
      position: "Koordinator Klaster I",
    },
    icon: Building2,
    description:
      "Mengelola administrasi, sumber daya, mutu, jejaring, serta informasi Puskesmas.",
    sections: [
      {
        title: "Ketatausahaan",
        people: [
          {
            name: "Punding",
          },
        ],
      },
      {
        title: "Manajemen Sumber Daya dan Keuangan",
        people: [
          {
            name: "Agustina, Amd.Keb",
          },
          {
            name: "Hasnah Bau, S.Kep., NS",
          },
        ],
      },
      {
        title: "Manajemen Mutu dan Keselamatan",
        people: [
          {
            name: "dr. Fenty Lesseng",
          },
        ],
      },
      {
        title: "Manajemen Jejaring dan Jaringan",
        people: [
          {
            name: "Hamdiah, Amd.Keb",
          },
        ],
      },
      {
        title: "Manajemen Informasi dan PWS",
        people: [
          {
            name: "Bd. Anita, S.ST",
          },
        ],
      },
    ],
  },

  {
    number: "02",
    title: "Ibu dan Anak",
    coordinator: {
      name: "Hamdiah, S.Tr.Keb",
      position: "Koordinator Klaster II",
    },
    icon: Users,
    description:
      "Mengoordinasikan pelayanan kesehatan bagi ibu, bayi, balita, dan anak.",
    sections: [
      {
        title: "Ibu Hamil, Bersalin, Nifas",
        people: [
          {
            name: "Bd. Hj. Rahmatia, S.ST",
          },
          {
            name: "Nurhana, S.Tr.Keb",
          },
        ],
      },
      {
        title: "Balita dan Anak Pra Sekolah",
        people: [
          {
            name: "Sri Wulandari, SKM",
          },
          {
            name: "Agustina, Amd.Keb",
          },
        ],
      },
    ],
  },

  {
    number: "03",
    title: "Dewasa dan Lansia",
    coordinator: {
      name: "dr. Fenty Lesseng, S.Ked",
      position: "Koordinator Klaster III",
    },
    icon: Stethoscope,
    description:
      "Mendukung pelayanan kesehatan bagi kelompok usia dewasa dan lanjut usia.",
    sections: [
      {
        title: "Usia Dewasa",
        people: [
          {
            name: "Drg. Nurjamil, SKG",
          },
          {
            name: "Asnur, S.Kep., NS",
          },
          {
            name: "Baharuddin, S.Kep",
          },
        ],
      },
      {
        title: "Usia Lanjut",
        people: [
          {
            name: "Bd. Reskiah, S.Tr.Keb",
          },
        ],
      },
    ],
  },

  {
    number: "04",
    title: "Penanggulangan Penyakit Menular",
    coordinator: {
      name: "Felicia, SKM",
      position: "Koordinator Klaster IV",
    },
    icon: ShieldCheck,
    description:
      "Mendukung upaya kesehatan dalam penanggulangan penyakit menular dan kesehatan lingkungan.",
    sections: [
      {
        title: "Kesehatan Lingkungan",
        people: [
          {
            name: "Ayu Lestari, AR.Md.Kes",
          },
        ],
      },
      {
        title: "Surveilans",
        people: [
          {
            name: "Masriana K, SKM",
          },
        ],
      },
    ],
  },

  {
    number: "05",
    title: "Lintas Klaster",
    coordinator: {
      name: "Mukasifa, AMAK",
      position: "Koordinator Lintas Klaster",
    },
    icon: Hospital,
    description:
      "Mendukung pelayanan lintas klaster, termasuk rawat inap, kegawatdaruratan, gigi dan mulut, laboratorium, serta kefarmasian.",
    sections: [
      {
        title: "Rawat Inap",
        people: [
          {
            name: "Hasnah Bau, S.Kep., NS",
          },
        ],
      },
      {
        title: "Kegawatdaruratan",
        people: [
          {
            name: "Maslam, Amd.Kep",
          },
        ],
      },
      {
        title: "Gigi dan Mulut",
        people: [
          {
            name: "Drg. Nurjamil, S.KG",
          },
        ],
      },
      {
        title: "Laboratorium",
        people: [
          {
            name: "Mukasifa, AMAK",
          },
        ],
      },
      {
        title: "Kefarmasian",
        people: [
          {
            name: "Apt. Muhammad Rahmatullah.,S.Si",
          },
        ],
      },
    ],
  },
];

function PersonCard({ person }: { person: Person }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
      <div className="flex items-center gap-4">
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-emerald-50 text-emerald-700">
          {person.photo ? (
            <img
              src={person.photo}
              alt={person.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <Camera size={23} strokeWidth={1.8} />
          )}
        </div>

        <div className="min-w-0">
          <h4 className="text-sm font-bold leading-5 text-slate-900">
            {person.name}
          </h4>

          {person.position && (
            <p className="mt-1 text-xs text-slate-500">{person.position}</p>
          )}

          {!person.position && (
            <p className="mt-1 text-xs text-slate-500">
              Foto belum tersedia
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function ClusterCard({ cluster }: { cluster: Cluster }) {
  const [open, setOpen] = useState(true);
  const Icon = cluster.icon;

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Cluster Header */}
      <div className="border-b border-slate-100 bg-gradient-to-r from-emerald-50 to-white p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
              <Icon size={27} strokeWidth={1.8} />
            </div>

            <div>
              <div className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                Klaster {cluster.number}
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                {cluster.title}
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                {cluster.description}
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700"
          >
            {open ? "Sembunyikan" : "Lihat anggota"}
            <ChevronDown
              size={17}
              className={`transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Coordinator */}
        <div className="mt-6 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
          <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-700">
            Penanggung Jawab
          </div>

          <PersonCard person={cluster.coordinator} />
        </div>
      </div>

      {/* Members */}
      {open && (
        <div className="p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {cluster.sections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-600" />

                  <h3 className="text-sm font-bold text-slate-900">
                    {section.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {section.people.map((person) => (
                    <PersonCard key={person.name} person={person} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default function StrukturOrganisasiPage() {
  return (
    <main className="min-h-screen bg-[#f6faf8] text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-emerald-600">
              <img
                src="/images/logo-puskesmas-tarailu.png"
                alt="Logo Puskesmas Tarailu"
                className="h-full w-full object-contain p-1"
              />
            </div>

            <div>
              <div className="text-sm font-extrabold tracking-tight text-slate-900 sm:text-base">
                PUSKESMAS TARAILU
              </div>
              <div className="text-xs text-slate-500">
                SAMPAGA · Portal Informasi
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
            <Link href="/" className="transition hover:text-emerald-700">
              Beranda
            </Link>
            <Link
              href="/profil"
              className="font-bold text-emerald-700"
            >
              Profil
            </Link>
            <Link href="/layanan" className="transition hover:text-emerald-700">
              Layanan
            </Link>
            <Link
              href="/persyaratan"
              className="transition hover:text-emerald-700"
            >
              Persyaratan
            </Link>
            <Link href="/jadwal" className="transition hover:text-emerald-700">
              Jadwal
            </Link>
            <Link
              href="/informasi"
              className="transition hover:text-emerald-700"
            >
              Informasi
            </Link>
          </nav>

          <Link
            href="/kontak"
            className="hidden rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-emerald-600 hover:text-emerald-700 sm:block"
          >
            Hubungi Kami
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
          <Link
            href="/profil"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-emerald-700"
          >
            <ArrowLeft size={17} />
            Kembali ke Profil
          </Link>

          <div className="max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              <HeartPulse size={15} />
              Struktur Organisasi
            </div>

            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Struktur Organisasi
              <span className="block text-emerald-600">
                UPTD Puskesmas Tarailu.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Kenali susunan organisasi dan pembagian kelompok pelayanan
              Puskesmas Tarailu Sampaga secara lebih mudah dan terstruktur.
            </p>
          </div>
        </div>
      </section>

      {/* Head of Puskesmas */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-xl">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-7 text-center shadow-lg shadow-emerald-900/5 sm:p-9">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-emerald-600" />

            <div className="mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-emerald-50 bg-emerald-50 text-emerald-700">
              <Camera size={34} strokeWidth={1.5} />
            </div>

            <div className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Kepala Puskesmas
            </div>

            <h2 className="mt-2 text-xl font-extrabold text-slate-900 sm:text-2xl">
              HJ. JUSDALIAH, S.Kep., NS
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              UPTD Puskesmas Tarailu
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
              <Building2 size={14} />
              Pimpinan Puskesmas
            </div>
          </div>
        </div>
      </section>

      {/* Connecting Label */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="rounded-full border border-slate-200 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Kelompok Pelayanan
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>
      </div>

      {/* Clusters */}
      <section className="mx-auto max-w-7xl space-y-7 px-5 py-10 sm:px-8 sm:py-14">
        {clusters.map((cluster) => (
          <ClusterCard key={cluster.number} cluster={cluster} />
        ))}
      </section>

      {/* Photo Information */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-700">
              <Camera size={21} />
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                Foto tenaga kesehatan
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                Foto setiap personel dapat ditambahkan kemudian. Untuk saat
                ini, sistem menampilkan placeholder sehingga struktur tetap
                terlihat rapi meskipun foto belum tersedia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-bold text-slate-800">
              Puskesmas Tarailu
            </span>{" "}
            · Sampaga
          </div>

          <Link
            href="/profil"
            className="font-semibold text-emerald-700 hover:text-emerald-800"
          >
            Kembali ke Profil
          </Link>
        </div>
      </footer>
    </main>
  );
}
