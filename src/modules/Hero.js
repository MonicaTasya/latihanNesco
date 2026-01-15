import DefaultLayout from "../components/Layout/DefaultLayout";
import { Button } from "../components/Layout/Button";
import Image from "next/image";
import { B1G,B2G,B3G,B4G,B5G,H5K,H7K } from "../components/Element/Typography";
import { Bell, MoveUpRight } from 'lucide-react';

const Hero = () => {
  const klasemenData = [
    { rank: 1, name: "F.AYASHA", c1: 10, c2: 10, c3: 10, bg: "bg-yellow-100" },
    { rank: 2, name: "F.MELINDA", c1: 10, c2: 10, c3: 10, bg: "bg-white" },
    { rank: 3, name: "F.TASYA", c1: 10, c2: 10, c3: 10, bg: "bg-yellow-100" },
    { rank: 4, name: "PASCASARJANA", c1: 10, c2: 10, c3: 10, bg: "bg-white" },
    { rank: 5, name: "FKKMK", c1: 10, c2: 10, c3: 10, bg: "bg-yellow-100" },
  ];

  const jadwalData = [
    {
      waktu: "09:13",
      tanggal: "26 Aug 2025",
      cabang: "Basket Putra",
      info: "Farmasi vs Pascasarjana",
      bg: "bg-yellow-100",
      lokasi: "Lapangan Pancasila",
    },
    {
      waktu: "09:13",
      tanggal: "26 Aug 2025",
      cabang: "Basket Putra",
      info: "Semua Babak",
      bg: "bg-white",
      lokasi: "Wisdom Park",
    },
    {
      waktu: "09:13",
      tanggal: "26 Aug 2025",
      cabang: "Basket Putra",
      info: "Farmasi vs Pascasarjana",
      bg: "bg-yellow-100",
      lokasi: "Lapangan Pancasila",
    },
    {
      waktu: "09:13",
      tanggal: "26 Aug 2025",
      cabang: "Dayung Sprint Putri",
      info: "Semua Babak",
      bg: "bg-white",
      lokasi: "Wisdom Park",
    },
    {
      waktu: "09:13",
      tanggal: "26 Aug 2025",
      cabang: "Basket Putra",
      info: "Farmasi vs Pascasarjana",
      bg: "bg-yellow-100",
      lokasi: "Lapangan Pancasila",
    },
  ];
  return (
    <DefaultLayout className="bg-white overflow-hidden"
      decoration={
        <>
          <Image
            src="/images/jenitsu.webp"
            width={500}
            height={500}
            alt="decoration hero"
            className="absolute top-0 left-0 w-[200px] h-auto"
          />
          <Image
            src="/images/circleYellow.webp"
            width={500}
            height={500}
            alt="decoration hero"
            className="absolute top-0 lg:-right-20 -right-30 w-[250px] h-auto"
          />
          
          <Image
          src="/images/fance.webp"
          width={500}
          height={500}
          alt="tangga"
          className="absolute lg:w-full lg:pt-100 z-10 bottom-0"/>

          <Image
          src="/images/makhlukNgeband.webp"
          width={100}
          height={100}
          alt="band"
          className="absolute lg:w-[200px] bottom-0"/>

          <Image
          src="/images/makhlukNyinden.webp"
          width={40}
          height={40}
          alt="nyanyi"
          className="absolute z-5 lg:w-[100px] left-[8%] rotate-6 bottom-3"/>

          <Image
          src="/images/makhlukKarate.webp"
          width={70}
          height={70}
          alt="karate"
          className="absolute lg:w-[150px] left-[80%] z-5 bottom-3"/>

          <Image
          src="/images/redboom.webp"
          width={70}
          height={70}
          alt="boom"
          className="absolute hidden md:block w-[180px] left-[90%] top-120"/>

          <Image
          src="/images/bola.webp"
          width={70}
          height={70}
          alt="bola"
          className="absolute hidden md:block w-[60px] left-[95%] top-130"/>
        </>
      }
    >


      {/* container 1+2 */}
      <div>
        {/* container 1 */}
        <div className="flex flex-col w-full lg:flex-row-reverse gap-8 justify-center items-stretch pt-20 px-0 lg:px-10">
          {/* Meriahkan Gadjah Mada */}
          <div className="relative flex flex-row shadow-offset-purple basis-full lg:basis-3/4 border-2 border-[#41257d] bg-white rounded-sm overflow-visible p-3">
            <div className="basis-1/2 z-10">
            <H5K className="text-black pb-4">
            Bersiaplah untuk Meriahkan Gadjah Mada
            </H5K>
            <B2G className="text-black">
            Dapatkan informasi terbaru dan ikuti keseruan Porsenigama 2025.
            </B2G>
            <Button className="mt-6 bg-purple-700 flex items-center justify-center gap-2">
            Aktifkan Notifikasi <Bell/>
            </Button>
            </div>

          
          {/* makhlukNgebasket */}
          <div className="absolute lg:w-[350px] w-[300px] left-[50%] lg:left-[60%] lg:top-[1%] -top-[10%] pointer-events-none">
          <Image
          src="/images/jordan.webp" 
          width={500}
          height={500}
          alt="basket"
          className="relative z-10 w-full h-auto"
          />
          </div>
        </div>

          {/* Klasemen */}
          <div className="flex flex-col shadow-offset-purple basis-full lg:basis-1/2 p-5 border-2 border-[#41257d] bg-white rounded-sm">
            <div className="flex justify-between items-center mb-6">
              <H7K className="text-black">
              Klasemen teratas
              </H7K>
              <Button className="flex items-center gap-2 px-4 h-[35px] text-[12px] bg-[#4b308e] text-white rounded-lg uppercase font-bold">
              Lihat Semuanya <MoveUpRight/>
              </Button>
            </div>

            <div className="flex flex-col">
              {/* Header Tabel */}
              <div className="grid grid-cols-[1fr_2.3fr_1fr_1fr_1fr_0.5fr] items-center px-3 py-2 text-[#41257d] font-bold text-xs uppercase">
                <span>Rank</span>
                <span>Kontingen</span>
                <span className="text-center">1st</span>
                <span className="text-center">2nd</span>
                <span className="text-center">3rd</span>
                <span></span>
              </div>

              {/* Body Tabel */}
              <div className="flex flex-col gap-1">
                {klasemenData.map((item, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-[0.7fr_2.5fr_1fr_1fr_1fr_0.5fr] items-center px-3 h-[48px] ${
                      i % 2 === 0 ? "bg-[#fffce4]" : "bg-white"
                    } text-sm font-geologica text-black rounded-sm`}
                  >
                    <span className="font-bold">{item.rank}</span>
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-center">{item.c1}</span>
                    <span className="text-center">{item.c2}</span>
                    <span className="text-center">{item.c3}</span>
                    <span className="text-right text-black font-bold text-lg">›</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      {/* container 2 */}
      <div className="flex flex-col w-full lg:flex-row justify-center items-stretch lg:px-5 py-10 lg:pb-30">
        <div className="relative flex flex-col shadow-offset-purple basis-full lg:basis-3/4 border-2 border-[#41257d] bg-white rounded-sm overflow-visible lg:mx-5 p-3">
          <div className="flex flex-row justify-between items-center">
          <H7K className="text-black">
            Jadwal Terdekat
          </H7K>
          <Button className="flex items-center gap-2 px-4 h-[35px] text-[12px] bg-[#4b308e] text-white rounded-lg uppercase font-bold">
              Lihat Semua Jadwal <MoveUpRight/>
          </Button>
          </div>
            {/* Header */}
            <div className="grid grid-cols-[1.2fr_2.3fr_1.7fr_0.1fr] lg:grid-cols-[1fr_0.8fr_2fr_2fr_1.5fr] items-center px-3 pb-2 pt-5 text-[#41257d] font-bold text-xs uppercase">
              <span className="hidden lg:block text-left">Tanggal</span>
              <span className="text-left">Waktu</span>
              <span className="text-left">Cabang Lomba</span>
              <span className="text-left">Pertandingan</span>
              <span className="hidden lg:block text-left">Lokasi</span>
            </div>

            <div className="flex flex-col gap-1">
              {jadwalData.map((item, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-[1.2fr_2.3fr_1.7fr_0.1fr] lg:grid-cols-[1fr_0.8fr_2fr_2fr_1.5fr] items-center px-3 h-[48px] ${
                    i % 2 === 0 ? "bg-[#fffce4]" : "bg-white"
                  } text-[12px] lg:text-sm font-geologica text-black rounded-sm`}
                >
                  <span className="hidden lg:block text-left">{item.tanggal}</span>
                  <span className="text-left">{item.waktu}</span>
                  <span className="text-left font-semibold">{item.cabang}</span>
                  <span className="text-left">{item.info}</span>
                  <span className="hidden lg:block text-left truncate" title={item.lokasi}>{item.lokasi}</span>
                </div>
              ))}
            </div>
        </div>

        <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-5 pt-5 pb-3">
          <div className="relative flex flex-col shadow-offset-purple basis-full lg:basis-1/4 border-2 border-[#41257d] bg-purple-900 rounded-sm p-3">
            <div className="flex flex-row justify-between items-center w-[350px] h-auto pb-2 border-b-2 border-white">
            <B3G>Dayung Slalom</B3G>
            <B3G>26 Aug, 09:30</B3G>
            </div>
            <div className="flex flex-row justify-between items-center py-3">
              <div className="flex flex-col">
              <B5G>Juara 1</B5G>
              <B1G>PASCASARJANA</B1G>
              </div>
              <div className="flex flex-col">
              <B4G>Juara 2 FKKMK</B4G>
              <B4G>Juara 3 Vokasi</B4G>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col shadow-offset-purple basis-full lg:basis-1/4 border-2 border-[#41257d] bg-purple-900 rounded-sm overflow-visible p-3">
            <div className="flex flex-row justify-between items-center w-[350px] h-auto pb-2 border-b-2 border-white">
            <B3G>Dayung Slalom</B3G>
            <B3G>26 Aug, 09:30</B3G>
            </div>
            <div className="flex flex-row justify-between items-center py-3">
              <div className="flex flex-col">
              <B5G>Juara 1</B5G>
              <B1G>PASCASARJANA</B1G>
              </div>
              <div className="flex flex-col">
              <B4G>Juara 2 FKKMK</B4G>
              <B4G>Juara 3 Vokasi</B4G>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </DefaultLayout>
  );
};

export default Hero;
