"use client";

import Image from "next/image";
import { cn } from "../../utils/helpers/cn";
import { useState, useEffect } from "react";
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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <nav
        className={cn(
          "transition-all duration-300 ease-out backdrop-blur-md",
          "flex items-center",

          // default
          "w-full rounded-none bg-white",

          // after scroll
          isScrolled && "mt-4 w-[90%] rounded-xl bg-white shadow-lg"
        )}
      >
        <div className="w-full flex items-center justify-between px-6 py-3 gap-10">
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
            <Button variant="blue" size="smIcon">
              🔔
            </Button>
            <Button variant="blue" size="sm">
              🎮 Permainan
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
