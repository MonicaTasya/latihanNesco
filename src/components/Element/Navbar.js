

"use client";

import { useState } from "react";
import DefaultLayout from "../Layout/DefaultLayout";

const Navbar = () => {
  const bgColors = [
    "bg-dark-pink-300",
    "bg-blue-300",
    "bg-green-300",
  ];

  const [bgColor, setBgColor] = useState(bgColors[0]);

  const handleChangeColor = () => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    setBgColor(bgColors[randomIndex]);
  };

  return (
    <DefaultLayout className={`${bgColor} py-3!`}>
      <nav className="flex items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="font-semibold text-lg">
          LOGO
        </div>

        {/* Menu Navbar */}
        <ul className="flex gap-6 text-sm font-medium">
          <li className="cursor-pointer hover:underline">Klasemen</li>
          <li className="cursor-pointer hover:underline">Jadwal</li>
          <li className="cursor-pointer hover:underline">Kontingen</li>
          <li className="cursor-pointer hover:underline">Cabang Lomba</li>
          <li className="cursor-pointer hover:underline">Galeri</li>
          <li className="cursor-pointer hover:underline">FAQ</li>
        </ul>

        {/* Button Ganti Warna */}
        <button
          onClick={handleChangeColor}
          className="px-3 py-1 text-sm bg-white rounded"
        >
          Ganti Warna
        </button>
      </nav>
    </DefaultLayout>
  );
};

export default Navbar;






