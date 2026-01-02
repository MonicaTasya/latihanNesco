"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../Layout/Button";

const navItems = [
  "Klasemen",
  "Jadwal",
  "Kontingen",
  "Cabang Lomba",
  "Galeri",
  "FAQ",
];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <nav className="w-full border-b-2 border-neutral-200 bg-white">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 h-[97px]">

        {/* LOGO */}
       <Image src="/images/logo.png" alt="Logo" width={40} height={40} />


        {/* MENU */}
        <ul className="flex items-center gap-8">
          {navItems.map((item, index) => (
            <li
              key={item}
              className="relative cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <span
                className={`text-sm font-medium transition-colors
                  ${
                    activeIndex === index
                      ? "text-blue-600"
                      : "text-neutral-800"
                  }
                `}
              >
                {item}
              </span>

              {/* GARIS BAWAH */}
              <span
                className={`absolute left-0 -bottom-2 h-[2px] w-full rounded-full transition-all duration-300
                  ${
                    activeIndex === index
                      ? "bg-blue-600 scale-x-100"
                      : "bg-blue-600 scale-x-0"
                  }
                `}
              />
            </li>
          ))}
        </ul>

        {/* ACTION */}
        <div className="flex items-center gap-4">
          <Button variant="blue" size="smIcon">🔔</Button>
          <Button variant="blue" size="sm">🎮 Permainan</Button>
        </div>

      </div>
    </nav>
  );
}


