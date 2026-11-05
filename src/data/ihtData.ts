/**
 * Data Resmi Hasil Karya In House Training (IHT) SMAN 15 Malinau
 * Berdasarkan Data Rekapitulasi Resmi Guru Peserta IHT 2026:
 * - 7 Guru Kreator: Nancy, Evo Ellendra, Maisyarah, Jefrida Agustina, Frederik Palintong, Herlina Palinoan, Erickson Sinaga
 * - Game Canva Interaktif
 * - Video YouTube Storybook
 * - Video YouTube Pembelajaran AI
 * - Aplikasi Asesmen Digital AI Studio
 */

export type ProductType = 'video_storybook' | 'video_ai' | 'game_canva' | 'asesmen_digital' | 'modul_pdf';

export interface TeacherIhtRecord {
  no: number;
  name: string;
  fullName: string;
  nip: string;
  subject: string;
  gameCanvaUrl: string | null;
  gameCanvaTitle?: string;
  youtubeStorybookUrl: string | null;
  youtubeStorybookId?: string | null;
  youtubeStorybookTitle?: string;
  youtubeAiUrl: string | null;
  youtubeAiId?: string | null;
  youtubeAiTitle?: string;
  asesmenUrl: string | null;
  asesmenTitle?: string;
}

export interface OfficialTeacherDirectoryItem {
  no: number;
  fullName: string;
  nip: string;
  subject: string;
  hasIhtProducts: boolean;
  category: string;
}

export const OFFICIAL_TEACHERS_DIRECTORY: OfficialTeacherDirectoryItem[] = [
  { no: 1, fullName: 'Evo Ellendra, S.Pd', nip: '199104282022212005', subject: 'Biologi', hasIhtProducts: true, category: 'MIPA' },
  { no: 2, fullName: 'Erickson Sinaga', nip: '198911012019031006', subject: 'Bahasa Indonesia', hasIhtProducts: true, category: 'Bahasa' },
  { no: 3, fullName: 'Aulina, S.Ag', nip: '199006152023212016', subject: 'Agama Katolik', hasIhtProducts: false, category: 'Pendidikan Agama' },
  { no: 4, fullName: 'Winasuarti Uti, S.Pd', nip: '198612192023212013', subject: 'Ekonomi', hasIhtProducts: false, category: 'IPS' },
  { no: 5, fullName: 'Ari Setyawan', nip: '198907302018021001', subject: 'Geografi', hasIhtProducts: false, category: 'IPS' },
  { no: 6, fullName: 'Aprilianus, S.Pd', nip: 'Non-ASN / Belum Ada NIP', subject: 'Bimbingan Konseling', hasIhtProducts: false, category: 'BK' },
  { no: 7, fullName: 'Nancy, S.Pd', nip: '199210232022212010', subject: 'Sosiologi', hasIhtProducts: true, category: 'IPS' },
  { no: 8, fullName: 'Abidin, S.Pd', nip: '198906212023211011', subject: 'Penjasorkes', hasIhtProducts: false, category: 'Olahraga & Kesehatan' },
  { no: 9, fullName: 'Maisyarah', nip: '199207262018022001', subject: 'Sejarah', hasIhtProducts: true, category: 'IPS' },
  { no: 10, fullName: 'Jefrida Agustina, S.Pd', nip: '199208072019032008', subject: 'Pendidikan Pancasila', hasIhtProducts: true, category: 'Kewarganegaraan' },
  { no: 11, fullName: 'Frederik Palintong', nip: '198911292025211036', subject: 'Seni Budaya', hasIhtProducts: true, category: 'Seni & Prakarya' },
  { no: 12, fullName: 'Annahdhi Dzikri Fajriyah, S.Pd', nip: '199108142019032013', subject: 'Bahasa Inggris', hasIhtProducts: false, category: 'Bahasa' },
  { no: 13, fullName: 'Herlina Palinoan, S.Pd', nip: '199005272019032007', subject: 'Matematika', hasIhtProducts: true, category: 'MIPA' },
  { no: 14, fullName: 'Winda Luben', nip: '198906212023212020', subject: 'Agama Kristen', hasIhtProducts: false, category: 'Pendidikan Agama' },
];

