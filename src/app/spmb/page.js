"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

export default function SPMBPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="min-h-screen bg-[#F7FAF8] px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight text-[#044A37] sm:text-5xl">
          SPMB
        </h1>

        <p className="mt-3 text-lg font-medium text-slate-500 sm:text-xl">
          Sistem Penerimaan Murid Baru
        </p>

        <div className="mx-auto mt-6 h-[2px] w-16 rounded-full bg-[#D4AF37]" />

        {/* Brosur */}
        <div className="mt-12 flex justify-center">
          <button
  type="button"
  onClick={() => setIsOpen(true)}
  className="group mx-auto block w-full max-w-md cursor-zoom-in text-left"
  aria-label="Lihat brosur SPMB dalam ukuran penuh"
>
  <Image
    src="/images/spmb/spmb-2026.png"
    alt="Brosur SPMB 2026 LPI Darul Ulum XVI"
    width={1080}
    height={1350}
    className="
      h-auto
      w-full
      rounded-2xl
      shadow-[0_20px_60px_rgba(4,74,55,0.14)]
      transition-transform
      duration-300
      group-hover:scale-[1.01]
    "
  />
</button>
        </div>

        {/* Coming Soon */}
        <div className="mt-12">
          <p className="text-2xl font-bold tracking-[0.12em] text-[#044A37] sm:text-3xl">
            COMING SOON
          </p>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-500 sm:text-base">
            Pendaftaran online dan informasi selengkapnya akan segera tersedia.
          </p>
        </div>

        {/* Back */}
        <div className="mt-10">
          <a
            href="/"
            className="
              inline-flex
              items-center
              rounded-full
              border border-[#044A37]/15
              px-6
              py-3
              text-sm
              font-medium
              text-[#044A37]
              transition-all
              duration-300
              hover:border-[#D4AF37]
              hover:bg-[#044A37]
              hover:text-white
            "
          >
            Kembali ke Beranda
          </a>
        </div>

      </div>
      {isOpen && (
  <div
    className="
      fixed
      inset-0
      z-[100]
      flex
      items-center
      justify-center
      bg-black/65
      backdrop-blur-md
      px-4
      py-6
    "
    onClick={() => setIsOpen(false)}
  >
    {/* Tombol Close */}
    <button
  type="button"
  onClick={() => setIsOpen(false)}
  aria-label="Tutup"
  className="
    absolute
    right-5
    top-5
    z-10
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-full
    bg-black/55
    text-white
    transition-all
    duration-200
    hover:scale-105
    hover:bg-black/75
  "
>
  <X size={22} strokeWidth={2.5} />
</button>

    {/* Gambar */}
    <div
      className="
        relative
        max-h-full
        max-w-4xl
        overflow-hidden
        rounded-2xl
      "
      onClick={(e) => e.stopPropagation()}
    >
      <Image
        src="/images/spmb/spmb-2026.png"
        alt="Brosur SPMB 2026 LPI Darul Ulum XVI"
        width={1080}
        height={1350}
        className="
          max-h-[90vh]
          w-auto
          max-w-[92vw]
          object-contain
        "
      />
    </div>
  </div>
)}
    </main>
  );
}