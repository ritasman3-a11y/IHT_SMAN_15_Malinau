import React, { useState, useEffect } from 'react';
import { GraduationCap, Sparkles, Plus, Menu, X, Video, FileText, Globe, Info, Phone, FolderDown, Camera } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface IhtNavbarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenManageModal: () => void;
  onScrollTo: (elementId: string) => void;
}

export const IhtNavbar: React.FC<IhtNavbarProps> = ({
  activeCategory,
  onSelectCategory,
  onOpenManageModal,
  onScrollTo,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavCategory = (cat: string) => {
    onSelectCategory(cat);
    onScrollTo('galeri-karya-iht');
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Banner Resmi */}
      <div className="bg-slate-950 text-slate-300 text-xs border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-amber-400 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              In House Training (IHT) 2–4 November 2026
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400">SMAN 15 Malinau, Kabupaten Malinau, Kalimantan Utara</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-800 py-3'
            : 'bg-slate-900 border-b border-slate-800 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo & Portal Identity */}
          <div 
            onClick={() => onScrollTo('hero-iht')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-blue-700 via-blue-900 to-slate-950 p-0.5 shadow-md flex items-center justify-center border border-amber-400/50 group-hover:border-amber-400 transition-colors">
              <div className="w-full h-full bg-slate-950/80 rounded-[10px] flex items-center justify-center text-amber-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="absolute -bottom-1 -right-1 text-[9px] font-extrabold font-mono bg-amber-500 text-slate-950 px-1 rounded-sm shadow-xs">
                15
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-serif font-black tracking-wider text-white leading-tight">
                  SMAN 15 MALINAU
                </span>
                <span className="hidden md:inline-block text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  PORTAL IHT 2026
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 font-medium">
                Penyusunan & Pengembangan Media Pembelajaran
              </p>
            </div>
          </div>

          {/* Nav Categories */}
          <div className="hidden lg:flex items-center gap-1 text-[13px] font-medium text-slate-300">
            <button
              onClick={() => handleNavCategory('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'text-white bg-slate-800 font-semibold'
                  : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Semua Karya
            </button>
            <button
              onClick={() => handleNavCategory('video_storybook')}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                activeCategory === 'video_storybook'
                  ? 'text-white bg-slate-800 font-semibold'
                  : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Video className="w-3.5 h-3.5 text-red-400" />
              <span>YouTube Storybook (7)</span>
            </button>
            <button
              onClick={() => handleNavCategory('video_ai')}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                activeCategory === 'video_ai'
                  ? 'text-white bg-slate-800 font-semibold'
                  : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Video className="w-3.5 h-3.5 text-purple-400" />
              <span>Video AI (7)</span>
            </button>
            <button
              onClick={() => handleNavCategory('game_canva')}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                activeCategory === 'game_canva'
                  ? 'text-white bg-slate-800 font-semibold'
                  : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>Game Canva (6)</span>
            </button>
            <button
              onClick={() => handleNavCategory('asesmen_digital')}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                activeCategory === 'asesmen_digital'
                  ? 'text-white bg-slate-800 font-semibold'
                  : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Asesmen AI (7)</span>
            </button>
            <button
              onClick={() => handleNavCategory('modul_pdf')}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                activeCategory === 'modul_pdf'
                  ? 'text-white bg-slate-800 font-semibold'
                  : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <FolderDown className="w-3.5 h-3.5 text-blue-400" />
              <span>Modul Drive (2)</span>
            </button>
            <button
              onClick={() => {
                onScrollTo('galeri-foto-iht');
                setMobileMenuOpen(false);
              }}
              className="px-3 py-1.5 rounded-lg transition-colors hover:text-white hover:bg-slate-800/60 whitespace-nowrap flex items-center gap-1.5 text-amber-300 hover:text-amber-200"
            >
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              <span>Galeri Foto (8)</span>
            </button>
            <button
              onClick={() => {
                onScrollTo('tentang-iht');
                setMobileMenuOpen(false);
              }}
              className="px-3 py-1.5 rounded-lg transition-colors hover:text-white hover:bg-slate-800/60 whitespace-nowrap"
            >
              Tentang IHT
            </button>
          </div>


          {/* Action Button: Kelola / Tambah Karya */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenManageModal}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Kelola & Tambah Karya</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-slate-900 px-4 pt-3 pb-6 space-y-2 text-sm animate-fade-in">
            <button
              onClick={() => handleNavCategory('all')}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800"
            >
              Semua Hasil Karya IHT
            </button>
            <button
              onClick={() => handleNavCategory('video_youtube')}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800 flex items-center gap-2"
            >
              <Video className="w-4 h-4 text-red-400" />
              <span>Video Pembelajaran YouTube (14 Video)</span>
            </button>
            <button
              onClick={() => handleNavCategory('modul_pdf')}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800 flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Modul Ajar Pembelajaran PDF</span>
            </button>
            <button
              onClick={() => handleNavCategory('media_digital')}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800 flex items-center gap-2"
            >
              <Globe className="w-4 h-4 text-blue-400" />
              <span>Media Digital & Presentasi Interaktif</span>
            </button>
            <button
              onClick={() => handleNavCategory('karya_lainnya')}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800"
            >
              LKPD Digital & Game Edukasi
            </button>
            <div className="border-t border-slate-800 pt-2">
              <button
                onClick={() => {
                  onScrollTo('galeri-foto-iht');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-lg text-amber-300 hover:bg-slate-800 flex items-center gap-2 font-semibold"
              >
                <Camera className="w-4 h-4 text-amber-400" />
                <span>Galeri Foto Dokumentasi IHT (8 Foto)</span>
              </button>
              <button
                onClick={() => {
                  onScrollTo('tentang-iht');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800"
              >
                Tentang Kegiatan IHT SMAN 15 Malinau
              </button>
              <button
                onClick={() => {
                  onScrollTo('kontak-iht');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800"
              >
                Kontak & Informasi Sekolah
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
