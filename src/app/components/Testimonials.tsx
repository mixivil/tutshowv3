import { ImageWithFallback } from './figma/ImageWithFallback';
import { Quote, Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      text: "Невероятный опыт! Актеры смогли вовлечь всех наших сотрудников, создав атмосферу настоящего события. Это было больше, чем просто спектакль.",
      author: "Анна Петрова",
      position: "Event-директор IT-компании",
      rating: 5
    },
    {
      text: "Профессионализм на высшем уровне. Актеры глубоко погрузились в специфику нашего мероприятия, органично интегрировали наши корпоративные ценности в сюжет.",
      author: "Дмитрий Соколов",
      position: "Руководитель отдела маркетинга",
      rating: 5
    },
    {
      text: "Живая музыка и импровизация создали неповторимую атмосферу. Каждую минуту было интересно, никакой заскриптованности — только нас��оящие эмоции.",
      author: "Елена Михайлова",
      position: "Организатор фестиваля",
      rating: 5
    }
  ];

  return (
    <section className="relative py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-1 bg-red-600"></div>
            <p className="text-yellow-500 tracking-[0.2em] font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
              ОТЗЫВЫ
            </p>
            <div className="w-12 h-1 bg-red-600"></div>
          </div>
          
          <h2 className="text-white mb-6 font-['Montserrat'] leading-[0.95] uppercase" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 900 }}>
            Что говорят<br />о нас
          </h2>
          
          <div className="flex justify-center gap-2">
            <div className="w-24 h-1 bg-red-600"></div>
            <div className="w-24 h-1 bg-yellow-500"></div>
            <div className="w-24 h-1 bg-white"></div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white text-black p-8 relative group hover:bg-red-600 hover:text-white transition-all duration-300">
              <div className="absolute top-0 right-0 w-12 h-12 bg-red-600 group-hover:bg-yellow-500 transition-colors"></div>
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white group-hover:text-black transition-colors" strokeWidth={3} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-yellow-500"></div>
                ))}
              </div>

              <p className="mb-8 font-['Inter'] leading-relaxed relative z-10" style={{ fontSize: '0.9375rem', fontWeight: 400 }}>
                "{testimonial.text}"
              </p>

              <div className="border-t-4 border-yellow-500 pt-4">
                <p className="font-['Montserrat'] uppercase mb-1" style={{ fontSize: '0.875rem', fontWeight: 700 }}>{testimonial.author}</p>
                <p className="opacity-70 font-['Inter']" style={{ fontSize: '0.75rem', fontWeight: 500 }}>{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Materials Section */}
        <div className="mt-24">
          <h3 className="text-white text-center mb-12 font-['Montserrat'] uppercase" style={{ fontSize: '2rem', fontWeight: 900 }}>
            Атмосфера наших спектаклей
          </h3>

          <div className="grid md:grid-cols-2 gap-0 mb-20">
            <div className="relative overflow-hidden h-96 group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768508950918-c87e2f544573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGVsZWdhbnQlMjB2ZW51ZXxlbnwxfHx8fDE3NzQ1MzgzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Корпоративное мероприятие"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-70 transition-opacity"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-20 h-20 border-4 border-white mb-4"></div>
                <p className="text-white font-['Montserrat'] uppercase text-center" style={{ fontSize: '1.5rem', fontWeight: 900 }}>Корпоративные<br />события</p>
              </div>
            </div>

            <div className="relative overflow-hidden h-96 group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1771942690809-49605caf6ec5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZSUyMGRyYW1hdGljJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzc0NTM4Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Театральное представление"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-red-600 opacity-40 group-hover:opacity-70 transition-opacity"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-yellow-500 mb-4"></div>
                <p className="text-white font-['Montserrat'] uppercase text-center" style={{ fontSize: '1.5rem', fontWeight: 900 }}>Театральные<br />площадки</p>
              </div>
            </div>
          </div>

          {/* Stats Section - Geometric */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-red-600 text-white p-8 text-center relative">
              <div className="absolute top-0 right-0 w-6 h-6 bg-yellow-500"></div>
              <div className="font-['Montserrat']" style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1 }}>50+</div>
              <div className="w-12 h-1 bg-yellow-500 mx-auto my-3"></div>
              <p className="font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 700 }}>Успешных<br />проектов</p>
            </div>

            <div className="bg-white text-black p-8 text-center relative">
              <div className="absolute top-0 right-0 w-6 h-6 bg-red-600"></div>
              <div className="font-['Montserrat'] text-red-600" style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1 }}>15+</div>
              <div className="w-12 h-1 bg-red-600 mx-auto my-3"></div>
              <p className="font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 700 }}>Городов<br />России</p>
            </div>

            <div className="bg-yellow-500 text-black p-8 text-center relative">
              <div className="absolute top-0 right-0 w-6 h-6 bg-red-600"></div>
              <div className="font-['Montserrat']" style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1 }}>100%</div>
              <div className="w-12 h-1 bg-black mx-auto my-3"></div>
              <p className="font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 700 }}>Довольных<br />заказч��ков</p>
            </div>

            <div className="bg-black text-white p-8 text-center relative border-4 border-white">
              <div className="font-['Montserrat'] text-red-600" style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1 }}>8</div>
              <div className="w-12 h-1 bg-red-600 mx-auto my-3"></div>
              <p className="font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 700 }}>Актёров<br />в труппе</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
