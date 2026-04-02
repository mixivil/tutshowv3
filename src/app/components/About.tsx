import { ImageWithFallback } from './figma/ImageWithFallback';

const troupeMembers = [
  {
    name: 'Марина Орлова',
    role: 'Актриса театра и кино',
    note: 'Работает с камерной интонацией, точным ритмом сцены и тонким контактом со зрителем.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
  },
  {
    name: 'Илья Ветров',
    role: 'Актер театра и кино',
    note: 'Собирает сложные исторические образы без тяжеловесности и музейной дистанции.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
  },
  {
    name: 'Алексей Миронов',
    role: 'Ведущий спектакля',
    note: 'Удерживает логику ток-шоу, темп выпуска и живой разговор между сценой и залом.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
  },
  {
    name: 'Вера Лаврова',
    role: 'Актриса',
    note: 'Работает с пластикой образа, внутренним напряжением сцены и эмоциональной точностью.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
  },
  {
    name: 'Глеб Соколов',
    role: 'Музыкант',
    note: 'Отвечает за музыкальную драматургию и атмосферу, которая разворачивается внутри действия.',
    photo: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
  },
  {
    name: 'Елизавета Данилова',
    role: 'Актриса',
    note: 'Создает выразительные персонажи для площадок разного масштаба — от камерного зала до корпоратива.',
    photo: 'https://images.unsplash.com/photo-1494888286974-456052645ee8?w=400&h=500&fit=crop',
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 max-w-3xl">
          <div className="font-['Inter'] text-xs uppercase tracking-[0.2em] text-black/45">команда</div>
          <h2 className="mt-4 font-['Manrope'] text-[clamp(2.2rem,5vw,4.5rem)] font-800 leading-[0.98] tracking-[-0.05em] text-[#111111]">
            Команда, которая делает событие живым
          </h2>
          <p className="mt-6 font-['Inter'] text-lg leading-8 text-black/66">
            «ТУТ ШОУ» — это не просто актерский состав, а собранная команда артистов и музыкантов,
            которые умеют работать с пространством, аудиторией и ритмом конкретного мероприятия.
            Каждый участник привносит в спектакль собственную энергию, опыт сцены и чувство живого контакта.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Любая площадка',
              text: 'Нам достаточно стола, двух кресел и трех стульев, чтобы превратить пространство в театр.',
            },
            {
              title: 'Живое присутствие',
              text: 'Герои разговаривают со зрителем здесь и сейчас — без музейной дистанции и хрестоматийного глянца.',
            },
            {
              title: 'Точная настройка',
              text: 'Формат можно адаптировать под корпоративное событие, фестиваль, частный вечер или культурную программу.',
            },
          ].map((item, index) => (
            <div key={item.title} className="rounded-[2rem] border border-black/10 bg-[#fff8e8] p-7 sm:p-8">
              <div className="font-['Inter'] text-sm text-[#c1121f]">0{index + 1}</div>
              <h3 className="mt-6 font-['Manrope'] text-2xl font-700 tracking-[-0.04em] text-[#111111]">{item.title}</h3>
              <p className="mt-4 font-['Inter'] text-base leading-7 text-black/62">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-black/10 pt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="font-['Inter'] text-xs uppercase tracking-[0.2em] text-black/45">участники</div>
              <h3 className="mt-3 font-['Manrope'] text-[clamp(1.8rem,4vw,3rem)] font-800 leading-[1] tracking-[-0.05em] text-[#111111]">
                Лица, которые держат ритм спектакля
              </h3>
            </div>
            <p className="max-w-xl font-['Inter'] text-sm leading-6 text-black/58">
              Каждый участник отвечает за свою часть впечатления: от точного сценического образа
              до музыкальной атмосферы и живого диалога со зрителем.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {troupeMembers.map((member, index) => (
              <article
                key={`${member.role}-${index}`}
                className="group overflow-hidden rounded-[1.75rem] border border-black/10 bg-white transition-colors hover:border-[#c1121f]"
              >
                <div className="relative h-80 w-full overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={member.photo}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-['Inter'] text-[0.7rem] uppercase tracking-[0.2em] text-black/40">
                        участник {index + 1}
                      </div>
                      <h4 className="mt-4 font-['Manrope'] text-2xl font-800 tracking-[-0.04em] text-[#111111]">
                        {member.name}
                      </h4>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-[#111111] font-['Inter'] text-xs font-700 text-[#f4c95d]">
                      ТШ
                    </div>
                  </div>

                  <div className="mt-5 inline-flex rounded-full bg-[#111111] px-3 py-1.5 font-['Inter'] text-xs font-600 uppercase tracking-[0.16em] text-white">
                    {member.role}
                  </div>

                  <p className="mt-5 font-['Inter'] text-base leading-7 text-black/62">{member.note}</p>

                  <div className="mt-6 h-px w-full bg-black/8" />
                  <div className="mt-4 font-['Inter'] text-sm text-[#c1121f]">Фото / биография / спектакли</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
