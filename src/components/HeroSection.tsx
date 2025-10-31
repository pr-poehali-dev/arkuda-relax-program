import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center blur-sm opacity-70"
        style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/530d18c9-4326-4871-8a3f-90d693be60ca/files/10e7b583-d53e-4bf0-8bad-b02257791da7.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wide drop-shadow-2xl">
          Перезагрузка в Аркуде
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
          Ваше путешествие к гармонии начинается здесь
        </p>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
          onClick={() => scrollToSection('booking')}
        >
          Начать путешествие
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/60" />
      </div>
    </section>
  );
}