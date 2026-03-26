import { Mic2, Lightbulb, Users2, Clock, MapPin, Calendar } from 'lucide-react';

export function Technical() {
  return (
    <section id="tech" className="relative py-24 bg-white">
      {/* Geometric background */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <div className="w-full h-full bg-red-600 rotate-45"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5">
        <div className="w-full h-full bg-yellow-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-1 bg-red-600"></div>
            <p className="text-red-600 tracking-[0.2em] font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
              ТЕХНИЧЕСКИЕ ДЕТАЛИ
            </p>
            <div className="w-12 h-1 bg-red-600"></div>
          </div>
          
          <h2 className="text-black mb-6 font-['Montserrat'] leading-[0.95] uppercase" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 900 }}>
            Требования<br />и условия
          </h2>
          
          <div className="flex justify-center gap-2">
            <div className="w-24 h-1 bg-red-600"></div>
            <div className="w-24 h-1 bg-yellow-500"></div>
            <div className="w-24 h-1 bg-black"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Technical Requirements */}
          <div>
            <h3 className="text-black mb-8 font-['Montserrat'] uppercase relative inline-block" style={{ fontSize: '1.75rem', fontWeight: 900 }}>
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-600"></div>
              Технические требования
            </h3>

            <div className="space-y-6">
              <div className="border-l-8 border-red-600 bg-black text-white p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 flex items-center justify-center flex-shrink-0">
                    <Mic2 className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-3 font-['Montserrat'] uppercase" style={{ fontSize: '1rem', fontWeight: 700 }}>Звуковое оборудование</h4>
                    <ul className="space-y-2 text-white/80 font-['Inter']" style={{ fontSize: '0.875rem', fontWeight: 400 }}>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-500 mt-1.5 flex-shrink-0"></div>
                        <span>Профессиональная звуковая система</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-500 mt-1.5 flex-shrink-0"></div>
                        <span>Минимум 6 радиомикрофонов</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-500 mt-1.5 flex-shrink-0"></div>
                        <span>Звукорежиссёр (возможно предоставление нашим)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-500 mt-1.5 flex-shrink-0"></div>
                        <span>Линия для подключения музыкальных инструментов</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-8 border-yellow-500 bg-black text-white p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-500 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-black" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-3 font-['Montserrat'] uppercase" style={{ fontSize: '1rem', fontWeight: 700 }}>Световое оборудование</h4>
                    <ul className="space-y-2 text-white/80 font-['Inter']" style={{ fontSize: '0.875rem', fontWeight: 400 }}>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-600 mt-1.5 flex-shrink-0"></div>
                        <span>Театральное освещение сцены</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-600 mt-1.5 flex-shrink-0"></div>
                        <span>Возможность затемнения зала</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-600 mt-1.5 flex-shrink-0"></div>
                        <span>Цветные прожекторы (желательно)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-600 mt-1.5 flex-shrink-0"></div>
                        <span>Световой пульт управления</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-8 border-red-600 bg-black text-white p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 flex items-center justify-center flex-shrink-0">
                    <Users2 className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-3 font-['Montserrat'] uppercase" style={{ fontSize: '1rem', fontWeight: 700 }}>Пространство</h4>
                    <ul className="space-y-2 text-white/80 font-['Inter']" style={{ fontSize: '0.875rem', fontWeight: 400 }}>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-500 mt-1.5 flex-shrink-0"></div>
                        <span>Сцена или игровая площадка (мин. 4×6 м)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-500 mt-1.5 flex-shrink-0"></div>
                        <span>Зал от 50 до 500 человек</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-500 mt-1.5 flex-shrink-0"></div>
                        <span>Гримёрная для команды (6-8 человек)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-500 mt-1.5 flex-shrink-0"></div>
                        <span>Доступ для загрузки оборудования</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Organizational Details */}
          <div>
            <h3 className="text-black mb-8 font-['Montserrat'] uppercase relative inline-block" style={{ fontSize: '1.75rem', fontWeight: 900 }}>
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-500"></div>
              Организационные условия
            </h3>

            <div className="space-y-6">
              <div className="bg-red-600 text-white p-8 relative">
                <div className="absolute top-0 right-0 w-12 h-12 bg-yellow-500"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-14 h-14 bg-white flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-red-600" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-3 font-['Montserrat'] uppercase" style={{ fontSize: '1rem', fontWeight: 700 }}>Время подготовки</h4>
                    <p className="font-['Inter'] leading-relaxed" style={{ fontSize: '0.875rem', fontWeight: 400 }}>
                      <strong>Монтаж и настройка</strong> — 3-4 часа до начала<br />
                      <strong>Звуковая проверка</strong> — за 1 час до выступления<br />
                      <strong>Демонтаж</strong> — 1-2 часа после окончания
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black text-white p-8 border-t-8 border-yellow-500">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-yellow-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-black" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-3 font-['Montserrat'] uppercase" style={{ fontSize: '1rem', fontWeight: 700 }}>Гастрольная программа</h4>
                    <p className="mb-4 font-['Inter'] leading-relaxed" style={{ fontSize: '0.875rem', fontWeight: 400 }}>
                      Мы работаем по всей России и за рубежом. Выезжаем в любой город.
                    </p>
                    <ul className="space-y-2 text-white/70 font-['Inter']" style={{ fontSize: '0.8125rem', fontWeight: 400 }}>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-600 mt-1.5 flex-shrink-0"></div>
                        <span>Логистика: оплачивается заказчиком</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-600 mt-1.5 flex-shrink-0"></div>
                        <span>Проживание команды (при необходимости)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-600 mt-1.5 flex-shrink-0"></div>
                        <span>Трансфер до площадки</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-black text-white p-8 border-t-8 border-red-600">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-red-600 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-3 font-['Montserrat'] uppercase" style={{ fontSize: '1rem', fontWeight: 700 }}>Сроки бронирования</h4>
                    <p className="font-['Inter'] leading-relaxed" style={{ fontSize: '0.875rem', fontWeight: 400 }}>
                      Рекомендуем бронировать дату за 2-3 месяца до мероприятия. 
                      Возможны срочные заявки — уточняйте наличие свободных дат.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Box */}
            <div className="mt-6 bg-yellow-500 text-black p-8 relative">
              <div className="absolute top-0 left-0 w-16 h-16 bg-red-600"></div>
              <div className="relative z-10">
                <h4 className="mb-3 font-['Montserrat'] uppercase" style={{ fontSize: '1.25rem', fontWeight: 900 }}>
                  Индивидуальный подход
                </h4>
                <p className="font-['Inter'] leading-relaxed" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                  Каждый проект уникален. Мы готовы обсудить особые требования и найти 
                  решение для любой площадки. Свяжитесь с нами для детального обсуждения.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
