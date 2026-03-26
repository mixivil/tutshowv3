import { ImageWithFallback } from './figma/ImageWithFallback';
import { Music, Heart, Theater } from 'lucide-react';

export function Spectacle() {
  return (
    <section id="spectacle" className="relative py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-1 bg-red-600"></div>
            <p className="text-yellow-500 tracking-[0.2em] font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
              О СПЕКТАКЛЕ
            </p>
            <div className="w-12 h-1 bg-red-600"></div>
          </div>
          
          <h2 className="text-white mb-6 font-['Montserrat'] leading-[0.95] uppercase relative inline-block" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 900 }}>
            <div className="absolute -top-4 -left-4 w-6 h-6 bg-red-600"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-yellow-500"></div>
            Иммерсивное<br />ток-шоу
          </h2>
          
          <div className="flex justify-center gap-2 mb-8">
            <div className="w-24 h-1 bg-red-600"></div>
            <div className="w-24 h-1 bg-yellow-500"></div>
            <div className="w-24 h-1 bg-white"></div>
          </div>

          <p className="text-white/80 max-w-3xl mx-auto font-['Inter'] leading-relaxed" style={{ fontSize: '1.125rem', fontWeight: 400 }}>
            Это не просто спектакль — это живое событие, где граница между сценой и залом стирается, 
            а каждый зритель становится частью художественного высказывания
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Card 1: Musical Component */}
          <div className="group">
            <div className="bg-white p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 group-hover:w-full group-hover:h-full transition-all duration-500 -z-0"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-red-600 group-hover:bg-yellow-500 flex items-center justify-center transition-colors">
                    <Music className="w-8 h-8 text-white group-hover:text-black transition-colors" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-black group-hover:text-white font-['Montserrat'] uppercase transition-colors" style={{ fontSize: '1.5rem', fontWeight: 900 }}>
                    Музыкальная<br />составляющая
                  </h3>
                </div>
                
                <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
                
                <p className="text-black group-hover:text-white mb-6 font-['Inter'] leading-relaxed transition-colors" style={{ fontSize: '0.9375rem', fontWeight: 400 }}>
                  Живой звук создаёт уникальную атмосферу каждого представления. 
                  Профессиональные музыканты не просто сопровождают спектакль — они являются 
                  полноправными участниками действия.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 group-hover:bg-yellow-500 mt-1.5 flex-shrink-0 transition-colors"></div>
                    <span className="text-black group-hover:text-white font-['Inter'] transition-colors" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                      Живая музыка на профессиональном оборудовании
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 group-hover:bg-yellow-500 mt-1.5 flex-shrink-0 transition-colors"></div>
                    <span className="text-black group-hover:text-white font-['Inter'] transition-colors" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                      Импровизация в соответствии с развитием сюжета
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 group-hover:bg-yellow-500 mt-1.5 flex-shrink-0 transition-colors"></div>
                    <span className="text-black group-hover:text-white font-['Inter'] transition-colors" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                      Возможность включения музыкальных номеров заказчика
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Audience Interaction */}
          <div className="group">
            <div className="bg-red-600 p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 group-hover:w-full group-hover:h-full transition-all duration-500 -z-0"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-yellow-500 group-hover:bg-white flex items-center justify-center transition-colors">
                    <Heart className="w-8 h-8 text-black" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-white group-hover:text-black font-['Montserrat'] uppercase transition-colors" style={{ fontSize: '1.5rem', fontWeight: 900 }}>
                    Взаимодействие<br />со зрителем
                  </h3>
                </div>
                
                <div className="w-16 h-1 bg-white group-hover:bg-black mb-6 transition-colors"></div>
                
                <p className="text-white group-hover:text-black mb-6 font-['Inter'] leading-relaxed transition-colors" style={{ fontSize: '0.9375rem', fontWeight: 400 }}>
                  Иммерсивный формат означает полное погружение. Зрители не наблюдают — 
                  они проживают историю вместе с актёрами, становясь соавторами спектакля.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white group-hover:bg-black mt-1.5 flex-shrink-0 transition-colors"></div>
                    <span className="text-white group-hover:text-black font-['Inter'] transition-colors" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                      Прямое вовлечение аудитории в действие
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white group-hover:bg-black mt-1.5 flex-shrink-0 transition-colors"></div>
                    <span className="text-white group-hover:text-black font-['Inter'] transition-colors" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                      Индивидуальная работа с каждым участником
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white group-hover:bg-black mt-1.5 flex-shrink-0 transition-colors"></div>
                    <span className="text-white group-hover:text-black font-['Inter'] transition-colors" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                      Создание эмоциональных точек контакта
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Image Grid with Geometric Overlay */}
        <div className="grid md:grid-cols-3 gap-0 mb-20">
          <div className="relative overflow-hidden h-80 group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1767969457898-51d5e9cf81d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBiYW5kJTIwY29uY2VydCUyMHN0YWdlfGVufDF8fHx8MTc3NDUzODM5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Живая музыка"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-80 transition-opacity flex items-center justify-center">
              <span className="text-white font-['Montserrat'] uppercase" style={{ fontSize: '1.5rem', fontWeight: 900 }}>Живая<br />музыка</span>
            </div>
          </div>

          <div className="relative overflow-hidden h-80 group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1760897008023-db0414e0c6f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW1lcnNpdmUlMjB0aGVhdGVyJTIwYXVkaWVuY2UlMjBpbnRlcmFjdGlvbnxlbnwxfHx8fDE3NzQ1MzgzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Взаимодействие"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-80 transition-opacity flex items-center justify-center">
              <span className="text-black font-['Montserrat'] uppercase text-center" style={{ fontSize: '1.5rem', fontWeight: 900 }}>Иммерсия</span>
            </div>
          </div>

          <div className="relative overflow-hidden h-80 group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1730791479679-db48036f7334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwYmFja3N0YWdlJTIwcHJvZmVzc2lvbmFsJTIwYWN0b3JzfGVufDF8fHx8MTc3NDUzODM5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Актёрская игра"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-80 transition-opacity flex items-center justify-center">
              <span className="text-white font-['Montserrat'] uppercase text-center" style={{ fontSize: '1.5rem', fontWeight: 900 }}>Профессионализм</span>
            </div>
          </div>
        </div>

        {/* Adaptation Section */}
        <div className="bg-white p-12 relative">
          <div className="absolute top-0 left-0 w-24 h-24 bg-red-600"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-yellow-500"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-20 h-20 bg-red-600 flex items-center justify-center flex-shrink-0">
                <Theater className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-black mb-6 font-['Montserrat'] uppercase" style={{ fontSize: '2rem', fontWeight: 900 }}>
                  Адаптация под ваше мероприятие
                </h3>
                
                <div className="grid grid-cols-2 gap-1 w-48 mb-6">
                  <div className="h-2 bg-red-600"></div>
                  <div className="h-2 bg-yellow-500"></div>
                </div>
                
                <p className="text-black mb-8 font-['Inter'] leading-relaxed" style={{ fontSize: '1rem', fontWeight: 400 }}>
                  Каждое выступление «ТУТ ШОУ» уникально. Мы глубоко погружаемся в специфику 
                  вашего мероприятия, интегрируя в спектакль его ключевые темы и месседжи.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-red-600 mb-4 font-['Montserrat'] uppercase" style={{ fontSize: '0.875rem', fontWeight: 700 }}>Мы работаем с:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-600"></div>
                        <span className="text-black font-['Inter']" style={{ fontSize: '0.875rem', fontWeight: 500 }}>Корпоративными мероприятиями</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-yellow-500"></div>
                        <span className="text-black font-['Inter']" style={{ fontSize: '0.875rem', fontWeight: 500 }}>Фестивалями и культурными событиями</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-600"></div>
                        <span className="text-black font-['Inter']" style={{ fontSize: '0.875rem', fontWeight: 500 }}>Частными праздниками и юбилеями</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-yellow-500"></div>
                        <span className="text-black font-['Inter']" style={{ fontSize: '0.875rem', fontWeight: 500 }}>Культурными площадками и театрами</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-red-600 mb-4 font-['Montserrat'] uppercase" style={{ fontSize: '0.875rem', fontWeight: 700 }}>Возможности адаптации:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-yellow-500"></div>
                        <span className="text-black font-['Inter']" style={{ fontSize: '0.875rem', fontWeight: 500 }}>Интеграция корпоративных месседжей</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-600"></div>
                        <span className="text-black font-['Inter']" style={{ fontSize: '0.875rem', fontWeight: 500 }}>Работа с VIP-гостями</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-yellow-500"></div>
                        <span className="text-black font-['Inter']" style={{ fontSize: '0.875rem', fontWeight: 500 }}>Тематическая настройка сюжета</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-600"></div>
                        <span className="text-black font-['Inter']" style={{ fontSize: '0.875rem', fontWeight: 500 }}>Гибкая продолжительность (40–120 минут)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
