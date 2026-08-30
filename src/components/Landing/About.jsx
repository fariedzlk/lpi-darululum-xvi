"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section
  id="profil"
  className="pt-26 pb-12 sm:pb-20 lg:pb-24 px-6 bg-white"
>
      <div className="max-w-5xl mx-auto text-center">

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
    leading-tight
    text-green-900
    "
  >
    PROFIL YAYASAN
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


<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    delay: 0.1,
    ease: [0.22, 1, 0.36, 1],
  }}
  viewport={{ once: true, amount: 0.6 }}
>
<Image
  src="/images/logo/logo-yayasan.png"
  alt="Logo Yayasan Tampojung Al-Baroqah"
  width={300}
  height={300}
  className="
    w-[230px]
    sm:w-[260px]
    md:w-[300px]
    h-auto
    mx-auto
    mt-8
    mb-8
  "
/>
        </motion.div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    delay: 0.2,
    ease: [0.22, 1, 0.36, 1],
  }}
  viewport={{ once: true, amount: 0.6 }}
>
        <p
  className="
  max-w-3xl
  mx-auto
  mt-8
  px-2
  sm:px-4
  text-center
  text-base
  sm:text-lg
  leading-8
  text-gray-700
    "
>
  Yayasan Tampojung Al-Baroqah merupakan lembaga pendidikan Islam yang
  berkomitmen membentuk generasi Qur'ani, berilmu, dan berakhlak mulia
  melalui penyelenggaraan pendidikan dari jenjang KB, RA, MI, hingga
  MDTA Darul Ulum XVI.
</p>
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    delay: 0.3,
    ease: [0.22, 1, 0.36, 1],
  }}
  viewport={{ once: true, amount: 0.6 }}
>
<div className="mt-12">
  <a
    href="/profil"
    className="
group
inline-flex
items-center
gap-4

bg-[#D4AF37]
hover:bg-[#C89B2F]

text-white

font-semibold

px-8
py-3

rounded-full

shadow-lg
hover:shadow-xl

hover:scale-[1.02]
active:scale-[0.99]

transition-all
duration-300
"
  >
    <span>Tentang Yayasan</span>
    <ArrowRight
  size={20}
  className="
    transition-transform
    duration-300
    group-hover:translate-x-1
  "
/>
  </a>
</div>
</motion.div>
      </div>
    </section>
  );
}