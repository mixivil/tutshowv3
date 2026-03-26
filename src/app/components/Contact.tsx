import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        eventType: '',
        date: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-24 bg-white">
      {/* Geometric background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-600 opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 opacity-5 rotate-45"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-1 bg-red-600"></div>
            <p className="text-red-600 tracking-[0.2em] font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
              СВЯЖИТЕСЬ С НАМИ
            </p>
            <div className="w-12 h-1 bg-red-600"></div>
          </div>
          
          <h2 className="text-black mb-6 font-['Montserrat'] leading-[0.95] uppercase relative inline-block" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 900 }}>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-600"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-yellow-500"></div>
            Оставьте<br />заявку
          </h2>
          
          <div className="flex justify-center gap-2 mb-8">
            <div className="w-24 h-1 bg-red-600"></div>
            <div className="w-24 h-1 bg-yellow-500"></div>
            <div className="w-24 h-1 bg-black"></div>
          </div>

          <p className="text-black/70 max-w-2xl mx-auto font-['Inter'] leading-relaxed" style={{ fontSize: '1rem', fontWeight: 400 }}>
            Расскажите нам о вашем мероприятии, и мы предложим оптимальный формат 
            и обсудим все детали сотрудничества
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-black mb-8 font-['Montserrat'] uppercase" style={{ fontSize: '1.25rem', fontWeight: 900 }}>
              Контактная информация
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-0">
                <div className="w-16 h-16 bg-red-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div className="bg-black text-white p-4 flex-1">
                  <p className="text-white/50 mb-1 font-['Inter'] uppercase" style={{ fontSize: '0.625rem', fontWeight: 700 }}>Телефон</p>
                  <a href="tel:+79991234567" className="text-white hover:text-yellow-500 transition-colors font-['Montserrat']" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                    +7 (999) 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-0">
                <div className="w-16 h-16 bg-yellow-500 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-black" strokeWidth={2.5} />
                </div>
                <div className="bg-black text-white p-4 flex-1">
                  <p className="text-white/50 mb-1 font-['Inter'] uppercase" style={{ fontSize: '0.625rem', fontWeight: 700 }}>Email</p>
                  <a href="mailto:info@tutshow.ru" className="text-white hover:text-yellow-500 transition-colors font-['Montserrat']" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                    info@tutshow.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-0">
                <div className="w-16 h-16 bg-red-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div className="bg-black text-white p-4 flex-1">
                  <p className="text-white/50 mb-1 font-['Inter'] uppercase" style={{ fontSize: '0.625rem', fontWeight: 700 }}>Офис</p>
                  <p className="text-white font-['Montserrat']" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                    Москва, Россия
                  </p>
                  <p className="text-white/60 font-['Inter']" style={{ fontSize: '0.75rem', fontWeight: 400 }}>
                    Работаем по всей России
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-red-600 text-white p-6 relative">
              <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-500"></div>
              <p className="font-['Montserrat'] uppercase mb-2" style={{ fontSize: '0.875rem', fontWeight: 700 }}>Быстрый ответ</p>
              <p className="font-['Inter']" style={{ fontSize: '0.8125rem', fontWeight: 400 }}>
                Мы отвечаем на все заявки в течение 24 часов. 
                Для срочных вопросов звоните по телефону.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-black text-white p-10 relative">
              <div className="absolute top-0 left-0 w-12 h-12 bg-red-600"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-yellow-500"></div>

              <div className="relative z-10">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2 font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white text-black border-4 border-white focus:border-red-600 px-4 py-3 outline-none transition-colors font-['Inter']"
                      style={{ fontSize: '1rem' }}
                      placeholder="Иван Иванов"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-white mb-2 font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
                      Организация
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full bg-white text-black border-4 border-white focus:border-yellow-500 px-4 py-3 outline-none transition-colors font-['Inter']"
                      style={{ fontSize: '1rem' }}
                      placeholder="ООО «Компания»"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-white mb-2 font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white text-black border-4 border-white focus:border-red-600 px-4 py-3 outline-none transition-colors font-['Inter']"
                      style={{ fontSize: '1rem' }}
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white mb-2 font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white text-black border-4 border-white focus:border-yellow-500 px-4 py-3 outline-none transition-colors font-['Inter']"
                      style={{ fontSize: '1rem' }}
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="eventType" className="block text-white mb-2 font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
                      Тип мероприятия *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full bg-white text-black border-4 border-white focus:border-red-600 px-4 py-3 outline-none transition-colors font-['Inter']"
                      style={{ fontSize: '1rem' }}
                    >
                      <option value="">Выберите тип</option>
                      <option value="corporate">Корпоративное мероприятие</option>
                      <option value="festival">Фестиваль</option>
                      <option value="private">Частное мероприятие</option>
                      <option value="venue">Культурная площадка</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-white mb-2 font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
                      Желаемая дата
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-white text-black border-4 border-white focus:border-yellow-500 px-4 py-3 outline-none transition-colors font-['Inter']"
                      style={{ fontSize: '1rem' }}
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-white mb-2 font-['Inter'] uppercase" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
                    Сообщение *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-white text-black border-4 border-white focus:border-red-600 px-4 py-3 outline-none transition-colors resize-none font-['Inter']"
                    style={{ fontSize: '1rem' }}
                    placeholder="Расскажите о вашем мероприятии, количестве гостей, особых пожеланиях..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full bg-red-600 text-white px-8 py-5 hover:bg-yellow-500 hover:text-black transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed font-['Inter'] uppercase relative group"
                  style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.05em' }}
                >
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 group-hover:bg-red-600 transition-colors"></div>
                  {submitted ? (
                    'Заявка отправлена!'
                  ) : (
                    <>
                      <Send className="w-5 h-5" strokeWidth={2.5} />
                      Отправить заявку
                    </>
                  )}
                </button>

                <p className="text-white/50 text-center mt-4 font-['Inter']" style={{ fontSize: '0.625rem', fontWeight: 400 }}>
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
