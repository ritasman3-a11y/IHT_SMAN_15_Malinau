import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Filter, 
  Play, 
  FileText, 
  ExternalLink, 
  Gamepad2, 
  FileCheck, 
  Plus, 
  Share2, 
  Check, 
  Youtube, 
  SlidersHorizontal,
  LayoutGrid,
  TableProperties,
  FolderDown,
  FolderArchive
} from 'lucide-react';
import { IhtProduct, ProductType, IHT_EVENT_INFO } from '../data/ihtData';
import { TeacherRecapTable } from './TeacherRecapTable';
import { DriveModulesSection } from './DriveModulesSection';

interface IhtShowcaseSectionProps {
  products: IhtProduct[];
  selectedType?: string;
  onSelectType?: (type: string) => void;
  onOpenVideoModal: (product: IhtProduct) => void;
  onOpenPdfModal: (product: IhtProduct) => void;
  onOpenManageModal: () => void;
}

export const IhtShowcaseSection: React.FC<IhtShowcaseSectionProps> = ({
  products,
  selectedType: controlledType,
  onSelectType,
  onOpenVideoModal,
  onOpenPdfModal,
  onOpenManageModal,
}) => {
  const [localType, setLocalType] = useState<string>('all');
  const selectedType = controlledType !== undefined ? controlledType : localType;

  const handleTypeChange = (type: string) => {
    if (onSelectType) {
      onSelectType(type);
    } else {
      setLocalType(type);
    }
  };

  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
  const [selectedTeacher, setSelectedTeacher] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const teacherList = [
    'all',
    'Nancy',
    'Evo Ellendra',
    'Maisyarah',
    'Jefrida Agustina',
    'Frederik Palintong',
    'Herlina Palinoan',
    'Erickson Sinaga',
  ];

  const typeFilterOptions = [
    { id: 'all', label: 'Semua Produk', count: products.length },
    { id: 'video_storybook', label: 'YouTube Storybook', count: products.filter((p) => p.type === 'video_storybook').length },
    { id: 'video_ai', label: 'YouTube Video AI', count: products.filter((p) => p.type === 'video_ai').length },
    { id: 'game_canva', label: 'Game Canva', count: products.filter((p) => p.type === 'game_canva').length },
    { id: 'asesmen_digital', label: 'Asesmen AI Studio', count: products.filter((p) => p.type === 'asesmen_digital').length },
    { id: 'modul_pdf', label: 'Modul Ajar Drive', count: products.filter((p) => p.type === 'modul_pdf').length },
  ];

  const filteredProducts = products.filter((item) => {
    const matchesType = selectedType === 'all' || item.type === selectedType;
    const matchesTeacher = selectedTeacher === 'all' || item.creator.toLowerCase().includes(selectedTeacher.toLowerCase());
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.creator.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesTeacher && matchesSearch;
  });

  const handleCopyLink = (item: IhtProduct) => {
    const url = item.youtubeUrl || item.externalUrl || window.location.href;
    navigator.clipboard.writeText(url);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section 
      id="galeri-karya-iht" 
      className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & View Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Publikasi Produk IHT SMAN 15 Malinau</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-white">
              Hasil Karya & Tautan Media Pembelajaran
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Daftar karya 7 guru mencakup Game Canva, 14 Video YouTube (Storybook & Video AI), serta Aplikasi Asesmen Digital AI Studio.
            </p>
          </div>

          {/* View Mode Toggle Controls */}
          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-xl">
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  viewMode === 'table'
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <TableProperties className="w-4 h-4" />
                <span>Tabel Resmi Guru (7)</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
                <span>Grid Kartu Produk</span>
              </button>
            </div>

            <button
              onClick={onOpenManageModal}
              className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold transition-colors flex items-center gap-1.5 shrink-0 shadow-sm"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Kelola</span>
            </button>
          </div>
        </div>

        {/* 0. REPOSITORI MODUL PEMBELAJARAN GOOGLE DRIVE (2 FOLDER RESMI) */}
        <DriveModulesSection />

        {/* 1. TAMPILAN TABEL RESMI GURU (Direct representation of user screenshot) */}
        {viewMode === 'table' && (
          <TeacherRecapTable onWatchVideo={(prod) => onOpenVideoModal(prod)} />
        )}

        {/* 2. TAMPILAN GRID KARTU PRODUK DENGAN LIVE SEARCH & FILTER */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-6 mb-10 shadow-lg space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Live Search */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari berdasarkan nama guru (Nancy, Maisyarah, dll.) atau judul karya..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            {/* Filter Berdasarkan Nama Guru */}
            <div className="flex items-center gap-2 shrink-0">
              <SlidersHorizontal className="w-4 h-4 text-amber-400 shrink-0" />
              <select
                value={selectedTeacher}
                onChange={(e) => setSelectedTeacher(e.target.value)}
                className="px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-amber-400"
              >
                <option value="all">Semua Guru (7 Orang)</option>
                {teacherList.filter((t) => t !== 'all').map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Tabs (Segmented Buttons) */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
            {typeFilterOptions.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTypeChange(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  selectedType === tab.id
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                  selectedType === tab.id ? 'bg-slate-950 text-amber-300' : 'bg-slate-800 text-slate-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800 text-slate-400 text-sm">
            <p>Tidak ditemukan karya yang sesuai dengan filter atau kata kunci.</p>
            <button
              onClick={() => {
                handleTypeChange('all');
                setSelectedTeacher('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-amber-400 hover:underline"
            >
              Reset Semua Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail / Header */}
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-950">
                    <img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    {/* Badge Category */}
                    <div className="absolute top-3 left-3">
                      {item.type === 'video_storybook' && (
                        <span className="px-2.5 py-1 rounded-md bg-red-600 text-white text-[10px] font-bold font-mono uppercase flex items-center gap-1 shadow-sm">
                          <Youtube className="w-3 h-3" />
                          Storybook
                        </span>
                      )}
                      {item.type === 'video_ai' && (
                        <span className="px-2.5 py-1 rounded-md bg-purple-600 text-white text-[10px] font-bold font-mono uppercase flex items-center gap-1 shadow-sm">
                          <Youtube className="w-3 h-3" />
                          Video AI
                        </span>
                      )}
                      {item.type === 'game_canva' && (
                        <span className="px-2.5 py-1 rounded-md bg-blue-600 text-white text-[10px] font-bold font-mono uppercase flex items-center gap-1 shadow-sm">
                          <Gamepad2 className="w-3 h-3" />
                          Game Canva
                        </span>
                      )}
                      {item.type === 'asesmen_digital' && (
                        <span className="px-2.5 py-1 rounded-md bg-emerald-600 text-white text-[10px] font-bold font-mono uppercase flex items-center gap-1 shadow-sm">
                          <FileCheck className="w-3 h-3" />
                          Asesmen AI Studio
                        </span>
                      )}
                      {item.type === 'modul_pdf' && (
                        <span className="px-2.5 py-1 rounded-md bg-blue-600 text-white text-[10px] font-bold font-mono uppercase flex items-center gap-1 shadow-sm">
                          <FolderDown className="w-3 h-3" />
                          Modul Drive
                        </span>
                      )}
                    </div>

                    {/* Play Button for Video types */}
                    {(item.type === 'video_storybook' || item.type === 'video_ai') && (
                      <button
                        onClick={() => onOpenVideoModal(item)}
                        className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer"
                        aria-label="Putar video"
                      >
                        <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl group-hover:bg-red-500 transition-colors">
                          <Play className="w-6 h-6 fill-current ml-0.5" />
                        </div>
                      </button>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold">
                      <span>Karya Guru: <strong>{item.creator}</strong></span>
                    </div>

                    <h3 className="text-base font-bold text-white leading-snug group-hover:text-amber-300 transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0 border-t border-slate-800/80 mt-4">
                  {/* YouTube Video Types */}
                  {(item.type === 'video_storybook' || item.type === 'video_ai') && (
                    <div className="flex items-center gap-2 pt-4">
                      <button
                        onClick={() => onOpenVideoModal(item)}
                        className="flex-1 px-3 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Tonton Video</span>
                      </button>
                      {item.youtubeUrl && (
                        <a
                          href={item.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-xs transition-colors border border-slate-700"
                          title="Buka di YouTube"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <button
                        onClick={() => handleCopyLink(item)}
                        className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs transition-colors border border-slate-700"
                        title="Salin tautan"
                      >
                        {copiedId === item.id ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Share2 className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  )}

                  {/* Game Canva */}
                  {item.type === 'game_canva' && (
                    <div className="flex items-center gap-2 pt-4">
                      <a
                        href={item.externalUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm text-center"
                      >
                        <Gamepad2 className="w-3.5 h-3.5" />
                        <span>Mainkan Game Canva</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <button
                        onClick={() => handleCopyLink(item)}
                        className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs transition-colors border border-slate-700"
                        title="Salin tautan"
                      >
                        {copiedId === item.id ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Share2 className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  )}

                  {/* Asesmen Digital AI Studio */}
                  {item.type === 'asesmen_digital' && (
                    <div className="flex items-center gap-2 pt-4">
                      <a
                        href={item.externalUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm text-center"
                      >
                        <FileCheck className="w-3.5 h-3.5" />
                        <span>Buka Asesmen AI Studio</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <button
                        onClick={() => handleCopyLink(item)}
                        className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs transition-colors border border-slate-700"
                        title="Salin tautan"
                      >
                        {copiedId === item.id ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Share2 className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  )}

                  {/* Modul Pembelajaran Google Drive */}
                  {item.type === 'modul_pdf' && (
                    <div className="flex items-center gap-2 pt-4">
                      <a
                        href={item.externalUrl || item.downloadUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm text-center"
                      >
                        <FolderDown className="w-3.5 h-3.5" />
                        <span>Buka Folder Drive</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <button
                        onClick={() => handleCopyLink(item)}
                        className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs transition-colors border border-slate-700"
                        title="Salin tautan Google Drive"
                      >
                        {copiedId === item.id ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Share2 className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
