import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, MapPin, Phone, Mail, ShoppingBag, X } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1768498855458-f6ce1068f02f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNybyUyMGNvZmZlZSUyMGJlYW5zJTIwZGFya3xlbnwxfHx8fDE3NzcxNjM1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Grãos de Café"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl text-white font-bold mb-6 leading-tight drop-shadow-lg">
          A Alma da Arábia <br/> em Cada Grão.
        </h1>
        <p className="font-['Lato'] text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
          Descubra o sabor sublime de grãos arábicas escolhidos a dedo, trazidos especialmente para você.
        </p>
        <Link to="/cardapio" className="inline-block bg-[#644536] text-white px-8 py-4 rounded-full font-['Lato'] text-lg hover:bg-[#4a3328] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200">
          Conheça Nosso Cardápio
        </Link>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="nosso-cafe" className="py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#644536] translate-x-4 translate-y-4 rounded-lg"></div>
            <img
              src="https://images.unsplash.com/photo-1762277142890-24902d58e8f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHBpY2tpbmclMjBjb2ZmZWUlMjBiZWFucyUyMGZhcm18ZW58MXx8fHwxNzc3MTYzNTg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Mãos selecionando grãos"
              className="relative z-10 w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#180E0E] font-bold mb-8">
              Uma Jornada de Sabor Única.
            </h2>
            <p className="font-['Lato'] text-[#180E0E] text-lg leading-relaxed opacity-90">
              No Café Sublime, nossa paixão começa na fonte. Viajamos até as terras altas da Arábia Saudita para selecionar manualmente os melhores grãos de café arábica.
            </p>
            <p className="font-['Lato'] text-[#180E0E] text-lg leading-relaxed mt-4 opacity-90">
              Cada grão conta uma história de tradição e cuidado, garantindo uma experiência de sabor inigualável e verdadeiramente sublime.
            </p>
            <Link to="/sobre" className="inline-block mt-6 text-[#644536] font-['Lato'] font-bold hover:underline">
              Saiba mais sobre nós →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const MenuSection = () => {
  const [selectedItem, setSelectedItem] = React.useState<any>(null);

  const items = [
    {
      name: 'Expresso Sublime',
      desc: 'Intenso, com notas de chocolate amargo e avelã.',
      price: 'R$ 12,00',
      img: 'https://images.unsplash.com/photo-1586005309510-fee1ad863c04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGN1cCUyMGRhcmt8ZW58MXx8fHwxNzc3MTYzNTg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      details: 'Nosso expresso é extraído com precisão, apresentando um corpo intenso e crema dourada perfeita. A escolha ideal para os verdadeiros amantes do café.'
    },
    {
      name: 'Cappuccino Cremoso',
      desc: 'O equilíbrio perfeito entre expresso, leite vaporizado e crema.',
      price: 'R$ 18,00',
      img: 'https://images.unsplash.com/photo-1667388363683-a07bbf0c84b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwbGF0dGUlMjBhcnR8ZW58MXx8fHwxNzc3MTYzNTg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      details: 'Clássico italiano preparado com terços iguais de expresso, leite vaporizado e uma densa espuma cremosa. Finalizado com uma bela latte art.'
    },
    {
      name: 'Filtrado Arábica',
      desc: 'Método V60 que ressalta as notas florais e cítricas do grão.',
      price: 'R$ 16,00',
      img: 'https://images.unsplash.com/photo-1610874150308-a1e6f8c905d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3VyJTIwb3ZlciUyMGNvZmZlZSUyMGdsYXNzfGVufDF8fHx8MTc3NzE2MzU4OHww&ixlib=rb-4.1.0&q=80&w=1080',
      details: 'Preparado minuciosamente no método V60, este café destaca as características únicas e de origem dos nossos grãos arábicas, resultando em uma bebida limpa e aromática.'
    },
    {
      name: 'Latte Gelado',
      desc: 'Refrescante, com um toque sutil de baunilha de Madagascar.',
      price: 'R$ 20,00',
      img: 'https://images.unsplash.com/photo-1765510758735-634710ac4863?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMHRhbGwlMjBnbGFzc3xlbnwxfHx8fDE3NzcxNjM1ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      details: 'Nossa versão gelada do tradicional latte, adoçado levemente com extrato natural de baunilha de Madagascar. Perfeito para dias quentes.'
    }
  ];

  return (
    <section id="cardapio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#180E0E] font-bold mb-4">Nossas Especialidades</h2>
          <div className="w-24 h-1 bg-[#644536] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer flex flex-col h-full"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-['Lato'] bg-[#644536] px-4 py-2 rounded-full">
                    Ver Detalhes
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#180E0E]">{item.name}</h3>
                </div>
                <p className="font-['Lato'] text-[#180E0E] opacity-75 text-sm leading-relaxed flex-grow mb-4">{item.desc}</p>
                <div className="pt-2 mt-auto border-t border-gray-100 text-right">
                  <span className="font-['Lato'] font-bold text-xl text-[#644536]">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/cardapio" className="inline-block border-2 border-[#644536] text-[#644536] px-8 py-3 rounded-full font-['Lato'] font-bold hover:bg-[#644536] hover:text-white transition-colors">
            Ver Cardápio Completo
          </Link>
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
              >
                <X size={24} className="text-[#180E0E]" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="h-[400px] md:h-full overflow-hidden rounded-tl-2xl md:rounded-bl-2xl md:rounded-tr-none rounded-tr-2xl">
                  <img
                    src={selectedItem.img}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#180E0E] mb-4">
                    {selectedItem.name}
                  </h2>

                  <p className="font-['Lato'] text-xl text-[#644536] font-bold mb-6">
                    {selectedItem.price}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#180E0E] mb-3">
                      Descrição
                    </h3>
                    <p className="font-['Lato'] text-[#180E0E] opacity-80 leading-relaxed">
                      {selectedItem.desc}
                    </p>
                  </div>

                  {selectedItem.details && (
                    <div className="mb-8">
                      <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#180E0E] mb-3">
                        Detalhes
                      </h3>
                      <p className="font-['Lato'] text-[#180E0E] opacity-80 leading-relaxed">
                        {selectedItem.details}
                      </p>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        alert('Redirecionando para o WhatsApp para realizar o pedido...');
                      }}
                      className="flex-1 bg-[#644536] text-white px-8 py-4 rounded-full font-['Lato'] text-lg font-bold hover:bg-[#4a3328] transition-colors shadow-lg"
                    >
                      Pedir Agora
                    </button>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="px-8 py-4 border-2 border-[#644536] text-[#644536] rounded-full font-['Lato'] text-lg font-bold hover:bg-[#644536] hover:text-white transition-colors"
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const Shop = () => {
  return (
    <section id="leve-para-casa" className="py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#180E0E] font-bold mb-4">A Experiência Sublime na Sua Casa.</h2>
          <p className="font-['Lato'] text-lg text-[#180E0E] opacity-80 max-w-2xl mx-auto">
            Leve nossos grãos exclusivos e moa na hora para um frescor incomparável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          <div className="bg-[#180E0E] text-white p-10 rounded-2xl flex flex-col items-center text-center shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#644536] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <ShoppingBag size={48} className="text-[#644536] mb-6" />
            <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-4">Grãos de Café Arábica Selecionados.</h3>
            <div className="space-y-2 font-['Lato'] text-gray-300">
              <p>Pacote de 1kg</p>
              <p>Pacote de 550g</p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-100 p-10 rounded-2xl flex flex-col items-center text-center shadow-lg">
            <Coffee size={48} className="text-[#644536] mb-6" />
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#180E0E] mb-4">Moemos na Hora para Você.</h3>
            <div className="space-y-2 font-['Lato'] text-[#180E0E] opacity-75">
              <p>Escolha o peso ideal:</p>
              <p>200g, 550g, 1kg ou a quantidade que preferir.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/compre-graos" className="inline-block bg-[#644536] text-white px-10 py-4 rounded-full font-['Lato'] text-lg hover:bg-[#4a3328] transition-colors shadow-lg">
            Compre Nossos Grãos
          </Link>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="visite-nos" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#180E0E] font-bold mb-16 text-center">Esperamos por Você.</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="text-[#644536] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#180E0E] mb-2">Localização</h3>
                  <p className="font-['Lato'] text-[#180E0E] opacity-80">487 Praça Prof. Simão Faiguenboim</p>
                  <p className="font-['Lato'] text-sm text-[#644536] font-semibold mt-1">Esta é nossa unidade principal, temos outras pela cidade!</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-4">
                <Coffee className="text-[#644536] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#180E0E] mb-4">Horários</h3>
                  <ul className="font-['Lato'] text-[#180E0E] opacity-80 space-y-2">
                    <li className="flex justify-between w-64"><span className="font-semibold">Segunda a Sexta:</span> 08:00 - 20:00</li>
                    <li className="flex justify-between w-64"><span className="font-semibold">Sábados e Domingos:</span> 09:00 - 19:00</li>
                    <li className="mt-2 text-sm italic text-gray-500">Fechado em feriados nacionais.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4">
                <Phone className="text-[#644536] flex-shrink-0 mt-1" size={24} />
                <div className="space-y-2">
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#180E0E] mb-2">Contato</h3>
                  <p className="font-['Lato'] text-[#180E0E] opacity-80 flex items-center gap-2">
                    (11) 98765-4321
                  </p>
                  <p className="font-['Lato'] text-[#180E0E] opacity-80 flex items-center gap-2">
                    <Mail size={16} className="text-[#644536]" /> contato@cafesublime.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full min-h-[400px] bg-gray-200 rounded-xl overflow-hidden relative shadow-inner">
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
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <MenuSection />
      <Shop />
      <ContactSection />
    </>
  );
}
