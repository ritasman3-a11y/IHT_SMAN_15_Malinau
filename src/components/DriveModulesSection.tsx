import React, { useState } from 'react';
import { 
  FolderDown, 
  ExternalLink, 
  Copy, 
  Check, 
  FolderArchive, 
  Sparkles, 
  FileText, 
  BookOpen, 
  Download, 
  Layers,
  ArrowUpRight,
  Eye,
  X
} from 'lucide-react';
import { OFFICIAL_MODULE_FOLDERS, ModuleDriveFolder } from '../data/ihtData';

export const DriveModulesSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewFolder, setPreviewFolder] = useState<ModuleDriveFolder | null>(null);

  const handleCopy = (folder: ModuleDriveFolder) => {
    navigator.clipboard.writeText(folder.driveUrl);
    setCopiedId(folder.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div id="modul-pembelajaran-drive" className="mb-14">
      {/* Container Box */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950/30 to-slate-900 border-2 border-blue-500/30 hover:border-blue-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden transition-all duration-300">
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold mb-2">
              <FolderArchive className="w-3.5 h-3.5 text-blue-400" />
              <span>Google Drive Repository Resmi</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-black text-white flex items-center gap-2">
              <span>Repositori Modul Pembelajaran IHT</span>
              <span className="text-amber-400 font-sans text-xs sm:text-sm font-bold px-2.5 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/30">
                2 Folder Resmi
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Akses dan unduh seluruh berkas Modul Ajar, Perangkat Pembelajaran, RPP, dan LKPD digital hasil karya guru SMAN 15 Malinau langsung melalui Google Drive resmi.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0 text-xs font-mono text-slate-400 bg-slate-950/70 px-3.5 py-2 rounded-xl border border-slate-800">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Format: PDF, Dokumen & Media</span>
          </div>
        </div>

        {/* 2 Folder Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {OFFICIAL_MODULE_FOLDERS.map((folder) => (
            <div
              key={folder.id}
              className="bg-slate-950/80 border border-slate-800 hover:border-blue-400/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl group"
            >
              <div>
                {/* Folder Top Row */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FolderDown className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-mono font-bold uppercase px-2.5 py-1 rounded bg-amber-400/10 text-amber-300 border border-amber-400/30">
                    {folder.badge}
                  </span>
                </div>

                {/* Folder Titles */}
                <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wide">
                  {folder.category}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">
                  {folder.title}
                </h4>
                <p className="text-xs font-medium text-slate-400 mt-0.5">
                  {folder.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  {folder.description}
                </p>

                {/* Folder Link Pill Display */}
                <div className="mt-4 p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 flex items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
                  <span className="truncate max-w-[240px] text-slate-300">
                    drive.google.com/drive/folders/{folder.folderId}
                  </span>
                  <button
                    onClick={() => handleCopy(folder)}
                    className="p-1 hover:text-white text-slate-400 transition-colors shrink-0"
                    title="Salin tautan Google Drive"
                  >
                    {copiedId === folder.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <a
                  href={folder.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-blue-600/30"
                >
                  <FolderDown className="w-4 h-4" />
                  <span>Buka Google Drive</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </a>

                <button
                  onClick={() => setPreviewFolder(folder)}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors flex items-center gap-1.5 border border-slate-700"
                  title="Pratinjau di dalam website"
                >
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pratinjau</span>
                </button>

                <button
                  onClick={() => handleCopy(folder)}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs transition-colors border border-slate-700"
                  title="Salin tautan"
                >
                  {copiedId === folder.id ? (
                    <span className="text-emerald-400 font-medium text-[11px] flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helpful Note */}
        <div className="relative z-10 mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-slate-300">
            <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Folder Google Drive dapat dibuka bebas tanpa memerlukan izin akses khusus (Publik Berbagi).</span>
          </div>
          <span className="font-mono text-[11px] text-amber-400/90 font-semibold">
            SMAN 15 Malinau · Tahun Ajaran 2026/2027
          </span>
        </div>
      </div>

      {/* Embedded Folder Preview Modal */}
      {previewFolder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div 
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/95">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600/20 text-blue-400 rounded-lg">
                  <FolderArchive className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-amber-400 font-semibold uppercase">
                    Google Drive Folder Preview
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white line-clamp-1">
                    {previewFolder.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={previewFolder.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Buka di Tab Baru</span>
                </a>
                <button
                  onClick={() => setPreviewFolder(null)}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded Iframe */}
            <div className="flex-1 bg-slate-950 relative">
              <iframe
                src={previewFolder.embedUrl}
                title={previewFolder.title}
                className="w-full h-full border-0"
                allow="autoplay"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between text-xs text-slate-400">
              <span>Jika pratinjau browser dibatasi oleh setelan Google, klik tombol <strong>Buka di Tab Baru</strong>.</span>
              <button
                onClick={() => setPreviewFolder(null)}
                className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
