import { Instagram, Facebook, Youtube, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t-8 border-red-600">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-red-600 flex items-center justify-center relative">
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-500"></div>
                <span className="text-white font-['Montserrat']" style={{ fontSize: '2rem', fontWeight: 900 }}>Т</span>
              </div>
              <div>
                <h3 className="text-white font-['Montserrat'] uppercase" style={{ fontSize: '1.75rem', fontWeight: 900 }}>ТУТ ШОУ</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-8 h-0.5 bg-yellow-500"></div>
                  <p className="text-yellow-500 font-['Inter'] uppercase" style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.1em' }}>ИММЕРСИВНЫЙ ТЕАТР</p>
                </div>
              </div>
            </div>

            <p className="text-white/70 mb-6 font-['Inter'] leading-relaxed max-w-md" style={{ fontSize: '0.875rem', fontWeight: 400 }}>
              Выездной иммерсивный спектакль в формате современного ток-шоу. 
              Профессиональные актёры, живая музыка, уникальная атмосфера.
            </p>

            <div className="flex gap-2">
              <a href="#" className="w-12 h-12 bg-red-600 hover:bg-yellow-500 flex items-center justify-center transition-colors group">
                <Instagram className="w-5 h-5 text-white group-hover:text-black transition-colors" strokeWidth={2.5} />
              </a>
              <a href="#" className="w-12 h-12 bg-red-600 hover:bg-yellow-500 flex items-center justify-center transition-colors group">
                <Facebook className="w-5 h-5 text-white group-hover:text-black transition-colors" strokeWidth={2.5} />
              </a>
              <a href="#" className="w-12 h-12 bg-red-600 hover:bg-yellow-500 flex items-center justify-center transition-colors group">
                <Youtube className="w-5 h-5 text-white group-hover:text-black transition-colors" strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-6 font-['Montserrat'] uppercase relative inline-block" style={{ fontSize: '1rem', fontWeight: 700 }}>
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-red-600"></div>
              Навигация
            </h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/70 hover:text-red-600 transition-colors font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                  О труппе
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('spectacle')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/70 hover:text-red-600 transition-colors font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                  О спектакле
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('tech')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/70 hover:text-red-600 transition-colors font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                  Технические требования
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/70 hover:text-red-600 transition-colors font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                  Контакты
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-6 font-['Montserrat'] uppercase relative inline-block" style={{ fontSize: '1rem', fontWeight: 700 }}>
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-yellow-500"></div>
              Контакты
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-3 h-3 text-white" strokeWidth={2.5} />
                </div>
                <a href="tel:+79991234567" className="text-white/70 hover:text-yellow-500 transition-colors font-['Inter']" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-3 h-3 text-black" strokeWidth={2.5} />
                </div>
                <a href="mailto:info@tutshow.ru" className="text-white/70 hover:text-yellow-500 transition-colors font-['Inter']" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                  info@tutshow.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-red-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 font-['Inter']" style={{ fontSize: '0.75rem', fontWeight: 400 }}>
              © {currentYear} ТУТ ШОУ. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-yellow-500 transition-colors font-['Inter'] uppercase" style={{ fontSize: '0.625rem', fontWeight: 600 }}>
                Политика конфиденциальности
              </a>
              <a href="#" className="text-white/40 hover:text-yellow-500 transition-colors font-['Inter'] uppercase" style={{ fontSize: '0.625rem', fontWeight: 600 }}>
                Договор оферты
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative geometric elements */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-600 opacity-10"></div>
      <div className="absolute top-1/2 left-0 w-16 h-16 bg-yellow-500 opacity-10"></div>
    </footer>
  );
}
