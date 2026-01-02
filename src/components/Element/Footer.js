
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#003192] text-white">
      <div className="max-w-[1440px] mx-auto px-6 py-12">

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* LOGO */}
          <div>
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <p className="mt-4 text-sm leading-relaxed">
              FORKOM UKM UGM <br />
              Jalan Yacaranda Flat A6, Blimbing Sari <br />
              Depok, Sleman, DIY 55281
            </p>
          </div>

          {/* KOMPETISI */}
          <div>
            <h4 className="font-semibold mb-4">Kompetisi</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">Klasemen</Link></li>
              <li><Link href="#">Jadwal</Link></li>
              <li><Link href="#">Kontingen</Link></li>
              <li><Link href="#">Cabang Lomba</Link></li>
            </ul>
          </div>

          {/* PUBLIKASI */}
          <div>
            <h4 className="font-semibold mb-4">Publikasi</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">Galeri</Link></li>
              <li><Link href="#">FAQ</Link></li>
              <li><Link href="#">Permainan</Link></li>
            </ul>
          </div>

          {/* SOSMED */}
          <div>
            <h4 className="font-semibold mb-4">
              Hubungi kami melalui media sosial
            </h4>

            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition">
                <FaInstagram className="text-xl" />
              </a>

              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition">
                <FaYoutube className="text-xl" />
              </a>

              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition">
                <FaTiktok className="text-xl" />
              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition">
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>

        </div> {/* ✅ GRID DITUTUP DI SINI */}

        {/* COPYRIGHT */}
        <div className="border-t border-white/30 mt-10 pt-6 text-center text-sm">
          Porsenigama 2025 - All Rights Reserved
        </div>

      </div>
    </footer>
  );
}
