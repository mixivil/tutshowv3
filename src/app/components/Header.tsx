import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-red-600">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-red-600 flex items-center justify-center relative">
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500"></div>
            <span className="text-white font-['Montserrat'] text-2xl" style={{ fontWeight: 900 }}>Т</span>
          </div>
          <div>
            <h1 className="text-white font-['Montserrat'] tracking-tight" style={{ fontSize: '1.5rem', fontWeight: 900 }}>ТУТ ШОУ</h1>
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-yellow-500"></div>
              <p className="text-yellow-500 font-['Inter'] uppercase" style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.1em' }}>ИММЕРСИВНЫЙ ТЕАТР</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-red-600 hover:text-yellow-500 transition-colors"
        >
          <Menu className="w-8 h-8" strokeWidth={3} />
        </button>

        <nav className="hidden md:flex items-center gap-1">
          <button onClick={() => scrollToSection('about')} className="text-white hover:bg-red-600 transition-all px-5 py-2.5 font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>
            О проекте
          </button>
          <button onClick={() => scrollToSection('spectacle')} className="text-white hover:bg-red-600 transition-all px-5 py-2.5 font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>
            Спектакль
          </button>
          <button onClick={() => scrollToSection('tech')} className="text-white hover:bg-red-600 transition-all px-5 py-2.5 font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>
            Требования
          </button>
          <button onClick={() => scrollToSection('contact')} className="bg-red-600 text-white px-8 py-2.5 hover:bg-yellow-500 hover:text-black transition-all font-['Inter'] uppercase relative ml-2" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500"></div>
            Заявка
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black border-t-2 border-red-600">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <button onClick={() => scrollToSection('about')} className="text-white hover:bg-red-600 transition-all px-5 py-3 text-left font-['Inter'] uppercase" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
              О проекте
            </button>
            <button onClick={() => scrollToSection('spectacle')} className="text-white hover:bg-red-600 transition-all px-5 py-3 text-left font-['Inter'] uppercase" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
              Спектакль
            </button>
            <button onClick={() => scrollToSection('tech')} className="text-white hover:bg-red-600 transition-all px-5 py-3 text-left font-['Inter'] uppercase" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
              Требования
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-red-600 text-white px-5 py-3 hover:bg-yellow-500 hover:text-black transition-all font-['Inter'] uppercase" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
              Заявка
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}