import { Card, CardContent } from '@/components/ui/card';

const programDays = [
  {
    days: '1',
    title: 'Цифровой детокс',
    subtitle: 'Тишина вместо шума',
    description: 'Вы сдаете телефон. Сначала будет непривычно, а потом наступит облегчение. Мозг перестанет ждать новых уведомлений и начнет, наконец, отдыхать.'
  },
  {
    days: '2-3',
    title: 'Перезагрузка питания',
    subtitle: 'Энергия вместо тяжести',
    description: 'Наше чистое кето-меню и интервальное голодание подарят вам ментальную ясность и запустят естественное обновление организма.'
  },
  {
    days: '4-5',
    title: 'Погружение в природу',
    subtitle: 'Спокойствие вместо суеты',
    description: 'Ваше новое окружение — гармония дикой природы. Здесь вас ждут встречи с любопытными альпаками и наблюдение за величественными маралами. Ваши дни наполнятся неспешными прогулками в утреннем лесу, чтением у камина и глубоким, восстанавливающим сном.'
  },
  {
    days: '6-7',
    title: 'Обретение нового ритма',
    subtitle: 'Баланс вместо выгорания',
    description: 'Вы вернетесь к здоровым ритмам: сон с закатом, пробуждение с рассветом. Появится энергия для простых радостей и ясное понимание, как сохранить это состояние.'
  }
];

export default function ProgramSection() {
  return (
    <>
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-foreground">
            Территория тихой трансформации
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Вы пришли сюда по очень важной причине. Ваше путешествие начинается с простого, но глубокого признания: «Мне нужна перезагрузка».
            </p>
            <p>
              «Аркуда» — не курорт. Это территория тихой трансформации, где вы — главный герой своей истории, а наша роль — быть вашим проводником, мягко ведущим вас от городского хаоса и чувства отчуждения к внутренней гармонии и встрече с вашим истинным «Я».
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30" id="program">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center text-foreground">
            Ваш путь к перезагрузке за 7 дней
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {programDays.map((item, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-2xl font-light text-accent">{item.days}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-accent font-medium mb-3">{item.subtitle}</p>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