export interface IhtProduct {
  id: string;
  type: ProductType;
  title: string;
  creator: string;
  subTypeLabel: string;
  description: string;
  thumbnailUrl: string;
  
  // Link properti asli
  youtubeId?: string;
  youtubeUrl?: string;
  externalUrl?: string;
  platformName?: string;
  dateAdded?: string;
  subject?: string;
  faseOrClass?: string;
  pdfLink?: string;
  downloadUrl?: string;
}

export const IHT_EVENT_INFO = {
  title: 'HASIL KARYA IHT PENYUSUNAN DAN PENGEMBANGAN MEDIA PEMBELAJARAN',
  eventName: 'In House Training (IHT) Penyusunan dan Pengembangan Media Pembelajaran SMAN 15 Malinau',
  date: '2–4 November 2026',
  location: 'Setarap, SMAN 15 Malinau, Kab. Malinau, Kalimantan Utara',
  description:
    'Publikasi resmi hasil karya guru SMAN 15 Malinau dalam kegiatan In House Training (IHT) Penyusunan dan Pengembangan Media Pembelajaran. Seluruh produk mencakup Video Storybook Digital, Video AI Pembelajaran, Game Edukasi Canva, dan Aplikasi Asesmen AI interaktif.',
};

/**
 * Tabel Data Resmi Seluruh 14 Guru SMAN 15 Malinau (Tersedia Kolom Link Produk)
 */
