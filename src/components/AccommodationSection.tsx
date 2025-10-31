import { Card, CardContent } from '@/components/ui/card';

export default function AccommodationSection() {
  return (
    <section className="py-20 px-4 bg-background" id="accommodation">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-8 text-center text-foreground">
          Ваше личное пространство для трансформации
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">
          Для полного погружения в процесс мы подготовили уединенные варианты размещения со строгим одноместным размещением. Это ваша личная территория покоя, где вас ничто не отвлечет.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="overflow-hidden border-border/50 hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/530d18c9-4326-4871-8a3f-90d693be60ca/files/6deabacd-7aa8-494e-b13e-8f728996534d.jpg')` }}></div>
            <CardContent className="p-8">
              <h3 className="text-3xl font-semibold mb-4 text-foreground">Домик-уединение</h3>
              <p className="text-muted-foreground leading-relaxed">
                Полное слияние с природой. Через панорамное окно вы можете наблюдать, как по лесу гуляют олени и маралы. Идеально для тех, кто ищет глубокого погружения в дикую природу.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-border/50 hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/530d18c9-4326-4871-8a3f-90d693be60ca/files/6deabacd-7aa8-494e-b13e-8f728996534d.jpg')` }}></div>
            <CardContent className="p-8">
              <h3 className="text-3xl font-semibold mb-4 text-foreground">Апартаменты с видом на озеро</h3>
              <p className="text-muted-foreground leading-relaxed">
                Пространство уюта и эко-комфорта. Вы будете просыпаться с видом на гладь озера, по которой плавают лебеди, а вечера проводить у камина. Идеальный баланс уединения и комфорта.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}