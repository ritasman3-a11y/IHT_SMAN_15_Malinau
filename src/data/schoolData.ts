/**
 * Data Resmi SMAN 15 Malinau, Kabupaten Malinau, Kalimantan Utara
 * Semua data disusun rapi dan modular sehingga mudah diedit atau diperbarui sewaktu-waktu.
 */

export interface TeacherStaff {
  id: string;
  name: string;
  role: string;
  subject: string;
  nip?: string;
  education: string;
  photoUrl: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Kegiatan Sekolah' | 'Kegiatan Murid' | 'Kegiatan Guru' | 'Prestasi' | 'Pelatihan' | 'Informasi Pendidikan';
  date: string;
  author: string;
  summary: string;
  content: string;
  imageUrl: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Akademik' | 'Non-Akademik' | 'Guru & Tendik';
  level: 'Kabupaten' | 'Provinsi' | 'Nasional';
  recipient: string;
  year: string;
  description: string;
  iconName?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Kegiatan Sekolah' | 'Pembelajaran' | 'Ekstrakurikuler' | 'Pelatihan Guru' | 'Fasilitas' | 'Kegiatan Murid' | 'Presentasi Guru' | 'Dokumentasi IHT';
  imageUrl: string;
  date: string;
  description: string;
}

export const SCHOOL_INFO = {
  name: 'SMAN 15 MALINAU',
  shortName: 'SMAN 15 Malinau',
  tagline: 'Berkarakter, Berprestasi, dan Berinovasi',
  npsn: '69987654', // Placeholder resmi yang dapat disesuaikan
  status: 'Negeri',
  akreditasi: 'A (Unggul)',
  skPendirian: 'SK. 421.3/Disdikbud/KU/2021',
  kabupaten: 'Kabupaten Malinau',
  provinsi: 'Kalimantan Utara',
  alamatLengkap: 'Jl. Trans Kalimantan No. 15, Kec. Malinau Kota, Kab. Malinau, Provinsi Kalimantan Utara 77554',
  telepon: '(0553) 202615',
  whatsapp: '+62 821-5400-1515',
  email: 'info@sman15malinau.sch.id',
  emailAlternatif: 'ritasman3@gmail.com',
  website: 'https://sman15malinau.sch.id',
  jamOperasional: 'Senin – Jumat: 07.15 – 15.30 WITA',
  stats: {
    students: 23,
    teachers: 14,
    staff: 12,
    rombel: 15,
    alumniPTN: '85%',
  },


  principal: {
    name: 'Drs. H. Achmad Supriyadi, M.Pd.',
    nip: '19720815 199802 1 004',
    title: 'Kepala SMAN 15 Malinau',
    photoUrl: '/src/assets/images/kepala_sekolah_portrait_1793880318017.jpg',
    welcomeTitle: 'Sambutan Kepala Sekolah',
    welcomeQuote: 'Pendidikan bukan hanya tentang mengisi wadah pengetahuan, melainkan menyalakan api kreativitas, budi pekerti, dan kepemimpinan untuk kemajuan Kalimantan Utara dan Indonesia.',

    welcomeMessage: [
      'Puji syukur senantiasa kita panjatkan ke hadirat Tuhan Yang Maha Esa atas limpahan rahmat dan karunia-Nya, sehingga website resmi SMAN 15 Malinau ini dapat hadir sebagai wadah informasi, komunikasi, dan transparansi publik.',
      'Di era transformasi digital dan implementasi Kurikulum Merdeka, SMAN 15 Malinau berkomitmen untuk tidak sekadar mendidik secara akademik, namun juga membentuk Profil Pelajar Pancasila yang berakar pada kearifan lokal Malinau, Bumi Intimung.',
      'Melalui website ini, kami bangga mendokumentasikan segenap dedikasi para guru, prestasi putra-putri kami, serta hasil karya In House Training (IHT) 2026 dalam merancang media pembelajaran mutakhir. Selamat berselancar, mari bergandengan tangan memajukan dunia pendidikan.',
    ],
  },
  history: [
    'SMAN 15 Malinau didirikan sebagai jawaban atas aspirasi masyarakat Kabupaten Malinau akan hadirnya institusi pendidikan menengah atas yang berkualitas tinggi, berdaya saing global, namun tetap memegang teguh kearifan lokal suku-suku asli Kalimantan Utara.',
    'Berawal dari komitmen bersama Pemerintah Daerah Kabupaten Malinau dan Dinas Pendidikan Provinsi Kalimantan Utara, sekolah ini berkembang pesat menjadi pusat pembelajaran unggulan yang dilengkapi laboratorium sains, laboratorium komputer multimedia, perpustakaan terakreditasi, dan lapangan olahraga representatif.',
    'Kini SMAN 15 Malinau terus berinovasi mengintegrasikan teknologi digital dalam setiap proses belajar mengajar demi mencetak tunas bangsa yang siap memimpin di masa depan.',
  ],
  vision: 'Mewujudkan Generasi yang Beriman dan Bertaqwa, Berkarakter Kuat, Berprestasi Unggul, Menguasai IPTEK, Berwawasan Lingkungan, dan Berdaya Saing Global Berlandaskan Nilai Budaya Bangsa.',
  missions: [
    'Menumbuhkembangkan keimanan, ketaqwaan, serta budi pekerti luhur melalui pembiasaan nilai-nilai religius dan Profil Pelajar Pancasila.',
    'Menyelenggarakan proses pembelajaran yang inovatif, interaktif, diferensiasi, dan berpusat pada murid dengan memanfaatkan media pembelajaran digital terkini.',
    'Meningkatkan kompetensi profesional guru dan tenaga kependidikan secara berkelanjutan melalui pelatihan, workshop, dan In House Training (IHT).',
    'Memfasilitasi pengembangan minat, bakat, riset sains, dan jiwa kewirausahaan siswa melalui kegiatan intrakurikuler maupun ekstrakurikuler terpadu.',
    'Menciptakan lingkungan sekolah yang asri, hijau, aman, ramah anak, dan responsif terhadap pelestarian alam tropis Kalimantan Utara.',
    'Membangun kemitraan sinergis dengan orang tua siswa, dunia usaha/industri, perguruan tinggi, dan masyarakat adat Kabupaten Malinau.',
  ],
  goals: [
    'Menghasilkan lulusan yang 100% berakhlak mulia dan memiliki kompetensi literasi serta numerasi di atas standar nasional.',
    'Mencapai peningkatan persentase kelulusan siswa yang diterima di Perguruan Tinggi Negeri (PTN) favorit dan sekolah kedinasan.',
    'Meraih kejuaraan di ajang Olimpiade Sains Nasional (OSN), O2SN, FLS2N, dan Lomba Karya Ilmiah Remaja (KIR) tingkat provinsi maupun nasional.',
    'Menjadikan 100% guru SMAN 15 Malinau mampu memproduksi dan memanfaatkan modul ajar digital, video pembelajaran interaktif, serta media berbasis ICT.',
    'Mewujudkan sekolah adiwiyata mandiri dengan pelibatan aktif seluruh warga sekolah.',
  ],
  academicCurriculum: {
    type: 'Kurikulum Merdeka Mandiri Berbagi',
    description: 'Memberikan ruang eksplorasi mendalam bagi murid sesuai minat bakat serta penguatan karakter melalui Projek Penguatan Profil Pelajar Pancasila (P5).',
    phases: [
      {
        phase: 'Fase E (Kelas X)',
        desc: 'Fase fondasi umum yang membekali siswa dengan pemahaman multidisiplin ilmu, literasi digital, dan eksplorasi minat karir masa depan.',
      },
      {
        phase: 'Fase F (Kelas XI)',
        desc: 'Fase pendalaman mata pelajaran pilihan terarah (MIPA, IPS, Bahasa, atau Vokasional Terapan) didukung bimbingan riset karya ilmiah.',
      },
      {
        phase: 'Fase F (Kelas XII)',
        desc: 'Fase pemantapan akademik, peminatan kampus/kedinasan, portofolio karya, dan persiapan asesmen sumatif serta UTBK-SNBT.',
      },
    ],
    extracurriculars: [
      { name: 'Pramuka Gudep SMAN 15', category: 'Wajib & Kepanduan', schedule: 'Jumat, 15.30 WITA' },
      { name: 'Paskibraka Sekolah', category: 'Kepemimpinan & Kebangsaan', schedule: 'Selasa & Kamis, 16.00 WITA' },
      { name: 'PMR (Palang Merah Remaja)', category: 'Kemanusiaan & Kesehatan', schedule: 'Rabu, 15.30 WITA' },
      { name: 'KIR Sains & Lingkungan Malinau', category: 'Penelitian & Riset', schedule: 'Sabtu, 09.00 WITA' },
      { name: 'Sanggar Tari Tradisional Kenyah & Tidung', category: 'Seni Budaya Lokal', schedule: 'Senin & Rabu, 16.00 WITA' },
      { name: 'Futsal & Bola Voli Prestasi', category: 'Olahraga', schedule: 'Senin & Kamis, 16.00 WITA' },
      { name: 'English Debate & Speech Club', category: 'Bahasa & Komunikasi', schedule: 'Jumat, 14.00 WITA' },
      { name: 'Klub Multimedia & Robotika', category: 'Teknologi & IT', schedule: 'Sabtu, 10.00 WITA' },
    ],
  },
};

