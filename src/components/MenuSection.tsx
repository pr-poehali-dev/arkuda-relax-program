import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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

export default function MenuSection() {
  return (
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
  );
}
