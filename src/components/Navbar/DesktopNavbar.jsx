"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DesktopNavbar({ solid = false }) {
const router = useRouter();
const pathname = usePathname();
const isProfilPage = pathname === "/profil";
const isGalleryPage = pathname === "/galeri";
  const [activeSection, setActiveSection] = useState("beranda");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // =====================================================
  // ACTIVE SECTION
  // =====================================================
  useEffect(() => {
    const sections = [...document.querySelectorAll("section[id]")];

    const handleScrollToSection = (id) => {
  if (pathname === "/") {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    router.push(`/#${id}`);
  }
};
const handleScroll = () => {
  setIsDropdownOpen(false);

 if (isProfilPage) {
  setActiveSection("profil");
  return;
}

if (isGalleryPage) {
  setActiveSection("galeri");
  return;
}

  const scrollPosition = window.scrollY + 120;

  let currentSection = "beranda";

  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
      currentSection = section.id;
    }
  });

  setActiveSection(currentSection);
};

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =====================================================
  // CLICK OUTSIDE DROPDOWN
  // =====================================================
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // =====================================================
  // SCROLL STATE
  // =====================================================
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsDropdownOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        hidden md:block
        fixed top-0 left-0 w-full z-50
        transition-all duration-300 ease-out

       ${
  solid || isScrolled
    ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
    : "bg-transparent"
}
      `}
    >
      <div
        className={`
  max-w-7xl
  mx-auto
  px-4 xl:px-6
  flex
  justify-between
  items-center
  transition-all
  duration-300

  ${isScrolled ? "h-[72px] xl:h-[78px]" : "h-[76px] xl:h-[82px]"}
