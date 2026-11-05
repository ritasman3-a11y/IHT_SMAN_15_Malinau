import React, { useState, useEffect } from 'react';
import { IhtNavbar } from './components/IhtNavbar';
import { IhtHero } from './components/IhtHero';
import { IhtShowcaseSection } from './components/IhtShowcaseSection';
import { IhtAboutSection } from './components/IhtAboutSection';
import { GallerySection } from './components/GallerySection';
import { IhtFooter } from './components/IhtFooter';

// Modals
import { VideoModal } from './components/modals/VideoModal';
import { PdfModal } from './components/modals/PdfModal';
import { ManageWorksModal } from './components/modals/ManageWorksModal';
import { LightboxModal } from './components/modals/LightboxModal';

// Data
import { IhtProduct, getStoredIhtProducts } from './data/ihtData';
import { GALLERY_ITEMS } from './data/schoolData';

export default function App() {
  const [products, setProducts] = useState<IhtProduct[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Modal states
  const [selectedVideo, setSelectedVideo] = useState<IhtProduct | null>(null);
  const [selectedPdf, setSelectedPdf] = useState<IhtProduct | null>(null);
  const [isManageModalOpen, setIsManageModalOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Initialize stored IHT products
  useEffect(() => {
    setProducts(getStoredIhtProducts());
  }, []);

  // Keyboard navigation for modals (Escape key)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedVideo(null);
        setSelectedPdf(null);
        setIsManageModalOpen(false);
        setLightboxIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleScrollTo = (elementId: string) => {
    if (elementId === 'hero-iht') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToGallery = (filterType?: string) => {
    if (filterType) {
      setSelectedCategory(filterType);
    }
    handleScrollTo('galeri-karya-iht');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-100 antialiased selection:bg-amber-500 selection:text-white">
      {/* 1. Official Header / Navigation */}
      <IhtNavbar
        activeCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        onOpenManageModal={() => setIsManageModalOpen(true)}
        onScrollTo={handleScrollTo}
      />

      <main className="flex-1">
        {/* 2. Focused Hero Section: HASIL KARYA IHT SMAN 15 MALINAU */}
        <IhtHero
          onScrollToGallery={handleNavigateToGallery}
          onOpenManageModal={() => setIsManageModalOpen(true)}
          onOpenPhoto={() => setLightboxIndex(0)}
        />

        {/* 3. Showcase Section: All 14 YouTube Videos, PDF Modules, Digital Media & LKPD */}
        <IhtShowcaseSection
          products={products}
          selectedType={selectedCategory}
          onSelectType={(type) => setSelectedCategory(type)}
          onOpenVideoModal={(prod) => setSelectedVideo(prod)}
          onOpenPdfModal={(prod) => setSelectedPdf(prod)}
          onOpenManageModal={() => setIsManageModalOpen(true)}
        />

        {/* 4. Official IHT Workshop Photo Gallery (8 Authentic Photos) */}
        <GallerySection
          onOpenLightbox={(idx) => setLightboxIndex(idx)}
        />

        {/* 5. About the IHT Event: 2–4 November 2026, Principal Note & Workshop Photo */}
        <IhtAboutSection
          onOpenPhotoLightbox={() => setLightboxIndex(0)} // Index 0 is the IHT workshop photo
        />
      </main>

      {/* 5. Official School Footer */}
      <IhtFooter
        onOpenManageModal={() => setIsManageModalOpen(true)}
        onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      {/* Interactive Modals */}
      <VideoModal
        product={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      <PdfModal
        product={selectedPdf}
        onClose={() => setSelectedPdf(null)}
      />

      <ManageWorksModal
        isOpen={isManageModalOpen}
        onClose={() => setIsManageModalOpen(false)}
        products={products}
        onUpdateProducts={(newProducts) => setProducts(newProducts)}
      />

      <LightboxModal
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
}
