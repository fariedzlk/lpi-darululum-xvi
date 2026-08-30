"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Building2,
  GraduationCap,
  School,
  BookOpen,
  BookMarked,
  Award,
  Mic2,
} from "lucide-react";

const galleries = [
  {
    id: "gedung",
    image: "/images/galeri/gedung-yayasan.jpg",
    title: "Gedung Yayasan",
    icon: Building2,
    featured: true,
  },
  {
    id: "kb-ra",
    image: "/images/galeri/kegiatan-kb.jpg",
    title: "Kegiatan KB & RA",
    icon: GraduationCap,
  },
  {
    id: "mi",
    image: "/images/galeri/kegiatan-mi.jpg",
    title: "Kegiatan MI Darul Ulum XVI",
    icon: School,
  },
  {
    id: "mdta",
    image: "/images/galeri/kegiatan-mdta.jpg",
    title: "Kegiatan MDTA Darul Ulum XVI",
    icon: BookOpen,
  },
  {
    id: "ilan",
    image: "/images/galeri/ilan-quran-mi.jpg",
    title: "Program I'lan Al-Qur'an",
    icon: BookMarked,
  },
  {
    id: "mutiara",
    image: "/images/galeri/mutiara-hikmah-ra.jpg",
    title: "Program Mutiara Hikmah",
    icon: Award,
  },
  {
    id: "qobasun",
    image: "/images/galeri/qobasun-mdta.jpg",
    title: "Program Qobasun",
    icon: Mic2,
  },
];
export default function Gallery() {
    const featuredGallery = galleries.find(
  (gallery) => gallery.featured
);
  return (

 <section
  id="galeri"
  className="py-28 bg-white"
>
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
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
  text-3xl
  sm:text-4xl
  lg:text-5xl
  font-extrabold
  tracking-[0.12em]
  leading-tight
  text-green-900
"
  >
    GALERI KEGIATAN
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
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  }}
  viewport={{ once: true, amount: 0.4 }}
  className="
    group
    relative
    mt-16
    mb-10
    overflow-hidden
    rounded-[30px]
  "
>
    
  <Image
    src={featuredGallery.image}
    alt={featuredGallery.title}
    width={1920}
    height={1080}
    priority
    className="
h-[200px] sm:h-[240px] lg:h-[320px]

  object-cover

  transition-transform
  duration-700

  group-hover:scale-[1.03]
"
  />
  <div
  className="
    absolute
    inset-0

    bg-gradient-to-t
    from-black/60
via-black/15
to-transparent
  "
/>
<div
  className="
    absolute
    left-5 bottom-5 sm:left-8 sm:bottom-8 lg:left-10 lg:bottom-10
    z-10
  "
>
  <div className="flex items-center gap-3">

  <div
    className="
      flex
      h-10
      w-10
      items-center
      justify-center

      rounded-full

      bg-[#065F46]/90
      backdrop-blur-sm
    "
  >
    <featuredGallery.icon
      size={18}
      className="text-white"
    />
  </div>

  <h3
    className="
      text-xl sm:text-2xl lg:text-4xl
      font-bold
      text-white
    "
  >
    {featuredGallery.title}
  </h3>

</div>
</div>
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    delay: 0.15,
    ease: [0.22, 1, 0.36, 1],
  }}
  viewport={{ once: true, amount: 0.2 }}
  className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
>
    

  {galleries
    .filter((gallery) => !gallery.featured)
    .map((gallery) => (
      <div
  key={gallery.id}
  className="
    group
    relative
    bg-white

    rounded-3xl
    overflow-hidden

    border
    border-gray-100

    shadow-sm

    transition-all
    duration-500

    hover:-translate-y-1
    hover:border-[#D4AF37]/30
    hover:shadow-[0_10px_28px_rgba(0,0,0,.08)]
  "
>
    <div className="relative overflow-hidden">
        <Image
          src={gallery.image}
          alt={gallery.title}
          width={1920}
          height={1080}
          className="
        w-full
        h-48 sm:h-52 lg:h-44

        object-cover

        transition-transform
        duration-700

        group-hover:scale-105
        "
        />
         <div
    className="
      absolute
      inset-0
      bg-gradient-to-t
      from-black/60
      via-black/20
      to-transparent
    "
  />
        
</div>
         <div
    className="
      absolute
      left-6
      bottom-5
      z-10

      flex
      items-center
      gap-3
    "
  >

  <div
  className="
    flex
    h-9
    w-9
    items-center
    justify-center
    rounded-full
    bg-[#065F46]/85

    transition-transform
    duration-300

    group-hover:scale-105
  "
>
    <gallery.icon
      size={16}
      className="text-white"
    />
  </div>

  <p
    className="
      text-white
      font-semibold
    "
  >
    {gallery.title}
  </p>

</div>
      </div>
    ))}

</motion.div>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    delay: 0.25,
    ease: [0.22, 1, 0.36, 1],
  }}
  viewport={{ once: true }}
  className="mt-14 flex justify-center"
>
 <Link
  href="/galeri"
  className="
    group
    inline-flex
    items-center
    gap-3 sm:gap-4
    rounded-full
    border
    bg-[#EAF6F1]
    px-6 py-3 sm:px-8
    font-semibold
    text-[#065F46]
    transition-all
    duration-300
    ease-out
    hover:bg-[#065F46]
    hover:text-white
    hover:-translate-y-0.5
  "
>
  Jelajahi Galeri

  <ArrowRight
    size={20}
    className="
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
  />
</Link>
  
</motion.div>
</div>
</section>
 );
}