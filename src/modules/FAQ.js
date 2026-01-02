"use client";

import DefaultLayout from "../components/Layout/DefaultLayout";
import { Button } from "../components/Layout/Button";
import { KomikazoomRegular } from "../utils/helpers/font";
import { GeologicaLight } from "../utils/helpers/font";
import Image from "next/image";
import { faqData } from "./faqData";
import FaqItem from "../components/Element/faqItem";
import { useState } from "react";

const FAQ = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("semua");

  const filteredFaq = faqData.filter((item) => {
    const matchCategory =
      category === "semua" ? true : item.category === category;

    const matchSearch = item.question
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <DefaultLayout
      className="bg-white"
      style={{
        backgroundImage: "url('/images/bg-FAQ.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-white w-full min-h-screen border border-gray-400 shadow-[8px_8px_0px_0px_#7147C4] px-4 pt-4">
        <p className={`text-black pb-4 text-xl ${KomikazoomRegular.className}`}>
          Pertanyaan Umum
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="bg-white w-60 h-8 border border-[#5E37AB] rounded-md">
            <input
              type="text"
              placeholder="Cari Pertanyaan"
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full h-full px-2 outline-none rounded-md text-gray-500 text-xs ${GeologicaLight.className}`}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto whitespace-nowrap sm:overflow-visible sm:gap-3">
            <Button
              variant="purple"
              className={`text-xs h-8 px-3 ${GeologicaLight.className}`}
              onClick={() => setCategory("semua")}
            >
              Semua
            </Button>
            <Button
              variant="purple"
              className={`text-xs h-8 px-3 ${GeologicaLight.className}`}
              onClick={() => setCategory("umum")}
            >
              Umum
            </Button>
            <Button
              variant="purple"
              className={`text-xs h-8 px-3 ${GeologicaLight.className}`}
              onClick={() => setCategory("olahraga")}
            >
              Cabang Olahraga
            </Button>
            <Button
              variant="purple"
              className={`text-xs h-8 px-3 ${GeologicaLight.className}`}
              onClick={() => setCategory("seni")}
            >
              Tangkai Seni
            </Button>
          </div>
        </div>
        <hr className="my-3 border-black border"></hr>
        <div className="flex flex-col gap-3 pb-3 sm:grid sm:grid-cols-2">
          {filteredFaq.map((item) => (
            <FaqItem
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default FAQ;
