export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-[#ffffff]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="font-['Manrope'] text-lg font-800 tracking-[-0.04em] text-[#0a0a0a]">ТУТ ШОУ</div>
          <div className="mt-1 font-['Inter'] text-sm text-black/52">
            Выездной иммерсивный спектакль для событий, площадок и частных мероприятий.
          </div>
        </div>
        <div className="font-['Inter'] text-sm text-black/48">© {currentYear} ТУТ ШОУ. Все права защищены.</div>
      </div>
    </footer>
  );
}
