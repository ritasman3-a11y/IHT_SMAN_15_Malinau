import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Calendar, 
  Layers, 
  Clock, 
  Award, 
  CheckCircle2, 
  GraduationCap 
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const AcademicSection: React.FC = () => {
  const [subTab, setSubTab] = useState<'kurikulum' | 'ekskul' | 'kalender'>('kurikulum');

  const { academicCurriculum } = SCHOOL_INFO;

  const academicCalendarItems = [
    {
      date: '15 Juli 2026',
      title: 'Awal Tahun Pelajaran 2026/2027 & Masa Pengenalan Lingkungan Sekolah (MPLS)',
      category: 'Akademik Awal',
    },
    {
      date: '17 Agustus 2026',
      title: 'Upacara HUT Kemerdekaan RI ke-81 & Pentas Seni Kebangsaan',
      category: 'Peringatan Nasional',
    },
    {
      date: '21–25 September 2026',
      title: 'Asesmen Sumatif Tengah Semester (ASTS) Ganjil',
      category: 'Evaluasi Pembelajaran',
    },
    {
      date: '20 Oktober 2026',
      title: 'Gelar Karya Projek Penguatan Profil Pelajar Pancasila (P5)',
      category: 'Kokurikuler',
    },
    {
      date: '2–4 November 2026',
      title: 'In House Training (IHT) Penyusunan dan Pengembangan Media Pembelajaran Guru',
      category: 'Pengembangan Guru',
      highlight: true,
    },
    {
      date: '1–8 Desember 2026',
      title: 'Asesmen Sumatif Akhir Semester (ASAS) Ganjil',
      category: 'Evaluasi Pembelajaran',
    },
    {
      date: '19 Desember 2026',
      title: 'Pembagian Rapor Hasil Belajar Semester Ganjil',
      category: 'Laporan Belajar',
    },
  ];

  return (
    <section id="akademik-section" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
            Kurikulum & Aktivitas
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-slate-950 mt-1">
            Informasi Akademik & Kesiswaan
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Penyelenggaraan proses pembelajaran komprehensif, dinamis, dan berpusat pada murid guna mengembangkan segenap potensi kecerdasan intelektual, emosional, dan spiritual.
          </p>

          {/* Segmented Control */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 mt-6 bg-slate-100 rounded-2xl max-w-md mx-auto">
            <button
              onClick={() => setSubTab('kurikulum')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                subTab === 'kurikulum'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Kurikulum Merdeka
            </button>
            <button
              onClick={() => setSubTab('ekskul')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                subTab === 'ekskul'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Ekstrakurikuler
            </button>
            <button
              onClick={() => setSubTab('kalender')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                subTab === 'kalender'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Kalender Pendidikan
            </button>
          </div>
        </div>

        {/* Tab 1: Kurikulum Merdeka */}
        {subTab === 'kurikulum' && (
          <div className="space-y-8 animate-fade-in">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                  Standar Nasional Pendidikan
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                  {academicCurriculum.type}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
                  {academicCurriculum.description}
                </p>
              </div>
              <div className="px-5 py-3 rounded-2xl bg-slate-800 border border-slate-700 text-amber-300 text-xs font-mono shrink-0">
                Tahun Ajaran 2026/2027
              </div>
            </div>

            {/* Fase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {academicCurriculum.phases.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-900">
                      Struktur Fase 0{idx + 1}
                    </span>
                    <h4 className="text-lg font-bold text-slate-950 mt-1">
                      {item.phase}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Dukungan Media Digital Interaktif</span>
                  </div>
                </div>
              ))}
            </div>

            {/* P5 & Intrakurikuler Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-slate-900">
                <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Projek Penguatan Profil Pelajar Pancasila (P5)</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-950">
                  Tema: Kearifan Lokal & Gaya Hidup Berkelanjutan
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                  Siswa diajak menggali kekayaan budaya adat Dayak dan Tidung di Malinau, mempelajari pola hidup selaras alam, serta memproduksi inovasi olahan lokal bernilai ekonomi tinggi.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-blue-900/5 border border-blue-900/15 text-slate-900">
                <div className="flex items-center gap-2 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
                  <BookOpen className="w-4 h-4 text-blue-800" />
                  <span>Diferensiasi Pembelajaran Digital</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-950">
                  Integrasi Media Pembelajaran Interaktif Guru
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                  Guru memanfaatkan produk hasil IHT 2026 berupa modul ajar PDF, kuis gamifikasi, dan video penjelasan YouTube yang disesuaikan dengan kebutuhan belajar setiap peserta didik.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Ekstrakurikuler */}
        {subTab === 'ekskul' && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-xl font-bold font-serif text-slate-950">
                Pengembangan Minat, Bakat, dan Karakter
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Wadah penyaluran hobi, pembinaan kepemimpinan, riset ilmiah, dan pelestarian seni budaya tradisional Kalimantan Utara.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {academicCurriculum.extracurriculars.map((ekskul, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-mono font-semibold text-blue-800 uppercase tracking-wider">
                      {ekskul.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mt-1">
                      {ekskul.name}
                    </h4>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{ekskul.schedule}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Kalender Pendidikan */}
        {subTab === 'kalender' && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-xl font-bold font-serif text-slate-950">
                Kalender Pendidikan Semester Ganjil 2026/2027
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Jadwal agenda resmi sekolah, asesmen sumatif, kegiatan kokurikuler, dan pelatihan guru.
              </p>
            </div>

            <div className="space-y-3">
              {academicCalendarItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                    item.highlight
                      ? 'bg-amber-500/10 border-amber-400/60 shadow-xs'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-blue-900 shrink-0 font-mono text-xs font-bold text-center min-w-[100px]">
                      {item.date}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono font-semibold text-slate-500">
                        {item.category}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                  {item.highlight && (
                    <span className="text-xs font-bold font-mono text-amber-900 bg-amber-400/80 px-2.5 py-1 rounded-full shrink-0">
                      Kegiatan Unggulan IHT
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
