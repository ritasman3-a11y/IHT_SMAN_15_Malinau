import React from 'react';
import { Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const PrincipalWelcome: React.FC = () => {
  const { principal } = SCHOOL_INFO;

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Principal Image with High-end Frame */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
            <div className="relative w-full max-w-md">
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/20 via-blue-900/10 to-amber-500/30 rounded-3xl blur-md" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 aspect-3/4">
                <img
                  src={principal.photoUrl || '/src/assets/images/kepala_sekolah_portrait_1793880318017.jpg'}
                  alt={principal.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                />
                
                {/* Subtle bottom badge overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 text-white">
                  <div className="text-base sm:text-lg font-bold font-serif leading-tight">
                    {principal.name}
                  </div>
                  <div className="text-xs text-amber-300 font-medium mt-0.5">
                    {principal.title}
                  </div>
                  <div className="text-[11px] text-slate-300 font-mono mt-1">
                    NIP. {principal.nip}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Welcome Message Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
                Kepemimpinan & Dedikasi
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-950 mt-1 leading-tight">
                {principal.welcomeTitle}
              </h2>
            </div>

            {/* Key Quote */}
            <div className="relative p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-2xl">
              <Quote className="w-8 h-8 text-amber-500/30 absolute top-4 right-4" />
              <p className="text-base sm:text-lg italic font-serif text-slate-800 leading-relaxed">
                "{principal.welcomeQuote}"
              </p>
            </div>

            {/* Welcome paragraphs */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              {principal.welcomeMessage.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pendidikan Karakter & Kearifan Dayak-Tidung</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Penerapan Kurikulum Merdeka Mandiri Berbagi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pembelajaran Berbasis Riset & ICT Digital</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Kemitraan Komunitas & Perguruan Tinggi</span>
              </div>
            </div>

            {/* Sign-off */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Salam Hangat Civitas Akademika,</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">{principal.name}</p>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-mono text-slate-400">SMAN 15 Malinau · 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
