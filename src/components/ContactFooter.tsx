import React, { useState } from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Globe, 
  Youtube, 
  Instagram, 
  Facebook,
  ExternalLink
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface ContactFooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenManageModal: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onNavigate, onOpenManageModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Pertanyaan Akademik',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        category: 'Pertanyaan Akademik',
        message: '',
      });
    }, 4000);
  };

  return (
    <footer id="kontak-section" className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Contact & Interactive Inquiry Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* School Brand & Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 via-blue-900 to-slate-950 p-0.5 border border-amber-400/40 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950/80 rounded-[10px] flex items-center justify-center text-amber-400">
                  <GraduationCap className="w-7 h-7" />
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-black text-white tracking-wider">
                  {SCHOOL_INFO.name}
                </h3>
                <p className="text-xs text-amber-400 font-medium">
                  {SCHOOL_INFO.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Institusi pendidikan menengah atas negeri terakreditasi unggul di Kabupaten Malinau, Kalimantan Utara, berdedikasi membentuk generasi emas Indonesia yang berkarakter Pancasila dan berwawasan digital.
            </p>

            <div className="space-y-3 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.alamatLengkap}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SCHOOL_INFO.telepon} · WhatsApp: {SCHOOL_INFO.whatsapp}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SCHOOL_INFO.email} / {SCHOOL_INFO.emailAlternatif}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SCHOOL_INFO.jamOperasional}</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                Saluran Media Sosial Resmi
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-red-500 hover:border-red-500/50 transition-colors"
                  aria-label="YouTube SMAN 15 Malinau"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-400/50 transition-colors"
                  aria-label="Instagram SMAN 15 Malinau"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-400/50 transition-colors"
                  aria-label="Facebook SMAN 15 Malinau"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://kemdikbud.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-400/50 transition-colors"
                  aria-label="Portal Kemendikbud"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links & Academic Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('beranda')}
                  className="hover:text-white transition-colors"
                >
                  Beranda Utama
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('profil')}
                  className="hover:text-white transition-colors"
                >
                  Profil & Identitas Sekolah
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('visi-misi')}
                  className="hover:text-white transition-colors"
                >
                  Visi, Misi & Tujuan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('guru')}
                  className="hover:text-white transition-colors"
                >
                  Guru & Tenaga Kependidikan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('akademik')}
                  className="hover:text-white transition-colors"
                >
                  Kurikulum & Ekstrakurikuler
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('berita')}
                  className="hover:text-white transition-colors"
                >
                  Warta & Berita Sekolah
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('prestasi')}
                  className="hover:text-white transition-colors"
                >
                  Prestasi Murid & Guru
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('galeri')}
                  className="hover:text-white transition-colors"
                >
                  Galeri Dokumentasi Foto
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('iht-2026')}
                  className="text-amber-400 font-semibold hover:underline"
                >
                  Produk Media IHT 2026
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenManageModal}
                  className="text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1"
                >
                  <span>Portal Kelola Karya</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Interactive Aspirations & Inquiry Form */}
          <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <h4 className="text-sm font-bold text-white mb-1">
              Layanan Informasi & Kontak Aspirasi
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Kirimkan pertanyaan atau saran Anda kepada civitas SMAN 15 Malinau.
            </p>

            {submitted ? (
              <div className="p-4 bg-emerald-950/80 border border-emerald-500/50 rounded-xl text-emerald-300 text-xs flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Pesan Anda berhasil terkirim! Tim humas sekolah akan segera menindaklanjuti.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nama Lengkap *"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Alamat Email / WhatsApp *"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-300 focus:outline-none focus:border-amber-400"
                  >
                    <option value="Pertanyaan Akademik">Pertanyaan Akademik & PPDB</option>
                    <option value="Karya Guru & IHT">Media Pembelajaran & IHT Guru</option>
                    <option value="Prestasi & Ekskul">Prestasi & Ekstrakurikuler</option>
                    <option value="Kemitraan">Kemitraan & Kolaborasi</option>
                  </select>
                </div>
                <div>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Pesan</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Maps Embed / Location Preview */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
          <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <strong>Peta Lokasi:</strong> Kabupaten Malinau, Provinsi Kalimantan Utara
            </span>
            <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
              Koordinat: 3.5833° N, 116.6333° E
            </span>
          </div>
          <div className="w-full h-48 sm:h-64 bg-slate-950 relative">
            <iframe
              title="Peta Lokasi SMAN 15 Malinau Kalimantan Utara"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127393.30396440263!2d116.55!3d3.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x320c291e0a581451%3A0x3039d80b220cc30!2sMalinau%20Kota%2C%20Kabupaten%20Malinau%2C%20Kalimantan%20Utara!5e0!3m2!1sid!2sid!4v1714000000000!5m2!1sid!2sid"
              className="w-full h-full border-0 filter grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-900 bg-black/60 py-6 text-center text-xs text-slate-400 px-4">
        <p className="font-medium text-slate-300">
          "SMAN 15 MALINAU – Bersama Membangun Pendidikan yang Berkualitas, Inovatif, dan Berkarakter."
        </p>
        <p className="mt-2 text-[11px] text-slate-400">
          Copyright © 2026 SMAN 15 Malinau, Kabupaten Malinau, Kalimantan Utara. Hak Cipta Dilindungi Undang-Undang.
        </p>
      </div>
    </footer>
  );
};
