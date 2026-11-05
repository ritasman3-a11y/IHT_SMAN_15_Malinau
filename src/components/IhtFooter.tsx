import React from 'react';
import { GraduationCap, ExternalLink } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { IHT_EVENT_INFO } from '../data/ihtData';

interface IhtFooterProps {
  onOpenManageModal: () => void;
  onScrollToTop: () => void;
}

export const IhtFooter: React.FC<IhtFooterProps> = ({ onOpenManageModal, onScrollToTop }) => {
  return (
    <footer id="kontak-iht" className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Identity */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 via-blue-900 to-slate-950 p-0.5 border border-amber-400/40 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950/80 rounded-[10px] flex items-center justify-center text-amber-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="text-base font-serif font-black text-white tracking-wider">
                  {SCHOOL_INFO.name}
                </h3>
                <p className="text-[11px] text-amber-400 font-medium">
                  {IHT_EVENT_INFO.eventName}
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-lg text-xs">
              Portal publikasi karya dan produk media pembelajaran hasil In House Training (IHT) guru SMAN 15 Malinau tanggal 2–4 November 2026. Seluruh karya modul ajar, video YouTube, dan media interaktif dipersembahkan untuk kemajuan pembelajaran peserta didik.
            </p>
          </div>

          {/* Navigasi Karya */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              Kategori Produk IHT
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>Video YouTube Pembelajaran (14 Video)</li>
              <li>Modul Ajar PDF Kurikulum Merdeka</li>
              <li>Media Digital Canva & Google Sites</li>
              <li>LKPD Liveworksheets & Kuis Gamifikasi</li>
              <li>Karya Inovasi Berbasis Kearifan Lokal</li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              Pengelolaan & Tautan
            </h4>
            <div className="space-y-2">
              <button
                onClick={onOpenManageModal}
                className="w-full py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-xl font-medium flex items-center justify-center gap-2 text-xs transition-colors"
              >
                <span>Kelola / Tambah Karya</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              </button>
              <button
                onClick={onScrollToTop}
                className="w-full py-2 px-3 text-slate-400 hover:text-white text-center transition-colors text-xs"
              >
                ↑ Kembali ke Atas
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-900 mt-10 pt-6 text-center text-slate-500 text-[11px] space-y-1">
          <p className="text-slate-400 font-medium">
            "SMAN 15 MALINAU – Bersama Membangun Pendidikan yang Berkualitas, Inovatif, dan Berkarakter."
          </p>
          <p>
            Copyright © 2026 SMAN 15 Malinau, Kabupaten Malinau, Provinsi Kalimantan Utara. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};
