import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const results = [
  'Чистая голова и спокойствие вместо тревожности',
  'Прилив энергии благодаря качественному питанию и сну',
  'Контроль над вниманием и свобода от цифровой зависимости',
  'Личный план сохранения гармонии в городе'
];

export default function ResultsSection() {
  return (
    <section className="py-20 px-4 bg-background" id="results">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-16 text-foreground">
          Ваш результат после программы
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {results.map((result, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Icon name="Check" className="text-accent" size={28} />
                  </div>
                  <p className="text-lg text-foreground text-left leading-relaxed">{result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
