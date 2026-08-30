"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Menu,
  X,
  Home,
  GraduationCap,
  User,
  Image as ImageIcon,
  ChevronRight,
} from "lucide-react";

export default function MobileNavbar() {

const pathname = usePathname()
const [isDrawerOpen, setIsDrawerOpen] = useState(false);
const [isEducationOpen, setIsEducationOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDrawerOpen]);
useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
  <nav className="md:hidden">

  <div
    className={`
  fixed
  top-0
  left-0
  z-50
  w-full

  flex
  items-center
  justify-between

  px-6
  py-3

  transition-all
  duration-300
  ease-out

  ${
    isScrolled
      ? "bg-[#06523E] shadow-md"
      : "bg-gradient-to-b from-black/28 via-black/15 to-transparent backdrop-blur-[2px]"
  }
`}
  >
  
  {/* Logo + Text */}
  <a
    href={pathname === "/" ? "#beranda" : "/#beranda"}
    className="flex items-center gap-3"
  >
    <Image
      src="/images/logo/logo-lpi.png"
      alt="Logo LPI"
      width={46}
      height={46}
    />

    <div className="leading-tight">
      <h1 className="text-white font-bold text-base">
        LPI Darul Ulum XVI
      </h1>

      <p className="text-white/70 text-[9px] mt-1 leading-4">
        Di Bawah Naungan
        <br />
        Yayasan Tampojung Al-Baroqah
      </p>
    </div>
  </a>

  {/* Hamburger */}
 <button
  onClick={() => {
    setIsEducationOpen(false);
    setIsDrawerOpen(true);
  }}
  className="text-white p-2"
>
  <Menu size={28} />
</button>
</div>
  {isDrawerOpen && (
  <div
    onClick={() => setIsDrawerOpen(false)}
    className="
      fixed
      inset-0
      bg-black/70
      z-40
    "
  />
)}
<div
  className={`
    fixed
    top-3
    right-0
    h-[calc(100%-12px)]
    w-[80%]
    max-w-[320px]

    bg-white
    flex
    flex-col

    rounded-l-[28px]

    shadow-xl

    z-[60]

    transition-transform
    duration-300
    ease-out

    ${
      isDrawerOpen
        ? "translate-x-0"
        : "translate-x-full"
    }
  `}
>
<div className="flex justify-end p-5">

  <button
    onClick={() => setIsDrawerOpen(false)}
    className="
      p-2
      rounded-full
      hover:bg-gray-100
      transition-all
    "
  >
 <X
  size={22}
  strokeWidth={2.5}
  className="text-gray-800"
/>
  </button>

</div>
<div className="flex justify-center mt-2">

  <Image
    src="/images/logo/logo-lpi.png"
    alt="Logo LPI"
    width={68}
    height={68}
  />

</div>
<h2 className="mt-5 text-xl font-bold text-gray-800 text-center">
  LPI Darul Ulum XVI
</h2>

<p className="mt-2 text-center text-sm text-gray-500 leading-6">
  Di bawah naungan
  <br />
  Yayasan Tampojung Al-Baroqah
</p>

<div className="w-24 h-[2px] bg-[#D4AF37] rounded-full mx-auto mt-4 mb-6" />
<div
  className="
    flex-1
    overflow-y-auto
    overscroll-contain
    px-6
    pb-6
    space-y-2
  "
>

<a
  href={pathname === "/" ? "#beranda" : "/#beranda"}
  onClick={(e) => {
    setIsDrawerOpen(false);

    if (pathname === "/") {
      e.preventDefault();

      document.getElementById("beranda")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }}
    className="
      flex
      items-center
      gap-3
      rounded-xl
      px-6
      py-3
      text-gray-800
      hover:bg-green-50
      transition-all
    "
  >
    <Home size={20} />
    <span className="font-medium">Beranda</span>
  </a>

  <button
 onClick={() => setIsEducationOpen(!isEducationOpen)}
    className="
      w-full
      flex
      items-center
      justify-start
      rounded-xl
      px-6
      py-3
      text-gray-800
      hover:bg-green-50
      transition-all
    "
  >
<div className="flex flex-1 items-center justify-start gap-3">
  <GraduationCap size={20} />
  <span className="whitespace-nowrap font-medium">
    Unit Pendidikan
  </span>
</div>

<ChevronRight
  size={18}
  className={`
    ml-2
    shrink-0
    transition-transform
    duration-300
    ${isEducationOpen ? "rotate-90" : ""}
  `}
/>
  </button>
  <div
  className={`
    overflow-hidden
    transition-all
    duration-300
    ${
      isEducationOpen
        ? "max-h-60 opacity-100 mt-2"
        : "max-h-0 opacity-0"
    }
  `}
>

  <div className="ml-11 space-y-2">

    <a
  href="/kb"
  onClick={() => setIsDrawerOpen(false)}
      className="block py-2 text-sm text-gray-600 hover:text-green-700 transition"
    >
      • KB Tunas Bangsa
    </a>

    <a
  href="/ra"
  onClick={() => setIsDrawerOpen(false)}
      className="block py-2 text-sm text-gray-600 hover:text-green-700 transition"
    >
      • RA Darul Mujtamak
    </a>

    <a
  href="/mi"
  onClick={() => setIsDrawerOpen(false)}
      className="block py-2 text-sm text-gray-600 hover:text-green-700 transition"
    >
      • MI Darul Ulum XVI
    </a>

    <a
  href="/mdta"
  onClick={() => setIsDrawerOpen(false)}
      className="block py-2 text-sm text-gray-600 hover:text-green-700 transition"
    >
      • MDTA Darul Ulum XVI
    </a>

  </div>

</div>

<a
  href={pathname === "/" ? "#profil" : "/#profil"}
  onClick={(e) => {
    setIsDrawerOpen(false);

    if (pathname === "/") {
      e.preventDefault();

      document.getElementById("profil")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }}
    className="
      flex
      items-center
      gap-3
      rounded-xl
      px-6
      py-3
      text-gray-800
      hover:bg-green-50
      transition-all
    "
  >
    <User size={20} />
    <span className="font-medium">Profil</span>
  </a>

<a
  href={pathname === "/" ? "#galeri" : "/#galeri"}
  onClick={(e) => {
    setIsDrawerOpen(false);

    if (pathname === "/") {
      e.preventDefault();

      document.getElementById("galeri")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }}
    className="
      flex
      items-center
      gap-3
      rounded-xl
      px-6
      py-3
      text-gray-800
      hover:bg-green-50
      transition-all
    "
  >
    <ImageIcon size={20} />
    <span className="font-medium">Galeri</span>
  </a>

</div>
<div className="border-t border-gray-200 p-5">

{/* SPMB */}
<a
  href="/spmb"
  onClick={() => setIsDrawerOpen(false)}
  className="
    flex
    items-center
    justify-center
    w-full
    rounded-xl
    bg-[#065F46]
    hover:bg-[#04452E]
    py-3
    text-white
    font-semibold
    tracking-[0.12em]
    transition-all
    duration-300
  "
>
  SPMB
</a>
</div>
</div>
</nav>
  );
}