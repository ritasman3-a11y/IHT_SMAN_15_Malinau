import React, { useState } from 'react';
import { 
  Building, 
  Compass, 
  Target, 
  Users, 
  Award, 
  History, 
  GraduationCap, 
  CheckCircle, 
  MapPin, 
  Mail, 
  Phone,
  FileCheck2
} from 'lucide-react';
import { SCHOOL_INFO, TEACHERS_LIST } from '../data/schoolData';

export const SchoolProfileSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sejarah' | 'identitas' | 'visi-misi' | 'tujuan' | 'guru'>('sejarah');

  return (
    <section id="profil-section" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-900 uppercase tracking-widest font-mono">
            Mengenal Lebih Dekat
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-slate-950 mt-1">
            Profil Resmi SMAN 15 Malinau
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Pusat keunggulan pendidikan menengah atas di Kabupaten Malinau, Kalimantan Utara dengan komitmen mencetak insan berkarakter mulia dan berprestasi tinggi.
          </p>

          {/* Tab Navigation Controls */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 mt-8 bg-slate-200/80 rounded-2xl max-w-2xl mx-auto">
            <button
              onClick={() => setActiveTab('sejarah')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'sejarah'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              Sejarah
            </button>
            <button
              onClick={() => setActiveTab('identitas')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'identitas'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              Identitas Sekolah
            </button>
            <button
              onClick={() => setActiveTab('visi-misi')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'visi-misi'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              Visi & Misi
            </button>
            <button
              onClick={() => setActiveTab('tujuan')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'tujuan'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              Tujuan Sekolah
            </button>
            <button
              onClick={() => setActiveTab('guru')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'guru'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              Guru & Tendik
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10">
          {/* TAB 1: SEJARAH */}
          {activeTab === 'sejarah' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
              <div className="lg:col-span-7 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-600">
                  <History className="w-4 h-4" />
                  <span>Kilas Balik Pendirian</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-950">
                  Perjalanan Membangun Pendidikan Berkualitas di Bumi Intimung
                </h3>
                {SCHOOL_INFO.history.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-600">
                  <p className="font-semibold text-slate-900">Komitmen Berkelanjutan:</p>
                  <p className="mt-1">
                    Hingga saat ini, SMAN 15 Malinau terus beradaptasi dengan kemajuan teknologi abad ke-21 melalui pembekalan literasi digital, penguasaan bahasa internasional, dan penguatan nilai luhur Pancasila.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-4/3 bg-slate-100">
                  <img
                    src="/src/assets/images/hero_sman15_malinau_1793880316929.jpg"
                    alt="Kompleks SMAN 15 Malinau"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: IDENTITAS SEKOLAH */}
          {activeTab === 'identitas' && (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-bold font-serif text-slate-950">
                  Identitas & Legalitas SMAN 15 Malinau
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Data resmi terdaftar pada Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi Republik Indonesia.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-400 font-mono">Nama Satuan Pendidikan</span>
                  <p className="text-sm sm:text-base font-bold text-slate-900 mt-1">{SCHOOL_INFO.name}</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-400 font-mono">NPSN (Nomor Pokok Sekolah Nasional)</span>
                  <p className="text-sm sm:text-base font-bold text-slate-900 mt-1">{SCHOOL_INFO.npsn}</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-400 font-mono">Status & Jenjang</span>
                  <p className="text-sm sm:text-base font-bold text-slate-900 mt-1">{SCHOOL_INFO.status} / SMA</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-400 font-mono">Status Akreditasi</span>
                  <p className="text-sm sm:text-base font-bold text-emerald-700 mt-1">{SCHOOL_INFO.akreditasi}</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-400 font-mono">Wilayah Hukum</span>
                  <p className="text-sm sm:text-base font-bold text-slate-900 mt-1">{SCHOOL_INFO.kabupaten}, {SCHOOL_INFO.provinsi}</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-400 font-mono">SK Izin Operasional</span>
                  <p className="text-sm sm:text-base font-bold text-slate-900 mt-1">{SCHOOL_INFO.skPendirian}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-blue-950">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                  <span><strong>Alamat:</strong> {SCHOOL_INFO.alamatLengkap}</span>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span><strong>Telp:</strong> {SCHOOL_INFO.telepon}</span>
                  <span><strong>Email:</strong> {SCHOOL_INFO.email}</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: VISI & MISI */}
          {activeTab === 'visi-misi' && (
            <div className="space-y-8 animate-fade-in">
              {/* Visi */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white shadow-md">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest font-mono">
                  <Compass className="w-4 h-4" />
                  <span>Visi SMAN 15 Malinau</span>
                </div>
                <p className="text-base sm:text-xl font-serif font-bold text-white mt-3 leading-relaxed">
                  "{SCHOOL_INFO.vision}"
                </p>
              </div>

              {/* Misi */}
              <div>
                <h4 className="text-lg font-bold font-serif text-slate-950 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-amber-600" />
                  Misi Satuan Pendidikan
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SCHOOL_INFO.missions.map((misi, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-900 text-white text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {misi}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: TUJUAN SEKOLAH */}
          {activeTab === 'tujuan' && (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-bold font-serif text-slate-950">
                  Tujuan Jangka Menengah & Strategis
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Target terukur yang menjadi acuan setiap program kerja akademik dan kesiswaan SMAN 15 Malinau.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SCHOOL_INFO.goals.map((goal, idx) => (
                  <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-mono font-semibold text-slate-500 uppercase">
                        Target {idx + 1}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-800 font-medium mt-1 leading-relaxed">
                        {goal}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: GURU & TENAGA KEPENDIDIKAN */}
          {activeTab === 'guru' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-xl font-bold font-serif text-slate-950">
                    Pendidik dan Tenaga Kependidikan
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Dewan guru profesional dan berdedikasi membimbing generasi penerus Malinau.
                  </p>
                </div>
                <div className="text-xs font-mono text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                  Total Guru: 34 Orang · Tendik: 12 Orang
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {TEACHERS_LIST.map((teacher) => (
                  <div
                    key={teacher.id}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col"
                  >
                    <div className="aspect-square rounded-xl overflow-hidden bg-slate-200 mb-3 border border-slate-200">
                      <img
                        src={teacher.photoUrl}
                        alt={teacher.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-amber-700 tracking-wide uppercase">
                      {teacher.role}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mt-0.5 leading-snug line-clamp-1">
                      {teacher.name}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 font-medium line-clamp-1">
                      {teacher.subject}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-auto pt-2 border-t border-slate-200">
                      {teacher.education}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
