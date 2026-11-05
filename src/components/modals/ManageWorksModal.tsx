import React, { useState } from 'react';
import { X, Plus, Trash2, Copy, Check, RotateCcw, Youtube, FileText, Globe, Layers, AlertCircle } from 'lucide-react';
import { IhtProduct, ProductType, saveStoredIhtProducts, resetStoredIhtProducts } from '../../data/ihtData';

interface ManageWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: IhtProduct[];
  onUpdateProducts: (newProducts: IhtProduct[]) => void;
}

export const ManageWorksModal: React.FC<ManageWorksModalProps> = ({
  isOpen,
  onClose,
  products,
  onUpdateProducts,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'tambah' | 'daftar' | 'ekspor'>('tambah');
  const [copied, setCopied] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Form states
  const [type, setType] = useState<ProductType>('video_storybook');
  const [title, setTitle] = useState('');
  const [creator, setCreator] = useState('Nancy');
  const [description, setDescription] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [externalUrl, setExternalUrl] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  const teacherOptions = [
    'Nancy, S.Pd',
    'Evo Ellendra, S.Pd',
    'Maisyarah',
    'Jefrida Agustina, S.Pd',
    'Frederik Palintong',
    'Herlina Palinoan, S.Pd',
    'Erickson Sinaga',
    'Aulina, S.Ag',
    'Winasuarti Uti, S.Pd',
    'Ari Setyawan',
    'Aprilianus, S.Pd',
    'Abidin, S.Pd',
    'Annahdhi Dzikri Fajriyah, S.Pd',
    'Winda Luben',
  ];

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !creator.trim()) {
      alert('Mohon isi judul dan nama guru');
      return;
    }

    let youtubeId = '';
    const isVideo = type === 'video_storybook' || type === 'video_ai';
    if (isVideo && youtubeUrl) {
      const match = youtubeUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
      if (match) {
        youtubeId = match[1];
      }
    }

    const defaultThumbs: Record<ProductType, string> = {
      video_storybook: youtubeId ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` : 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80',
      video_ai: youtubeId ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` : 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80',
      game_canva: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80',
      asesmen_digital: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80',
      modul_pdf: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&q=80',
    };

    const typeLabels: Record<ProductType, string> = {
      video_storybook: 'YouTube Storybook',
      video_ai: 'YouTube Video AI',
      game_canva: 'Game Edukasi Canva',
      asesmen_digital: 'Asesmen AI Studio',
      modul_pdf: 'Modul Ajar PDF',
    };

    const newProduct: IhtProduct = {
      id: `custom-${Date.now()}`,
      type,
      subTypeLabel: typeLabels[type],
      title: title.trim(),
      creator: creator.trim(),
      description: description.trim() || `Karya inovasi pembelajaran guru SMAN 15 Malinau.`,
      thumbnailUrl: thumbnailUrl.trim() || defaultThumbs[type],
      youtubeId: youtubeId || undefined,
      youtubeUrl: isVideo ? youtubeUrl.trim() : undefined,
      externalUrl: !isVideo ? externalUrl.trim() : undefined,
      dateAdded: 'November 2026',
    };


    const updated = [newProduct, ...products];
    onUpdateProducts(updated);
    saveStoredIhtProducts(updated);

    // Reset form
    setTitle('');
    setDescription('');
    setYoutubeUrl('');
    setExternalUrl('');
    setThumbnailUrl('');

    setSuccessMessage('Karya baru berhasil ditambahkan dan tersimpan otomatis!');
    setTimeout(() => setSuccessMessage(''), 3000);
    setActiveTab('daftar');
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm('Yakin ingin menghapus karya ini dari daftar?')) {
      const updated = products.filter((p) => p.id !== id);
      onUpdateProducts(updated);
      saveStoredIhtProducts(updated);
    }
  };

  const handleResetData = () => {
    if (confirm('Kembalikan semua karya ke data awal resmi IHT 2026?')) {
      const reset = resetStoredIhtProducts();
      onUpdateProducts(reset);
      setSuccessMessage('Data berhasil dikembalikan ke default resmi.');
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(products, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div>
            <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
              Sistem Pengelolaan Mandiri
            </span>
            <h2 className="text-lg font-bold text-white">
              Kelola Galeri Karya & Inovasi IHT Guru
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/50 px-6 gap-2 pt-2">
          <button
            onClick={() => setActiveTab('tambah')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'tambah'
                ? 'border-amber-400 text-amber-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            + Tambah Karya Baru
          </button>
          <button
            onClick={() => setActiveTab('daftar')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'daftar'
                ? 'border-amber-400 text-amber-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Daftar Karya Aktif ({products.length})
          </button>
          <button
            onClick={() => setActiveTab('ekspor')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'ekspor'
                ? 'border-amber-400 text-amber-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Ekspor / Backup Data
          </button>
        </div>

        {/* Success Banner */}
        {successMessage && (
          <div className="mx-6 mt-4 p-3 bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs rounded-xl flex items-center gap-2">
            <Check className="w-4 h-4 shrink-0 text-emerald-400" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Tab Contents */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4 text-slate-200">
          {activeTab === 'tambah' && (
            <form onSubmit={handleAddProduct} className="space-y-4 text-xs sm:text-sm">
              <div className="p-3 bg-blue-950/40 border border-blue-900/50 rounded-xl text-xs text-blue-200">
                <p>
                  <strong>Catatan:</strong> Karya yang ditambahkan akan otomatis tersimpan di penyimpanan browser (Local Storage) dan langsung muncul di website. Anda juga dapat menggunakan placeholder seperti <code>[LINK PDF MODUL]</code>, <code>[LINK YOUTUBE]</code>, atau <code>[LINK MEDIA PEMBELAJARAN]</code> jika tautan resmi belum siap.
                </p>
              </div>

              {/* Tipe Produk */}
              <div>
                <label className="block text-slate-400 text-xs font-semibold uppercase mb-1.5">
                  Kategori Produk IHT
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'video_storybook', label: 'YouTube Storybook', icon: Youtube },
                    { id: 'video_ai', label: 'YouTube Video AI', icon: Youtube },
                    { id: 'game_canva', label: 'Game Canva', icon: Globe },
                    { id: 'asesmen_digital', label: 'Asesmen AI Studio', icon: FileText },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setType(item.id as ProductType)}
                        className={`p-2.5 rounded-lg border text-left flex items-center gap-2 transition-colors ${
                          type === item.id
                            ? 'bg-amber-400/10 border-amber-400 text-amber-300 font-semibold'
                            : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        <span className="truncate text-xs">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Judul & Guru */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 text-xs font-medium mb-1">
                    Nama Guru Kreator *
                  </label>
                  <select
                    value={creator}
                    onChange={(e) => setCreator(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-400 text-xs sm:text-sm"
                  >
                    {teacherOptions.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 text-xs font-medium mb-1">
                    Judul Karya / Produk *
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Contoh: Storybook Pembelajaran Interaktif"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-400 text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Tautan Berdasarkan Kategori */}
              {(type === 'video_storybook' || type === 'video_ai') ? (
                <div>
                  <label className="block text-slate-300 text-xs font-medium mb-1">
                    Link Video YouTube (contoh: https://youtu.be/AOgZvgnJWVY)
                  </label>
                  <input
                    type="text"
                    value={youtubeUrl}
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                    placeholder="https://youtu.be/..."
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-400 text-xs sm:text-sm"
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-slate-300 text-xs font-medium mb-1">
                    {type === 'game_canva' ? 'Link Game Canva' : 'Link Aplikasi Asesmen AI Studio'}
                  </label>
                  <input
                    type="text"
                    value={externalUrl}
                    onChange={(e) => setExternalUrl(e.target.value)}
                    placeholder={type === 'game_canva' ? 'https://...my.canva.site/...' : 'https://ai.studio/apps/...'}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-400 text-xs sm:text-sm"
                  />
                </div>
              )}


              {/* Deskripsi */}
              <div>
                <label className="block text-slate-300 text-xs font-medium mb-1">
                  Deskripsi Singkat Karya
                </label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Ringkasan materi, model pembelajaran yang diterapkan, dan manfaat untuk siswa."
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-400 text-xs sm:text-sm"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs sm:text-sm transition-colors flex items-center gap-1.5 shadow-md"
                >
                  <Plus className="w-4 h-4" />
                  Simpan Karya ke Website
                </button>
              </div>
            </form>
          )}

          {activeTab === 'daftar' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                <span>Total Karya: <strong className="text-white">{products.length}</strong></span>
                <button
                  onClick={handleResetData}
                  className="text-amber-400 hover:text-amber-300 flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset ke Data Asli IHT
                </button>
              </div>

              <div className="space-y-2 max-h-[50vh] overflow-y-auto pr-1">
                {products.map((p, idx) => (
                  <div
                    key={p.id}
                    className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <span className="font-mono text-slate-500 w-5 text-right">{idx + 1}.</span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-700 text-amber-300">
                            {p.subTypeLabel || p.type.replace('_', ' ')}
                          </span>
                        </div>
                        <h4 className="font-semibold text-white truncate mt-0.5">{p.title}</h4>
                        <p className="text-slate-400 text-[11px]">Guru Kreator: <span className="text-slate-200 font-medium">{p.creator}</span></p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteProduct(p.id)}
                      className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-950/40 rounded-lg transition-colors shrink-0"
                      title="Hapus karya"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ekspor' && (
            <div className="space-y-3">
              <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700 text-xs text-slate-300 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p>
                  Anda dapat menyalin struktur data JSON di bawah ini untuk disimpan sebagai arsip permanen atau dimasukkan langsung ke kode proyek <code>ihtData.ts</code> kapan pun Anda ingin memperbarui repositori secara permanen.
                </p>
              </div>

              <div className="relative">
                <textarea
                  readOnly
                  rows={10}
                  value={JSON.stringify(products, null, 2)}
                  className="w-full p-3 font-mono text-[11px] bg-slate-950 border border-slate-800 rounded-lg text-slate-300 focus:outline-none"
                />
                <button
                  onClick={handleCopyJson}
                  className="absolute top-3 right-3 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 border border-slate-600 shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      Tersalin!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Salin Kode JSON
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/90 flex justify-between items-center text-xs text-slate-400">
          <span>SMAN 15 Malinau · Sistem Manajemen Karya Digital</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg"
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};
