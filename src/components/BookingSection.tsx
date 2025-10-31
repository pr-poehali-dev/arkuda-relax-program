import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface BookingSectionProps {
  formData: {
    name: string;
    phone: string;
    email: string;
    message: string;
  };
  setFormData: (data: { name: string; phone: string; email: string; message: string }) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function BookingSection({ formData, setFormData, handleSubmit }: BookingSectionProps) {
  return (
    <section className="py-20 px-4 bg-muted/30" id="booking">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground">
            Начните свою перезагрузку
          </h2>
          <p className="text-lg text-muted-foreground">
            Позвольте себе тишину. Верните себе гармонию.
          </p>
        </div>

        <Card className="border-border/50 shadow-xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Имя</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ваше имя"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Телефон</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Сообщение</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Расскажите о себе и ваших ожиданиях от программы"
                  rows={4}
                  className="w-full"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 rounded-full transition-all hover:scale-105"
              >
                Забронировать программу
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
