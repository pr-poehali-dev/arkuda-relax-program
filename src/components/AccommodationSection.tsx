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
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('https://static.tildacdn.com/tild6330-6163-4862-a234-376333386261/ac6f5219-bbea-4ba2-9.jpg')` }}></div>
            <CardContent className="p-8">
              <h3 className="text-3xl font-semibold mb-4 text-foreground">Домик-уединение</h3>
              <p className="text-muted-foreground leading-relaxed">
                Полное слияние с природой. Через панорамное окно вы можете наблюдать, как по лесу гуляют олени и маралы. Идеально для тех, кто ищет глубокого погружения в дикую природу.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-border/50 hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('https://static.tildacdn.com/tild3834-3239-4532-b062-333436636662/ac6f5219-bbea-4ba2-9.jpg')` }}></div>
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