import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada! Em breve retornaremos o contato.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      <section className="pt-36 pb-24 bg-gradient-to-b from-[#644536] to-[#4a3328]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl text-white font-bold mb-6">
            Entre em Contato
          </h1>
          <p className="font-['Lato'] text-xl text-gray-200 max-w-2xl mx-auto">
            Estamos prontos para atendê-lo. Fale conosco!
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#180E0E] font-bold mb-8">
                Envie sua Mensagem
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-['Lato'] text-[#180E0E] mb-2">Nome Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-['Lato'] focus:outline-none focus:ring-2 focus:ring-[#644536] transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block font-['Lato'] text-[#180E0E] mb-2">E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-['Lato'] focus:outline-none focus:ring-2 focus:ring-[#644536] transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-['Lato'] text-[#180E0E] mb-2">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-['Lato'] focus:outline-none focus:ring-2 focus:ring-[#644536] transition-all"
                      placeholder="(11) 98765-4321"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block font-['Lato'] text-[#180E0E] mb-2">Assunto *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-['Lato'] focus:outline-none focus:ring-2 focus:ring-[#644536] transition-all"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="duvida">Dúvida</option>
                    <option value="pedido">Pedido / Encomenda</option>
                    <option value="elogio">Elogio</option>
                    <option value="reclamacao">Reclamação</option>
                    <option value="parceria">Parceria</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-['Lato'] text-[#180E0E] mb-2">Mensagem *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-['Lato'] focus:outline-none focus:ring-2 focus:ring-[#644536] transition-all resize-none"
                    placeholder="Conte-nos o que você precisa..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#644536] text-white px-8 py-4 rounded-lg font-['Lato'] font-bold text-lg hover:bg-[#4a3328] transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#180E0E] font-bold mb-8">
                Informações de Contato
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <MapPin className="text-[#644536] flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#180E0E] mb-2">Endereço Principal</h3>
                    <p className="font-['Lato'] text-[#180E0E] opacity-80">
                      487 Praça Prof. Simão Faiguenboim<br/>
                      São Paulo, SP
                    </p>
                    <p className="font-['Lato'] text-sm text-[#644536] font-semibold mt-2">
                      Temos outras unidades pela cidade!
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <Phone className="text-[#644536] flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#180E0E] mb-2">Telefone</h3>
                    <p className="font-['Lato'] text-[#180E0E] opacity-80">
                      (11) 98765-4321
                    </p>
                    <p className="font-['Lato'] text-sm text-[#180E0E] opacity-60 mt-1">
                      WhatsApp disponível
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <Mail className="text-[#644536] flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#180E0E] mb-2">E-mail</h3>
                    <p className="font-['Lato'] text-[#180E0E] opacity-80">
                      contato@cafesublime.com
                    </p>
                    <p className="font-['Lato'] text-sm text-[#180E0E] opacity-60 mt-1">
                      Respondemos em até 24h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <Clock className="text-[#644536] flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#180E0E] mb-3">Horário de Funcionamento</h3>
                    <ul className="font-['Lato'] text-[#180E0E] opacity-80 space-y-2">
                      <li className="flex justify-between">
                        <span className="font-semibold">Segunda a Sexta:</span>
                        <span>08:00 - 20:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-semibold">Sábados e Domingos:</span>
                        <span>09:00 - 19:00</span>
                      </li>
                      <li className="text-sm italic text-gray-500 mt-2">
                        Fechado em feriados nacionais
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-[#180E0E] text-white rounded-xl">
                  <h3 className="font-['Playfair_Display'] text-xl font-bold mb-4">Redes Sociais</h3>
                  <p className="font-['Lato'] text-gray-300 mb-4">Siga-nos para novidades e promoções!</p>
                  <div className="flex gap-4">
                    <a href="#" className="bg-white/10 p-4 rounded-full hover:bg-[#644536] transition-colors">
                      <Instagram size={24} />
                    </a>
                    <a href="#" className="bg-white/10 p-4 rounded-full hover:bg-[#644536] transition-colors">
                      <Facebook size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#180E0E] font-bold mb-8 text-center">
            Localização
          </h2>
          <div className="h-[500px] bg-gray-200 rounded-xl overflow-hidden relative shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14626.680072049448!2d-46.666676100000004!3d-23.58028775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c164d1fcdb%3A0x6e255018610b271d!2sParque%20Ibirapuera!5e0!3m2!1spt-BR!2sbr!4v1714088880650!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
