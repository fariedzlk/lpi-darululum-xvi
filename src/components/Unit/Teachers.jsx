"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import {
  fadeUpHeading,
  fadeUpContent,
} from "@/lib/motion";

export default function Teachers({
  teachers,
  theme,
}) {
  
const [selectedIndex, setSelectedIndex] = useState(0);

const autoplay = useRef(
  Autoplay({
    delay: 9000,
    stopOnMouseEnter: true,
    stopOnInteraction: false,
  })
);

const [emblaRef, emblaApi] = useEmblaCarousel(
  {
    loop: true,
    align: "start",
    slidesToScroll: 1,

    dragFree: false,
    duration: 30,
    skipSnaps: false,
  },
  [autoplay.current]
);

useEffect(() => {
  if (!emblaApi) return;

  const onSelect = () => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  onSelect();

  emblaApi.on("select", onSelect);

  return () => {
    emblaApi.off("select", onSelect);
  };
}, [emblaApi]);

const next = () => emblaApi?.scrollNext();

const prev = () => emblaApi?.scrollPrev();

const resetAutoplay = () => {
  autoplay.current.reset();
};
  return (
   <section
   id="tenaga-pendidik"
  className="scroll-mt-28 relative overflow-hidden pt-24 pb-20"
  style={{
  background: `
    linear-gradient(
      180deg,
      ${theme.sectionGradient.teachers.from} 0%,
      ${theme.sectionGradient.teachers.to} 100%
    )
  `,
}}
>

    {/* Heading */}
<div className="mx-auto max-w-6xl px-6 lg:px-8">
 <motion.div
      {...fadeUpHeading}
      className="text-center"
    >
<h2
  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em]"
  style={{ color: theme.primary }}
>
  Tenaga Pendidik
</h2>

     <div className="mt-5 flex justify-center">
        <div className="h-1 w-28 rounded-full bg-gradient-to-r from-[#C9A227] via-[#E7C65C] to-[#C9A227]" />
      </div>
    </motion.div>

  <div className="mt-16">
    {/* Teacher Carousel */}
  </div>
  <motion.div
  {...fadeUpContent}
  className="relative mt-14"
>
    <button
  onClick={() => {
  prev();
  resetAutoplay();
}}
className="
  group
  absolute
  top-1/2
  left-[-8px]
  -translate-y-1/2
  z-30
  flex h-9 w-9 items-center justify-center
  rounded-full
  border border-slate-200
  bg-white
  shadow-[0_6px_18px_rgba(15,23,42,0.10)]
  transition-all duration-300

  md:left-[-20px]
  md:-translate-x-1/2
  md:h-12
  md:w-12
  md:shadow-[0_8px_24px_rgba(15,23,42,0.08)]
"
>
<ChevronLeft
  className="
    h-5 w-5
    md:h-6 md:w-6
    text-slate-700
    transition-transform duration-300
    group-hover:-translate-x-0.5
  "
/>
</button>

<button
  onClick={() => {
  next();
  resetAutoplay();
}}
className="
  group
  absolute
  top-1/2
  right-[-8px]
  -translate-y-1/2
  z-30
  flex h-9 w-9 items-center justify-center
  rounded-full
  border border-slate-200
  bg-white
  shadow-[0_6px_18px_rgba(15,23,42,0.10)]
  transition-all duration-300

  md:right-[-20px]
  md:translate-x-1/2
  md:h-12
  md:w-12
  md:shadow-[0_8px_24px_rgba(15,23,42,0.08)]
"
>
<ChevronRight
  className="
    h-5 w-5
    md:h-6 md:w-6
    text-slate-700
    transition-transform duration-300
    group-hover:-translate-x-0.5
  "
/>
</button>

<div className="px-4 sm:px-16">
  <div
  ref={emblaRef}
  className="
    overflow-hidden
    cursor-grab
    active:cursor-grabbing
  "
>
    <div className="flex">    

  {teachers.map((teacher, index) => (
   <div
  key={index}
className="
  flex-[0_0_100%]
  md:flex-[0_0_50%]
  lg:flex-[0_0_33.333%]
  px-2
  sm:px-4
"
>
   <div
      className="
        group
overflow-hidden
rounded-3xl
bg-white

border
border-transparent

shadow-[0_6px_18px_rgba(15,23,42,0.05)]

transition-all
duration-500
ease-[cubic-bezier(0.22,1,0.36,1)]

hover:-translate-y-1
hover:border-blue-100
hover:shadow-[0_18px_42px_rgba(15,23,42,0.12)]
      "
   >
      <div className="relative h-[340px] overflow-hidden">
        <Image
  src={teacher.image}
  alt={teacher.name}
  fill
  draggable={false}
  className="select-none object-cover object-top"
  onDragStart={(e) => e.preventDefault()}
/>
      </div>

      <div className="px-6 pt-5 pb-5 text-center">
        <h3
          className="
            mx-auto
            max-w-[88%]
            min-h-[3rem]
            text-[1.3rem]
            font-semibold
            leading-[1.15]
            tracking-[-0.01em]
            text-slate-900
          "
        >
          {teacher.name}
        </h3>

        <p className="mt-2 text-base font-medium text-slate-600">
          {teacher.position}
        </p>
        
      </div>
    </div>
    </div>
  ))}
  </div>
  </div>
</div>
</motion.div>
<div className="mt-4 flex justify-center md:mt-10">
  {(() => {
    const total = teachers.length;
    const maxVisible = 7;

    const start =
      total <= maxVisible
        ? 0
        : Math.min(
            Math.floor(selectedIndex / maxVisible) * maxVisible,
            total - maxVisible
          );

    return (
      <div className="flex items-center gap-2">
        {teachers.slice(start, start + maxVisible).map((_, i) => {
          const index = start + i;

          return (
            <button
              key={index}
              onClick={() => {
                emblaApi?.scrollTo(index);
                resetAutoplay();
              }}
              className={`
                rounded-full
                transition-all duration-300
                ${
                  selectedIndex === index
                    ? "h-2 w-6"
                    : "h-2 w-2 bg-slate-300 hover:bg-slate-400"
                }
                md:h-2.5
                ${
                  selectedIndex === index
                    ? "md:w-7"
                    : "md:w-2.5"
                }
              `}
              style={
                selectedIndex === index
                  ? { backgroundColor: theme.primary }
                  : undefined
              }
            />
          );
        })}
      </div>
    );
  })()}
</div>
    
</div>


    {/* Carousel */}

  

  {/* Wave */}
</section>
  );
}