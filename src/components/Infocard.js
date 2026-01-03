import React from 'react';
import Link from 'next/link';

export default function InfoCard({ title, description, tags = [], ctaText = 'Lihat', ctaHref }) {
  return (
    <div className="relative bg-white border-4 border-blue-800 rounded-lg p-6 overflow-hidden">
      <div className="absolute top-4 right-4 flex gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs text-black px-2 py-1 border rounded-full bg-white">{t}</span>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="max-w-110">
          <h4 className="text-xl text-black font-bold mb-2">{title}</h4>

          <div className="w-full h-px bg-blue-600 my-4" aria-hidden="true" />

          <p className="text-sm text-black leading-relaxed">{description}</p>
        </div>

        <div className="flex items-center gap-4 mt-8 md:mt-0">
          {ctaHref ? (
          <Link
            href={ctaHref} className="ml-auto mt-12 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2" aria-label={ctaText}>
              <span>{ctaText}</span>
          </Link>
          ) : (
            <div className="ml-auto mt-12 bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
              <span>{ctaText}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