export const TEACHER_IHT_RECORDS: TeacherIhtRecord[] = [
  {
    no: 1,
    name: 'Evo Ellendra',
    fullName: 'Evo Ellendra, S.Pd',
    nip: '199104282022212005',
    subject: 'Biologi',
    gameCanvaUrl: null,
    gameCanvaTitle: 'Game Edukasi Canva (Dalam Proses)',
    youtubeStorybookUrl: 'https://youtu.be/ACPK4wKT7SI',
    youtubeStorybookId: 'ACPK4wKT7SI',
    youtubeStorybookTitle: 'Storybook Pembelajaran Interaktif (Evo Ellendra)',
    youtubeAiUrl: 'https://youtu.be/8bCuHa4_Z6E',
    youtubeAiId: '8bCuHa4_Z6E',
    youtubeAiTitle: 'Video AI Pembelajaran Inovatif (Evo Ellendra)',
    asesmenUrl: 'https://ai.studio/apps/cc93a737-394a-4874-98a1-b46fae734464?fullscreenApplet=true',
    asesmenTitle: 'Aplikasi Asesmen Pembelajaran AI Studio (Evo Ellendra)',
  },
  {
    no: 2,
    name: 'Erickson Sinaga',
    fullName: 'Erickson Sinaga',
    nip: '198911012019031006',
    subject: 'Bahasa Indonesia',
    gameCanvaUrl: 'https://kuis-agama-kelas-x.my.canva.site/lomba-balap-karung-indonesia',
    gameCanvaTitle: 'Game Kuis Lomba Balap Karung Indonesia Canva (Erickson Sinaga)',
    youtubeStorybookUrl: 'https://youtu.be/wB2dYAO_FGM?si=uQ9_jgmIBLMfSJFf',
    youtubeStorybookId: 'wB2dYAO_FGM',
    youtubeStorybookTitle: 'Storybook Pembelajaran Interaktif (Erickson Sinaga)',
    youtubeAiUrl: 'https://youtu.be/hi8gPHGc_VM?si=C71IXj4PK47KcKqm',
    youtubeAiId: 'hi8gPHGc_VM',
    youtubeAiTitle: 'Video AI Pembelajaran Inovatif (Erickson Sinaga)',
    asesmenUrl: 'https://ai.studio/apps/0740c07a-4e42-4084-95ac-ae5fd519e455?fullscreenApplet=true',
    asesmenTitle: 'Aplikasi Asesmen Pembelajaran AI Studio (Erickson Sinaga)',
  },
  {
    no: 3,
    name: 'Aulina',
    fullName: 'Aulina, S.Ag',
    nip: '199006152023212016',
    subject: 'Agama Katolik',
    gameCanvaUrl: null,
    gameCanvaTitle: '',
    youtubeStorybookUrl: null,
    youtubeStorybookId: null,
    youtubeStorybookTitle: '',
    youtubeAiUrl: null,
    youtubeAiId: null,
    youtubeAiTitle: '',
    asesmenUrl: null,
    asesmenTitle: '',
  },
  {
    no: 4,
    name: 'Winasuarti Uti',
    fullName: 'Winasuarti Uti, S.Pd',
    nip: '198612192023212013',
    subject: 'Ekonomi',
    gameCanvaUrl: null,
    gameCanvaTitle: '',
    youtubeStorybookUrl: null,
    youtubeStorybookId: null,
    youtubeStorybookTitle: '',
    youtubeAiUrl: null,
    youtubeAiId: null,
    youtubeAiTitle: '',
    asesmenUrl: null,
    asesmenTitle: '',
  },
  {
    no: 5,
    name: 'Ari Setyawan',
    fullName: 'Ari Setyawan',
    nip: '198907302018021001',
    subject: 'Geografi',
    gameCanvaUrl: null,
    gameCanvaTitle: '',
    youtubeStorybookUrl: null,
    youtubeStorybookId: null,
    youtubeStorybookTitle: '',
    youtubeAiUrl: null,
    youtubeAiId: null,
    youtubeAiTitle: '',
    asesmenUrl: null,
    asesmenTitle: '',
  },
  {
    no: 6,
    name: 'Aprilianus',
    fullName: 'Aprilianus, S.Pd',
    nip: 'Non-ASN / Belum Ada NIP',
    subject: 'Bimbingan Konseling',
    gameCanvaUrl: null,
    gameCanvaTitle: '',
    youtubeStorybookUrl: null,
    youtubeStorybookId: null,
    youtubeStorybookTitle: '',
    youtubeAiUrl: null,
    youtubeAiId: null,
    youtubeAiTitle: '',
    asesmenUrl: null,
    asesmenTitle: '',
  },
  {
    no: 7,
    name: 'Nancy',
    fullName: 'Nancy, S.Pd',
    nip: '199210232022212010',
    subject: 'Sosiologi',
    gameCanvaUrl: 'https://kuis-agama-kelas-x.my.canva.site/kuis-sosiologi',
    gameCanvaTitle: 'Game Kuis Sosiologi & Agama Kelas X',
    youtubeStorybookUrl: 'https://youtu.be/AOgZvgnJWVY',
    youtubeStorybookId: 'AOgZvgnJWVY',
    youtubeStorybookTitle: 'Storybook Pembelajaran Interaktif (Nancy)',
    youtubeAiUrl: 'https://youtu.be/NV-3EG0e5sk',
    youtubeAiId: 'NV-3EG0e5sk',
    youtubeAiTitle: 'Video AI Pembelajaran Inovatif (Nancy)',
    asesmenUrl: 'https://ai.studio/apps/cc128f56-0009-47d0-964a-dd467f0b46f0?fullscreenApplet=true',
    asesmenTitle: 'Aplikasi Asesmen Pembelajaran AI Studio (Nancy)',
  },
  {
    no: 8,
    name: 'Abidin',
    fullName: 'Abidin, S.Pd',
    nip: '198906212023211011',
    subject: 'Penjasorkes',
    gameCanvaUrl: null,
    gameCanvaTitle: '',
    youtubeStorybookUrl: null,
    youtubeStorybookId: null,
    youtubeStorybookTitle: '',
    youtubeAiUrl: null,
    youtubeAiId: null,
    youtubeAiTitle: '',
    asesmenUrl: null,
    asesmenTitle: '',
  },
  {
    no: 9,
    name: 'Maisyarah',
    fullName: 'Maisyarah',
    nip: '199207262018022001',
    subject: 'Sejarah',
    gameCanvaUrl: 'https://kuis-agama-kelas-x.my.canva.site/cpkr0bk4vbrd94nz',
    gameCanvaTitle: 'Game Kuis Pembelajaran Interaktif Canva (Maisyarah)',
    youtubeStorybookUrl: 'https://youtu.be/dxDXsg-fhHU?si=n9p3BEywnmijcjJB',
    youtubeStorybookId: 'dxDXsg-fhHU',
    youtubeStorybookTitle: 'Storybook Pembelajaran Interaktif (Maisyarah)',
    youtubeAiUrl: 'https://youtu.be/vnW8WaVEWo8?si=bp8TX2CcEZLnmIp-',
    youtubeAiId: 'vnW8WaVEWo8',
    youtubeAiTitle: 'Video AI Pembelajaran Inovatif (Maisyarah)',
    asesmenUrl: 'https://aistudio.google.com/apps/3bf1977c-e4b1-46b0-a606-7f52f80b39d3?fullscreenApplet=true&showAssistant=true&showPreview=true',
    asesmenTitle: 'Aplikasi Asesmen Pembelajaran AI Studio (Maisyarah)',
  },
  {
    no: 10,
    name: 'Jefrida Agustina',
    fullName: 'Jefrida Agustina, S.Pd',
    nip: '199208072019032008',
    subject: 'Pendidikan Pancasila',
    gameCanvaUrl: 'https://kuis-agama-kelas-x.my.canva.site/cpkqdbfxea6cx891',
    gameCanvaTitle: 'Game Kuis Pembelajaran Interaktif Canva (Jefrida Agustina)',
    youtubeStorybookUrl: 'https://youtu.be/LMKWpHrcGsI?si=cSOh5GNKiFuYPWcZ',
    youtubeStorybookId: 'LMKWpHrcGsI',
    youtubeStorybookTitle: 'Storybook Pembelajaran Interaktif (Jefrida Agustina)',
    youtubeAiUrl: 'https://youtu.be/caBKDI-s6Lw?si=itfMYyDqBQjUnTmt',
    youtubeAiId: 'caBKDI-s6Lw',
    youtubeAiTitle: 'Video AI Pembelajaran Inovatif (Jefrida Agustina)',
    asesmenUrl: 'https://ai.studio/apps/61c53303-29b6-4bd8-93e9-66f744561cab?fullscreenApplet=true',
    asesmenTitle: 'Aplikasi Asesmen Pembelajaran AI Studio (Jefrida Agustina)',
  },
  {
    no: 11,
    name: 'Frederik Palintong',
    fullName: 'Frederik Palintong',
    nip: '198911292025211036',
    subject: 'Seni Budaya',
    gameCanvaUrl: 'https://canva.link/moxklz9upa0ikwd',
    gameCanvaTitle: 'Game Pembelajaran Canva Interaktif (Frederik Palintong)',
    youtubeStorybookUrl: 'https://youtu.be/Sexj_yPboEo',
    youtubeStorybookId: 'Sexj_yPboEo',
    youtubeStorybookTitle: 'Storybook Pembelajaran Interaktif (Frederik Palintong)',
    youtubeAiUrl: 'https://youtu.be/hH7c7zWj_MA',
    youtubeAiId: 'hH7c7zWj_MA',
    youtubeAiTitle: 'Video AI Pembelajaran Inovatif (Frederik Palintong)',
    asesmenUrl: 'https://ai.studio/apps/2704b60d-acb4-4266-9461-dfd24eb79d4b?fullscreenApplet=true',
    asesmenTitle: 'Aplikasi Asesmen Pembelajaran AI Studio (Frederik Palintong)',
  },
  {
    no: 12,
    name: 'Annahdhi Dzikri Fajriyah',
    fullName: 'Annahdhi Dzikri Fajriyah, S.Pd',
    nip: '199108142019032013',
    subject: 'Bahasa Inggris',
    gameCanvaUrl: null,
    gameCanvaTitle: '',
    youtubeStorybookUrl: null,
    youtubeStorybookId: null,
    youtubeStorybookTitle: '',
    youtubeAiUrl: null,
    youtubeAiId: null,
    youtubeAiTitle: '',
    asesmenUrl: null,
    asesmenTitle: '',
  },
  {
    no: 13,
    name: 'Herlina Palinoan',
    fullName: 'Herlina Palinoan, S.Pd',
    nip: '199005272019032007',
    subject: 'Matematika',
    gameCanvaUrl: 'https://kuis-agama-kelas-x.my.canva.site/lomba-panjat-pinang-kuis',
    gameCanvaTitle: 'Game Kuis Lomba Panjat Pinang Canva (Herlina Palinoan)',
    youtubeStorybookUrl: 'https://youtu.be/LyX1G0P4mWY?si=N0d9N9X3GOk9V-T6',
    youtubeStorybookId: 'LyX1G0P4mWY',
    youtubeStorybookTitle: 'Storybook Pembelajaran Interaktif (Herlina Palinoan)',
    youtubeAiUrl: 'https://youtu.be/Odh0hjLsUa0?si=DgD5rA0CBzI5Amiv',
    youtubeAiId: 'Odh0hjLsUa0',
    youtubeAiTitle: 'Video AI Pembelajaran Inovatif (Herlina Palinoan)',
    asesmenUrl: 'https://ai.studio/apps/5c8f0189-0d71-446b-9c70-72fd9c29e3ad?fullscreenApplet=true',
    asesmenTitle: 'Aplikasi Asesmen Pembelajaran AI Studio (Herlina Palinoan)',
  },
  {
    no: 14,
    name: 'Winda Luben',
    fullName: 'Winda Luben',
    nip: '198906212023212020',
    subject: 'Agama Kristen',
    gameCanvaUrl: null,
    gameCanvaTitle: '',
    youtubeStorybookUrl: null,
    youtubeStorybookId: null,
    youtubeStorybookTitle: '',
    youtubeAiUrl: null,
    youtubeAiId: null,
    youtubeAiTitle: '',
    asesmenUrl: null,
    asesmenTitle: '',
  },
];

