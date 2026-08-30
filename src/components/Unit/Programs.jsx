"use client";
import {
  fadeUpHeading,
  fadeUpContent,
} from "@/lib/motion";
import { motion } from "framer-motion";
import {
  Puzzle,
  BookOpen,
  Sparkles,
  ScrollText,
  Pencil,
  Sun,
  BookMarked,
  Landmark,
  Clock3,
} from "lucide-react";
export default function Programs({
  items,
  theme,
}) {
  const icons = {
  Puzzle,
  BookOpen,
  Sparkles,
  ScrollText,
  Pencil,
  Sun,
  BookMarked,
  Landmark,
  Clock3,
};

  return (
   <section
   id="program"
  className=" scroll-mt-28 relative overflow-hidden pt-24 pb-20"
  style={{
  background: `
    linear-gradient(
      180deg,
      ${theme.sectionGradient.programs.from} 0%,
      ${theme.sectionGradient.programs.to} 100%
    )
  `,
}}
>
 <div className="mx-auto max-w-6xl px-6 lg:px-8">
<motion.div
  {...fadeUpHeading}
  className="text-center"
>
<h2
  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em]"
  style={{ color: theme.primary }}
>
  Program Unggulan
</h2>

  <div className="mt-5 flex justify-center">
    <div className="h-1 w-28 rounded-full bg-gradient-to-r from-[#C9A227] via-[#E7C65C] to-[#C9A227]" />
  </div>
</motion.div>

<motion.div
  {...fadeUpContent}
  className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-3"
>
{items.map((program, index) => {
  const Icon = icons[program.icon];

  return (
   
      <motion.div
  key={program.title}
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.45,
    delay: index * 0.08,
    ease: [0.22, 1, 0.36, 1],
  }}
  viewport={{ once: true }}
  className="group flex flex-col items-center text-center"
>
  <div
  className="
    flex h-24 w-24 items-center justify-center
    rounded-full
    border
    transition-all duration-300
    group-hover:scale-105
  "
  style={{
    borderColor: theme.badge.border,
    backgroundColor: theme.badge.background,
  }}
>
    <Icon className="h-11 w-11 " 
    style={{ color: theme.primary }}
    />
  </div>

  <h3 className="mt-6 whitespace-pre-line text-2xl font-semibold text-slate-800 leading-snug">
    {program.title}
  </h3>
</motion.div>

   
  );
})}
</motion.div>

 </div>
    </section>
  );
}