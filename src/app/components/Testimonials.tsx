export function Testimonials() {
  return (
    <section className="border-b border-black/10 bg-[#fff8e8]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 max-w-3xl">
          <div className="font-['Inter'] text-xs uppercase tracking-[0.2em] text-black/45">почему этот формат работает</div>
          <h2 className="mt-4 font-['Manrope'] text-[clamp(2.2rem,5vw,4rem)] font-800 leading-[0.98] tracking-[-0.05em] text-[#0a0a0a]">
            Сценическое качество без тяжеловесной постановки
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            'Формат быстро считывается аудиторией: ток-шоу понятно, живо и современно.',
            'Исторические герои становятся ближе, но подаются без упрощения и без потери уважения к материалу.',
            'Спектакль подходит для корпоративных, культурных и частных событий, потому что легко масштабируется.',
          ].map((quote, index) => (
            <div key={quote} className="rounded-[2rem] border border-black/10 bg-white p-7 sm:p-8">
              <div className="font-['Manrope'] text-4xl font-700 tracking-[-0.05em] text-[#c1121f]">0{index + 1}</div>
              <p className="mt-6 font-['Inter'] text-base leading-7 text-black/64">{quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