/**
 * Daftar Item Produk Terpadu (Untuk Filter Kategori, Pencarian, & Kartu Interaktif)
 */
export function buildProductListFromRecords(records: TeacherIhtRecord[]): IhtProduct[] {
  const products: IhtProduct[] = [];

  records.forEach((rec) => {
    // 1. YouTube Storybook Video (jika sudah diunggah)
    if (rec.youtubeStorybookUrl && rec.youtubeStorybookId) {
      products.push({
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
        dateAdded: 'November 2026',
      });
    }

    // 2. YouTube AI Video (jika sudah diunggah)
    if (rec.youtubeAiUrl && rec.youtubeAiId) {
      products.push({
        id: `ai-${rec.no}`,
        type: 'video_ai',
        subTypeLabel: 'YouTube Video AI',
        title: rec.youtubeAiTitle || `Video AI Pembelajaran (${rec.fullName || rec.name})`,
        creator: rec.fullName || rec.name,
        subject: rec.subject,
        description: `Video pembelajaran berbasis AI mata pelajaran ${rec.subject} yang dirancang oleh ${rec.fullName || rec.name} untuk mempermudah pemahaman konsep peserta didik.`,
        thumbnailUrl: `https://img.youtube.com/vi/${rec.youtubeAiId}/hqdefault.jpg`,
        youtubeId: rec.youtubeAiId,
        youtubeUrl: rec.youtubeAiUrl,
        dateAdded: 'November 2026',
      });
    }

    // 3. Game Canva (jika tersedia)
    if (rec.gameCanvaUrl) {
      products.push({
        id: `canva-${rec.no}`,
        type: 'game_canva',
        subTypeLabel: 'Game Edukasi Canva',
        title: rec.gameCanvaTitle || `Game Kuis Canva (${rec.fullName || rec.name})`,
        creator: rec.fullName || rec.name,
        subject: rec.subject,
        description: `Permainan kuis interaktif mata pelajaran ${rec.subject} berbasis platform Canva Education karya ${rec.fullName || rec.name}.`,
        thumbnailUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80',
        externalUrl: rec.gameCanvaUrl,
        platformName: 'Canva Education',
        dateAdded: 'November 2026',
      });
    }

    // 4. Aplikasi Asesmen Digital
    if (rec.asesmenUrl) {
      products.push({
        id: `asesmen-${rec.no}`,
        type: 'asesmen_digital',
        subTypeLabel: 'Aplikasi Asesmen AI',
        title: rec.asesmenTitle || `Aplikasi Asesmen AI (${rec.fullName || rec.name})`,
        creator: rec.fullName || rec.name,
        subject: rec.subject,
        description: `Aplikasi asesmen digital interaktif mandiri mata pelajaran ${rec.subject} yang dikembangkan dengan AI Studio Google oleh ${rec.fullName || rec.name}.`,
        thumbnailUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80',
        externalUrl: rec.asesmenUrl,
        platformName: 'Google AI Studio App',
        dateAdded: 'November 2026',
      });
    }
  });

  // 5. Folder Modul Pembelajaran Resmi Google Drive
  OFFICIAL_MODULE_FOLDERS.forEach((f) => {
    products.push({
      id: f.id,
      type: 'modul_pdf',
      subTypeLabel: 'Folder Modul Ajar (Google Drive)',
      title: f.title,
      creator: 'Dewan Guru SMAN 15 Malinau',
      description: f.description,
      thumbnailUrl: f.folderNumber === 1 
        ? 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&q=80'
        : 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&q=80',
      externalUrl: f.driveUrl,
      downloadUrl: f.driveUrl,
      pdfLink: f.driveUrl,
      platformName: 'Google Drive Resmi',
      subject: f.category,
      faseOrClass: 'Fase E & F (SMA)',
      dateAdded: 'November 2026',
    });
  });

  return products;
}

