import DefaultLayout from "../components/Layout/DefaultLayout";
import { Button } from "../components/Layout/Button";

const Hero = () => {
  const klasemenData = [
    { rank: 1, name: "F.AYASHA", c1: 10, c2: 10, c3: 10, bg: "bg-yellow-100" },
    { rank: 2, name: "F.MELINDA", c1: 10, c2: 10, c3: 10, bg: "bg-white" },
    { rank: 3, name: "F.TASYA", c1: 10, c2: 10, c3: 10, bg: "bg-yellow-100" },
    { rank: 4, name: "Pascasarjana", c1: 10, c2: 10, c3: 10, bg: "bg-white" },
    { rank: 5, name: "FKKMK", c1: 10, c2: 10, c3: 10, bg: "bg-yellow-100" },
  ];

  const jadwalData = [
    { waktu: "09:13", tanggal: "26 Aug 2025", cabang: "Basket Putra", info: "Farmasi vs Pascasarjana", bg: "bg-yellow-100", lokasi: "Lapangan Pancasila" },
    { waktu: "09:13", tanggal: "26 Aug 2025", cabang: "Basket Putra", info: "Semua Babak", bg: "bg-white", lokasi: "Wisdom Park" },
    { waktu: "09:13", tanggal: "26 Aug 2025", cabang: "Basket Putra", info: "Farmasi vs Pascasarjana", bg: "bg-yellow-100", lokasi: "Lapangan Pancasila" },
    { waktu: "09:13", tanggal: "26 Aug 2025", cabang: "Dayung Sprint Putri", info: "Semua Babak", bg: "bg-white", lokasi: "Wisdom Park" },
    { waktu: "09:13", tanggal: "26 Aug 2025", cabang: "Basket Putra", info: "Farmasi vs Pascasarjana", bg: "bg-yellow-100", lokasi: "Lapangan Pancasila" },
  ];

  return (
    <DefaultLayout className="relative w-full h-[1310px] lg:h-[1080px] bg-white overflow-hidden p-0 border-none">
      
      {/* petir + hipnotis */}
      <img className="absolute top-[3px] left-0 lg:left-[-30px] w-[130px] lg:w-[270px] h-auto z-0" src="/images/jenitsu.webp" alt="Petir biru" />
      <img className="absolute top-[3px] right-0 lg:right-[-60px] w-[150px] lg:w-[380px] h-auto z-0" src="/images/circleYellow.webp" alt="Lingkaran kuning" />

      {/* section 1+2 wrap buat desktop */}
      <div className="relative w-full lg:mx-auto lg:max-w-[1200px] z-10">
        
        {/* klasemen */}
        <div className="absolute top-[280px] lg:top-[120px] left-[17px] right-[17px] lg:left-0 lg:w-[450px] h-[362px] bg-white border-2 border-gray-200 z-20 lg:shadow-[8px_8px_0px_0px_#7147C4]">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <p className="text-black font-komikazoom-regular text-sm lg:text-lg uppercase">Klasemen teratas</p>
              <Button className="w-[120px] lg:w-[140px] h-[30px] text-[10px] bg-[#41257d] text-white">Lihat Semuanya ↗</Button>
            </div>
            
            <div className="grid grid-cols-[1fr_3.9fr_1fr_1fr_1fr_0.5fr] gap-1 text-[10px] text-black mb-2 px-2 uppercase font-geologica">
  <span>Rank</span>
  <span>Kontingen</span>
  
  {/* medal emas */}
  <span className="text-center">
    <span className="lg:hidden">1st</span> {/* Muncul di mobile, hilang di desktop */}
    <span className="hidden lg:inline-block">🥇</span> {/* Hilang di mobile, muncul di desktop */}
  </span>

  {/* perak */}
  <span className="text-center">
    <span className="lg:hidden">2nd</span>
    <span className="hidden lg:inline-block">🥈</span>
  </span>

  {/* perunggu */}
  <span className="text-center">
    <span className="lg:hidden">3rd</span>
    <span className="hidden lg:inline-block">🥉</span>
  </span>
  
  <span></span>
</div>

            <div className="flex flex-col gap-1">
              {klasemenData.map((item, i) => (
                <div key={i} className={`grid grid-cols-[1.5fr_3fr_1fr_1fr_1fr_0.5fr] items-center px-2 h-[42px] ${item.bg} text-[11px] font-geologica text-black border-b border-gray-100 last:border-0`}>
                  <span>{item.rank}</span>
                  <span className="truncate">{item.name}</span>
                  <span className="text-center">{item.c1}</span><span className="text-center">{item.c2}</span><span className="text-center">{item.c3}</span>
                  <span className="text-right text-gray-400">›</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* container meriahkan gajah madaaa yeayy */}
        <div className="absolute top-[65px] lg:top-[120px] left-[17px] right-[17px] lg:left-[480px] lg:right-0 h-[199px] lg:h-[362px] bg-white border-2 border-gray-200 z-10 lg:shadow-[8px_8px_0px_0px_#7147C4] overflow-visible">
          <div className="p-4 lg:p-10">
            <h1 className="w-[240px] lg:w-[346px] text-[20px] lg:text-[28px] font-komikazoom-regular leading-tight text-black uppercase">
              Bersiaplah untuk Meriahkan Gadjah Mada
            </h1>
            <p className="w-[220px] lg:w-[346px] text-[12px] lg:text-[16px] mt-2 lg:mt-3 text-black font-geologica">
              Dapatkan informasi terbaru dan ikuti keseruan Porsenigama 2025.
            </p>
            <Button className="mt-4 lg:mt-10 w-[180px] lg:w-[220px] h-[37px] lg:h-[45px] bg-[#41257d] text-white rounded-md">Aktifkan Notifikasi 🔔</Button>
          </div>
          <img className="absolute top-[-30px] lg:top-[-110px] right-[-50px] lg:right-[-40px] w-[200px] lg:w-[420px] z-20" src="/images/makhlukBasket.webp" alt="basket" />
          <img className="absolute top-[0px] lg:top-[-40px] right-[-10px] lg:right-[40px] w-[150px] lg:w-[310px] z-10" src="/images/boomBlue.webp" alt="boom" />
        </div>

        {/* congtainer jadwal terdekat */}
        <div className="absolute top-[661px] lg:top-[510px] left-[17px] right-[17px] lg:left-0 lg:w-[800px] h-[396px] bg-white border-2 border-gray-200 z-10 lg:shadow-[8px_8px_0px_0px_#7147C4]">
          <div className="p-4 lg:p-6">
            <div className="flex justify-between items-center mb-4">
              <p className="text-black font-komikazoom-regular text-lg uppercase">Jadwal Terdekat</p>
              <Button className="w-[160px] h-[33px] bg-[#41257d] text-white text-[10px]">Lihat Semua Jadwal ↗</Button>
            </div>
            <div className="grid grid-cols-[1.2fr_1fr_1.5fr_1.2fr] lg:grid-cols-[1fr_0.8fr_1fr_1.5fr_1fr] px-4 py-2 text-[10px] font-geologica text-black border-b uppercase">
              <span className="hidden lg:block">Tanggal</span>
              <span>Waktu</span><span>Cabang</span><span>Pertandingan</span><span className="hidden lg:block">Lokasi</span>
            </div>
            <div className="overflow-y-auto h-[280px]">
              {jadwalData.map((item, i) => (
                <div key={i} className={`grid grid-cols-[1.2fr_1fr_1.5fr_1.2fr] lg:grid-cols-[1fr_0.8fr_1fr_1.5fr_1fr] gap-2 items-center px-4 py-3 ${item.bg} text-[11px] font-geologica text-black`}>
                  <span className="hidden lg:block text-black">{item.tanggal}</span>
                  <div className="flex flex-col lg:flex-row lg:gap-2"><span>{item.waktu}</span><span className="lg:hidden text-[9px]">{item.tanggal}</span></div>
                  <span>{item.cabang}</span><span>{item.info}</span>
                  <span className="hidden lg:block text-black">{item.lokasi}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* congtainer hasil terbaru */}
        <div className="absolute top-[1081px] lg:top-[550px] lg:right-0 lg:w-[360px] w-full px-4 lg:px-0">
          <img className="md:hidden lg:block lg:w-[300px] lg:right-[-120px] lg:h-auto lg:absolute lg:top-[-100px]" src="/images/redBoom.webp" alt="merah"></img>
          <img className="md:hidden lg:block lg:w-[80px] lg:right-[-20px] lg:h-auto lg:absolute lg:top-[-36px]" src="/images/bola.webp" alt="bola"></img>
          <p className="font-komikazoom-regular text-black mb-3 text-lg uppercase">Hasil Terbaru</p>
          <div className="flex flex-row lg:flex-col gap-6 lg:gap-5 overflow-x-auto lg:overflow-visible pb-4 no-scrollbar snap-x snap-mandatory">
            {[1, 2].map((item) => (
              <div key={item} className="relative flex-shrink-0 w-[294px] lg:w-full snap-center">
                <div className="relative z-10 bg-[#2e1a47] p-4 text-white h-[115px]">
                  <div className="flex justify-between border-b border-white/20 pb-2 mb-2 text-[10px] font-geologica">
                    <span>Dayung Slalom</span><span>26 Aug, 09:13</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[9px] opacity-70">Juara 1</p>
                      <p className="text-[18px] font-geologica uppercase tracking-tighter">Pascasarjana</p>
                    </div>
                    <div className="text-[9px] text-right leading-tight font-geologica">
                      <p>Juara 1: FKKMK</p><p>Juara 2: Vokasi</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[6px] left-[6px] w-full h-full bg-[#7147C4] z-0"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bagian jembatan, notes: kak, ini di code ga ada padding tapi pas nge-render/run di localhost ada padding jauh, jdi kubikin paddingnya ada yg minus*/}
      <div className="relative top-[1210px] lg:p-0 lg:mb-0 lg:top-[960px] bottom-0 left-0 lg:left-[-40px] w-full lg:w-[1440px] h-[100px] pointer-events-none z-30">
        <img className="absolute bottom-0 lg:bottom-[-19.7px] h-[49px] lg:h-[100px] lg:w-[1355px] z-20 object-cover" src="/images/fance.webp" alt="fence" />
        <img className="absolute bottom-[3px] lg:bottom-[-25px] left-[40%] lg:left-[38%] w-[70px] lg:w-[200px] h-auto z-10" src="/images/makhlukNgeband.webp" alt="band" />
        <img className="absolute bottom-[10px] lg:bottom-[20px] left-[1%] w-[35px] lg:w-[120px] h-auto rotate-6 z-10" src="/images/makhlukNyinden.webp" alt="nyanyi" />
        <img className="absolute bottom-[15px] lg:bottom-[-20px] right-[5%] w-[50px] lg:w-[180px] lg:right-[18%] h-auto z-10" src="/images/makhlukKarate.webp" alt="karate" />
      </div>

    </DefaultLayout>
  );
};

export default Hero;