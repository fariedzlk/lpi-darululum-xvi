"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  fadeUpHeading,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";



export default function Gallery({
  gallery,
  theme,
}) {
  const [selectedImage, setSelectedImage] = useState(null);
const [selectedIndex, setSelectedIndex] = useState(0);
return (
  <>
    <section
      id="galeri"
      className="scroll-mt-28 relative overflow-hidden py-24"
      style={{
        background: `
          linear-gradient(
            180deg,
            ${theme.sectionGradient.gallery.from} 0%,
            ${theme.sectionGradient.gallery.to} 100%
          )
        `,
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          {...fadeUpHeading}
          className="text-center"
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em]"
            style={{ color: theme.primary }}
          >
            Galeri
          </h2>

          <div className="mt-5 flex justify-center">
            <div className="h-1 w-28 rounded-full bg-gradient-to-r from-[#C9A227] via-[#E7C65C] to-[#C9A227]" />
          </div>
        </motion.div>

        <div className="mt-14">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="
              grid
              gap-8
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {gallery.map((item, index) => (
              <motion.div
                key={item.image}
                variants={staggerItem}
                onClick={() => {
  setSelectedImage(item);
  setSelectedIndex(index);
}}
                className="
                  group
                  cursor-pointer
                  overflow-hidden
                  rounded-3xl
                  bg-white
                  shadow-md
                  ring-1
                  ring-slate-200/60
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-[1.03]
                    "
                    sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 25vw"
                  />
                </div>

                <div className="px-5 py-3">
                  <h3
                    className="
                      text-sm
                      lg:text-[15px]
                      font-medium
                      tracking-tight
                      leading-normal
                      text-slate-700
                    "
                  >
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>

{selectedImage && (
  <div
    className="
      fixed
      inset-0
      z-[100]
      flex
      items-center
      justify-center
      bg-black/45
      p-6
      backdrop-blur-md
    "
    onClick={() => setSelectedImage(null)}
  >
    {/* CLOSE */}
    <button
      type="button"
      onClick={() => setSelectedImage(null)}
      className="
        absolute
        right-5
        top-5
        z-20
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        bg-black/40
        text-white
        backdrop-blur-md
        transition-all
        duration-200
        hover:scale-105
        hover:bg-black/60

        sm:right-6
        sm:top-6
        sm:h-14
        sm:w-14
      "
      aria-label="Tutup galeri"
    >
      <X size={22} strokeWidth={2} />
    </button>

    <div
      className="
        relative
        max-h-[85vh]
        max-w-5xl
      "
      onClick={(e) => e.stopPropagation()}
    >
      {/* PREVIOUS */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();

          const newIndex =
            selectedIndex === 0
              ? gallery.length - 1
              : selectedIndex - 1;

          setSelectedIndex(newIndex);
          setSelectedImage(gallery[newIndex]);
        }}
        className="
          absolute
          left-5
          top-1/2
          z-10
          flex
          h-9
          w-9
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-black/45
          text-white
          backdrop-blur-md
          transition-all
          duration-200
          hover:scale-105
          hover:bg-black/65

          sm:h-14
          sm:w-14
        "
        aria-label="Foto sebelumnya"
      >
        <ChevronLeft size={22} strokeWidth={1.8} />
      </button>

      {/* NEXT */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();

          const newIndex =
            selectedIndex === gallery.length - 1
              ? 0
              : selectedIndex + 1;

          setSelectedIndex(newIndex);
          setSelectedImage(gallery[newIndex]);
        }}
        className="
          absolute
          right-5
          top-1/2
          z-10
          flex
          h-9
          w-9
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-black/45
          text-white
          backdrop-blur-md
          transition-all
          duration-200
          hover:scale-105
          hover:bg-black/65

          sm:h-14
          sm:w-14
        "
        aria-label="Foto berikutnya"
      >
        <ChevronRight size={22} strokeWidth={1.8} />
      </button>

      {/* FOTO */}
      <img
        src={selectedImage.image}
        alt={selectedImage.title}
        className="
          max-h-[62vh]
          w-auto
          max-w-[88vw]
          rounded-2xl
          object-contain
          shadow-2xl

          sm:max-h-[85vh]
          sm:max-w-full
        "
      />

      {/* CAPTION */}
      <div className="mt-4 text-center">
        <h3 className="text-base font-semibold text-white sm:text-xl">
          {selectedImage.title}
        </h3>
      </div>
    </div>
  </div>
)}
  </>
);
}