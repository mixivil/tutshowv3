import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="border-b border-black/10 pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 lg:px-8 lg:py-20">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex rounded-full border border-[#f4c95d] bg-[#fff8e8] px-4 py-2 font-['Inter'] text-xs uppercase tracking-[0.2em] text-black/70">
            выездной иммерсивный спектакль
          </div>

          <h1 className="max-w-4xl font-['Manrope'] text-[clamp(3rem,8vw,7rem)] font-800 leading-[0.95] tracking-[-0.06em] text-[#0a0a0a]">
            Театр, который приедет к Вам
          </h1>

          <p className="mt-6 max-w-2xl font-['Inter'] text-lg leading-8 text-black/68 sm:text-xl">
            «ТУТ ШОУ» превращает любое пространство в сцену: современное ток-шоу,
            исторические персонажи, живая музыка и точная адаптация под Ваше событие.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0a0a0a] px-7 py-4 font-['Inter'] text-sm font-600 text-white transition-colors hover:bg-[#c1121f]"
            >
              Оставить заявку
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full border border-black/12 px-7 py-4 font-['Inter'] text-sm font-600 text-[#0a0a0a] transition-colors hover:border-[#c1121f] hover:text-[#c1121f]"
            >
              Подробнее о формате
            </button>
          </div>
        </div>

        <div className="grid gap-4 self-end">
          <div className="rounded-[2rem] border border-black/10 bg-white p-6">
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <div className="font-['Inter'] text-xs uppercase tracking-[0.18em] text-black/45">формат</div>
                <div className="mt-2 font-['Manrope'] text-2xl font-800 tracking-[-0.04em]">Современное ток-шоу</div>
              </div>
              <div className="flex items-center gap-2"><div className="h-3 w-3 rounded-full bg-[#c1121f]" /><div className="h-3 w-3 rounded-full bg-[#f4c95d]" /></div>
            </div>
            <div className="space-y-5">
              {[
                ['70 минут', 'стандартная продолжительность'],
                ['5 микрофонов', 'базовый технический комплект'],
                ['Гибкий сценарий', 'адаптация под событие и аудиторию'],
              ].map(([title, text]) => (
                <div key={title} className="border-t border-black/8 pt-5 first:border-t-0 first:pt-0">
                  <div className="font-['Manrope'] text-lg font-700 tracking-[-0.03em] text-[#0a0a0a]">{title}</div>
                  <div className="mt-1 font-['Inter'] text-sm leading-6 text-black/58">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
