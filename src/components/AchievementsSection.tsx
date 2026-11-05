import React, { useState } from 'react';
import { Award, Trophy, Star, Medal, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS_LIST, AchievementItem } from '../data/schoolData';

export const AchievementsSection: React.FC = () => {
  const [filterLevel, setFilterLevel] = useState<string>('Semua');

  const filteredAchievements = ACHIEVEMENTS_LIST.filter((item) => {
    if (filterLevel === 'Semua') return true;
    return item.level === filterLevel;
  });

  return (
    <section id="prestasi-section" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
            Torehan Prestasi Membanggakan
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-slate-950 mt-1">
            Prestasi Sekolah, Guru & Siswa
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Bukti nyata kerja keras, disiplin, dan dedikasi seluruh civitas akademika SMAN 15 Malinau di berbagai kancah kompetisi.
          </p>

          {/* Level Filter */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {['Semua', 'Kabupaten', 'Provinsi'].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setFilterLevel(lvl)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  filterLevel === lvl
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Tingkat {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAchievements.map((ach) => (
            <div
              key={ach.id}
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-amber-50/30 border border-slate-200 hover:border-amber-400/50 hover:shadow-md transition-all flex items-start gap-4"
            >
              <div className="p-3.5 rounded-2xl bg-amber-500/10 text-amber-600 border border-amber-500/20 shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-blue-900 text-white">
                    Tingkat {ach.level}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Tahun {ach.year}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {ach.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  {ach.description}
                </p>
                <div className="pt-2 text-xs font-semibold text-amber-700">
                  Penerima: {ach.recipient}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
