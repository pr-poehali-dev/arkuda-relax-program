import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-primary text-primary-foreground" id="contacts">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-light mb-6">ЭКО-ферма «Аркуда»</h3>
        <div className="space-y-3 text-primary-foreground/80">
          <p className="flex items-center justify-center gap-2">
            <Icon name="Phone" size={20} />
            <a href="tel:+79923303101" className="hover:text-primary-foreground transition-colors">+7 (992) 330-31-01</a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <Icon name="Mail" size={20} />
            <span>info@arkuda-farm.ru</span>
          </p>
          <p className="flex items-center justify-center gap-2">
            <Icon name="MapPin" size={20} />
            <span>Свердловская область, 120 км от Екатеринбурга</span>
          </p>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-primary-foreground/60">© 2024 ЭКО-ферма «Аркуда». Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
