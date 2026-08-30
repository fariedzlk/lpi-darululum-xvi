"use client";

import Link from "next/link";

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Profil", href: "#profil" },
  { name: "KB", href: "/kb" },
  { name: "RA", href: "/ra" },
  { name: "MI", href: "/mi" },
  { name: "MDTA", href: "/mdta" },
];

export default function YayasanFooter() {
  return (
    <footer className="border-t border-slate-200 bg-[#EAF7F1]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="text-center">
          <h3 className="text-lg font-bold text-green-900">
            Yayasan Tampojung Al-Barokah
          </h3>

          <nav className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:text-green-900"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-7 border-t border-slate-200 pt-5">
            <p className="text-xs text-slate-400">
              © 2026 Yayasan Tampojung Al-Barokah
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}