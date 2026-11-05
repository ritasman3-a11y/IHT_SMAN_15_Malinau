import React from 'react';
import { X, ExternalLink, Share2, Youtube, Sparkles } from 'lucide-react';
import { IhtProduct } from '../../data/ihtData';

interface VideoModalProps {
  product: IhtProduct | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const youtubeId = product.youtubeId || (product.youtubeUrl?.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/)?.[1]);
  const [copied, setCopied] = React.useState(false);

  const handleCopyLink = () => {
    if (product.youtubeUrl) {
      navigator.clipboard.writeText(product.youtubeUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-600/20 text-red-500 rounded-lg">
              <Youtube className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-amber-400 uppercase tracking-wider">
                {product.subTypeLabel} · IHT 2026 {product.subject ? `· ${product.subject}` : ''}
              </p>
              <h3 className="text-base sm:text-lg font-semibold text-white line-clamp-1">
                {product.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative w-full bg-black aspect-video">
          {youtubeId ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
              title={product.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-slate-400 p-6 text-center">
              <Youtube className="w-12 h-12 text-red-500 mb-3" />
              <p className="text-sm">Video dapat diakses langsung melalui tautan YouTube resmi.</p>
              {product.youtubeUrl && (
                <a
                  href={product.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700"
                >
                  Buka di YouTube
                </a>
              )}
            </div>
          )}
        </div>

        {/* Video Metadata & Description */}
        <div className="p-6 overflow-y-auto space-y-4 bg-slate-900 text-slate-300">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800 text-sm">
            <div>
              <span className="text-slate-400">Penyusun / Guru:</span>{' '}
              <span className="font-semibold text-white">{product.creator}</span>
              {product.faseOrClass && (
                <>
                  <span className="mx-2 text-slate-600">·</span>
                  <span className="text-slate-400">Sasaran:</span>{' '}
                  <span className="text-amber-300 font-medium">{product.faseOrClass}</span>
                </>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                {copied ? 'Tersalin!' : 'Salin Tautan'}
              </button>
              {product.youtubeUrl && (
                <a
                  href={product.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-red-600/90 hover:bg-red-600 text-white rounded-lg transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Buka di YouTube
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Deskripsi Materi Pembelajaran
            </h4>
            <p className="text-sm leading-relaxed text-slate-200">
              {product.description}
            </p>
          </div>

          <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 flex items-start gap-3 text-xs text-slate-400">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p>
              Diproduksi dalam agenda <strong className="text-slate-200">In House Training (IHT) Penyusunan dan Pengembangan Media Pembelajaran SMAN 15 Malinau</strong>, 2–4 November 2026.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
