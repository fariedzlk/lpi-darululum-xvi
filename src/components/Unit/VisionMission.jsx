"use client";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeUpHeading,
  fadeUpContent,
} from "@/lib/motion";

export default function VisionMission({
  vision,
  missions,
  theme,
}) {
 
  
  return (
    <section
    id="profil"
  className=" scroll-mt-28 relative overflow-hidden py-24"
  style={{
  background: `
    linear-gradient(
      180deg,
      ${theme.sectionGradient.vision.from} 0%,
      ${theme.sectionGradient.vision.to} 100%
    )
  `,
}}
>
  <div className="max-w-6xl mx-auto px-6 lg:px-8">
    <motion.div
  {...fadeUpHeading}
  className="text-center"
>
 <h2
  className="
    text-4xl
    sm:text-5xl
    md:text-6xl
    font-extrabold
    tracking-tight
    text-[#2563EB]
  "
  style={{ color: theme.primary }}
  >
  
    Visi & Misi
  </h2>

  <div className="mt-5 flex justify-center">
    <div className="h-1 w-28 rounded-full bg-gradient-to-r from-[#C9A227] via-[#E7C65C] to-[#C9A227]" />
  </div>
</motion.div>

   {/* Content */}
<motion.div
  {...fadeUpContent}
  className="mt-20 text-center"
>

  {/* VISI */}
 <motion.h3
  {...fadeUpContent}
  className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-slate-800 text-center"
>
  VISI
</motion.h3>

<motion.span
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.45,
    delay: 0.0,
    ease: [0.22, 1, 0.36, 1],
  }}
  viewport={{ once: true }}
  className="mt-10 block text-7xl font-serif leading-none"
style={{ color: theme.quote }}
>
  &ldquo;
</motion.span>

    <motion.h4
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.5,
    delay: 0.00,
    ease: [0.22, 1, 0.36, 1],
  }}
  viewport={{ once: true }}
  className="mx-auto -mt-2 max-w-3xl text-2xl font-light leading-relaxed text-slate-900 md:text-3xl lg:text-4xl"
>
  {vision}
</motion.h4>


{/* Heading MISI */}
<motion.div
  {...fadeUpContent}
  className="mt-16 text-center"
>
  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-slate-800">
    MISI
  </h3>

   {/* MISI */}
<motion.div
  {...fadeUpContent}
  className="mt-16 text-center"
>
  
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/70 bg-white/80 px-6 py-7 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-md sm:px-12">
   <div className="space-y-0">
  {missions.map((mission, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.45,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    }}
    viewport={{ once: true }}
  >
    <div className="flex items-start gap-3 text-left sm:gap-4">
      <CheckCircle2
  className="mt-1 h-6 w-6 flex-shrink-0"
  style={{ color: theme.primary }}
/>

      <p className="flex-1 text-left text-lg leading-8 text-slate-700">
        {mission}
      </p>
    </div>

    {index !== missions.length - 1 && (
      <div className="ml-10 my-5 border-t border-slate-300" />
    )}
  </motion.div>
))}
</div>

 </div> 

    </motion.div> 

  </motion.div> 

 </motion.div> 

</div> 

</section>
  );
}