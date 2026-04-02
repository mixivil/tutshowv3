export function Technical() {
  return (
    <section id="tech" className="border-b border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="font-['Inter'] text-xs uppercase tracking-[0.2em] text-black/45">технические требования</div>
            <h2 className="mt-4 font-['Manrope'] text-[clamp(2.2rem,5vw,4rem)] font-800 leading-[0.98] tracking-[-0.05em] text-[#0a0a0a]">
              Простая организация, сильный эффект
            </h2>
            <p className="mt-6 max-w-xl font-['Inter'] text-lg leading-8 text-black/66">
              Формат легко встраивается в разные площадки и не требует сложной сценической сборки.
              Базовый комплект понятный и реалистичный для большинства мероприятий.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-[#ffffff] p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {['Стол', 'Два кресла', 'Три стула', 'Базовое звукоусиление', '5 микрофонов', 'Экран', 'Видеоаппаратура', 'Звуковая аппаратура'].map((item) => (
                <div key={item} className="rounded-full border border-black/10 bg-[#fff8e8] px-4 py-3 font-['Inter'] text-sm font-500 text-[#0a0a0a]">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[#f4c95d]/30 bg-[#0a0a0a] p-6 text-white">
              <div className="font-['Inter'] text-xs uppercase tracking-[0.18em] text-[#f4c95d]/90">гастроспектакль</div>
              <div className="mt-3 font-['Manrope'] text-2xl font-700 tracking-[-0.04em]">
                Еда становится частью сценического действия
              </div>
              <p className="mt-3 font-['Inter'] text-sm leading-6 text-white/78">
                Подача блюд синхронизируется с сюжетом. Кухню и кейтеринг обеспечивает заказчик,
                а команда спектакля помогает встроить меню в драматургию вечера.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
