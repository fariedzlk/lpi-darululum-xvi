"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Landing/Footer";
import Navbar from "@/components/Navbar";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  },
};

export default function ProfilPage() {
  return (
    <>
     <Navbar />
      <main>
{/* =====================================================
    HERO PROFIL
===================================================== */}
<section
  id="profil"
  className="
    relative
    min-h-screen
    overflow-hidden
    bg-[#123F32]
  "
>
  {/* FOTO HERO — pakai foto yang sama dengan homepage */}
  <Image
    src="/images/hero/hero-landing.png"
    alt="Gedung LPI Darul Ulum XVI"
    fill
    priority
    className="object-cover object-center"
  />

  {/* OVERLAY */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-b
      from-black/35
      via-black/20
      to-black/45
    "
  />
  <div
  className="
    absolute
    inset-0
    bg-[radial-gradient(ellipse_45%_32%_at_50%_50%,rgba(0,35,28,0.30)_0%,rgba(0,35,28,0.12)_55%,transparent_100%)]
  "
/>

  {/* KONTRAS TAMBAHAN DI AREA TEKS */}
  <div
    className="
      absolute
      inset-0
      bg-[radial-gradient(ellipse_60%_45%_at_50%_50%,rgba(0,45,35,0.28)_0%,rgba(0,45,35,0.10)_55%,rgba(0,45,35,0)_100%)]
    "
  />

  {/* CONTENT */}
  <div
    className="
      relative
      z-10
      flex
      min-h-screen
      items-center
      justify-center
      px-5
      pt-24
      pb-20
      sm:px-8
    "
  >
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        w-full
        max-w-4xl
        text-center
      "
    >

      {/* JUDUL */}
<h1
 className="
  mx-auto
  text-4xl
  font-extrabold
  leading-[1.08]
  tracking-tight
  text-white
  drop-shadow-[0_4px_14px_rgba(0,0,0,0.55)]
  sm:whitespace-nowrap
  sm:text-5xl
  md:text-[50px]
  lg:text-[56px]
"
>
  Profil Yayasan Tampojung Al-Baroqah
</h1>
      {/* AKSEN GOLD */}
      <div className="mx-auto mt-6 h-[3px] w-20 rounded-full bg-[#D4AF37]" />

      {/* DESKRIPSI */}
      <p
        className="
  mx-auto
  mt-6
  max-w-2xl
  text-base
  font-medium
  leading-7
  text-white
  drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]
  sm:text-lg
  sm:leading-8
"
      >
        Membangun masyarakat yang beriman, berilmu, dan berakhlak mulia
        melalui pengembangan pendidikan, dakwah, serta pelayanan sosial.
      </p>
    </motion.div>
  </div>

</section>
{/* =====================================================
    SEJARAH
===================================================== */}
<section
  id="sejarah"
  className="bg-[#FBFBF8] px-6 py-20 sm:py-24 lg:py-28"
>
  <div className="mx-auto max-w-7xl">

    <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-20">

      {/* =========================
          KONTEN SEJARAH
      ========================= */}
      <motion.div {...fadeUp}>

        <p
          className="
            text-sm
            font-bold
            uppercase
            tracking-[0.16em]
            text-[#C9A227]
            sm:text-base
          "
        >
          Sejarah Yayasan
        </p>

        <h2
  className="
    mt-4
    max-w-3xl
    text-3xl
    font-extrabold
    leading-[1.1]
    tracking-tight
    text-green-900
    sm:text-4xl
    lg:text-[46px]
  "
>
  Sejarah Berdirinya
  <br className="hidden sm:block" />
  {" "}Yayasan Tampojung Al-Baroqah
</h2>

        <div className="mt-7 h-[3px] w-20 rounded-full bg-[#D4AF37]" />

        <div
  className="
    mt-8
    max-w-3xl
    space-y-6
    text-justify
    text-base
    leading-8
    text-[#243B53]
    sm:text-lg
  "
>
          <p>
            Yayasan Tampojung Al-Barokah didirikan atas inisiatif beberapa
            tokoh masyarakat dan pemuda di Desa Tampojung Pregi, Kecamatan
            Waru, Kabupaten Pamekasan, Madura, dengan tujuan mengembangkan
            kegiatan keagamaan, sosial, dan kemanusiaan di lingkungan
            masyarakat setempat.
          </p>

          <p>
            Pendirian yayasan secara resmi ditandai dengan pembuatan{" "}
            <strong className="font-semibold text-[#123D2A]">
              Akta Notaris Nomor 794
            </strong>
            , tanggal 26 Juli 2018, yang dibuat di hadapan Notaris Churiah
            Laylia, S.H., M.Kn. Pendirian yayasan kemudian disahkan oleh
            Menteri Hukum dan Hak Asasi Manusia Republik Indonesia melalui{" "}
            <strong className="font-semibold text-[#123D2A]">
              Surat Keputusan Nomor AHU-0009840.AH.01.04.Tahun 2018
            </strong>
            , tanggal 27 Juli 2018.
          </p>

          <p>
            Sejak berdirinya, yayasan terus berkembang dan mengelola
            beberapa lembaga pendidikan, yaitu KB Tunas Bangsa,
            RA Darul Mujtamak, MI Darul Ulum XVI, dan MDTA Darul Ulum XVI.
          </p>
        </div>

      </motion.div>


      {/* =========================
          LOGO + IDENTITAS
      ========================= */}
      <motion.div
        {...fadeUp}
        transition={{
          duration: 0.7,
          delay: 0.1,
        }}
        className="
          flex
          flex-col
          items-center
          justify-start
          pt-4
          lg:pt-16
        "
      >

        <div className="flex items-center justify-center">
          <Image
            src="/images/logo/logo-yayasan.png"
            alt="Logo Yayasan Tampojung Al-Baroqah"
            width={500}
            height={500}
            className="
              h-64
              w-64
              object-contain
              sm:h-72
              sm:w-72
              lg:h-80
              lg:w-80
            "
          />
        </div>

        <div className="mt-6 text-center">

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#C9A227]
            "
          >
            Berdiri sejak
          </p>

          <p className="mt-2 text-2xl font-extrabold text-green-900">
            26 Juli 2018
          </p>

          <div className="mx-auto mt-5 h-px w-16 bg-[#D4AF37]" />

          <p className="mt-5 max-w-xs text-sm leading-6 text-slate-500">
            Dusun Pregi, Desa Tampojung Pregi, Kecamatan Waru,
            Kabupaten Pamekasan, Jawa Timur
          </p>

        </div>

      </motion.div>

    </div>

  </div>
</section>
{/* =====================================================
    VISI & MISI
===================================================== */}
<section
  id="visi-misi"
  className="bg-[#F8FCFA] px-6 py-20 sm:py-24 lg:py-28"
>
  <div className="mx-auto max-w-6xl">

    {/* Heading */}
    <motion.div {...fadeUp}>
  <h2 className="
    text-3xl
    font-extrabold
    leading-tight
    tracking-tight
    text-green-900
    sm:text-4xl
    lg:text-[46px]
  ">
    Visi & Misi
  </h2>

  <div className="mt-5 h-[3px] w-20 rounded-full bg-[#D4AF37]" />
</motion.div>

    {/* =========================
        VISI
    ========================= */}
<motion.div
  {...fadeUp}
  className="mt-14 max-w-4xl"
>
  <h3 className="text-xl font-bold text-green-900 sm:text-2xl">
    Visi
  </h3>

  <div className="mt-3 h-[2px] w-10 rounded-full bg-[#D4AF37]" />

  <p className="
    mt-7
    text-justify
    text-lg
    leading-8
    text-[#243B53]
    sm:text-xl
    sm:leading-9
  ">
    Menjadi yayasan yang mandiri, terpercaya, dan bermanfaat
    dalam membangun masyarakat yang beriman, berilmu, dan
    berakhlak mulia melalui pengembangan pendidikan, dakwah,
    serta pelayanan sosial secara berkelanjutan.
  </p>
</motion.div>

{/* =========================
    MISI
========================= */}
<motion.div
  {...fadeUp}
  className="mt-16"
>
  <h3 className="text-xl font-bold text-green-900 sm:text-2xl">
    Misi
  </h3>

  <div className="mt-3 h-[2px] w-10 rounded-full bg-[#D4AF37]" />

  <div
    className="
      mt-8
      max-w-5xl
      rounded-2xl
      bg-white
      p-7
      ring-1
      ring-[#E5EEE9]
      sm:p-9
    "
  >
    {/* Bidang Keagamaan */}
    <div>
      <h4 className="text-lg font-bold text-green-900 sm:text-xl">
        Bidang Keagamaan
      </h4>

      <ul className="
        mt-4
        space-y-3
        pl-5
        text-base
        leading-7
        text-[#243B53]
        marker:text-[#D4AF37]
      ">
        <li>
          Mendirikan dan mengelola sarana ibadah serta lembaga
          pendidikan keagamaan seperti Pondok Pesantren dan Madrasah.
        </li>

        <li>
          Menyalurkan amal, zakat, infak, dan sedekah kepada yang berhak.
        </li>

        <li>
          Meningkatkan pemahaman dan pengamalan ajaran agama Islam
          serta melaksanakan syiar Islam di tengah masyarakat.
        </li>
      </ul>
    </div>

    <div className="my-8 h-px bg-slate-200" />

    {/* Bidang Sosial */}
    <div>
      <h4 className="text-lg font-bold text-green-900 sm:text-xl">
        Bidang Sosial
      </h4>

      <ul className="
        mt-4
        space-y-3
        pl-5
        text-base
        leading-7
        text-[#243B53]
        marker:text-[#D4AF37]
      ">
        <li>
          Menyelenggarakan pendidikan jalur formal maupun nonformal.
        </li>

        <li>
          Membina kegiatan olahraga dan peningkatan kualitas sumber
          daya manusia.
        </li>
      </ul>
    </div>

    <div className="my-8 h-px bg-slate-200" />

    {/* Bidang Kemanusiaan */}
    <div>
      <h4 className="text-lg font-bold text-green-900 sm:text-xl">
        Bidang Kemanusiaan
      </h4>

      <ul className="
        mt-4
        space-y-3
        pl-5
        text-base
        leading-7
        text-[#243B53]
        marker:text-[#D4AF37]
      ">
        <li>
          Memberikan bantuan kepada korban bencana alam dan masyarakat
          yang membutuhkan.
        </li>

        <li>
          Memberikan perlindungan sosial dan melestarikan lingkungan
          hidup.
        </li>
      </ul>
    </div>
  </div>
</motion.div>

  </div>
</section>

 {/* =====================================================
    SAMBUTAN KETUA YAYASAN
===================================================== */}
<section
  id="sambutan"
  className="bg-[#FBFBF8] px-6 py-20 sm:py-24 lg:py-28"
>
  <div className="mx-auto max-w-7xl">

    {/* Heading */}
    <motion.div {...fadeUp}>
      <h2
        className="
          text-3xl
          font-extrabold
          leading-tight
          tracking-tight
          text-green-900
          sm:text-4xl
          lg:text-[46px]
        "
      >
        Sambutan Ketua Yayasan
      </h2>

      <div className="mt-5 h-[3px] w-20 rounded-full bg-[#D4AF37]" />
    </motion.div>


    {/* Content */}
    <div
      className="
        mt-12
        grid
        items-center
        gap-12
        lg:grid-cols-[minmax(0,1fr)_320px]
        lg:gap-20
      "
    >

      {/* =========================
          TEKS SAMBUTAN
      ========================= */}
      <motion.div
        {...fadeUp}
        className="
          max-w-3xl
          text-base
          leading-8
          text-[#243B53]
          sm:text-lg
        "
      >

        <p className="font-semibold text-[#123D2A]">
          Assalamu'alaikum Warahmatullahi Wabarakatuh.
        </p>

        <p className="mt-6 text-justify">
          Puji syukur ke hadirat Allah SWT atas segala limpahan rahmat,
          taufik, dan hidayah-Nya sehingga Yayasan Tampojung Al-Barokah
          dapat terus berkhidmat dalam bidang pendidikan, keagamaan,
          sosial, dan kemanusiaan sebagai bentuk pengabdian kepada
          masyarakat.
        </p>

        <p className="mt-6 text-justify">
          Sejak resmi berdiri pada tahun 2018, Yayasan Tampojung
          Al-Barokah berkomitmen untuk menghadirkan pendidikan yang
          tidak hanya berorientasi pada pencapaian akademik, tetapi juga
          membentuk generasi yang beriman, berilmu, berakhlakul karimah,
          serta memiliki kepedulian terhadap sesama.
        </p>

        <p className="mt-6 text-justify">
          Kami meyakini bahwa keberhasilan pendidikan merupakan hasil
          dari sinergi antara yayasan, tenaga pendidik, orang tua,
          serta seluruh elemen masyarakat. Oleh karena itu, kami
          senantiasa berupaya meningkatkan kualitas layanan pendidikan
          dan membangun lingkungan belajar yang baik bagi peserta didik.
        </p>

        <p className="mt-6 text-justify">
          Melalui website ini, kami berharap masyarakat dapat mengenal
          lebih dekat Yayasan Tampojung Al-Barokah beserta seluruh
          lembaga pendidikan yang kami kelola. Semoga website ini
          menjadi sarana informasi, komunikasi, dan silaturahmi yang
          bermanfaat bagi seluruh masyarakat.
        </p>

        <p className="mt-6 font-semibold text-[#123D2A]">
          Wassalamu'alaikum Warahmatullahi Wabarakatuh.
        </p>

      </motion.div>


      {/* =========================
          FOTO KETUA
      ========================= */}
      <motion.div
        {...fadeUp}
        transition={{
          duration: 0.7,
          delay: 0.1,
        }}
        className="text-center"
      >

        <div className="mx-auto max-w-[300px]">
          <Image
            src="/images/profil/ketua-yayasan.png"
            alt="Ketua Yayasan Tampojung Al-Barokah"
            width={320}
            height={400}
            className="
              h-auto
              w-full
              rounded-3xl
              object-cover
            "
          />
        </div>

        <div className="mt-5">
          <p className="text-lg font-bold text-green-900">
            Jamaluddin, S.H., M.H.
          </p>

          <p className="mt-1 text-sm text-[#243B53]">
            Ketua Yayasan
          </p>
        </div>

      </motion.div>

    </div>

  </div>
</section>
{/* =====================================================
    STRUKTUR ORGANISASI
===================================================== */}
<section
  id="struktur"
  className="bg-[#FBFBF8] px-6 py-20 sm:py-24 lg:py-28"
>
  <div className="mx-auto max-w-7xl">

    <motion.div {...fadeUp}>
      <h2
        className="
          text-3xl
          font-extrabold
          leading-tight
          tracking-tight
          text-green-900
          sm:text-4xl
          lg:text-[46px]
        "
      >
        Struktur Organisasi
      </h2>

      <div className="mt-5 h-[3px] w-20 rounded-full bg-[#D4AF37]" />

      <p
        className="
          mt-5
          max-w-xl
          text-base
          leading-7
          text-[#243B53]
          sm:text-lg
        "
      >
        Susunan organisasi Yayasan Tampojung Al-Baroqah.
      </p>
    </motion.div>


 <motion.div
  {...fadeUp}
  className="
    mt-10
    -mx-4
    flex
    justify-center
    overflow-hidden
    sm:-mx-2
    lg:mx-0
  "
>
  <Image
    src="/images/profil/struktur-yayasan.png"
    alt="Struktur Organisasi Yayasan Tampojung Al-Baroqah"
    width={1600}
    height={1000}
    className="
      h-auto
      w-[calc(100%+2rem)]
      max-w-5xl
      object-contain
      sm:w-full
    "
  />
</motion.div>
  </div>
</section>
         </main>

      <Footer />
    </>
  );
}