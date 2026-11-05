import React, { useState } from 'react';
import { 
  Play, 
  ExternalLink, 
  Gamepad2, 
  FileCheck, 
  Sparkles, 
  Youtube, 
  CheckCircle2, 
  FolderDown,
  Users,
  Award,
  BookOpen,
  Search
} from 'lucide-react';
import { 
  TEACHER_IHT_RECORDS, 
  TeacherIhtRecord, 
  IhtProduct,
  OFFICIAL_TEACHERS_DIRECTORY,
  OfficialTeacherDirectoryItem
} from '../data/ihtData';

interface TeacherRecapTableProps {
  onWatchVideo: (product: IhtProduct) => void;
}

export const TeacherRecapTable: React.FC<TeacherRecapTableProps> = ({ onWatchVideo }) => {
  const [activeTab, setActiveTab] = useState<'karya_iht' | 'semua_guru'>('karya_iht');
  const [searchTeacher, setSearchTeacher] = useState<string>('');

  const handleWatchStorybook = (rec: TeacherIhtRecord) => {
    if (!rec.youtubeStorybookUrl || !rec.youtubeStorybookId) return;
    onWatchVideo({
      id: `sb-${rec.no}`,
      type: 'video_storybook',
      subTypeLabel: 'YouTube Storybook',
      title: rec.youtubeStorybookTitle || `Storybook Pembelajaran (${rec.fullName || rec.name})`,
      creator: rec.fullName || rec.name,
      subject: rec.subject,
      description: `Media digital storybook interaktif mata pelajaran ${rec.subject} karya ${rec.fullName || rec.name} dalam kegiatan IHT SMAN 15 Malinau.`,
      thumbnailUrl: `https://img.youtube.com/vi/${rec.youtubeStorybookId}/hqdefault.jpg`,
      youtubeId: rec.youtubeStorybookId,
      youtubeUrl: rec.youtubeStorybookUrl,
    });
  };

  const handleWatchAiVideo = (rec: TeacherIhtRecord) => {
    if (!rec.youtubeAiUrl || !rec.youtubeAiId) return;
    onWatchVideo({
      id: `ai-${rec.no}`,
      type: 'video_ai',
      subTypeLabel: 'YouTube Video AI',
      title: rec.youtubeAiTitle || `Video AI Pembelajaran (${rec.fullName || rec.name})`,
      creator: rec.fullName || rec.name,
      subject: rec.subject,
      description: `Video pembelajaran berbasis AI mata pelajaran ${rec.subject} karya ${rec.fullName || rec.name} dalam kegiatan IHT SMAN 15 Malinau.`,
      thumbnailUrl: `https://img.youtube.com/vi/${rec.youtubeAiId}/hqdefault.jpg`,
      youtubeId: rec.youtubeAiId,
      youtubeUrl: rec.youtubeAiUrl,
    });
  };

  const filteredAllTeachers = OFFICIAL_TEACHERS_DIRECTORY.filter((t) => 
    t.fullName.toLowerCase().includes(searchTeacher.toLowerCase()) ||
    t.nip.toLowerCase().includes(searchTeacher.toLowerCase()) ||
    t.subject.toLowerCase().includes(searchTeacher.toLowerCase())
  );

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl mb-12">
      {/* Table Header Banner */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-950 via-slate-900 to-slate-900 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Rekapitulasi Resmi Guru & Hasil Karya IHT</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-black text-white">
            Daftar Guru, NIP, Mata Pelajaran & Produk Digital
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Data resmi pendidik SMAN 15 Malinau lengkap dengan NIP/NUPTK, mata pelajaran yang diampu, serta tautan produk media pembelajaran.
          </p>
        </div>

        {/* Tab Switcher: Karya IHT (7) vs Semua Dewan Guru (14) */}
        <div className="flex items-center p-1 bg-slate-950 border border-slate-800 rounded-2xl shrink-0 self-start md:self-auto">
          <button
            onClick={() => setActiveTab('karya_iht')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'karya_iht'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Tabel Link IHT (14 Guru)</span>
          </button>
          <button
            onClick={() => setActiveTab('semua_guru')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'semua_guru'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Daftar Guru & NIP</span>
          </button>
        </div>
      </div>

      {/* Quick Google Drive Module Access Strip */}
      <div className="px-6 py-3.5 bg-blue-950/40 border-b border-blue-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-200">
          <FolderDown className="w-4 h-4 text-blue-400 shrink-0" />
          <span><strong>Modul Pembelajaran Guru:</strong> Berkas modul ajar dan LKPD tersedia lengkap di Google Drive resmi.</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://drive.google.com/drive/folders/1ObOhCl0GJcrwBFLNW6gBDg6bTsDZEo7k?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/30 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 transition-all font-semibold text-[11px]"
          >
            <span>Buka Modul (Bagian 1)</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1LDa8U3ThMnRmc3bNw-Dw7rGCEnMUK9Pm?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/30 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 transition-all font-semibold text-[11px]"
          >
            <span>Buka Modul (Bagian 2)</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* VIEW 1: TABEL KARYA IHT GURU (LENGKAP DENGAN NAMA, NIP, MAPEL & SEMUA LINK KARYA) */}
      {activeTab === 'karya_iht' && (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm text-slate-200 border-collapse">
            <thead>
              <tr className="bg-slate-950 text-slate-400 font-mono text-[11px] uppercase tracking-wider border-b border-slate-800">
                <th className="py-4 px-4 text-center w-12">No</th>
                <th className="py-4 px-5 min-w-[200px]">Nama Lengkap & NIP</th>
                <th className="py-4 px-4 min-w-[140px]">Mata Pelajaran</th>
                <th className="py-4 px-4 min-w-[170px]">Link Game Canva</th>
                <th className="py-4 px-4 min-w-[190px]">Link YouTube Storybook</th>
                <th className="py-4 px-4 min-w-[190px]">Link YouTube Video AI</th>
                <th className="py-4 px-4 min-w-[180px]">Link Asesmen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {TEACHER_IHT_RECORDS.map((rec) => (
                <tr 
                  key={rec.no}
                  className="hover:bg-slate-800/50 transition-colors group"
                >
                  {/* 1. No */}
                  <td className="py-4 px-4 text-center font-mono font-bold text-amber-400">
                    {rec.no}
                  </td>

                  {/* 2. Nama Guru & NIP */}
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-blue-900/60 border border-blue-700/60 flex items-center justify-center font-bold text-amber-300 text-xs shrink-0">
                        {rec.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-white whitespace-nowrap text-xs sm:text-sm">
                          {rec.fullName || rec.name}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                          NIP: <span className="text-slate-300">{rec.nip}</span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* 3. Mata Pelajaran */}
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30 whitespace-nowrap">
                      {rec.subject}
                    </span>
                  </td>

                  {/* 4. Link Game Canva */}
                  <td className="py-4 px-4">
                    {rec.gameCanvaUrl ? (
                      <a
                        href={rec.gameCanvaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 transition-all font-medium text-xs group/btn shadow-xs"
                        title={rec.gameCanvaTitle}
                      >
                        <Gamepad2 className="w-3.5 h-3.5 text-blue-400 group-hover/btn:text-white shrink-0" />
                        <span className="truncate max-w-[130px]">Buka Game</span>
                        <ExternalLink className="w-3 h-3 shrink-0 opacity-70" />
                      </a>
                    ) : (
                      <span className="text-slate-500 italic text-[11px]">- (Menunggu Upload)</span>
                    )}
                  </td>

                  {/* 5. Link YouTube Storybook */}
                  <td className="py-4 px-4">
                    {rec.youtubeStorybookUrl ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleWatchStorybook(rec)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-medium text-xs transition-all shadow-xs"
                          title="Putar langsung di website"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>Putar Video</span>
                        </button>
                        <a
                          href={rec.youtubeStorybookUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                          title="Buka di YouTube"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    ) : (
                      <span className="text-slate-500 italic text-[11px]">- (Menunggu Upload)</span>
                    )}
                  </td>

                  {/* 6. Link YouTube Video AI */}
                  <td className="py-4 px-4">
                    {rec.youtubeAiUrl ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleWatchAiVideo(rec)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs transition-all shadow-xs"
                          title="Putar video AI langsung"
                        >
                          <Youtube className="w-3.5 h-3.5" />
                          <span>Video AI</span>
                        </button>
                        <a
                          href={rec.youtubeAiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                          title="Buka di YouTube"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    ) : (
                      <span className="text-slate-500 italic text-[11px]">- (Menunggu Upload)</span>
                    )}
                  </td>

                  {/* 7. Link Asesmen */}
                  <td className="py-4 px-4">
                    {rec.asesmenUrl ? (
                      <a
                        href={rec.asesmenUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 transition-all font-medium text-xs group/btn shadow-xs"
                        title="Buka Aplikasi Asesmen Google AI Studio"
                      >
                        <FileCheck className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:text-white shrink-0" />
                        <span className="truncate max-w-[120px]">Aplikasi Asesmen</span>
                        <ExternalLink className="w-3 h-3 shrink-0 opacity-70" />
                      </a>
                    ) : (
                      <span className="text-slate-500 italic text-[11px]">- (Menunggu Upload)</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* VIEW 2: TABEL SELURUH DEWAN GURU SMAN 15 MALINAU (14 GURU LENGKAP) */}
      {activeTab === 'semua_guru' && (
        <div>
          {/* Quick Filter Box */}
          <div className="p-4 bg-slate-950/70 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-xs text-slate-300">
              Menampilkan <strong>{filteredAllTeachers.length}</strong> guru resmi SMAN 15 Malinau berdasarkan daftar pendidik.
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTeacher}
                onChange={(e) => setSearchTeacher(e.target.value)}
                placeholder="Cari nama, NIP, atau mata pelajaran..."
                className="w-full pl-8 pr-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-slate-200 border-collapse">
              <thead>
                <tr className="bg-slate-950 text-slate-400 font-mono text-[11px] uppercase tracking-wider border-b border-slate-800">
                  <th className="py-4 px-4 text-center w-12">No</th>
                  <th className="py-4 px-5 min-w-[220px]">Nama Lengkap</th>
                  <th className="py-4 px-5 min-w-[200px]">NIP / NUPTK</th>
                  <th className="py-4 px-5 min-w-[180px]">Mata Pelajaran</th>
                  <th className="py-4 px-4 text-center min-w-[140px]">Partisipasi IHT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {filteredAllTeachers.map((teacher) => (
                  <tr 
                    key={teacher.no}
                    className="hover:bg-slate-800/50 transition-colors group"
                  >
                    <td className="py-4 px-4 text-center font-mono font-bold text-amber-400">
                      {teacher.no}
                    </td>
                    <td className="py-4 px-5 font-bold text-white">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-slate-200 text-xs shrink-0">
                          {teacher.fullName.charAt(0)}
                        </div>
                        <span>{teacher.fullName}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 font-mono text-slate-300">
                      {teacher.nip}
                    </td>
                    <td className="py-4 px-5">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-950/60 text-blue-300 border border-blue-800/60">
                        {teacher.subject}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      {teacher.hasIhtProducts ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>Produk IHT Siap</span>
                        </span>
                      ) : (
                        <span className="text-slate-500 text-[11px] font-medium">
                          Peserta IHT 2026
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Mobile Card List View for ultra-responsive experience */}
      <div className="md:hidden p-4 space-y-4 bg-slate-950/60 divide-y divide-slate-800">
        {TEACHER_IHT_RECORDS.map((rec) => (
          <div key={rec.no} className="pt-4 first:pt-0 space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center font-mono shrink-0">
                  {rec.no}
                </span>
                <div>
                  <h4 className="font-bold text-white text-sm">{rec.fullName || rec.name}</h4>
                  <p className="text-[11px] font-mono text-slate-400">NIP: {rec.nip}</p>
                </div>
              </div>

              <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30 shrink-0">
                {rec.subject}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              {/* Canva Game */}
              {rec.gameCanvaUrl ? (
                <a
                  href={rec.gameCanvaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-800 text-blue-300 flex items-center justify-center gap-1.5 font-medium"
                >
                  <Gamepad2 className="w-4 h-4 text-blue-400" />
                  <span>Game Canva</span>
                </a>
              ) : (
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-500 text-center text-[11px] italic">
                  - (Menunggu)
                </div>
              )}

              {/* Asesmen */}
              {rec.asesmenUrl ? (
                <a
                  href={rec.asesmenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 flex items-center justify-center gap-1.5 font-medium"
                >
                  <FileCheck className="w-4 h-4 text-emerald-400" />
                  <span>Asesmen AI</span>
                </a>
              ) : (
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-500 text-center text-[11px] italic">
                  - (Menunggu)
                </div>
              )}

              {/* Storybook */}
              {rec.youtubeStorybookUrl ? (
                <button
                  onClick={() => handleWatchStorybook(rec)}
                  className="p-2.5 rounded-xl bg-red-600 text-white flex items-center justify-center gap-1.5 font-medium"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Storybook</span>
                </button>
              ) : (
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-500 text-center text-[11px] italic">
                  - (Menunggu)
                </div>
              )}

              {/* Video AI */}
              {rec.youtubeAiUrl ? (
                <button
                  onClick={() => handleWatchAiVideo(rec)}
                  className="p-2.5 rounded-xl bg-purple-600 text-white flex items-center justify-center gap-1.5 font-medium"
                >
                  <Youtube className="w-4 h-4" />
                  <span>Video AI</span>
                </button>
              ) : (
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-500 text-center text-[11px] italic">
                  - (Menunggu)
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
