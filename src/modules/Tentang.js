import DefaultLayout from "../components/Layout/DefaultLayout";
import Image from "next/image";
import InfoCard from "../components/Infocard";

const Tentang = () => {
  return (
    <DefaultLayout className="bg-light-blue-900">
      <div className="flex flex-col md:flex-row items-center w-full gap-8">
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <div className="relative w-full max-w-[500px] inline-block ">
            <Image src="/images/FrameTentang.png" alt="Frame Tentang" width={500} height={300} className="relative z-20 max-w-full h-auto rounded" />
            <Image
              src="/images/Thanos.png"
              alt="Floating Image"
              width={120}
              height={149}
              className="absolute right-full top-[60px] -translate-y-1/2 -translate-x-[-45px] object-contain z-10 hidden sm:block"
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 text-white space-y-4 relative">
          <div className="absolute left-50 -bottom-20 md:-right-10 md:top-1/2 md:-translate-y-1/2 md:left-auto md:bottom-auto z-30">
              <div className="w-[180px] sm:w-[120px] md:w-[361px]">
              <Image
                src="/images/Porsenigama.png"
                alt="Porsenigama Logo"
                width={361}
                height={375}
                sizes="(max-width: 640px) 64px, (max-width: 1024px) 160px, 361px"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 font-komikazoom-regular">
            Tentang Porsenigama 2025
          </h2>

          <div className="text-left text-sm md:text-base leading-relaxed text-gray-100 font-geologica-regular">
            Pekan Olahraga dan Seni Universitas Gadjah Mada mempertemukan mahasiswa dari 
            berbagai Fakultas dan Sekolah untuk menyalurkan bakat di bidang olahraga dan seni. 
            Melalui tema XXX Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat.
          </div>

        </div> 
      </div>
      <MoreSection />
    </DefaultLayout>
  );
};

{/*Kontigen dll*/}
const MoreSection = () => {
  return (
<section className="max-w-6xl mx-auto px-4 py-12 relative overflow-visible">
  <div className="absolute top-10 -left-16 md:-left-20 z-0 pointer-events-none">
        <Image 
          src="/images/judi.svg" 
          alt="Dekorasi Kartu" 
          width={100} 
          height={364} 
          className="w-32 md:w-40 h-auto object-contain" 
        />
      </div>
  <div className="md:flex md:items-start gap-6">
    <div className="flex-1 grid gap-6">
      <InfoCard
        title="Kontingen"
        description="Dapatkan semua informasi seputar fakultas atau 
        sekolahmu selama Porsenigama 2025!"
        tags={['Jadwal','Medali','Klasmen']}
        ctaText="Cari Kontingenmu   →"
        ctaHref="/kontingen"
      />
      <InfoCard
        title="Cabang Lomba"
        description="Ketahui segala hal seputar cabang-cabang lomba Porsenigama 2025."
        tags={['Seni','Olahraga']}
        ctaText="Lihat Cabang Lomba   →"
      />
      <InfoCard
        title="Permainan"
        description="Mainkan game lari tanpa akhir dan raih skor tertinggi untuk memenangkan hadiah!"
        tags={['Papan Peringkat','Hadiah']}
        ctaText="Mainkan   ↗"
      />
       
    </div>

<div className="w-90 flex-shrink-0 py-2">
  <div className="sticky top-24 overflow-visible relative min-h-[450px]">
    
    <div className="
      absolute -bottom-20 left-1/2 -translate-x-0
      md:top-1/2 md:-translate-y-1/2 md:left- md:right-[-250px] md:bottom-auto
      z-10
    ">
      <div className="w-[180px] sm:w-[120px] md:w-[308px]">
        <Image
          src="/images/spiderverse.svg"
          alt="Dekorasi"
          width={361}
          height={375}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>

    <div 
      className="absolute inset-0 z-20 rounded-lg"
      style={{
        backgroundImage: "url('/images/BackgroundKotak2.png'), url('/images/BackgroundKotak1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />

    <div className="relative flex items-center justify-center p-4 z-30">
      <Image
        src="/images/Galeri.png"
        alt="Galeri Porsenigama"
        width={300}
        height={400}
        className="object-contain w-full h-auto"
      />
    </div>

  </div>
</div>
  </div>
</section>

  );
};

export default Tentang;