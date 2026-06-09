import Image from "next/image";
export default function Home() {
  return (
   <main className="min-h-screen bg-white">
<nav className="bg-white shadow-lg sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
  <a href="#beranda" className="flex items-center gap-3">
  <Image
    src="/images/logo/logo-lpi.png"
    alt="Logo"
    width={45}
    height={45}
  />

  <h1 className="font-bold text-green-700">
    LPI Darul Ulum XVI
  </h1>
</a>
    <div className="hidden md:flex gap-6">
  <a href="#beranda" className="text-gray-700 hover:text-green-700 font-medium">
    Beranda
  </a>

  <a href="#profil" className="text-gray-700 hover:text-green-700 font-medium">
    Profil
  </a>

  <a href="#pendidikan" className="text-gray-700 hover:text-green-700 font-medium">
    Unit Pendidikan
  </a>

  <a href="#galeri" className="text-gray-700 hover:text-green-700 font-medium">
    Galeri
  </a>

  <a href="#kontak" className="text-gray-700 hover:text-green-700 font-medium">
    Kontak
  </a>
</div>
  </div>
</nav>
<nav className="bg-white shadow-md sticky top-0 z-50"></nav>
     <section id="beranda" className="relative h-[600px]">

  <Image
    src="/images/galeri/gedung-yayasan.jpg"
    alt="Gedung Yayasan"
    fill
    className="object-cover"
    priority
  />

  <div className="absolute inset-0 bg-black/50"></div>

  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">

    <h1 className="text-3xl md:text-6xl font-bold mb-4">
      LPI Darul Ulum XVI
    </h1>

    <p className="text-lg md:text-2xl">
      Di Bawah Naungan Yayasan Tampojung Al-Baroqah
    </p>

    <p className="mt-3 text-lg">
      Tampojung Pregi, Waru, Pamekasan
    </p>

    <div className="mt-8 flex flex-col sm:flex-row gap-4">
      <a
  href="https://wa.me/6282337628609"
  target="_blank"
  className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold"
>
  Hubungi Kami
</a>
      <a
  href="#galeri"
  className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold"
>
  Lihat Galeri
</a>
    </div>

  </div>

</section>

      <section id="pendidikan" className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">         Unit Pendidikan
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border rounded-xl p-8 shadow text-center hover:shadow-xl hover:-translate-y-1 transition">
            <Image
  src="/images/logo/logo-kb.png"
  alt="Logo KB"
  width={100}
  height={100}
  className="mx-auto mb-4"
/>

<h3 className="font-bold text-xl mb-2 text-gray-800 text-center">
  KB Tunas Bangsa
</h3>

<p className="text-gray-600 text-center">
  Pendidikan Anak Usia Dini
</p>
</div>
         <div className="border rounded-xl p-8 shadow text-center hover:shadow-xl hover:-translate-y-1 transition">
         <Image
  src="/images/logo/logo-ra.png"
  alt="Logo KB"
  width={100}
  height={100}
  className="mx-auto mb-4"
/>
  <h3 className="font-bold text-xl mb-2 text-gray-800 text-center">
    RA Darul Mujtamak
  </h3>

  <p className="text-gray-600 text-center">
    Raudhatul Athfal
  </p>
</div>
         <div className="border rounded-xl p-8 shadow text-center hover:shadow-xl hover:-translate-y-1 transition">
          <Image
  src="/images/logo/logo-ra.png"
  alt="Logo KB"
  width={100}
  height={100}
  className="mx-auto mb-4"
/>
  <h3 className="font-bold text-xl mb-2 text-gray-800 text-center">
    MI Darul Ulum XVI
  </h3>

  <p className="text-gray-600 text-center">
    Madrasah Ibtidaiyah
  </p>
</div>
          <div className="border rounded-xl p-8 shadow text-center hover:shadow-xl hover:-translate-y-1 transition">
            <Image
  src="/images/logo/logo-mdta.png"
  alt="Logo KB"
  width={106}
  height={106}
  className="mx-auto mb-4"
/>
  <h3 className="font-bold text-xl mb-2 text-gray-800 text-center">
    MDTA Darul Ulum XVI
  </h3>

  <p className="text-gray-600 text-center">
    Madrasah Diniyah Takmiliyah Awaliyah
  </p>
</div>
        </div>
     </section>

<section className="bg-gray-100 py-16 px-6">
  <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
  Program Unggulan
</h2>
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
    <div className="hover:shadow-xl hover:-translate-y-1 transition">
  <h3 className="text-xl font-bold text-green-700 mb-2">
    Mutiara Hikmah
  </h3>

  <p className="text-gray-600">
    Pembiasaan hafalan doa-doa harian, surah pendek, dan nilai-nilai akhlakul karimah sejak usia dini.
  </p>
</div>

    <div className="hover:shadow-xl hover:-translate-y-1 transition">
      <h3 className="text-xl font-bold text-green-700 mb-2">
        Tahfidz Al-Qur'an
      </h3>
      <p className="text-gray-600">
  Program unggulan untuk membentuk generasi Qur'ani melalui hafalan dan pembiasaan membaca Al-Qur'an.
</p>
    </div>

    <div className="hover:shadow-xl hover:-translate-y-1 transition">
      <h3 className="text-xl font-bold text-green-700 mb-2">
        Qobasun 
      </h3>
       <p className="text-gray-600">
        Program pembelajaran kitab kuning dasar untuk membiasakan santri memahami literatur Islam klasik.
      </p>
    </div>

  </div>
</section>

<section id="profil" className="py-24 px-6 bg-white">
  <div className="max-w-4xl mx-auto text-center">
<Image
  src="/images/logo/logo-yayasan.png"
  alt="Logo Yayasan Tampojung Al-Baroqah"
  width={300}
  height={300}
  className="mx-auto mb-6"
/>
   <h2 className="text-3xl font-bold mb-6 text-gray-800">
  Tentang Yayasan Tampojung Al-Baroqah
</h2>

    <p className="max-w-3xl mx-auto text-center text-gray-700 leading-9 text-lg">
     Yayasan Tampojung Al-Baroqah merupakan lembaga pendidikan dan
      keagamaan yang berkomitmen membentuk generasi yang berilmu,
      berakhlak mulia, serta berlandaskan nilai-nilai Islam.
    </p>
<p className="max-w-3xl mx-auto text-center text-gray-700 leading-9 text-lg mt-4">
      Melalui unit pendidikan KB, RA, MI, dan MDTA Darul Ulum XVI,
      yayasan berupaya memberikan layanan pendidikan yang berkualitas
      bagi masyarakat serta mencetak generasi yang unggul dalam ilmu
      dan akhlak.
    </p>
  </div>
</section>
<section id="galeri" className="py-20 px-6 bg-gray-100">
 <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
  GALERI KEGIATAN
</h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    <div className="bg-white rounded-xl shadow overflow-hidden">
  <Image
    src="/images/galeri/gedung-yayasan.jpg"
    alt="Kegiatan KB"
    width={1920}
    height={1080}
    className="w-full h-52 object-cover transition duration-300 hover:scale-105"
  />
      <p className="p-4 text-center font-semibold text-gray-900">
  Gedung Yayasan
</p>
    </div>

   <div className="bg-white rounded-xl shadow overflow-hidden">
  <Image
    src="/images/galeri/kegiatan-kb.jpg"
    alt="Kegiatan KB"
    width={1920}
    height={1080}
    className="w-full h-52 object-cover transition duration-300 hover:scale-105"
  />
      <p className="p-4 text-center font-semibold text-gray-900">
  Kegiatan KB Tunas Bangsa
</p>
    </div>

    <div className="bg-white rounded-xl shadow overflow-hidden">
  <Image
    src="/images/galeri/kegiatan-ra.jpg"
    alt="Kegiatan KB"
    width={1920}
    height={1080}
    className="w-full h-52 object-cover transition duration-300 hover:scale-105"
  />
      <p className="p-4 text-center font-semibold text-gray-900">
  Kegiatan RA Darul Mujtamak
</p>
    </div>

   <div className="bg-white rounded-xl shadow overflow-hidden">
  <Image
    src="/images/galeri/kegiatan-mi.jpg"
    alt="Kegiatan KB"
    width={1920}
    height={1080}
    className="w-full h-52 object-cover transition duration-300 hover:scale-105"
  />
      <p className="p-4 text-center font-semibold text-gray-900">
  Kegiatan MI Darul Ulum XVI
</p>
    </div>

    <div className="bg-white rounded-xl shadow overflow-hidden">
  <Image
    src="/images/galeri/kegiatan-mdta.jpg"
    alt="Kegiatan KB"
    width={1920}
    height={1080}
    className="w-full h-52 object-cover transition duration-300 hover:scale-105"
  />
      <p className="p-4 text-center font-semibold text-gray-900">
  Kegiatan MDTA Darul Ulum XVI
</p>
    </div>

   <div className="bg-white rounded-xl shadow overflow-hidden">
  <Image
    src="/images/galeri/ilan-quran-mi.jpg"
    alt="Kegiatan KB"
    width={1920}
    height={1080}
    className="w-full h-52 object-cover transition duration-300 hover:scale-105"
  />
      <p className="p-4 text-center font-semibold text-gray-900">
  Program I'lan Al-Quran (MI)
</p>
    </div>

   <div className="bg-white rounded-xl shadow overflow-hidden">
  <Image
    src="/images/galeri/mutiara-hikmah-ra.jpg"
    alt="Kegiatan KB"
    width={1920}
    height={1080}
    className="w-full h-52 object-cover transition duration-300 hover:scale-105"
  />
      <p className="p-4 text-center font-semibold text-gray-900">
  Program Mutiara Hikmah (RA)
</p>
    </div>

    <div className="bg-white rounded-xl shadow overflow-hidden">
  <Image
    src="/images/galeri/qobasun-mdta.jpg"
    alt="Kegiatan KB"
    width={1920}
    height={1080}
    className="w-full h-52 object-cover transition duration-300 hover:scale-105"
  />
      <p className="p-4 text-center font-semibold text-gray-900">
  Program Qobasun (MDTA)
</p>
    </div>

  </div>
</section>
<section id="kontak" className="py-20 px-6 bg-white">
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-3xl font-bold text-gray-800 mb-10">
      Kontak Kami
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <a
  href="https://maps.app.goo.gl/2QyT7JxRnDG7Vw5e7"
  target="_blank"
  rel="noopener noreferrer"
  className="block bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
>
  <h3 className="font-bold text-green-700 mb-2">
    Alamat
  </h3>

  <p className="text-gray-600">
    Tampojung Pregi, Waru, Pamekasan
  </p>
</a>
    <a
  href="https://wa.me/6282337628609"
  target="_blank"
  rel="noopener noreferrer"
  className="block bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
>
  <h3 className="font-bold text-green-700 mb-2">
    WhatsApp
  </h3>

  <p className="text-green-700 font-medium">
    082337628609
  </p>
</a>

      <a
  href="mailto:darululumxviofficial@gmail.com"
  className="block bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
>
  <h3 className="font-bold text-green-700 mb-2">
    Email
  </h3>

  <p className="text-green-700 font-medium break-all">
    darululumxviofficial@gmail.com
  </p>
</a>
    </div>

  </div>
</section>
<footer className="bg-green-800 text-white py-10 px-6">
  <div className="max-w-6xl mx-auto text-center">

    <h3 className="text-2xl font-bold mb-3">
      LPI Darul Ulum XVI
    </h3>

    <p className="text-green-100">
      Di bawah naungan Yayasan Tampojung Al-Baroqah
    </p>

    <p className="mt-2 text-green-100">
      Tampojung Pregi, Waru, Pamekasan
    </p>

    <p className="mt-6 text-sm text-green-200">
      © 2026 LPI Darul Ulum XVI. All Rights Reserved.
    </p>

  </div>
</footer>
</main>
  );
}