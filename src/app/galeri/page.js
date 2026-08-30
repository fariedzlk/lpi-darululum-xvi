"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { galleryData } from "@/data/galleryData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Landing/Footer";

const categoryStyles = {
  Akademik: "bg-[#E8F5EE] text-[#087443]",
  Prestasi: "bg-[#FFF6D8] text-[#9A7100]",
  Kegiatan: "bg-[#E8F1FA] text-[#2563A8]",
  Keagamaan: "bg-[#F1EAF8] text-[#75439A]",
};

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
        <Navbar solid />
    <main className="bg-[#FBFBF8]">
        



      {/* =====================================================
          GALLERY
      ===================================================== */}
      <section className="px-6 pb-24 pt-[100px] sm:pb-28 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div
            className="
              grid
              grid-cols-1
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {galleryData.map((item, index) => (
              <motion.article
                key={item.id}
                onClick={() => {
                setSelectedImage(item);
                setSelectedIndex(index);
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: Math.min(index * 0.05, 0.3),
                }}
                className="
                  group
                  cursor-pointer
                  relative
                  overflow-hidden
                  rounded-[24px]
                  bg-slate-200
                "
              >

                {/* FOTO */}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={900}
                  className="
                    aspect-[4/3]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.03]
                  "
                />


                {/* GRADIENT */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-1/2
                    bg-gradient-to-t
                    from-black/80
                    via-black/35
                    to-transparent
                  "
                />


                {/* BADGE */}
                <div className="absolute left-4 top-4">
                  <span
                    className={`
                      inline-flex
                      rounded-full
                      px-3
                      py-1.5
                      text-xs
                      font-semibold
                      backdrop-blur-sm
                      ${categoryStyles[item.category]}
                    `}
                  >
                    {item.category}
                  </span>
                </div>


                {/* CAPTION */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    p-5
                    sm:p-6
                  "
                >
                  <h2
                    className="
                      max-w-[90%]
                      text-lg
                      font-bold
                      leading-snug
                      text-white
                      sm:text-xl
                    "
                  >
                    {item.title}
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-medium
                      text-white/80
                    "
                  >
                    {item.date}
                  </p>
                </div>

              </motion.article>
            ))}
          </div>

        </div>
      </section>
{selectedImage && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-6 backdrop-blur-md"
    onClick={() => setSelectedImage(null)}
  >
<button
  type="button"
  onClick={() => setSelectedImage(null)}
  className="absolute right-5 top-5 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-black/60 sm:right-6 sm:top-6 sm:h-14 sm:w-14"
  aria-label="Tutup galeri"
>
  <X size={22} strokeWidth={2} />
</button>

<div
  className="relative max-h-[85vh] max-w-5xl"
  onClick={(e) => e.stopPropagation()}
>
<button
  type="button"
  onClick={(e) => {
    e.stopPropagation();

    const newIndex =
      selectedIndex === 0
        ? galleryData.length - 1
        : selectedIndex - 1;

    setSelectedIndex(newIndex);
    setSelectedImage(galleryData[newIndex]);
  }}
  className="absolute left-5 top-1/2 z-10 flex h-9 w-9 sm:h-14 sm:w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-black/65"
  aria-label="Foto sebelumnya"
>
  <ChevronLeft size={22} strokeWidth={1.8} />
</button>

<button
  type="button"
  onClick={(e) => {
    e.stopPropagation();

    const newIndex =
      selectedIndex === galleryData.length - 1
        ? 0
        : selectedIndex + 1;

    setSelectedIndex(newIndex);
    setSelectedImage(galleryData[newIndex]);
  }}
  className="absolute right-5 top-1/2 z-10 flex h-9 w-9 sm:h-14 sm:w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-black/65"
  aria-label="Foto berikutnya"
>
  <ChevronRight size={22} strokeWidth={1.8} />
</button>

  <img
    src={selectedImage.image}
    alt={selectedImage.title}
    className="max-h-[62vh] w-auto max-w-[88vw] rounded-2xl object-contain shadow-2xl sm:max-h-[85vh] sm:max-w-full"
  />

  <div className="mt-4 text-center">
  <h3 className="text-base font-semibold text-white sm:text-xl">
    {selectedImage.title}
  </h3>

  <p className="mt-1 text-xs text-white/70 sm:text-sm">
    {selectedImage.date} • {selectedImage.category}
  </p>
</div>
</div>
  </div>
)}
    </main>
     <Footer />
        </>
  );
}