export const TEACHERS_LIST: TeacherStaff[] = [
  {
    id: 't-1',
    name: 'Evo Ellendra, S.Pd',
    role: 'Guru Mata Pelajaran',
    subject: 'Biologi',
    nip: '199104282022212005',
    education: 'S1 Pendidikan Biologi',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    id: 't-2',
    name: 'Erickson Sinaga',
    role: 'Guru Mata Pelajaran',
    subject: 'Bahasa Indonesia',
    nip: '198911012019031006',
    education: 'S1 Pendidikan Bahasa & Sastra Indonesia',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
  {
    id: 't-3',
    name: 'Aulina, S.Ag',
    role: 'Guru Mata Pelajaran',
    subject: 'Agama Katolik',
    nip: '199006152023212016',
    education: 'S1 Pendidikan Agama Katolik',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    id: 't-4',
    name: 'Winasuarti Uti, S.Pd',
    role: 'Guru Mata Pelajaran',
    subject: 'Ekonomi',
    nip: '198612192023212013',
    education: 'S1 Pendidikan Ekonomi',
    photoUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&q=80',
  },
  {
    id: 't-5',
    name: 'Ari Setyawan',
    role: 'Guru Mata Pelajaran',
    subject: 'Geografi',
    nip: '198907302018021001',
    education: 'S1 Pendidikan Geografi',
    photoUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&q=80',
  },
  {
    id: 't-6',
    name: 'Aprilianus, S.Pd',
    role: 'Guru Bimbingan & Konseling',
    subject: 'Bimbingan Konseling',
    nip: 'Non-ASN / Belum Ada NIP',
    education: 'S1 Bimbingan dan Konseling',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
  },
  {
    id: 't-7',
    name: 'Nancy, S.Pd',
    role: 'Guru Mata Pelajaran',
    subject: 'Sosiologi',
    nip: '199210232022212010',
    education: 'S1 Pendidikan Sosiologi',
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
  },
  {
    id: 't-8',
    name: 'Abidin, S.Pd',
    role: 'Guru Mata Pelajaran',
    subject: 'Penjasorkes',
    nip: '198906212023211011',
    education: 'S1 Pendidikan Jasmani, Kesehatan & Rekreasi',
    photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    id: 't-9',
    name: 'Maisyarah',
    role: 'Guru Mata Pelajaran',
    subject: 'Sejarah',
    nip: '199207262018022001',
    education: 'S1 Pendidikan Sejarah',
    photoUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&q=80',
  },
  {
    id: 't-10',
    name: 'Jefrida Agustina, S.Pd',
    role: 'Guru Mata Pelajaran',
    subject: 'Pendidikan Pancasila',
    nip: '199208072019032008',
    education: 'S1 PPKn',
    photoUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
  },
  {
    id: 't-11',
    name: 'Frederik Palintong',
    role: 'Guru Mata Pelajaran',
    subject: 'Seni Budaya',
    nip: '198911292025211036',
    education: 'S1 Pendidikan Seni Budaya',
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
  },
  {
    id: 't-12',
    name: 'Annahdhi Dzikri Fajriyah, S.Pd',
    role: 'Guru Mata Pelajaran',
    subject: 'Bahasa Inggris',
    nip: '199108142019032013',
    education: 'S1 Pendidikan Bahasa Inggris',
    photoUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&q=80',
  },
  {
    id: 't-13',
    name: 'Herlina Palinoan, S.Pd',
    role: 'Guru Mata Pelajaran',
    subject: 'Matematika',
    nip: '199005272019032007',
    education: 'S1 Pendidikan Matematika',
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
  },
  {
    id: 't-14',
    name: 'Winda Luben',
    role: 'Guru Mata Pelajaran',
    subject: 'Agama Kristen',
    nip: '198906212023212020',
    education: 'S1 Pendidikan Agama Kristen',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
];

export const NEWS_LIST: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Sukses Penyelenggaraan In House Training (IHT) Pengembangan Media Digital SMAN 15 Malinau',
    category: 'Pelatihan',
    date: '4 November 2026',
    author: 'Tim Humas SMAN 15',
    summary: 'Selama tiga hari berturut-turut (2–4 November 2026), dewan guru SMAN 15 Malinau sukses memproduksi ragam modul ajar PDF dan belasan video pembelajaran interaktif.',
    content: 'Kegiatan In House Training (IHT) bertajuk "Penyusunan dan Pengembangan Media Pembelajaran Berbasis Digital" resmi ditutup dengan capaian luar biasa. Bertempat di laboratorium komputer sekolah, 34 guru mata pelajaran saling berkolaborasi merancang materi pembelajaran digital, modul interaktif Canva & Google Sites, serta memproduksi video pembelajaran YouTube yang siap diakses murid kapan pun.',
    imageUrl: '/src/assets/images/iht_guru_workshop_1793880318529.jpg',
  },
  {
    id: 'news-2',
    title: 'Siswa SMAN 15 Malinau Sabet Medali Emas Olimpiade Sains & Debat Tingkat Provinsi Kaltara',
    category: 'Prestasi',
    date: '28 Oktober 2026',
    author: 'Koordinator Pembina Prestasi',
    summary: 'Delegasi riset sains dan tim debat bahasa SMAN 15 Malinau mengharumkan nama Kabupaten Malinau dengan memborong piala kejuaraan tingkat Kalimantan Utara.',
    content: 'Prestasi membanggakan kembali diukir para siswa SMAN 15 Malinau dalam ajang Festival Sains dan Debat Siswa Kalimantan Utara. Tim karya ilmiah yang mengkaji potensi konservasi tanaman obat khas Malinau berhasil meraih Medali Emas, membuktikan dedikasi pembinaan riset di sekolah ini.',
    imageUrl: '/src/assets/images/siswa_prestasi_belajar_1793880319738.jpg',
  },
  {
    id: 'news-3',
    title: 'Gelar Karya Projek Penguatan Profil Pelajar Pancasila (P5): Harmoni Budaya & Kearifan Lokal',
    category: 'Kegiatan Murid',
    date: '20 Oktober 2026',
    author: 'Tim Fasilitator P5',
    summary: 'Pameran kreasi seni, kuliner khas Dayak Tidung, serta instalasi ramah lingkungan karya siswa Fase E dan F memukau para tamu undangan.',
    content: 'Halaman tengah SMAN 15 Malinau disulap menjadi panggung kebudayaan yang semarak dalam agenda tahunan Panen Karya P5. Siswa menampilkan kerajinan anyaman ramah lingkungan, pertunjukan musik tradisional sampe, dan produk olahan buah lokal Malinau.',
    imageUrl: '/src/assets/images/hero_sman15_malinau_1793880316929.jpg',
  },
  {
    id: 'news-4',
    title: 'Sosialisasi Penerimaan Mahasiswa Baru & Bimbingan Karir SNBP/SNBT 2027',
    category: 'Informasi Pendidikan',
    date: '15 Oktober 2026',
    author: 'Guru Bimbingan Konseling (BK)',
    summary: 'SMAN 15 Malinau mengadakan sesi intensif pemetaan minat bakat dan strategi lolos perguruan tinggi negeri bersama pakar pendidikan.',
    content: 'Mempersiapkan siswa kelas XII melangkah ke jenjang pendidikan tinggi, sekolah mengundang perwakilan universitas ternama dan alumni berprestasi untuk memberikan kiat sukses menembus SNBP dan SNBT.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80',
  },
];

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Juara 1 Lomba Riset Sains Terapan Tingkat Provinsi Kaltara 2026',
    category: 'Akademik',
    level: 'Provinsi',
    recipient: 'Tim KIR SMAN 15 (Arya & Salsabila)',
    year: '2026',
    description: 'Penelitian inovasi bio-pestisida dari tanaman endemik hutan Malinau.',
  },
  {
    id: 'ach-2',
    title: 'Juara 1 Lomba Inovasi Media Pembelajaran Guru SMA Se-Kaltara',
    category: 'Guru & Tendik',
    level: 'Provinsi',
    recipient: 'Tim Guru MIPA SMAN 15',
    year: '2026',
    description: 'Pengembangan media simulasi interaktif berbasis Geogebra dan video eksperimen mandiri.',
  },
  {
    id: 'ach-3',
    title: 'Medali Emas O2SN Cabang Atletik & Bulu Tangkis',
    category: 'Non-Akademik',
    level: 'Kabupaten',
    recipient: 'Muhammad Raihan (Kelas XI-1)',
    year: '2026',
    description: 'Meraih skor waktu tercepat dalam lari 100 meter putra tingkat Kabupaten Malinau.',
  },
  {
    id: 'ach-4',
    title: 'Penghargaan Sekolah Berwawasan Lingkungan (Adiwiyata Kabupaten Malinau)',
    category: 'Akademik',
    level: 'Kabupaten',
    recipient: 'Civitas Akademika SMAN 15 Malinau',
    year: '2025',
    description: 'Pengelolaan lingkungan sekolah hijau, zero plastic canteen, dan taman edukasi botani.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'iht-gal-1',
    title: 'Foto Bersama Dewan Guru Peserta IHT 2026',
    category: 'Dokumentasi IHT',
    imageUrl: '${import.meta.env.BASE_URL}assets/aistudio/WhatsApp_Image_2026-11-04_at_10.33.10_d11ff906.jpeg',
    date: '2–4 November 2026',
    description: 'Seluruh dewan guru dan panitia SMAN 15 Malinau berfoto bersama di depan spanduk resmi In House Training (IHT) Penyusunan dan Pengembangan Media Pembelajaran di Punan Setarap.',
  },
  {
    id: 'iht-gal-2',
    title: 'Arahan & Pembukaan Resmi IHT SMAN 15 Malinau',
    category: 'Pelatihan Guru',
    imageUrl: '${import.meta.env.BASE_URL}assets/aistudio/WhatsApp_Image_2026-11-04_at_10.33.06_b4384e77.jpeg',
    date: '2–4 November 2026',
    description: 'Penyampaian sambutan dan arahan teknis kegiatan IHT Pengembangan Media Pembelajaran oleh pimpinan sekolah di hadapan dewan guru.',
  },
  {
    id: 'iht-gal-3',
    title: 'Pemaparan Konsep Media Pembelajaran Interaktif',
    category: 'Pelatihan Guru',
    imageUrl: '${import.meta.env.BASE_URL}assets/aistudio/WhatsApp_Image_2026-11-04_at_10.32.52_52194fd8.jpeg',
    date: '2–4 November 2026',
    description: 'Sesi pemaparan materi konsep penyusunan media interaktif berbasis Canva, Storybook digital, dan AI untuk pembelajaran aktif.',
  },
  {
    id: 'iht-gal-4',
    title: 'Presentasi Modul Ajar Sosiologi Kelas XI (Nancy, S.Pd)',
    category: 'Presentasi Guru',
    imageUrl: '${import.meta.env.BASE_URL}assets/aistudio/WhatsApp_Image_2026-11-04_at_10.32.56_9c9d282e.jpeg',
    date: '2–4 November 2026',
    description: 'Ibu Nancy, S.Pd mempresentasikan modul ajar Kurikulum Merdeka mata pelajaran Sosiologi Kelas XI materi Kelompok Sosial pada layar interaktif.',
  },
  {
    id: 'iht-gal-5',
    title: 'Demonstrasi Aplikasi Asesmen Digital Sejarah (Maisyarah)',
    category: 'Presentasi Guru',
    imageUrl: '${import.meta.env.BASE_URL}assets/aistudio/WhatsApp_Image_2026-11-04_at_10.32.51_518b3f4d.jpeg',
    date: '2–4 November 2026',
    description: 'Ibu Maisyarah mendemonstrasikan aplikasi asesmen kompetensi interaktif Sejarah Kelas 10 Kurikulum Merdeka berbasis AI Studio.',
  },
  {
    id: 'iht-gal-6',
    title: 'Presentasi Video Storybook Pembelajaran Interaktif',
    category: 'Presentasi Guru',
    imageUrl: '${import.meta.env.BASE_URL}assets/aistudio/WhatsApp_Image_2026-11-04_at_10.32.55_3a9fc9d5.jpeg',
    date: '2–4 November 2026',
    description: 'Demonstrasi video storybook animasi interaktif di layar smart display sebagai media penguatan literasi dan minat baca siswa.',
  },
  {
    id: 'iht-gal-7',
    title: 'Presentasi Media Pembelajaran Interaktif (Herlina Palinoan, S.Pd)',
    category: 'Presentasi Guru',
    imageUrl: '${import.meta.env.BASE_URL}assets/aistudio/WhatsApp_Image_2026-11-04_at_10.32.58_fa717075.jpeg',
    date: '2–4 November 2026',
    description: 'Ibu Herlina Palinoan, S.Pd memaparkan media pembelajaran interaktif Matematika dengan pemanfaatan animasi karakter visual digital.',
  },
  {
    id: 'iht-gal-8',
    title: 'Sesi Diskusi & Uji Coba Media Pembelajaran',
    category: 'Pelatihan Guru',
    imageUrl: '${import.meta.env.BASE_URL}assets/aistudio/WhatsApp_Image_2026-11-04_at_10.33.02_3760e0ef.jpeg',
    date: '2–4 November 2026',
    description: 'Diskusi interaktif dan pengujian kelayakan media pembelajaran antar guru peserta IHT sebelum implementasi di ruang kelas.',
  },
];
