import Image from "next/image";
import {
  ArrowRight,
  Building2,
  BookOpen,
} from "lucide-react";

export default function Hero() {

const heroGradient = `
radial-gradient(
  ellipse 52% 42% at 50% 47%,
  rgba(0, 45, 35, 0.34) 0%,
  rgba(0, 45, 35, 0.20) 42%,
  rgba(0, 45, 35, 0.08) 68%,
  rgba(0, 45, 35, 0) 100%
),
linear-gradient(
  180deg,
  rgba(0, 0, 0, 0.03) 0%,
  rgba(0, 45, 35, 0.05) 100%
)
`;
  return (
 <section
  id="beranda"
  className="
    relative
    min-h-screen
    overflow-hidden
    rounded-b-[42px]
  "
>

      <Image
  src="/images/hero/hero-landing.png"
  alt="Gedung Yayasan"
  fill
  priority
  quality={100}
  sizes="100vw"
  className="object-cover"
/>

    <div
  className="absolute inset-0"
  style={{ background: heroGradient }}
/>
<div
className="
  absolute
  inset-0
  max-w-7xl
  mx-auto
  flex
  items-center
  justify-center
  translate-y-8
  px-5
  sm:px-6
  lg:px-10
"
>
  <div
  className="
    w-full
    max-w-5xl
    flex
    flex-col
    items-center
    text-center
    -translate-y-6
  "
>

<div
  className="
    w-full
    flex
    flex-col
    items-center
    text-center
  "
>
  {/* EYEBROW */}
  <div className="hero-fade hero-delay-1 mb-3">
<span
  className="
    text-white
    text-xs
    min-[375px]:text-sm
    sm:text-base
    font-semibold
    tracking-[0.12em]
    uppercase
    whitespace-nowrap
    drop-shadow-[0_2px_5px_rgba(0,0,0,0.45)]
  "
>
  Yayasan Tampojung Al-Baroqah
</span>
  </div>

  {/* JUDUL */}
  <h1
  className="
    hero-fade
    hero-delay-2
    text-[36px]
min-[375px]:text-[42px]
sm:text-5xl
lg:text-[58px]
    font-serif
    leading-[1.05]
    text-white
    drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)]
    mb-4
  "
>
    LPI Darul Ulum XVI
  </h1>

  {/* DESKRIPSI */}
  <p
    className="
      hero-fade
      hero-delay-3
      text-base
min-[375px]:text-lg
sm:text-xl
      leading-relaxed
      text-white/90
      drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)]
      max-w-xl
          "
  >
    Mencetak Generasi Qur'ani,
    <br />
    Berilmu & Berakhlak Mulia
  </p>

  {/* CTA */}
  <div
  className="
    hero-fade
    hero-delay-4
    mt-8
    flex
    flex-col
    items-center
    sm:flex-row
    gap-3
  "
>
    {/* CTA UTAMA */}
    <a
      href="#profil"
      className="
        group
        inline-flex
        items-center
        gap-4
        bg-[#C9A227]
        hover:bg-[#B8911F]
        text-white
        font-semibold
        px-6
min-[375px]:px-8
        py-3
        rounded-full
        transition-all
        duration-300
        shadow-md
        hover:shadow-xl
        hover:-translate-y-0.5
      "
    >
      <span>Profil Yayasan</span>

      <ArrowRight
        size={20}
        className="
          transition-transform
          duration-300
          group-hover:translate-x-1.5
        "
      />
    </a>

    {/* CTA SEKUNDER */}
    <a
      href="#pendidikan"
className="
  group
  inline-flex
  items-center
  gap-2.5
  bg-[#075441]/85
  border
  border-white/25
  text-white
  hover:bg-[#075441]
  font-semibold
  px-6
min-[375px]:px-7
  py-3
  rounded-full
  shadow-lg
  hover:shadow-xl
  hover:-translate-y-0.5
  backdrop-blur-sm
  transition-all
  duration-300
"
    >
      <Building2
        size={20}
        className="
          transition-transform
          duration-300
          group-hover:translate-x-0.5
        "
      />

      <span>Unit Pendidikan</span>
    </a>
  </div>
</div></div>

      </div>
    <svg
  className="absolute bottom-0 left-0 w-full h-14"
  viewBox="0 0 1440 80"
  preserveAspectRatio="none"
>
  {/* Area putih */}
  <path
    d="
      M0,20
      Q720,78
      1440,20
      L1440,80
      L0,80
      Z
    "
    fill="#ffffff"
  />

  {/* Garis emas */}
 <defs>
  <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stopColor="#C89B2F" />
    <stop offset="50%" stopColor="#E6C75A" />
    <stop offset="100%" stopColor="#C89B2F" />
  </linearGradient>
</defs>

<path
  d="M0,20 Q720,78 1440,20"
  fill="none"
  stroke="url(#goldLine)"
  strokeWidth="6"
/>
</svg>

    </section>
  );
}
