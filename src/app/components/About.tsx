import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Award, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-red-600 opacity-10"></div>
      <div className="absolute bottom-40 left-0 w-48 h-48 bg-yellow-500 opacity-10 rotate-45"></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-96 bg-red-600 opacity-20 rotate-12 hidden lg:block"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 border-8 border-red-600 z-10"></div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1572232564961-5392cd6ebfe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhY3RvcnMlMjBwZXJmb3JtaW5nJTIwdGFsayUyMHNob3d8ZW58MXx8fHwxNzc0NTM4Mzk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Актеры на сцене"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-500 z-10"></div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-red-600"></div>
              <p className="text-red-600 tracking-[0.2em] font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
                О ТРУППЕ
              </p>
            </div>

            <h2 className="text-black mb-8 font-['Montserrat'] leading-[0.95] uppercase" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900 }}>
              Театр<br />нового<br />формата
            </h2>

            <div className="grid grid-cols-3 gap-2 mb-8">
              <div className="h-2 bg-red-600"></div>
              <div className="h-2 bg-yellow-500"></div>
              <div className="h-2 bg-black"></div>
            </div>

            <p className="text-black mb-6 font-['Inter'] leading-relaxed" style={{ fontSize: '1.125rem', fontWeight: 500 }}>
              <span className="font-['Montserrat'] text-red-600 uppercase" style={{ fontSize: '1.5rem', fontWeight: 900 }}>ТУТ ШОУ</span> — это синтез классической театральной школы и современных форматов развлечения. 
              Мы создаём живые, дышащие спектакли, где каждое представление уникально.
            </p>

            <p className="text-black/70 mb-10 font-['Inter'] leading-relaxed" style={{ fontSize: '1rem', fontWeight: 400 }}>
              Наши актеры — профессионалы с многолетним опытом работы в театре и кино, 
              виртуозно владеющие импровизацией и способные вовлечь в действие любую аудиторию.
            </p>

            {/* Features - Geometric Blocks */}
            <div className="space-y-4">
              <div className="flex items-start gap-0 group cursor-pointer">
                <div className="w-16 h-16 bg-red-600 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500 transition-colors">
                  <Users className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <div className="bg-black text-white p-4 flex-1">
                  <h3 className="mb-1 font-['Montserrat'] uppercase" style={{ fontSize: '0.875rem', fontWeight: 700 }}>Профессиональная команда</h3>
                  <p className="text-white/70 font-['Inter']" style={{ fontSize: '0.8125rem', fontWeight: 400 }}>
                    Актёры с опытом работы в ведущих театрах России
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-0 group cursor-pointer">
                <div className="w-16 h-16 bg-yellow-500 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
                  <Award className="w-8 h-8 text-black" strokeWidth={2.5} />
                </div>
                <div className="bg-black text-white p-4 flex-1">
                  <h3 className="mb-1 font-['Montserrat'] uppercase" style={{ fontSize: '0.875rem', fontWeight: 700 }}>Уникальный формат</h3>
                  <p className="text-white/70 font-['Inter']" style={{ fontSize: '0.8125rem', fontWeight: 400 }}>
                    Иммерсивное ток-шоу, где зритель становится участником
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-0 group cursor-pointer">
                <div className="w-16 h-16 bg-red-600 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500 transition-colors">
                  <Sparkles className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <div className="bg-black text-white p-4 flex-1">
                  <h3 className="mb-1 font-['Montserrat'] uppercase" style={{ fontSize: '0.875rem', fontWeight: 700 }}>Живая энергия</h3>
                  <p className="text-white/70 font-['Inter']" style={{ fontSize: '0.8125rem', fontWeight: 400 }}>
                    Импровизация, живая музыка и эмоциональное вовлечение
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
