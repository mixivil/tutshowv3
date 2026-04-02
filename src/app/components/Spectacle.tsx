import { ImageWithFallback } from './figma/ImageWithFallback';

const formatItems = [
  {
    title: 'Документальная основа',
    text: 'Диалог строится вокруг ключевых событий жизни героев, их взаимоотношений, творческих поисков и мифов вокруг их имен.',
  },
  {
    title: 'Живая музыка',
    text: 'Группа «Гоголь-Моголь» исполняет инструментальные и вокальные номера, связанные с темой выпуска.',
  },
  {
    title: 'Вовлечение зрителя',
    text: 'Аудитория становится частью ток-шоу. Уровень участия можно настроить: от наблюдения до включения в действие.',
  },
  {
    title: 'Адаптация под мероприятие',
    text: 'Можно изменить состав героев, привязать спектакль к дате и сделать сокращенную корпоративную версию.',
  },
];

const productions = [
  {
    kicker: 'постановка 01',
    title: 'Ночь в редакции',
    text: 'Иммерсивный выпуск о писателях и поэтах Серебряного века. Ведущий ток-шоу собирает за одним столом тех, чьи письма, конфликты и творческие союзы стали частью культурной мифологии.',
    meta: '70 минут / живая музыка / камерный формат',
    photo: 'https://images.unsplash.com/photo-1537995882121-d1d04a5a78a3?w=500&h=400&fit=crop',
  },
  {
    kicker: 'постановка 02',
    title: 'Разговоры, которых не было',
    text: 'Спектакль о встречах исторических фигур, которые в реальности могли не состояться, но сегодня звучат удивительно современно. Литература, личные выборы, репутация и время становятся частью живого разговора со зрителем.',
    meta: 'адаптация под площадку / интерактив / исторические персонажи',
    photo: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=400&fit=crop',
  },
  {
    kicker: 'индивидуальный формат',
    title: 'Уникальный номер под ваше событие',
    text: 'Команда может подготовить оригинальный номер или специальную постановку в том формате, который нужен заказчику: под тему вечера, бренд, дату, аудиторию и нужный уровень вовлечения.',
    meta: 'разработка под задачу / индивидуальная драматургия / гибкий тайминг',
    photo: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=400&fit=crop',
  },
];

export function Spectacle() {
  return (
    <section id="spectacle" className="border-b border-black/10 bg-[#ffffff]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="font-['Inter'] text-xs uppercase tracking-[0.2em] text-black/45">что мы играем</div>
            <h2 className="mt-4 font-['Manrope'] text-[clamp(2.2rem,5vw,4rem)] font-800 leading-[0.98] tracking-[-0.05em] text-[#0a0a0a]">
              Иммерсивный спектакль в формате ток-шоу
            </h2>
            <p className="mt-6 font-['Inter'] text-lg leading-8 text-black/66">
              Ведущий берет интервью у исторических персонажей — писателей, поэтов,
              деятелей культуры. В основе сценария письма, дневники, мемуары, реальные события
              и исторические анекдоты.
            </p>
          </div>

          <div className="grid gap-4">
            {formatItems.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-black/10 bg-white p-6 sm:p-7">
                <h3 className="font-['Manrope'] text-2xl font-700 tracking-[-0.04em] text-[#0a0a0a]">{item.title}</h3>
                <p className="mt-3 font-['Inter'] text-base leading-7 text-black/62">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-black/10 pt-10">
          <div className="max-w-3xl">
            <div className="font-['Inter'] text-xs uppercase tracking-[0.2em] text-black/45">постановки</div>
            <h3 className="mt-3 font-['Manrope'] text-[clamp(1.8rem,4vw,3rem)] font-800 leading-[1] tracking-[-0.05em] text-[#111111]">
              Форматы, с которых можно начать
            </h3>
            <p className="mt-5 font-['Inter'] text-base leading-7 text-black/62">
              Ниже — примеры постановок и форматов, которые можно адаптировать под площадку,
              аудиторию и характер события.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {productions.map((item, index) => (
              <article
                key={item.title}
                className={`overflow-hidden rounded-[1.75rem] border ${
                  index === 2 ? 'border-[#c1121f]/20 bg-[#fff8e8]' : 'border-black/10 bg-white'
                }`}
              >
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={item.photo}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <div className="font-['Inter'] text-[0.72rem] uppercase tracking-[0.18em] text-[#c1121f]">
                    {item.kicker}
                  </div>
                  <h4 className="mt-4 font-['Manrope'] text-[1.9rem] font-800 leading-[1] tracking-[-0.05em] text-[#111111]">
                    {item.title}
                  </h4>
                  <p className="mt-5 font-['Inter'] text-base leading-7 text-black/62">{item.text}</p>
                  <div className="mt-8 border-t border-black/8 pt-4 font-['Inter'] text-sm uppercase tracking-[0.14em] text-black/48">
                    {item.meta}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
