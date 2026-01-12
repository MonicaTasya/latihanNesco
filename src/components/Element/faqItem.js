"use client";
import { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="bg-purple-600 text-white p-4 cursor-pointer transition-all duration-300"
    >
      <div className="flex justify-between items-center">
        <p className="text-sm">{question}</p>
        <span className="text-xl font-bold">{open ? "-" : "+"}</span>
      </div>

      {open && <p className="mt-2 text-xs text-purple-200">{answer}</p>}
    </div>
  );
};

export default FaqItem;
