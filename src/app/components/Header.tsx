import { Menu } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/10 bg-[#ffffff]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button onClick={() => scrollToSection('hero')} className="flex items-center gap-4 flex-shrink-0">
          <div className="w-40">
            <ImageWithFallback
              src="/logo.png"
              alt="ТУТ ШОУ логотип"
              className="h-auto w-full object-contain"
            />
          </div>
          <div>
            <div className="font-['Manrope'] text-[1.05rem] font-800 tracking-[-0.03em] text-[#0a0a0a]">
              ТУТ ШОУ
            </div>
            <div className="font-['Inter'] text-[0.68rem] uppercase tracking-[0.22em] text-black/45">
              театр, который приедет к вам
            </div>
          </div>
        </button>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#0a0a0a] transition-colors hover:text-[#c1121f] md:hidden"
          aria-label="Открыть меню"
        >
          <Menu className="h-6 w-6" />
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {[
            ['about', 'О труппе'],
            ['spectacle', 'Формат'],
            ['tech', 'Требования'],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="font-['Inter'] text-sm font-500 text-black/70 transition-colors hover:text-[#c1121f]"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="rounded-full bg-[#0a0a0a] px-5 py-2.5 font-['Inter'] text-sm font-600 text-white transition-colors hover:bg-[#c1121f]"
          >
            Оставить заявку
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="border-t border-black/10 bg-[#ffffff] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6">
            {[
              ['about', 'О труппе'],
              ['spectacle', 'Формат'],
              ['tech', 'Требования'],
              ['contact', 'Оставить заявку'],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-left font-['Inter'] text-sm font-500 text-black/75 transition-colors hover:text-[#c1121f]"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