`}
      >
        {/* =================================================
            LOGO + BRAND
        ================================================= */}
        <a
          href={pathname === "/galeri" || isProfilPage ? "/#beranda" : "#beranda"}
          onClick={() => {
            setActiveSection("beranda");
            setIsDropdownOpen(false);
          }}
         className="flex items-center gap-2 md:gap-2.5 xl:gap-5 flex-1 min-w-0"
        >
          <Image
            src="/images/logo/logo-lpi.png"
            alt="Logo LPI Darul Ulum XVI"
            width={55}
            height={55}
            className="w-10 h-10 md:w-11 md:h-11 xl:w-[54px] xl:h-[54px] mt-0.5"
          />

          <div className="flex flex-col leading-tight">
            <h1
              className={`
                text-sm md:text-sm xl:text-xl font-bold whitespace-nowrap
                transition-colors duration-300
                ${
                  solid || isScrolled
  ? "text-green-900"
  : "text-white"
                }
              `}
            >
              LPI Darul Ulum XVI
            </h1>

            <p
  className={`
    text-[9px] md:text-[9px] xl:text-xs
    leading-4
    mt-0.5
    transition-colors duration-300
    ${
      solid || isScrolled
        ? "text-gray-500"
        : "text-white/80"
    }
  `}
>
  Di Bawah Naungan Yayasan Tampojung Al-Baroqah
</p>
          </div>
        </a>

        {/* =================================================
            MENU
        ================================================= */}
        <div className="hidden md:flex items-center gap-5 lg:gap-6 xl:gap-10">

          {/* BERANDA */}
          <a
  href={pathname === "/" ? "#beranda" : "/#beranda"}
  onClick={(e) => {
    setActiveSection("beranda");
    setIsDropdownOpen(false);

    if (pathname === "/") {
      e.preventDefault();

      document.getElementById("beranda")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }}
            className={`
              relative
              font-semibold
              md:text-sm
              xl:text-base
              transition-all
              duration-300
              drop-shadow-[0_2px_5px_rgba(0,0,0,0.45)]
              

             ${
  activeSection === "beranda"
  ? solid || isScrolled
    ? "text-green-900"
    : "text-white"
  : solid || isScrolled
    ? "text-gray-600 hover:text-green-900"
    : "text-white/80 hover:text-white hover:-translate-y-[1px] hover:drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
}
              }
            `}
          >
            Beranda

            {activeSection === "beranda" && (
              <motion.span
                layoutId="navbar-active-line"
                className="
                  absolute
                  -bottom-1
                  left-0
                  w-full
                  h-[2px]
                  rounded-full
                  bg-[#D4AF37]
                "
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </a>

          {/* UNIT PENDIDIKAN */}
          <div
            ref={dropdownRef}
            className="relative"
          >
            <button
              onClick={() => {
                setActiveSection("pendidikan");
                setIsDropdownOpen(!isDropdownOpen);
              }}
              className={`
                relative
                flex
                items-center
                gap-1
                font-semibold
                md:text-sm
                xl:text-base
                cursor-pointer
                transition-all
                duration-300
                drop-shadow-[0_2px_5px_rgba(0,0,0,0.45)]

                ${
 activeSection === "pendidikan"
  ? solid || isScrolled
    ? "text-green-900"
    : "text-white"
  : solid || isScrolled
    ? "text-gray-600 hover:text-green-900"
    : "text-white/80 hover:text-white hover:-translate-y-[1px] hover:drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
}
                }
              `}
            >
              <span>Unit Pendidikan</span>

              <ChevronDown
                size={16}
                strokeWidth={2.5}
                className={`
                  transition-all
                  duration-300

                  ${
                    isDropdownOpen
                      ? "rotate-180 opacity-100 translate-y-[1px]"
                      : "opacity-80"
                  }
                `}
              />

              {activeSection === "pendidikan" && (
                <motion.span
                  layoutId="navbar-active-line"
                  className="
                    absolute
                    -bottom-1
                    left-0
                    w-full
                    h-[2px]
                    rounded-full
                    bg-[#D4AF37]
                  "
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </button>

            {/* DROPDOWN */}
            <div
              className={`
                absolute
                top-full
                mt-3
                left-1/2
                -translate-x-1/2
                w-60
                rounded-2xl
                bg-white
                shadow-2xl
                border border-gray-100
                py-2
                z-50
                overflow-hidden
                transform-gpu
                transition-all
                duration-300
                ease-[cubic-bezier(.22,1,.36,1)]
                origin-top

                ${
                  isDropdownOpen
                    ? "opacity-100 translate-y-0 scale-100 visible"
                    : "opacity-0 -translate-y-2 scale-95 invisible pointer-events-none"
                }
              `}
            >
              <Link
                href="/kb"
                onClick={() => setIsDropdownOpen(false)}
                className="
                  block
                  px-5
                  py-4
                  border-b
                  border-gray-100
                  text-gray-700
                  hover:bg-[#F6FAF8]
                  hover:text-[#065F46]
                  hover:pl-6
                  transition-all
                  duration-200
                "
              >
                KB Tunas Bangsa
              </Link>

              <Link
                href="/ra"
                onClick={() => setIsDropdownOpen(false)}
                className="
                  block
                  px-5
                  py-4
                  border-b
                  border-gray-100
                  text-gray-700
                  hover:bg-[#F6FAF8]
                  hover:text-[#065F46]
                  hover:pl-6
                  transition-all
                  duration-200
                "
              >
                RA Darul Mujtamak
              </Link>

              <Link
                href="/mi"
                onClick={() => setIsDropdownOpen(false)}
                className="
                  block
                  px-5
                  py-4
                  border-b
                  border-gray-100
                  text-gray-700
                  hover:bg-[#F6FAF8]
                  hover:text-[#065F46]
                  hover:pl-6
                  transition-all
                  duration-200
                "
              >
                MI Darul Ulum XVI
              </Link>

              <Link
                href="/mdta"
                onClick={() => setIsDropdownOpen(false)}
                className="
                  block
                  px-5
                  py-4
                  text-gray-700
                  hover:bg-green-50
                  hover:text-green-700
                  hover:pl-6
                  transition-all
                  duration-200
                "
              >
                MDTA Darul Ulum XVI
              </Link>
            </div>
          </div>

          {/* PROFIL */}
<a
  href={pathname === "/" ? "#profil" : "/#profil"}
  onClick={(e) => {
    setActiveSection("profil");
    setIsDropdownOpen(false);

    if (pathname === "/") {
      e.preventDefault();

      document.getElementById("profil")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }}
            className={`
              relative
              font-semibold
              md:text-sm
              xl:text-base
              transition-all
              duration-300
              drop-shadow-[0_2px_5px_rgba(0,0,0,0.45)]

             ${
 activeSection === "profil"
  ? solid || isScrolled
    ? "text-green-900"
    : "text-white"
  : solid || isScrolled
    ? "text-gray-600 hover:text-green-900"
    : "text-white/80 hover:text-white hover:-translate-y-[1px] hover:drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
}
              }
            `}
          >
            Profil

            {activeSection === "profil" && (
              <motion.span
                layoutId="navbar-active-line"
                className="
                  absolute
                  -bottom-1
                  left-0
                  w-full
                  h-[2px]
                  rounded-full
                  bg-[#D4AF37]
                "
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </a>

          {/* GALERI */}
 <a
  href={pathname === "/" ? "#galeri" : "/#galeri"}
  onClick={(e) => {
    setActiveSection("galeri");
    setIsDropdownOpen(false);

    if (pathname === "/") {
      e.preventDefault();

      document.getElementById("galeri")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }}
            className={`
              relative
              font-semibold
              md:text-sm
              xl:text-base
              transition-all
              duration-300
              drop-shadow-[0_2px_5px_rgba(0,0,0,0.45)]

              ${
  activeSection === "galeri"
  ? solid || isScrolled
    ? "text-green-900"
    : "text-white"
  : solid || isScrolled
    ? "text-gray-600 hover:text-green-900"
    : "text-white/80 hover:text-white hover:-translate-y-[1px] hover:drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
}
              }
            `}
          >
            Galeri

            {activeSection === "galeri" && (
              <motion.span
                layoutId="navbar-active-line"
                className="
                  absolute
                  -bottom-1
                  left-0
                  w-full
                  h-[2px]
                  rounded-full
                  bg-[#D4AF37]
                "
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </a>

{/* SPMB */}
<a
  href="/spmb"
  className={`
    flex
    min-w-[105px] md:min-w-[110px] xl:min-w-[140px]
    items-center
    justify-center
    rounded-full
    px-4 md:px-5 xl:px-7
    py-2.5 xl:py-
    text-xs xl:text-sm
    font-semibold
    tracking-[0.12em]
    transition-all
    duration-300
    ease-out
    ${
      solid || isScrolled
        ? "border border-green-900/10 bg-green-900 text-white hover:bg-green-800"
        : "border border-white/20 bg-white/10 text-white hover:bg-white hover:text-green-900"
    }
  `}
>
  SPMB
</a>
        </div>
      </div>
    </nav>
  );
}