import Image from "next/image";
import {
  BookOpen,
  Pencil,
  Puzzle,
  ArrowRight ,
} from "lucide-react";
export default function Hero({
  heading,
  breadcrumb,
  badge,
  heroImage,
  heroDecoration,
  theme,
}) {
   

  return (
<section
  id="beranda"
  className="
    scroll-mt-28
    relative
    overflow-hidden
    h-[clamp(625px,100svh,720px)]
    pt-[88px]
    pb-[20px]
    sm:h-auto
    sm:pt-[88px]
    sm:pb-[80px]
    xl:pt-[88px]
    xl:pb-8
  "

  style={{
    background: `linear-gradient(
      180deg,
      ${theme.gradient.from} 0%,
      ${theme.gradient.middle} 45%,
      ${theme.gradient.to} 100%
    )`,
  }}
>
  {/* Background Glow */}
<div
  className="
    absolute
    inset-0
    pointer-events-none
    -z-10
  "
>
  <div
  className="
    absolute
    top-[-120px]
    left-[-80px]
    w-[520px]
    h-[520px]
    rounded-full
    blur-[150px]
  "
  style={{
    backgroundColor: theme.glow.left,
    opacity: 0.8,
  }}
/>

  <div
  className="
    absolute
    bottom-[-180px]
    right-[-150px]
    w-[650px]
    h-[650px]
    rounded-full
    blur-[170px]
  "
  style={{
    backgroundColor: theme.glow.right,
    opacity: 0.8,
  }}
/>
</div>
  <div className="relative z-10 max-w-7xl mx-auto px-6 xl:px-8">
<div className="
grid
grid-cols-[68%_32%]
sm:grid-cols-[55%_45%]
xl:grid-cols-2
gap-6
lg:gap-12
items-center
-translate-x-[10px]
lg:translate-x-0
">


        {/* LEFT */}
<div>
  <div className="max-w-[520px] flex flex-col h-auto xl:h-[560px]">
          {/* Breadcrumb */}
           <div className="hero-fade hero-delay-1 flex items-center gap-1.5 text-[11px] sm:text-sm text-gray-500">
            <span>Beranda</span>
            <span>/</span>
            <span
  className="font-medium"
  style={{ color: theme.primary }}
>
  {breadcrumb}
</span>
          </div>


{/* Badge */}

{/* MOBILE */}
<div
  className="
    hero-fade
    hero-delay-2
    mt-6
    flex
    items-center
    gap-1.5
    text-[11px]
    font-semibold
    leading-none
    whitespace-nowrap
    sm:hidden
  "
  style={{
    color: theme.badge.text,
  }}
>
  <span
    className="h-1.5 w-1.5 shrink-0 rounded-full"
    style={{
      backgroundColor: theme.badge.dot,
    }}
  />

  {badge}
</div>


{/* DESKTOP / TABLET */}
<div
  className="
    hero-fade
    hero-delay-2
    mt-3
    hidden
    self-start
    items-center
    gap-2
    rounded-full
    border
    px-4
    py-1.5
    text-xs
    font-semibold
    leading-tight
    shadow-sm
    sm:inline-flex
    sm:text-sm
  "
  style={{
    borderColor: theme.badge.border,
    backgroundColor: theme.badge.background,
    color: theme.badge.text,
  }}
>
  <span
    className="h-2 w-2 shrink-0 rounded-full"
    style={{
      backgroundColor: theme.badge.dot,
    }}
  />

  {badge}
</div>

          {/* Heading */}
<h1
  className="
    hero-fade
    hero-delay-3
    mt-6
    text-[30px]
    sm:text-[42px]
    xl:text-[60px]
    font-black
    leading-[1]
    tracking-tight
  "
  style={{ color: theme.primary }}
>
  {heading}
</h1>         
          {/* CTA */}
          <div className="flex-1" />
<div className="hero-fade hero-delay-4 relative top-2 mt-4 flex flex-col items-start gap-2.5 sm:top-0 sm:mt-6 sm:flex-row sm:gap-4">

<a
  href="#program"
className="
  hero-btn-primary
  inline-flex
  w-[160px]
  items-center
  justify-center
  rounded-full
  px-4
  py-2
  text-[15px]
  font-semibold
  text-white
  shadow-lg
  transition-all
  duration-300
  hover:-translate-y-0.5
  sm:min-w-[190px]
lg:w-auto
  sm:px-6
  sm:py-3.5
  sm:text-base
"
  style={{
    "--hero-btn-bg": theme.button.primary.background,
    "--hero-btn-hover": theme.button.primary.hover,
  }}
>
  Program Kami
  <ArrowRight className="ml-1.5 h-4 w-4" />
</a>

<a
  href="#"
className="
  hero-btn-secondary
  inline-flex
  w-[160px]
  items-center
  justify-center
  rounded-full
  border
  bg-white
  px-4
  py-2
  text-[15px]
  font-semibold
  transition-all
  duration-300
  hover:-translate-y-0.5
  sm:min-w-[190px]
lg:w-auto
  sm:px-6
  sm:py-3.5
  sm:text-base
"
  style={{
    "--hero-btn-text": theme.button.secondary.text,
    "--hero-btn-border": theme.button.secondary.border,
    "--hero-btn-hover-bg": theme.button.secondary.hoverBackground,
    "--hero-btn-hover-text": theme.button.secondary.hoverText,
  }}
>
  Daftar Sekarang
</a>

          </div>
          </div>

        </div>

        {/* RIGHT */}
<div
  className="
    hero-fade
    hero-delay-5
    flex
    justify-center
    lg:justify-center
  "
>
<div
  className="
    relative
h-[380px]
sm:h-[460px]
xl:h-[500px]
xl:w-[500px]
    w-full
  "
>

{/* Background */}
<Image
  src={heroDecoration}
  alt={`${breadcrumb} Decoration`}
  width={700}
  height={700}
  
className="
  absolute
  bottom-0
  left-1/2
  -translate-x-1/2
  scale-[1.9]
sm:scale-[1.05]
xl:scale-100
  h-[400px]
  sm:h-[430px]
  xl:h-[500px]
  w-auto
  object-contain
  z-10
  pointer-events-none
  select-none
  lg:left-auto
  lg:right-4
  lg:translate-x-0
"
/>

 
           {/* PNG */}
            <Image
  src={heroImage}
  alt={breadcrumb}

  width={1200}
  height={1600}

className="
  absolute
  bottom-0
  left-1/2
  -translate-x-1/2
scale-[1.9]
sm:scale-[1.15]
xl:scale-100
  h-[400px]
  sm:h-[430px]
  xl:h-[500px]
  w-auto
  object-contain
  drop-shadow-[0_15px_24px_rgba(0,0,0,0.18)]
  z-20
 xl:left-auto
xl:right-4
xl:translate-x-0
"
/>


          </div>

        </div>

      </div>
    </div>
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
  <svg
    viewBox="0 0 1440 220"
    className="w-full h-[130px]"
    preserveAspectRatio="none"
  >
    <path
  fill={theme.wave}
  d="
    M0,120
    C250,220
    420,20
    720,110
    C980,190
    1160,40
    1440,120
    L1440,220
    L0,220
    Z
  "
/>
  </svg>
</div>
  </section>
  
);
}
