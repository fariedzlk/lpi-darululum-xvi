"use client";

import {
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { MapPin, Phone, Mail, Clock3, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { HiMapPin } from "react-icons/hi2";
import Image from "next/image";

export default function Footer({
  navigation,
  theme,
}) {

 const contacts = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "082337628609",
    href: "https://wa.me/6282337628609",
    icon: FaWhatsapp,
  },
  {
    id: "email",
    label: "Email",
    value: "darululumxviofficial@gmail.com",
    href: "mailto:darululumxviofficial@gmail.com",
    icon: MdEmail,
  },
  {
    id: "facebook",
    label: "Facebook",
    value: "LPI Darul Ulum XVI",
    href: "https://facebook.com/...",
    icon: FaFacebookF,
  },
  {
  id: "alamat",
  label: "Alamat",
  value: "Tampojung Pregi, Waru, Pamekasan",
  href: "https://maps.app.goo.gl/2LedcARbnBD4d4ES7",
  icon: HiMapPin,
},
];


  return (
    <>
    
<footer
  id="kontak"
  className="
    text-white
    px-6
    pt-12
    pb-2
    lg:px-10
    lg:pt-14
    lg:pb-3
  "
  style={{
    background: theme.primary,
  }}
>
  <div className="mx-auto max-w-[1200px]">
   <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1.2fr]">
  <div>
<Image
  src={theme.branding.logo}
  alt={`Logo ${theme.branding.title}`}
  width={70}
  height={70}
  className="h-14 w-auto"
/>

<h3 className="mt-4 text-2xl font-bold">
  {theme.branding.title}
</h3>

<p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80">
  {theme.branding.subtitle}
</p>

<p className="mt-7 text-sm text-white/80">
  Berilmu <span className="mx-1.5">•</span> Beradab <span className="mx-1.5">•</span> Bermanfaat
</p>

<div className="mt-12">
  <div className="inline-block">
  <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
    Ikuti Kami
  </h4>

  <div className="mx-auto mt-2 h-[2px] w-14 rounded-full bg-white" />
</div>

  <div className="mt-5 flex items-center gap-3">
    {/* Facebook */}
<a
  href="https://www.facebook.com/DU.XVI.MEDIA"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Facebook"
  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-200 hover:border-white hover:bg-white/10 hover:text-white"
>
  <FaFacebookF size={18} />
</a>

    {/* YouTube */}
    <a
  href="https://www.youtube.com/@darululumxviofficial"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="YouTube"
  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-200 hover:border-white hover:bg-white/10 hover:text-white"
>
  <FaYoutube size={19} />
</a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/6282337628609"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-200 hover:border-white hover:bg-white/10 hover:text-white"
    >
      <FaWhatsapp size={22} />
    </a>
  </div>
</div>


</div>
<div>
<div className="w-fit">
  <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
    Navigasi
  </h4>

  <div className="mx-auto mt-2 h-[2px] w-10 rounded-full bg-white" />
</div>
  <nav className="mt-5 flex flex-col gap-3">
  <a
    href="/"
    className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
  >
    <span className="h-1.5 w-1.5 rounded-full bg-white" />
    Beranda
  </a>

  <a
    href="/#pendidikan"
    className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
  >
    <span className="h-1.5 w-1.5 rounded-full bg-white" />
    Unit Pendidikan
  </a>

  <a
    href="/#profil"
    className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
  >
    <span className="h-1.5 w-1.5 rounded-full bg-white" />
    Profil
  </a>

  <a
    href="/#galeri"
    className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
  >
    <span className="h-1.5 w-1.5 rounded-full bg-white" />
    Galeri
  </a>
</nav>

<div className="mt-8">
  <div className="w-fit">
    <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
      Kunjungi Juga
    </h4>

    <div className="mx-auto mt-2 h-[2px] w-10 rounded-full bg-white" />
  </div>

  <nav className="mt-5 flex flex-col gap-3">
    {navigation.map((item) => (
      <a
        key={item.href}
        href={item.href}
        className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
        {item.name}
      </a>
    ))}
  </nav>
</div>

</div>
  <div>
  <div className="w-fit">
  <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
    Kontak Kami
  </h4>

  <div className="mx-auto mt-2 h-[2px] w-14 rounded-full bg-white" />
</div>

  <div className="mt-5 flex flex-col gap-4">
  <a
    href="https://maps.app.goo.gl/2LedcARbnBD4d4ES7"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start gap-3 text-sm text-white/80 transition-colors hover:text-white"
  >
    <MapPin
      size={19}
      strokeWidth={1.8}
      className="mt-0.5 shrink-0 text-white"
    />

    <span>
      Tampojung Pregi, Waru, Pamekasan
    </span>
  </a>

  <a
    href="tel:082337628609"
    className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
  >
    <Phone
      size={19}
      strokeWidth={1.8}
      className="shrink-0 text-white"
    />

    <span>
      0823 3762 8609
    </span>
  </a>

  <a
    href="mailto:darululumxviofficial@gmail.com"
    className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
  >
    <Mail
      size={19}
      strokeWidth={1.8}
      className="shrink-0 text-white"
    />

    <span>
      darululumxviofficial@gmail.com
    </span>
  </a>

  <div className="flex items-start gap-3 text-sm text-white/80">
    <Clock3
      size={19}
      strokeWidth={1.8}
      className="mt-0.5 shrink-0 text-white"
    />

    <div>
      <p className="font-medium text-white">
        Jam Pelayanan
      </p>

      <p className="mt-1 leading-relaxed text-white/70">
        Senin–Kamis: 07.00–15.00
        <br />
        Jumat: Libur
        <br />
        Sabtu: 07.00–12.00
      </p>
    </div>
  </div>
</div>
</div>
</div>

<div className="mt-8 border-t border-white/20 pt-4">
  <div className="flex flex-col gap-3 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
    <p>
      © 2026 LPI Darul Ulum XVI. All rights reserved.
    </p>

    <a
      href="#"
      className="transition-colors hover:text-white"
    >
      Privacy Policy
    </a>
  </div>
</div>
  </div>
</footer>
 </>
  );
}