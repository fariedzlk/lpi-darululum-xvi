import Image from "next/image";

export default function SPMBPage() {
  return (
    <main className="min-h-screen bg-[#F7FAF8] px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
          SPMB
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#044A37] sm:text-5xl">
          Seleksi Penerimaan Murid Baru
        </h1>

        <div className="mx-auto mt-5 h-[2px] w-14 rounded-full bg-[#D4AF37]" />

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600">
          Informasi dan pendaftaran murid baru akan segera tersedia.
        </p>

        <div className="mt-8 flex justify-center">
          <Image
            src="/images/spmb/spmb-2026.png"
            alt="Informasi SPMB 2026"
            width={1080}
            height={1350}
            className="h-auto w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>

        <div className="mt-8 inline-flex rounded-full border border-[#044A37]/10 bg-[#044A37]/5 px-5 py-2.5 text-sm font-medium text-[#044A37]">
          Coming Soon
        </div>

        <div className="mt-8">
          <a
            href="/"
            className="text-sm font-medium text-[#044A37] transition-colors hover:text-[#D4AF37]"
          >
            ← Kembali ke Beranda
          </a>
        </div>
      </div>
    </main>
  );
}