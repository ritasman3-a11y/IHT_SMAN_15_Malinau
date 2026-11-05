import React from 'react';
import { Calendar, MapPin, Sparkles, Video, FileText, Globe, Users, ArrowDown, Plus, FolderDown } from 'lucide-react';
import { IHT_EVENT_INFO } from '../data/ihtData';

interface IhtHeroProps {
  onScrollToGallery: (filterType?: string) => void;
  onOpenManageModal: () => void;
  onOpenPhoto?: () => void;
}

export const IhtHero: React.FC<IhtHeroProps> = ({
  onScrollToGallery,
  onOpenManageModal,
  onOpenPhoto,
}) => {
  const authenticIhtPhoto = '/assets/aistudio/WhatsApp_Image_2026-11-04_at_10.33.10_d11ff906.jpeg';

  return (
    <section id="hero-iht" className="relative w-full overflow-hidden bg-slate-950 text-white">
      {/* Background Photography of Authentic IHT Workshop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={authenticIhtPhoto}
          alt="Dokumentasi Resmi In House Training SMAN 15 Malinau"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter blur-xs brightness-50"
        />
        {/* Measured dark gradient scrim for 4.5:1 WCAG contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-900/70" />
        <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Official Info, Title & Buttons */}
          <div className="lg:col-span-7 space-y-6">
            {/* Official Event Ribbon */}
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-400/40 backdrop-blur-md text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-amber-300">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                {IHT_EVENT_INFO.date}
              </span>
              <span className="text-slate-600 hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Setarap, Kab. Malinau, Kaltara
              </span>
              <span className="text-slate-600 hidden sm:inline">·</span>
              <span className="text-amber-400 font-mono text-[11px] font-bold">
                SMAN 15 MALINAU
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-white leading-[1.15] text-balance">
              HASIL KARYA IHT PENYUSUNAN DAN PENGEMBANGAN{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                MEDIA PEMBELAJARAN
              </span>
            </h1>

            {/* Subtitle & Official Description */}
            <p className="text-sm sm:text-base font-semibold text-amber-300/95 tracking-wide">
              "{IHT_EVENT_INFO.eventName}"
            </p>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed text-balance">
              {IHT_EVENT_INFO.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onScrollToGallery('all')}
                className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-lg hover:shadow-amber-500/25 flex items-center gap-2 group"
              >
                <span>Lihat Rekapitulasi (14 Guru)</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('modul-pembelajaran-drive');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else onScrollToGallery('modul_pdf');
                }}
                className="px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-blue-600/30 flex items-center gap-2 group"
              >
                <FolderDown className="w-4 h-4" />
                <span>Modul Pembelajaran (Drive)</span>
              </button>

              <button
                onClick={() => onScrollToGallery('video_storybook')}
                className="px-4 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-red-600/30 flex items-center gap-2 group"
              >
                <Video className="w-4 h-4 fill-current" />
                <span>Tonton 14 Video</span>
              </button>

              <button
                onClick={onOpenManageModal}
                className="px-3.5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm transition-all flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4 text-amber-400 stroke-[3]" />
                <span>Kelola Data</span>
              </button>
            </div>
          </div>

          {/* Right Column: Prominent Display of the Authentic Official IHT Photo */}
          <div className="lg:col-span-5">
            <div 
              onClick={onOpenPhoto}
              className="group relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/50 bg-slate-900 cursor-pointer transform hover:scale-[1.01] transition-all duration-300"
            >
              <div className="aspect-16/10 w-full overflow-hidden bg-slate-950">
                <img
                  src={authenticIhtPhoto}
                  alt="Dokumentasi Resmi In House Training SMAN 15 Malinau"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Caption Overlay */}
              <div className="p-4 bg-slate-900/95 border-t border-slate-800 text-xs">
                <div className="flex items-center justify-between text-amber-400 font-mono text-[11px] mb-1">
                  <span className="font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Dokumentasi Resmi SMAN 15 Malinau
                  </span>
                  <span>November 2026</span>
                </div>
                <p className="font-bold text-white text-sm">
                  Dewan Guru SMAN 15 Malinau dalam Kegiatan In House Training (IHT)
                </p>
                <p className="text-slate-400 text-[11px] mt-0.5">
                  Setarap, Kec. Malinau Kota, Kabupaten Malinau, Kalimantan Utara
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Strip */}
      <div className="relative z-20 border-t border-slate-800/80 bg-slate-900/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            <div 
              onClick={() => onScrollToGallery('video_storybook')}
              className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-red-500/50 cursor-pointer transition-all flex items-center gap-3 group"
            >
              <div className="p-2.5 rounded-lg bg-red-600/20 text-red-400 border border-red-500/30 group-hover:bg-red-600 group-hover:text-white transition-colors shrink-0">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold font-mono text-white tabular-nums">7 Video</div>
                <div className="text-[11px] text-slate-400">Storybook</div>
              </div>
            </div>

            <div 
              onClick={() => onScrollToGallery('video_ai')}
              className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-purple-500/50 cursor-pointer transition-all flex items-center gap-3 group"
            >
              <div className="p-2.5 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30 group-hover:bg-purple-500 group-hover:text-white transition-colors shrink-0">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold font-mono text-white tabular-nums">7 Video</div>
                <div className="text-[11px] text-slate-400">Video AI</div>
              </div>
            </div>

            <div 
              onClick={() => onScrollToGallery('game_canva')}
              className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-blue-400/50 cursor-pointer transition-all flex items-center gap-3 group"
            >
              <div className="p-2.5 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold font-mono text-white tabular-nums">6 Game</div>
                <div className="text-[11px] text-slate-400">Kuis Canva</div>
              </div>
            </div>

            <div 
              onClick={() => onScrollToGallery('asesmen_digital')}
              className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-emerald-400/50 cursor-pointer transition-all flex items-center gap-3 group"
            >
              <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-white transition-colors shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold font-mono text-white tabular-nums">7 Asesmen</div>
                <div className="text-[11px] text-slate-400">AI Studio</div>
              </div>
            </div>

            <div 
              onClick={() => {
                const el = document.getElementById('modul-pembelajaran-drive');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else onScrollToGallery('modul_pdf');
              }}
              className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all flex items-center gap-3 group"
            >
              <div className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                <FolderDown className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold font-mono text-white tabular-nums">2 Folder</div>
                <div className="text-[11px] text-slate-400">Modul Drive</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
