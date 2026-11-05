import React, { useState } from 'react';
import { X, FileText, Download, ExternalLink, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, BookOpen, Check } from 'lucide-react';
import { IhtProduct } from '../../data/ihtData';

interface PdfModalProps {
  product: IhtProduct | null;
  onClose: () => void;
}

export const PdfModal: React.FC<PdfModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const [page, setPage] = useState<number>(1);
  const [zoom, setZoom] = useState<number>(100);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);
  const totalPages = 6;

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3.5 border-b border-slate-800 bg-slate-900/95">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/20 text-red-400 rounded-lg">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Dokumen Modul Ajar PDF {product.subject ? `· ${product.subject}` : ''}
              </p>
              <h3 className="text-sm sm:text-base font-semibold text-white line-clamp-1">
                {product.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom controls */}
            <div className="hidden sm:flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700">
              <button
                onClick={() => setZoom((z) => Math.max(75, z - 15))}
                className="p-1 text-slate-300 hover:text-white rounded"
                title="Perkecil"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="px-2 text-xs font-mono text-slate-300 tabular-nums">{zoom}%</span>
              <button
                onClick={() => setZoom((z) => Math.min(150, z + 15))}
                className="p-1 text-slate-300 hover:text-white rounded"
                title="Perbesar"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* Action buttons */}
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg font-semibold transition-colors shadow-sm"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  Mengunduh...
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Content Canvas */}
        <div className="flex-1 overflow-auto bg-slate-950 p-4 sm:p-8 flex justify-center items-start">
          <div 
            style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
            className="w-full max-w-2xl bg-white text-slate-900 rounded-lg shadow-2xl p-8 sm:p-12 transition-transform duration-150 min-h-[750px] flex flex-col justify-between border border-slate-200"
          >
            {/* Header Kertas Kop Resmi Sekolah */}
            <div>
              <div className="border-b-2 border-slate-900 pb-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold tracking-widest text-blue-900 uppercase">
                      Pemerintah Provinsi Kalimantan Utara
                    </span>
                    <h2 className="text-lg sm:text-xl font-serif font-bold text-slate-950 leading-tight">
                      SMAN 15 MALINAU
                    </h2>
                    <p className="text-xs text-slate-600">
                      Jl. Trans Kalimantan No. 15, Kabupaten Malinau · Email: info@sman15malinau.sch.id
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono bg-blue-50 text-blue-900 border border-blue-200 px-2 py-0.5 rounded">
                      IHT NOV 2026
                    </span>
                    <p className="text-[11px] text-slate-500 mt-1">Kurikulum Merdeka</p>
                  </div>
                </div>
              </div>

              {/* Module Metadata Box */}
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {product.title}
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                  <div>
                    <span className="text-slate-500">Mata Pelajaran:</span>{' '}
                    <strong>{product.subject || 'Media Pembelajaran IHT'}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500">Fase / Kelas:</span>{' '}
                    <strong>{product.faseOrClass || 'Fase E / F (SMA)'}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500">Penyusun:</span>{' '}
                    <strong>{product.creator}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500">Tahun Penyusunan:</span>{' '}
                    <strong>2026/2027</strong>
                  </div>
                </div>
              </div>

              {/* Page Content depending on current page */}
              {page === 1 && (
                <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <div>
                    <h4 className="font-bold text-blue-950 uppercase tracking-wide text-xs mb-1 border-b border-slate-200 pb-1">
                      A. Capaian Pembelajaran (CP) & Tujuan Pembelajaran (TP)
                    </h4>
                    <p className="mt-1">
                      Peserta didik mampu memahami secara holistik konsep fundamental mata pelajaran {product.subject || 'terkait'}, merefleksikan fenomena kontekstual di lingkungan Kabupaten Malinau dan Kalimantan Utara, serta menerapkan keterampilan berpikir kritis dalam pemecahan masalah nyata.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-blue-950 uppercase tracking-wide text-xs mb-1 border-b border-slate-200 pb-1">
                      B. Profil Pelajar Pancasila
                    </h4>
                    <ul className="list-disc list-inside space-y-1 mt-1 text-slate-600">
                      <li><strong>Bernalar Kritis:</strong> Mengidentifikasi dan menganalisis informasi valid.</li>
                      <li><strong>Kreatif:</strong> Menghasilkan gagasan dan karya inovatif orisinal.</li>
                      <li><strong>Gotong Royong:</strong> Berkolaborasi dalam diskusi kelompok aktif.</li>
                      <li><strong>Mandiri:</strong> Bertanggung jawab terhadap proses belajar.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-blue-950 uppercase tracking-wide text-xs mb-1 border-b border-slate-200 pb-1">
                      C. Deskripsi Inti Pembelajaran
                    </h4>
                    <p className="mt-1 italic text-slate-800 bg-amber-50/60 p-3 rounded border border-amber-200/60">
                      "{product.description}"
                    </p>
                  </div>
                </div>
              )}

              {page === 2 && (
                <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <h4 className="font-bold text-blue-950 uppercase tracking-wide text-xs mb-1 border-b border-slate-200 pb-1">
                    D. Pemetaan Kebutuhan Belajar & Diferensiasi
                  </h4>
                  <p>
                    Strategi pembelajaran berdiferensiasi dirancang untuk mengakomodasi profil belajar murid, baik gaya visual, auditori, maupun kinestetik dengan dukungan media digital interaktif.
                  </p>
                  <div className="border border-slate-200 rounded p-3 bg-slate-50 space-y-2 text-xs">
                    <p><strong>1. Diferensiasi Konten:</strong> Penyediaan modul teks bergambar, video penjelas YouTube, dan materi interaktif.</p>
                    <p><strong>2. Diferensiasi Proses:</strong> Diskusi terbimbing, simulasi laboratorium mandiri, dan studi kasus lokal Malinau.</p>
                    <p><strong>3. Diferensiasi Produk:</strong> Siswa dapat memilih menyajikan laporan akhir dalam bentuk infografis, video ringkas, atau laporan esai ilmiah.</p>
                  </div>
                </div>
              )}

              {page >= 3 && (
                <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <h4 className="font-bold text-blue-950 uppercase tracking-wide text-xs mb-1 border-b border-slate-200 pb-1">
                    E. Alur Aktivitas & Asesmen (Halaman {page})
                  </h4>
                  <p>
                    Bagian ini memuat petunjuk kerja peserta didik, rubrik asesmen formatif, soal uji pemahaman, serta lembar refleksi diri untuk mengukur ketercapaian tujuan pembelajaran.
                  </p>
                  <div className="p-4 bg-blue-50/50 border border-blue-200 rounded text-xs space-y-2">
                    <p className="font-semibold text-blue-950">Catatan Pengembang Media:</p>
                    <p>File ini merupakan pratinjau interaktif modul hasil karya IHT SMAN 15 Malinau. Modul lengkap berformat PDF beresolusi tinggi dapat diunduh melalui tombol <strong>Download PDF</strong> atau diakses melalui Google Drive sekolah.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Kertas Dokumen */}
            <div className="border-t border-slate-200 pt-4 mt-8 flex items-center justify-between text-[11px] text-slate-400">
              <span>SMAN 15 Malinau · Karya IHT 2026</span>
              <span className="font-mono font-medium text-slate-600">Halaman {page} dari {totalPages}</span>
              <span>Dokumen Resmi Pembelajaran</span>
            </div>
          </div>
        </div>

        {/* Bottom Pager Bar */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-slate-800 bg-slate-900 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>Dokumen: <strong className="text-slate-200">{product.pdfLink || '[LINK PDF MODUL]'}</strong></span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="p-1.5 text-slate-300 hover:text-white disabled:opacity-40 rounded bg-slate-800"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-slate-200">{page} / {totalPages}</span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="p-1.5 text-slate-300 hover:text-white disabled:opacity-40 rounded bg-slate-800"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <a
            href={product.downloadUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!product.downloadUrl || product.downloadUrl.includes('[LINK')) {
                e.preventDefault();
                handleDownload();
              }
            }}
            className="hidden sm:inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Buka di Google Drive
          </a>
        </div>
      </div>
    </div>
  );
};
