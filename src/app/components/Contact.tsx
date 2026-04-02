import { ChangeEvent, FormEvent, useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="font-['Inter'] text-xs uppercase tracking-[0.2em] text-black/45">контакты</div>
            <h2 className="mt-4 font-['Manrope'] text-[clamp(2.2rem,5vw,4rem)] font-800 leading-[0.98] tracking-[-0.05em] text-[#0a0a0a]">
              Давайте обсудим ваше мероприятие
            </h2>
            <p className="mt-6 max-w-md font-['Inter'] text-lg leading-8 text-black/66">
              Напишите дату, формат события и любые пожелания. Мы предложим подходящую версию спектакля и ответим в течение дня.
            </p>

            <div className="mt-10 space-y-5">
              <a href="tel:+79991234567" className="flex items-center gap-4 rounded-[1.5rem] border border-black/10 bg-[#fff8e8] p-5 transition-colors hover:border-[#c1121f]/30">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-black/10">
                  <Phone className="h-5 w-5 text-[#c1121f]" />
                </div>
                <div>
                  <div className="font-['Inter'] text-xs uppercase tracking-[0.16em] text-black/40">телефон</div>
                  <div className="mt-1 font-['Manrope'] text-lg font-700 tracking-[-0.03em] text-[#0a0a0a]">+7 (999) 123-45-67</div>
                </div>
              </a>

              <a href="mailto:info@tutshow.ru" className="flex items-center gap-4 rounded-[1.5rem] border border-black/10 bg-[#fff8e8] p-5 transition-colors hover:border-[#c1121f]/30">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-black/10">
                  <Mail className="h-5 w-5 text-[#c1121f]" />
                </div>
                <div>
                  <div className="font-['Inter'] text-xs uppercase tracking-[0.16em] text-black/40">email</div>
                  <div className="mt-1 font-['Manrope'] text-lg font-700 tracking-[-0.03em] text-[#0a0a0a]">info@tutshow.ru</div>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-black/10 bg-[#ffffff] p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Ваше имя *">
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="field" placeholder="Иван Иванов" />
              </Field>
              <Field label="Организация">
                <input type="text" name="organization" value={formData.organization} onChange={handleChange} className="field" placeholder="Название компании" />
              </Field>
              <Field label="Email *">
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="field" placeholder="email@example.com" />
              </Field>
              <Field label="Телефон *">
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="field" placeholder="+7 (999) 123-45-67" />
              </Field>
              <Field label="Тип мероприятия *">
                <select name="eventType" required value={formData.eventType} onChange={handleChange} className="field">
                  <option value="">Выберите тип</option>
                  <option value="corporate">Корпоративное мероприятие</option>
                  <option value="festival">Фестиваль</option>
                  <option value="private">Частное мероприятие</option>
                  <option value="venue">Культурная площадка</option>
                  <option value="other">Другое</option>
                </select>
              </Field>
              <Field label="Желаемая дата">
                <input type="date" name="date" value={formData.date} onChange={handleChange} className="field" />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Сообщение *">
                <textarea name="message" required value={formData.message} onChange={handleChange} rows={6} className="field min-h-[140px] resize-none" placeholder="Расскажите о событии, площадке и пожеланиях" />
              </Field>
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0a0a0a] px-7 py-4 font-['Inter'] text-sm font-600 text-white transition-colors hover:bg-[#c1121f] disabled:opacity-60"
            >
              {submitted ? 'Заявка отправлена' : <><Send className="h-4 w-4" /> Отправить заявку</>}
            </button>

            <p className="mt-4 font-['Inter'] text-xs leading-5 text-black/45">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block font-['Inter'] text-sm font-500 text-black/68">{label}</span>
      {children}
    </label>
  );
}
