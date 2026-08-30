"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BriefcaseBusiness,
  School,
  UsersRound,
} from "lucide-react";
export default function Statistics() {
  return (
    <section className="pt-20 pb-12 sm:pb-20 lg:pt-24 lg:pb-28 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
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
  md:text-5xl
  font-extrabold
  tracking-[0.12em]
  text-green-900
"
  >
    STATISTIK
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



        {/* Card Statistik */}
    
        <motion.div
  className="
    grid
    grid-cols-2
    lg:grid-cols-4

    mt-12
    sm:mt-16
    lg:mt-24

    text-center
  "
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
  duration: 0.6,
  delay: 0.15,
}}
  viewport={{ once: true }}
>

        <div
  className="
    relative
    flex
    flex-col
    items-center
    px-3
    sm:px-8
    py-6
    transition-all
duration-300
hover:-translate-y-1
  "
>

  {/* Divider */}
  <div
    className="
      absolute
      right-0
      top-1/2
      -translate-y-1/2

      w-px
      h-48

      bg-gray-300/70
      
    "
  />
  <div className="flex justify-center mb-6">
    <GraduationCap
      size={48}
      className="text-[#0B7A43]"
    />
  </div>
<div className="flex justify-center">
  <h3 className="text-4xl sm:text-6xl font-bold sm:font-extrabold text-green-800 tracking-tight">
  <CountUp
    end={180}
    duration={1.1}
    suffix="+"
    delay={0.20}
    tracking-tight
leading-none
    enableScrollSpy
    scrollSpyOnce
  />
</h3>
</div>
  <p className="mt-2 text-gray-500
font-medium">
    Peserta Didik
  </p>
</div>
          
          <div
  className="
    relative
    flex
    flex-col
    items-center
    px-3
    sm:px-8
    py-6
    transition-all
duration-300
hover:-translate-y-1
  "
>

  {/* Divider */}
  <div
    className="
      absolute
      right-0
      top-1/2
      -translate-y-1/2

      w-px
      h-48

      bg-gray-300/70
    "
  />
  <div className="flex justify-center mb-6">
    <BriefcaseBusiness
      size={42}
      className="text-[#0B7A43]"
    />
  </div>

 <div className="flex justify-center">
  <h3 className="text-4xl sm:text-6xl font-bold sm:font-extrabold text-green-800 tracking-tight">
    <CountUp
  end={25}
  duration={2}
  delay={0.20}
  tracking-tight
leading-none
  enableScrollSpy
  scrollSpyOnce
/>
  </h3>
</div>
  <p className="mt-2 text-gray-500
font-medium">
    Guru & Tendik
  </p>
</div>
          <div
  className="
    relative
    flex
    flex-col
    items-center
    px-3
    sm:px-8
    py-6
    transition-all
duration-300
hover:-translate-y-1
  "
>

  {/* Divider */}
  <div
    className="
      absolute
      right-0
      top-1/2
      -translate-y-1/2

      w-px
      h-48

      bg-gray-300/70
    "
  />
  <div className="flex justify-center mb-6">
    <School
      size={42}
      className="text-[#0B7A43]"
    />
  </div>

  <div className="flex justify-center">
  <h3 className="text-4xl sm:text-6xl font-bold sm:font-extrabold text-green-800 tracking-tight">
    <CountUp
  end={4}
  duration={2}
  delay={0.20}
  tracking-tight
leading-none
  enableScrollSpy
  scrollSpyOnce
/>
  </h3>
</div>
  <p className="mt-2 text-gray-500
font-medium">
    Unit Pendidikan
  </p>
</div>

         <div
 className="
relative

flex
flex-col
items-center

px-3
sm:px-8
py-6
transition-all
duration-300
hover:-translate-y-1
"
>
  <div className="flex justify-center mb-6">
    <UsersRound
      size={42}
      className="text-[#0B7A43]"
    />
  </div>

  <div className="flex justify-center">
  <h3 className="text-4xl sm:text-6xl font-bold sm:font-extrabold text-green-800 tracking-tight">
   <CountUp
    end={8200}
    suffix="+"
  duration={1.1}
  separator=""
  delay={0.20}
  tracking-tight
leading-none
  enableScrollSpy
  scrollSpyOnce
/>
  </h3>
</div>
  <p className="mt-2 text-gray-500
font-medium">
    Alumni
  </p>
</div>

           </motion.div>

      </div>

    </section>
  );
}