import React from 'react';
import { X, Calendar, User, Tag, Share2, ArrowLeft } from 'lucide-react';
import { NewsItem } from '../../data/schoolData';

interface NewsModalProps {
  news: NewsItem | null;
  onClose: () => void;
}

export const NewsModal: React.FC<NewsModalProps> = ({ news, onClose }) => {
  if (!news) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="text-blue-900 font-semibold">{news.category}</span>
            <span>·</span>
            <span>{news.date}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
            {news.title}
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-4 border-b border-slate-100">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-blue-800" />
              {news.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-800" />
              {news.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-blue-800" />
              {news.category}
            </span>
          </div>

          <div className="rounded-xl overflow-hidden shadow-sm aspect-video sm:aspect-21/9 bg-slate-100">
            <img
              src={news.imageUrl}
              alt={news.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-sm sm:text-base leading-relaxed">
            <p className="font-semibold text-slate-900 text-base">
              {news.summary}
            </p>
            <p>{news.content}</p>
            <p>
              Kegiatan ini mencerminkan komitmen penuh civitas akademika SMAN 15 Malinau dalam mewujudkan sekolah unggul, kolaboratif, dan berprestasi di tingkat Kabupaten Malinau dan Provinsi Kalimantan Utara.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Daftar Berita
          </button>
          <span className="text-xs text-slate-400">Publikasi Resmi SMAN 15 Malinau</span>
        </div>
      </div>
    </div>
  );
};