export interface ModuleDriveFolder {
  id: string;
  folderNumber: number;
  title: string;
  subtitle: string;
  driveUrl: string;
  folderId: string;
  embedUrl: string;
  description: string;
  category: string;
  badge: string;
}

export const OFFICIAL_MODULE_FOLDERS: ModuleDriveFolder[] = [
  {
    id: 'folder-modul-1',
    folderNumber: 1,
    title: 'Folder Modul Pembelajaran IHT (Bagian 1)',
    subtitle: 'Kumpulan Modul Ajar, RPP, dan LKPD Guru SMAN 15 Malinau',
    driveUrl: 'https://drive.google.com/drive/folders/1ObOhCl0GJcrwBFLNW6gBDg6bTsDZEo7k?usp=drive_link',
    folderId: '1ObOhCl0GJcrwBFLNW6gBDg6bTsDZEo7k',
    embedUrl: 'https://drive.google.com/embeddedfolderview?id=1ObOhCl0GJcrwBFLNW6gBDg6bTsDZEo7k#grid',
    description: 'Arsip berkas modul pembelajaran resmi Kurikulum Merdeka yang disusun dan dikembangkan oleh para pendidik SMAN 15 Malinau.',
    category: 'Modul Ajar & LKPD Kurikulum Merdeka',
    badge: 'Koleksi Modul Bagian 1',
  },
  {
    id: 'folder-modul-2',
    folderNumber: 2,
    title: 'Folder Modul Pembelajaran IHT (Bagian 2)',
    subtitle: 'Kumpulan Perangkat Pembelajaran & Media Ajar Digital',
    driveUrl: 'https://drive.google.com/drive/folders/1LDa8U3ThMnRmc3bNw-Dw7rGCEnMUK9Pm?usp=drive_link',
    folderId: '1LDa8U3ThMnRmc3bNw-Dw7rGCEnMUK9Pm',
    embedUrl: 'https://drive.google.com/embeddedfolderview?id=1LDa8U3ThMnRmc3bNw-Dw7rGCEnMUK9Pm#grid',
    description: 'Dokumen pendukung pembelajaran, materi ajar digital, serta lembar kerja interaktif hasil inovasi guru SMAN 15 Malinau.',
    category: 'Perangkat & Media Pembelajaran Inovatif',
    badge: 'Koleksi Modul Bagian 2',
  },
];

export const INITIAL_IHT_PRODUCTS: IhtProduct[] = buildProductListFromRecords(TEACHER_IHT_RECORDS);

const LOCAL_STORAGE_KEY = 'sman15_iht_products_official_v5';

export function getStoredIhtProducts(): IhtProduct[] {
  if (typeof window === 'undefined') return INITIAL_IHT_PRODUCTS;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(INITIAL_IHT_PRODUCTS));
      return INITIAL_IHT_PRODUCTS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return INITIAL_IHT_PRODUCTS;
  } catch (err) {
    console.error('Gagal membaca data IHT:', err);
    return INITIAL_IHT_PRODUCTS;
  }
}

export function saveStoredIhtProducts(products: IhtProduct[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
  } catch (err) {
    console.error('Gagal menyimpan data IHT:', err);
  }
}

export function resetStoredIhtProducts(): IhtProduct[] {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(INITIAL_IHT_PRODUCTS));
  }
  return INITIAL_IHT_PRODUCTS;
}
