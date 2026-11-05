import React from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Video, 
  Laptop, 
  Presentation, 
  FileSpreadsheet, 
  Globe2, 
  Lightbulb, 
  ArrowDown 
} from 'lucide-react';

interface GuruInnovationSectionProps {
  onScrollToIht: () => void;
  onOpenManageModal: () => void;
}

export const GuruInnovationSection: React.FC<GuruInnovationSectionProps> = ({
  onScrollToIht,
  onOpenManageModal,
}) => {
  const innovationCategories = [
    {
      title: 'Modul Ajar & Perangkat Pembelajaran',
      icon: BookOpen,
      desc: 'Perangkat ajar terstruktur berbasis Kurikulum Merdeka yang memuat capaian pembelajaran, diferensiasi konten, dan asesmen formatif.',
      count: '6 Modul PDF',
    },
    {
      title: 'Media Pembelajaran Digital',
      icon: Laptop,
      desc: 'Simulasi interaktif Geogebra, PhET, dan media augmented reality yang mempermudah pemahaman konsep abstrak secara visual.',
      count: '8 Media Digital',
    },
    {
      title: 'Video Pembelajaran YouTube',
      icon: Video,
      desc: 'Rekaman video edukasi berdurasi terukur dengan penjelasan runtut yang dapat diputar siswa secara fleksibel dari rumah.',
      count: '14 Video HD',
    },
    {
      title: 'Presentasi Interaktif',
      icon: Presentation,
      desc: 'Slide presentasi Canva & Genially dinamis yang dilengkapi animasi visual, hyperlink interaktif, dan kuis langsung.',
      count: 'Multi Platform',
    },
    {
      title: 'LKPD Digital Interaktif',
      icon: FileSpreadsheet,
      desc: 'Lembar Kerja Peserta Didik berbasis Liveworksheets dengan fitur drag-and-drop dan penilaian otomatis real-time.',
      count: 'Format Digital',
    },
    {
      title: 'Website & Aplikasi Pembelajaran',
      icon: Globe2,
      desc: 'Portal Google Sites tematik dan mini aplikasi web edukasi yang menyajikan repositori materi lengkap tiap mata pelajaran.',
      count: 'Web Terpadu',
    },
    {
      title: 'Karya Inovatif & Kearifan Lokal',
      icon: Lightbulb,
      desc: 'Eksplorasi keterhubungan materi pelajaran dengan kekayaan alam dan budaya suku Dayak serta Tidung di Kabupaten Malinau.',
      count: 'Riset Kontekstual',
    },
  ];

  return (
    <section id="karya-guru-section" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800 text-white relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Ruang Kreativitas Pendidik Masa Depan</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white">
            GALERI KARYA DAN INOVASI GURU
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
            "Dokumentasi kreativitas, kolaborasi, dan inovasi guru dalam mengembangkan pembelajaran yang bermakna."
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onScrollToIht}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <span>Lihat Produk IHT 2026</span>
              <ArrowDown className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenManageModal}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm rounded-xl transition-all"
            >
              Kelola / Tambah Karya
            </button>
          </div>
        </div>

        {/* Categories Bento-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {innovationCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-amber-400/50 hover:bg-slate-800 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-amber-400 border border-amber-400/20 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 font-semibold bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {cat.count}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                  <span>SMAN 15 Malinau</span>
                  <span className="text-amber-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Aktif · 2026
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
