import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const menuData = [
  {
    day: 1,
    title: 'Мягкий старт',
    breakfast: 'Сырная тарелка с моцареллой и грецкими орехами + травяной чай «Утреннее солнце» для мягкого пробуждения и энергии',
    lunch: 'Нежный суп-пюре из брокколи и цветной капусты',
    dinner: 'Треска на подушке из шпината'
  },
  {
    day: 2,
    title: 'Наполнение силой',
    breakfast: 'Яйца пашот со шпинатом + имбирный чай для внутреннего тепла и тонуса',
    lunch: 'Крем-суп из сельдерея и цукини',
    dinner: 'Индейка на пару с тушеными цукини'
  },
  {
    day: 3,
    title: 'Гармония вкуса',
    breakfast: 'Творожный мусс с миндалем + ромашковый чай для спокойствия и баланса',
    lunch: 'Овощной суп «Минестроне» со свежими овощами',
    dinner: 'Лосось на пару с салатом из свежих огурцов'
  },
  {
    day: 4,
    title: 'Энергия природы',
    breakfast: 'Сырная тарелка с бурратой и кешью + травяной сбор «Сила леса» для бодрости духа',
    lunch: 'Суп-пюре из шпината и цветной капусты',
    dinner: 'Нежные котлеты из индейки с пастой из цукини'
  },
  {
    day: 5,
    title: 'Легкость бытия',
    breakfast: 'Омлет на пару с зеленью + мятный чай для свежести и ясности ума',
    lunch: 'Овощной суп с брокколи и цукини',
    dinner: 'Треска с груздями под греческим йогуртом'
  },
  {
    day: 6,
    title: 'Чистота и свежесть',
    breakfast: 'Сырная тарелка с моцареллой и миндалем + зеленый чай для очищения и бодрости',
    lunch: 'Овощной суп «Минестроне» с травами',
    dinner: 'Индейка на пару с запеченной брокколи'
  },
  {
    day: 7,
    title: 'Баланс и гармония',
    breakfast: 'Яйца всмятку с зеленью + травяной сбор «Гармония» для завершения очищения',
    lunch: 'Суп-пюре из сельдерея и кабачка',
    dinner: 'Лосось на пару с салатом из авокадо'
  }
];

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

const results = [
  'Чистая голова и спокойствие вместо тревожности',
  'Прилив энергии благодаря качественному питанию и сну',
  'Контроль над вниманием и свобода от цифровой зависимости',
  'Личный план сохранения гармонии в городе'
];

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/530d18c9-4326-4871-8a3f-90d693be60ca/files/edaf59db-04f7-4723-8393-a80085e4700f.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-wide">
            Перезагрузка в Аркуде
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Ваше путешествие к гармонии начинается здесь
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Начать путешествие
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/60" />
        </div>
      </section>

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

      <section className="py-20 px-4 bg-muted/30" id="menu">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-center text-foreground">
            Гастрономическое сопровождение программы
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            В рамках программы вас ждет специально разработанное 7-дневное меню, которое способствует очищению и восстановлению организма. Мы используем только свежие фермерские продукты, полностью исключив сахар, глютен и обработанную пищу.
          </p>

          <div className="mb-12">
            <img 
              src="https://cdn.poehali.dev/projects/530d18c9-4326-4871-8a3f-90d693be60ca/files/0fa792ce-a2f2-41e7-89cc-8ec635081f3d.jpg" 
              alt="Healthy breakfast"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {menuData.map((day) => (
              <AccordionItem key={day.day} value={`day-${day.day}`} className="border border-border/50 rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-xl font-semibold text-foreground hover:no-underline py-6">
                  День {day.day}: {day.title}
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pb-6">
                  <div>
                    <p className="font-medium text-accent mb-2">Завтрак</p>
                    <p className="text-muted-foreground leading-relaxed">{day.breakfast}</p>
                  </div>
                  <div>
                    <p className="font-medium text-accent mb-2">Обед</p>
                    <p className="text-muted-foreground leading-relaxed">{day.lunch}</p>
                  </div>
                  <div>
                    <p className="font-medium text-accent mb-2">Ужин</p>
                    <p className="text-muted-foreground leading-relaxed">{day.dinner}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-center text-muted-foreground mt-8 italic">
            Каждый травяной чай специально подобран для создания внутреннего баланса - они дарят телу необходимое тепло, наполняют энергией и помогают мягкому очищению организма.
          </p>
        </div>
      </section>

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

      <footer className="py-12 px-4 bg-primary text-primary-foreground" id="contacts">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-light mb-6">Сафари-парк «Аркуда»</h3>
          <div className="space-y-3 text-primary-foreground/80">
            <p className="flex items-center justify-center gap-2">
              <Icon name="Phone" size={20} />
              <span>+7 (999) 123-45-67</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <Icon name="Mail" size={20} />
              <span>info@arkuda-park.ru</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <Icon name="MapPin" size={20} />
              <span>Республика Алтай, Сафари-парк «Аркуда»</span>
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/60">© 2024 Сафари-парк «Аркуда». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}