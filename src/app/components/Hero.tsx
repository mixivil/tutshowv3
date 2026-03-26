import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1771942690809-49605caf6ec5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZSUyMGRyYW1hdGljJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzc0NTM4Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Театральная сцена"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Geometric Decorations - Constructivism style */}
      <div className="absolute top-20 right-10 w-40 h-40 border-8 border-red-600 hidden lg:block"></div>
      <div className="absolute top-32 right-20 w-24 h-24 bg-yellow-500 hidden lg:block"></div>
      <div className="absolute bottom-32 left-10 w-32 h-32 bg-red-600 rotate-45 hidden lg:block"></div>
      <div className="absolute top-1/3 left-20 w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] border-b-yellow-500 hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-32 w-1 h-64 bg-red-600 rotate-12 hidden lg:block"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-6xl mx-auto">
          {/* Geometric accent top */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-1 bg-yellow-500"></div>
            <div className="w-3 h-3 bg-red-600"></div>
            <p className="text-yellow-500 tracking-[0.3em] font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
              ВЫЕЗДНОЙ ИММЕРСИВНЫЙ СПЕКТАКЛЬ
            </p>
            <div className="w-3 h-3 bg-red-600"></div>
            <div className="w-16 h-1 bg-yellow-500"></div>
          </div>

          {/* Main Title */}
          <div className="relative inline-block mb-8">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-500"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-red-600"></div>
            <h1 className="text-white font-['Montserrat'] leading-[0.9] tracking-tight relative" style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', fontWeight: 900 }}>
              ТУТ ШОУ
            </h1>
          </div>

          {/* Subtitle with geometric elements */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-red-600 px-8 py-6 relative">
              <div className="absolute top-0 left-0 w-4 h-4 bg-yellow-500"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-yellow-500"></div>
              <p className="text-white font-['Montserrat'] uppercase leading-tight" style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', fontWeight: 700 }}>
                Современное ток-шоу с живой музыкой<br />и профессиональными актерами
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-white max-w-2xl mx-auto font-['Inter'] leading-relaxed mb-12" style={{ fontSize: '1rem', fontWeight: 400 }}>
            Театральная импровизация, которая превращает ваше мероприятие 
            в незабываемое событие с глубоким эмоциональным вовлечением зрителей
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <button
              onClick={scrollToContact}
              className="bg-red-600 text-white px-12 py-5 hover:bg-yellow-500 hover:text-black transition-all relative font-['Inter'] uppercase" 
              style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.05em' }}
            >
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-500"></div>
              Заказать выступление
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-4 border-white text-white px-12 py-5 hover:bg-white hover:text-black transition-all font-['Inter'] uppercase relative" 
              style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.05em' }}
            >
              Узнать подробнее
            </button>
          </div>

          {/* Key Features - Geometric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white text-black p-8 relative">
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-red-600 border-l-[40px] border-l-transparent"></div>
              <div className="text-red-600 mb-3 font-['Montserrat']" style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1 }}>100%</div>
              <p className="font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                Профессиональные<br />актеры театра и кино
              </p>
            </div>

            <div className="bg-red-600 text-white p-8 relative">
              <div className="absolute bottom-0 left-0 w-8 h-8 bg-yellow-500"></div>
              <div className="text-yellow-500 mb-3 font-['Montserrat']" style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1 }}>∞</div>
              <p className="font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                Адаптация под любое<br />мероприятие
              </p>
            </div>

            <div className="bg-yellow-500 text-black p-8 relative">
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[40px] border-t-red-600 border-r-[40px] border-r-transparent"></div>
              <div className="text-black mb-3 font-['Montserrat']" style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1 }}>♫</div>
              <p className="font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                Живая музыка<br />и импровизация
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-1 h-16 bg-red-600"></div>
          <ArrowDown className="w-6 h-6 text-red-600 animate-bounce" strokeWidth={3} />
        </div>
      </div>
    </section>
  );
}
