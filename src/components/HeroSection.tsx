import React from 'react';
import { ArrowRight, BookOpen, Sparkles, Users, Award, Building2, School } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeroSectionProps {
  onScrollTo: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollTo }) => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950">
      {/* Background Photography with Sophisticated Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_sman15_malinau_1793880316929.jpg"
          alt="Gedung Kampus SMAN 15 Malinau Kalimantan Utara"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Measured dark gradient scrim for 4.5:1 legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-900/60" />
        <div className="absolute inset-0 bg-blue-950/30 mix-blend-multiply" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28">
        <div className="max-w-3xl">
          {/* Institutional Trust Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-amber-400/30 backdrop-blur-sm text-xs font-semibold text-amber-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Kabupaten Malinau · Provinsi Kalimantan Utara</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white leading-[1.15] text-balance mb-6">
            SELAMAT DATANG DI WEBSITE RESMI{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              SMAN 15 MALINAU
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed text-balance mb-8">
            Mewujudkan Generasi yang Berkarakter, Berprestasi, Kreatif, dan Siap Menghadapi Tantangan Masa Depan.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onScrollTo('profil')}
              className="px-6 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group"
            >
              <span>Mengenal Sekolah</span>
              <ArrowRight className="w-4 h-4 text-slate-900 transform group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onScrollTo('iht-2026')}
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm transition-all shadow-lg hover:shadow-amber-500/25 flex items-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-slate-950 fill-current" />
              <span>Jelajahi Karya Kami</span>
            </button>
          </div>
        </div>
      </div>

      {/* School Statistics Strip - Full-width below Hero */}
      <div className="relative z-20 border-t border-slate-800/80 bg-slate-900/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tabular-nums">
                  {SCHOOL_INFO.stats.students}
                </div>

                <div className="text-xs text-slate-400 font-medium">Peserta Didik</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                <School className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tabular-nums">
                  {SCHOOL_INFO.stats.teachers}
                </div>
                <div className="text-xs text-slate-400 font-medium">Guru Profesional</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tabular-nums">
                  {SCHOOL_INFO.stats.staff}
                </div>
                <div className="text-xs text-slate-400 font-medium">Tenaga Kependidikan</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tabular-nums">
                  {SCHOOL_INFO.stats.rombel}
                </div>
                <div className="text-xs text-slate-400 font-medium">Rombongan Belajar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
