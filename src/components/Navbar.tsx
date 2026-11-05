import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Award, Sparkles, BookOpen, GraduationCap, Phone, Mail, MapPin } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenManageModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenManageModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profilDropdownOpen, setProfilDropdownOpen] = useState(false);
  const [akademikDropdownOpen, setAkademikDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
    setProfilDropdownOpen(false);
    setAkademikDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Bar Informasi Resmi */}
      <div className="bg-slate-950 text-slate-300 text-xs border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              Kab. Malinau, Kalimantan Utara
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              {SCHOOL_INFO.email}
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              {SCHOOL_INFO.telepon}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-amber-400 font-semibold bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
              NPSN: {SCHOOL_INFO.npsn}
            </span>
            <span className="text-slate-400 text-xs">
              Akreditasi: <strong className="text-white">{SCHOOL_INFO.akreditasi}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800 py-2.5'
            : 'bg-slate-900 border-b border-slate-800 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo & School Identity Brand */}
          <div 
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            {/* Logo Resmi SMAN 15 Malinau Emblem */}
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-blue-700 via-blue-900 to-slate-950 p-0.5 shadow-md flex items-center justify-center border border-amber-400/40 group-hover:border-amber-400 transition-colors">
              <div className="w-full h-full bg-slate-950/80 rounded-[10px] flex items-center justify-center text-amber-400">
                <GraduationCap className="w-6 h-6 transform group-hover:scale-105 transition-transform" />
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
              </div>
              <p className="text-[11px] sm:text-xs text-amber-400/90 font-medium tracking-wide">
                {SCHOOL_INFO.tagline}
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-1 text-[13px] font-medium text-slate-300">
            <button
              onClick={() => handleNavClick('beranda')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                activeSection === 'beranda'
                  ? 'text-white bg-slate-800 font-semibold'
                  : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Beranda
            </button>

            {/* Dropdown Profil */}
            <div className="relative">
              <button
                onClick={() => setProfilDropdownOpen(!profilDropdownOpen)}
                onMouseEnter={() => setProfilDropdownOpen(true)}
                className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap ${
                  activeSection === 'profil' || activeSection === 'visi-misi' || activeSection === 'guru'
                    ? 'text-white bg-slate-800 font-semibold'
                    : 'hover:text-white hover:bg-slate-800/60'
                }`}
              >
                Profil Sekolah
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {profilDropdownOpen && (
                <div 
                  onMouseLeave={() => setProfilDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-56 bg-slate-900 border border-slate-800 rounded-xl shadow-xl py-2 z-50 text-xs animate-fade-in"
                >
                  <button
                    onClick={() => handleNavClick('profil')}
                    className="w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800"
                  >
                    Identitas & Sejarah
                  </button>
                  <button
                    onClick={() => handleNavClick('visi-misi')}
                    className="w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800"
                  >
                    Visi, Misi & Tujuan
                  </button>
                  <button
                    onClick={() => handleNavClick('guru')}
                    className="w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800"
                  >
                    Guru & Tenaga Kependidikan
                  </button>
                </div>
              )}
            </div>

            {/* Dropdown Akademik */}
            <div className="relative">
              <button
                onClick={() => setAkademikDropdownOpen(!akademikDropdownOpen)}
                onMouseEnter={() => setAkademikDropdownOpen(true)}
                className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap ${
                  activeSection === 'akademik'
                    ? 'text-white bg-slate-800 font-semibold'
                    : 'hover:text-white hover:bg-slate-800/60'
                }`}
              >
                Akademik
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {akademikDropdownOpen && (
                <div 
                  onMouseLeave={() => setAkademikDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-56 bg-slate-900 border border-slate-800 rounded-xl shadow-xl py-2 z-50 text-xs animate-fade-in"
                >
                  <button
                    onClick={() => handleNavClick('akademik')}
                    className="w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800"
                  >
                    Kurikulum & Pembelajaran
                  </button>
                  <button
                    onClick={() => handleNavClick('akademik-ekskul')}
                    className="w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800"
                  >
                    Ekstrakurikuler & P5
                  </button>
                  <button
                    onClick={() => handleNavClick('akademik-kalender')}
                    className="w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800"
                  >
                    Kalender Pendidikan
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('berita')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                activeSection === 'berita'
                  ? 'text-white bg-slate-800 font-semibold'
                  : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Berita & Kegiatan
            </button>

            <button
              onClick={() => handleNavClick('prestasi')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                activeSection === 'prestasi'
                  ? 'text-white bg-slate-800 font-semibold'
                  : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Prestasi
            </button>

            <button
              onClick={() => handleNavClick('galeri')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                activeSection === 'galeri'
                  ? 'text-white bg-slate-800 font-semibold'
                  : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Galeri
            </button>

            <button
              onClick={() => handleNavClick('karya-guru')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                activeSection === 'karya-guru'
                  ? 'text-white bg-slate-800 font-semibold'
                  : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Karya & Inovasi
            </button>

            <button
              onClick={() => handleNavClick('kontak')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                activeSection === 'kontak'
                  ? 'text-white bg-slate-800 font-semibold'
                  : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Kontak
            </button>
          </div>

          {/* Right Action: Special IHT Button & Manage Works */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNavClick('iht-2026')}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md transition-all flex items-center gap-1.5 transform hover:scale-[1.02]"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950 fill-current" />
              <span>Hasil IHT 2026</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-800 bg-slate-900 px-4 pt-3 pb-6 space-y-1.5 text-sm animate-fade-in max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => handleNavClick('beranda')}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800"
            >
              Beranda
            </button>
            <div className="border-t border-slate-800/60 pt-1.5 my-1">
              <span className="text-[11px] font-semibold text-amber-400 px-3 uppercase tracking-wider">
                Profil Sekolah
              </span>
              <button
                onClick={() => handleNavClick('profil')}
                className="w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800"
              >
                Identitas & Sejarah Sekolah
              </button>
              <button
                onClick={() => handleNavClick('visi-misi')}
                className="w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800"
              >
                Visi, Misi & Tujuan
              </button>
              <button
                onClick={() => handleNavClick('guru')}
                className="w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800"
              >
                Guru & Tenaga Kependidikan
              </button>
            </div>

            <div className="border-t border-slate-800/60 pt-1.5 my-1">
              <span className="text-[11px] font-semibold text-amber-400 px-3 uppercase tracking-wider">
                Akademik & Kesiswaan
              </span>
              <button
                onClick={() => handleNavClick('akademik')}
                className="w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800"
              >
                Kurikulum Merdeka & Pembelajaran
              </button>
              <button
                onClick={() => handleNavClick('akademik-ekskul')}
                className="w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800"
              >
                Ekstrakurikuler & Projek P5
              </button>
            </div>

            <button
              onClick={() => handleNavClick('berita')}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800"
            >
              Berita & Kegiatan
            </button>
            <button
              onClick={() => handleNavClick('prestasi')}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800"
            >
              Prestasi Sekolah
            </button>
            <button
              onClick={() => handleNavClick('galeri')}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800"
            >
              Galeri Dokumentasi
            </button>
            <button
              onClick={() => handleNavClick('karya-guru')}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800"
            >
              Galeri Karya & Inovasi Guru
            </button>
            <button
              onClick={() => handleNavClick('iht-2026')}
              className="w-full text-left px-3 py-2 rounded-lg bg-amber-500/10 text-amber-300 font-semibold hover:bg-amber-500/20 flex items-center justify-between"
            >
              <span>Hasil Karya IHT 2026</span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </button>
            <button
              onClick={() => handleNavClick('kontak')}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800"
            >
              Kontak & Lokasi
            </button>

            <div className="pt-2 border-t border-slate-800 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenManageModal();
                }}
                className="w-full py-2 bg-slate-800 text-slate-200 rounded-lg text-xs font-medium hover:bg-slate-700"
              >
                Kelola Karya Guru
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
