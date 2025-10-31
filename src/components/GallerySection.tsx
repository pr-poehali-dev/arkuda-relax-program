import { Card, CardContent } from '@/components/ui/card';

const gallery = [
  {
    url: 'https://static.tildacdn.com/tild6330-6163-4862-a234-376333386261/ac6f5219-bbea-4ba2-9.jpg',
    title: 'Природа Аркуды',
    description: 'Встречайте утро в компании благородных оленей'
  },
  {
    url: 'https://static.tildacdn.com/tild3834-3239-4532-b062-333436636662/ac6f5219-bbea-4ba2-9.jpg',
    title: 'Территория фермы',
    description: 'Наблюдайте за дикой природой в безопасности'
  },
  {
    url: 'https://cdn.poehali.dev/projects/530d18c9-4326-4871-8a3f-90d693be60ca/files/ea05ed38-6e02-4eb2-8b8b-44f9c9f1861a.jpg',
    title: 'Дружелюбные альпаки',
    description: 'Пообщайтесь с нашими милыми обитателями'
  },
  {
    url: 'https://cdn.poehali.dev/projects/530d18c9-4326-4871-8a3f-90d693be60ca/files/11f9fa2b-08f9-4a3b-97ac-261a74dc4750.jpg',
    title: 'Гладь озера с лебедями',
    description: 'Умиротворяющий вид на озеро из апартаментов'
  }
];

export default function GallerySection() {
  return (
    <section className="py-20 px-4 bg-background" id="gallery">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-8 text-center text-foreground">
          Встречайте обитателей «Аркуды»
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">
          Здесь вы станете частью удивительного мира природы, где каждый день дарит встречи с его прекрасными обитателями.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {gallery.map((item, index) => (
            <Card key={index} className="overflow-hidden border-border/50 hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="h-80 bg-cover bg-center transition-transform duration-700 hover:scale-110" style={{ backgroundImage: `url('${item.url}')` }}></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}