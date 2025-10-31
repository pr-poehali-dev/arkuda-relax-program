import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProgramSection from '@/components/ProgramSection';
import AccommodationSection from '@/components/AccommodationSection';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import ResultsSection from '@/components/ResultsSection';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        isScrolled={isScrolled} 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
      <HeroSection scrollToSection={scrollToSection} />
      <ProgramSection />
      <AccommodationSection />
      <MenuSection />
      <GallerySection />
      <ResultsSection />
      <BookingSection 
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </div>
  );
}
