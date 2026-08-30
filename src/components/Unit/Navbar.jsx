"use client";

import { House, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";


export default function Navbar({ theme }) {
  const [activeSection, setActiveSection] = useState("beranda");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { branding } = theme;

  useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      root: null,
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
  if (isMobileMenuOpen) {
  document.body.style.overflow = "hidden";
} else {
  document.body.style.overflow = "";
}

  return () => {
    observer.disconnect();
    window.removeEventListener("scroll", handleScroll);
  };
}, [isMobileMenuOpen]);

  const menus = [
  {
    id: "beranda",
    label: "Beranda",
  },
  {
    id: "profil",
    label: "Profil",
  },
  {
    id: "program",
    label: "Program",
  },
  {
    id: "tenaga-pendidik",
    label: "Tenaga Pendidik",
  },
  {
    id: "galeri",
    label: "Galeri",
  },
];
return (
  <>
    <nav
  className={`
    hidden md:block
    fixed
    top-0
    left-0
    right-0
    z-50
    transition-all
    duration-500
    ease-[cubic-bezier(.22,1,.36,1)]
  `}
>
  <div
    className="
      w-full
      transition-all
      duration-500
    "
  >
    <div
      className={`
        flex
        items-center
        justify-between
        transition-all
        duration-500
        ease-[cubic-bezier(.22,1,.36,1)]

${
  isScrolled
    ? `
      h-[76px]
      px-10
      bg-white/90
      backdrop-blur-xl
      border-b border-gray-200/70
      shadow-[0_8px_24px_rgba(15,23,42,.08)]
    `
    : `
      h-[88px]
      px-10
      bg-transparent
    `
}
      `}
    >
          <a
            href="#beranda"
            onClick={() =>
              setActiveSection("beranda")
            }
            className="
              flex
              items-center
              gap-4
              pl-7
            "
          >
            <Image
              src={branding.logo}
              alt={branding.title}
              width={60}
              height={60}
              className="object-contain"
            />

            <div className="leading-tight">
<h1
  className="text-lg font-bold transition-colors duration-300"
  style={{
    color: isScrolled ? "#111827" : theme.primary,
  }}
>
  {branding.title}
</h1>

<p className="text-xs text-gray-500">
  {branding.subtitle}
</p>
        </div>
          </a>

          <div className="flex items-center gap-8 pr-4">
            {menus.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() =>
                  setActiveSection(item.id)
                }
className={`
  relative
  font-semibold
  transition-all
  duration-300
  ease-out
  hover:-translate-y-[1px]
  ${activeSection === item.id ? "font-bold" : ""}
  ${isScrolled ? "text-gray-700" : ""}
`}
style={{
  color:
    activeSection === item.id || !isScrolled
      ? theme.primary
      : "#374151",
}}
          >
                {item.label}

                {activeSection === item.id && (
<motion.span
  layoutId="unit-navbar-active"
  className="
    absolute
    left-0
    -bottom-2
    h-[3px]
    w-full
    rounded-full
  "
  style={{
    background: theme.primary,
  }}
  transition={{
    type: "spring",
    stiffness: 380,
    damping: 30,
  }}
/>                )}
              </a>
            ))}
              <a
  href="/"
  className="
    flex items-center gap-2
    rounded-full
    px-5
    py-2.5
    font-semibold
    text-white
    shadow-lg
    transition-all
    duration-300
    hover:scale-105
    active:scale-95
  "
 style={{
    background: theme.primary,
}}
>
  <House size={18} strokeWidth={2.2} />
  <span>Kembali</span>
</a>
          </div>
        </div>
      </div>
    </nav>
<nav
      className={`
        md:hidden
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-300
        ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_24px_rgba(15,23,42,.08)]"
            : "bg-transparent"
        }
      `}
    >
      <div className="flex h-[72px] items-center justify-between px-5">

        {/* Branding */}
        <a
          href="#beranda"
          onClick={() => setActiveSection("beranda")}
          className="flex items-center gap-3"
        >
          <Image
            src={branding.logo}
            alt={branding.title}
            width={44}
            height={44}
            className="object-contain"
          />

          <div className="leading-tight">
            <h1
              className="text-sm font-bold transition-colors duration-300"
              style={{
                color: isScrolled ? "#111827" : theme.primary,
              }}
            >
              {branding.title}
            </h1>

            <p className="text-[10px] text-gray-500">
              {branding.subtitle}
            </p>
          </div>
        </a>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Buka menu"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            transition-all
            duration-300
          "
          style={{
            color: isScrolled ? "#111827" : theme.primary,
          }}
        >
          <Menu size={25} strokeWidth={2.2} />
        </button>

      </div>
    </nav>
    {/* MOBILE DRAWER */}
<AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      className="fixed inset-0 z-[60] md:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

    {/* Overlay */}
    <motion.button
  type="button"
  aria-label="Tutup menu"
  onClick={() => setIsMobileMenuOpen(false)}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
/>

    {/* Drawer */}
<motion.aside
  initial={{ x: "100%" }}
  animate={{ x: 0 }}
  exit={{ x: "100%" }}
  transition={{
    type: "spring",
    stiffness: 320,
    damping: 32,
  }}
  className="
    absolute
    right-0
    top-0
    flex
    h-full
    w-[min(86%,380px)]
    flex-col
    bg-white
    shadow-[-12px_0_40px_rgba(15,23,42,.12)]
  "
>

      {/* Close */}
      <div className="flex justify-end px-5 pt-5">
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Tutup menu"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            text-gray-800
            transition-all
            duration-300
            hover:bg-gray-100
          "
        >
          <X size={25} strokeWidth={2.2} />
        </button>
      </div>

      {/* Branding */}
      <div className="px-6 pb-5 pt-4 text-center">
        <Image
          src={branding.logo}
          alt={branding.title}
          width={76}
          height={76}
          className="mx-auto object-contain"
        />

        <h2
          className="mt-4 text-xl font-bold"
          style={{
            color: theme.primary,
          }}
        >
          {branding.title}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {branding.subtitle}
        </p>

        <div
          className="mx-auto mt-5 h-[3px] w-24 rounded-full"
          style={{
            background: theme.primary,
          }}
        />
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto px-5">
        <div className="space-y-1">
          {menus.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => {
                setActiveSection(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`
                flex
                items-center
                rounded-xl
                px-4
                py-3.5
                text-base
                font-semibold
                transition-all
                duration-200
                ${
                  activeSection === item.id
                    ? "bg-gray-50"
                    : "text-gray-700 hover:bg-gray-50"
                }
              `}
              style={{
                color:
                  activeSection === item.id
                    ? theme.primary
                    : undefined,
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Kembali */}
      <div className="border-t border-gray-200 px-5 py-5">
        <a
          href="/"
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            px-5
            py-3.5
            font-semibold
            text-white
            shadow-md
            transition-all
            duration-300
            active:scale-[.98]
          "
          style={{
            background: theme.primary,
          }}
        >
          <House size={18} strokeWidth={2.2} />
          <span>Kembali</span>
        </a>
      </div>

    </motion.aside>
     </motion.div>
  )}
</AnimatePresence>
  </>
);
}