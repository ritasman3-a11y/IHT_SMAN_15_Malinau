import React, { useState } from 'react';
import { Maximize2, Camera, Calendar, Sparkles, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/schoolData';

interface GallerySectionProps {
  onOpenLightbox: (index: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = [
    { label: 'Semua Foto (8)', value: 'Semua' },
    { label: 'Presentasi Guru (4)', value: 'Presentasi Guru' },
    { label: 'Pelatihan Guru (3)', value: 'Pelatihan Guru' },
    { label: 'Dokumentasi Bersama (1)', value: 'Dokumentasi IHT' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'Semua') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="galeri-foto-iht" className="py-16 sm:py-24 bg-slate-900 border-t border-slate-800 text-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-semibold mb-3">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>Dokumentasi Visual Resmi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-white leading-tight">
            Galeri Foto Dokumentasi In House Training (IHT)
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed text-balance">
            Rekam jejak autentik dewan guru SMAN 15 Malinau selama kegiatan IHT Penyusunan dan Pengembangan Media Pembelajaran (2–4 November 2026 di Punan Setarap).
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat.value
                    ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => {
            const originalIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(originalIndex)}
                className="group relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 cursor-pointer shadow-lg hover:shadow-2xl hover:border-amber-400/50 transition-all duration-300 flex flex-col"
              >
                {/* Photo Container */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Zoom indicator */}
                  <div className="absolute top-2.5 right-2.5 p-2 bg-slate-950/80 text-white rounded-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700">
                    <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                  </div>

                  {/* Category Pill on Image */}
                  <div className="absolute bottom-2.5 left-2.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-slate-950/90 text-amber-300 border border-amber-400/40 backdrop-blur-xs">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Caption / Description below */}
                <div className="p-4 flex-1 flex flex-col justify-between bg-slate-900/90">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 mb-1">
                      <Calendar className="w-3 h-3 text-amber-400" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-white line-clamp-2 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-amber-400/90 font-medium">
                    <span className="flex items-center gap-1">
                      <ImageIcon className="w-3 h-3" />
                      <span>Klik untuk perbesar</span>
                    </span>
                    <span className="text-slate-500 group-hover:text-white transition-colors">HD</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
