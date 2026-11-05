import React from 'react';
import { Sparkles, CheckCircle2, Award, BookOpen, Quote, Laptop, Calendar, MapPin } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { IHT_EVENT_INFO } from '../data/ihtData';

interface IhtAboutSectionProps {
  onOpenPhotoLightbox: () => void;
}

export const IhtAboutSection: React.FC<IhtAboutSectionProps> = ({ onOpenPhotoLightbox }) => {
  return (
    <section id="tentang-iht" className="py-16 sm:py-24 bg-slate-900 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Workshop Documentation Image */}
          <div className="lg:col-span-5">
            <div 
              onClick={onOpenPhotoLightbox}
              className="group relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-950 cursor-pointer aspect-4/3"
            >
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-04_at_10.33.10_d11ff906.jpeg"
                alt="Foto Bersama Kegiatan In House Training SMAN 15 Malinau"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex flex-col justify-end p-6">
                <span className="text-[11px] font-mono text-amber-400 font-semibold mb-1">
                  Dokumentasi Resmi · 2–4 November 2026
                </span>
                <p className="text-sm font-bold text-white">
                  Dewan Guru SMAN 15 Malinau Saat Merancang Media Pembelajaran Digital
                </p>
                <span className="text-xs text-slate-300 mt-1">Klik untuk memperbesar foto</span>
              </div>
            </div>

            {/* Principal Quote Box */}
            <div className="mt-4 p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3">
              <Quote className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 leading-relaxed">
                <p className="italic">
                  "Karya IHT ini merupakan wujud dedikasi tanpa henti pendidik SMAN 15 Malinau dalam menghadirkan pembelajaran yang memerdekakan dan berpihak pada murid."
                </p>
                <p className="font-bold text-white mt-2">
                  {SCHOOL_INFO.principal.name}
                </p>
                <p className="text-[11px] text-slate-400">Kepala SMAN 15 Malinau</p>
              </div>
            </div>
          </div>

          {/* Text & Objectives */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                Kilas Kegiatan & Tujuan
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-black text-white mt-1 leading-tight">
                Membangun Ekosistem Belajar Berbasis Inovasi Digital
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Kegiatan <strong>In House Training (IHT) Penyusunan dan Pengembangan Media Pembelajaran</strong> diselenggarakan pada 2–4 November 2026 di SMAN 15 Malinau, Kabupaten Malinau, Kalimantan Utara. Kegiatan ini difasilitasi oleh narasumber ahli dan diikuti secara antusias oleh 14 dewan guru dari berbagai rumpun mata pelajaran.

            </p>

            {/* 4 Pilar Capaian IHT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/70">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase mb-1">
                  <Laptop className="w-4 h-4" />
                  <span>Media Visual & Digital</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pemanfaatan Canva Education, Google Sites, dan Geogebra dalam menjelaskan materi abstrak menjadi visual yang menarik.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/70">
                <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase mb-1">
                  <BookOpen className="w-4 h-4" />
                  <span>Video & Modul Terstruktur</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Produksi modul ajar berstandar Kurikulum Merdeka dan rekaman 14 video pembelajaran YouTube yang mudah diakses siswa.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/70">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Asesmen Interaktif</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pengembangan LKPD interaktif Liveworksheets dan kuis gamifikasi Quizizz untuk evaluasi formatif yang menyenangkan.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/70">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Kearifan Lokal Malinau</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Kontekstualisasi materi sains, sosial, dan seni dengan kearifan alam dan budaya Dayak-Tidung di Kalimantan Utara.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
