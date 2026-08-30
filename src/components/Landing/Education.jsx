"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
const schools = [
  {
    id: "kb",
    href: "/kb",
    logo: "/images/logo/logo-kb.png",
    name: "KB Tunas Bangsa",
    badge: "KB",
    level: "Kelompok Bermain",
    description: "Usia 2–4 Tahun",
  },
  {
    id: "ra",
    href: "/ra",
    logo: "/images/logo/logo-ra.png",
    name: "RA Darul Mujtamak",
    badge: "RA",
    level: "Raudhatul Athfal",
    description: "Usia 4–6 Tahun",
  },
  {
    id: "mi",
    href: "/mi",
    logo: "/images/logo/logo-mi.png",
    name: "MI Darul Ulum XVI",
    badge: "MI",
    level: "Madrasah Ibtidaiyah",
    description: "Program 6 Tahun",
  },
  {
    id: "mdta",
    href: "/mdta",
    logo: "/images/logo/logo-mdta.png",
    name: "MDTA Darul Ulum XVI",
    badge: "MDTA",
    level: "Madrasah Diniyah",
    description: "Pendidikan Keagamaan",
  },
];
export default function Education() {
  return (
   <section
  id="pendidikan"
  className="pt-28 pb-12 sm:pb-20 lg:pb-28 bg-white"
>

  <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  }}
  viewport={{ once: true, amount: 0.6 }}
  className="text-center"
>
  <h2
  className="
    max-w-[300px]
    lg:max-w-none
    mx-auto
    text-3xl
    sm:text-4xl
    md:text-5xl
    font-extrabold
    tracking-[0.12em]
    leading-tight
    text-green-900
  "
>
  UNIT PENDIDIKAN
</h2>
  <div className="flex justify-center mt-6">
    <div
      className="
        w-28
        h-[2px]
        rounded-full
        bg-[#D4AF37]
      "
    />
  </div>
</motion.div>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
  {schools.map((school, index) => (
    <Link
    key={school.id}
    href={school.href}
    className="block"
  >
<motion.div
  key={school.id}
  initial={{
    opacity: 0,
    y: 24,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.55,
    delay: 0.15 + index * 0.10,
    ease: [0.22, 1, 0.36, 1],
  }}
  viewport={{
    once: true,
    amount: 0.3,
  }}
  className="
    group
    relative
    flex
    items-center
    justify-between
    min-h-[150px]
    rounded-3xl
    border
    border-gray-100
    bg-white
    px-7
    py-5
    shadow-sm
    transition-all
    duration-500
    hover:-translate-y-1
    hover:border-[#D4AF37]/30
    hover:shadow-[0_10px_28px_rgba(0,0,0,.08)]
  "
>
  {/* Aksen Gold */}
  <div
    className="
      absolute
      left-0
      top-7
      bottom-7
      w-[3px]
      rounded-r-full
      bg-[#D4AF37]
      opacity-0
      scale-y-75
      origin-center
      transition-all
      duration-500
      group-hover:opacity-90
      group-hover:scale-y-100
    "
  />

  {/* Kiri */}
  <div className="flex items-center gap-5 min-w-0">
    <Image
  src={school.logo}
  alt={school.name}
  width={84}
  height={84}
  className="
    w-[68px]
    sm:w-[84px]
    h-auto
    shrink-0
    transition-transform
    duration-300
    group-hover:scale-105
  "
/>

    <div className="min-w-0">
      <span
        className="
          inline-block
          rounded-full
          bg-[#F6FAF8]
          px-2.5
          py-1
          text-[11px]
          tracking-wide
          uppercase
          font-bold
          text-[#065F46]
        "
      >
        {school.badge}
      </span>

      <h3
        className="
          mt-2
          text-lg
          sm:text-xl
          font-bold
          leading-tight
          text-gray-900
          transition-colors
          duration-300
          group-hover:text-[#065F46]
        "
      >
        {school.name}
      </h3>

      <p className="mt-1 text-sm font-semibold text-[#065F46]">
        {school.level}
      </p>
    </div>
  </div>

  {/* Arrow */}
  <div
    className="
      ml-4
      flex
      h-11
      w-11
      shrink-0
      items-center
      justify-center
      rounded-full
      bg-[#F6FAF8]
      transition-all
      duration-300
      group-hover:bg-[#065F46]
      group-hover:scale-105
    "
  >
    <ArrowRight
      size={20}
      className="
        text-[#065F46]
        transition-all
        duration-300
        group-hover:text-white
        group-hover:translate-x-1
      "
    />
  </div>
</motion.div>
</Link>
  ))}
</div>
    </section>
  );
}