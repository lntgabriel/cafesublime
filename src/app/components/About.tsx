import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Heart, Award, Globe, Leaf, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Heart size={40} />,
      title: 'Paixão pelo Café',
      desc: 'Cada grão é selecionado com amor e dedicação, refletindo nosso comprometimento com a excelência.'
    },
    {
      icon: <Award size={40} />,
      title: 'Qualidade Premium',
      desc: 'Trabalhamos apenas com grãos arábicos de altíssima qualidade, reconhecidos internacionalmente.'
    },
    {
      icon: <Leaf size={40} />,
      title: 'Sustentabilidade',
      desc: 'Respeitamos o meio ambiente e apoiamos práticas agrícolas sustentáveis e justas.'
    },
    {
      icon: <Users size={40} />,
      title: 'Comunidade',
      desc: 'Criamos um espaço acolhedor onde pessoas se conectam através do amor pelo café.'
    }
  ];

  return (
    <div className="bg-white">
      <section className="pt-36 pb-24 bg-gradient-to-b from-[#644536] to-[#4a3328]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl text-white font-bold mb-6">
            Sobre o Café Sublime
          </h1>
          <p className="font-['Lato'] text-xl text-gray-200 max-w-2xl mx-auto">
            Uma jornada que começou com paixão e se tornou excelência
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#644536] translate-x-6 translate-y-6 rounded-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1762277142890-24902d58e8f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHBpY2tpbmclMjBjb2ZmZWUlMjBiZWFucyUyMGZhcm18ZW58MXx8fHwxNzc3MTYzNTg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Seleção de grãos"
                className="relative z-10 w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
            </div>

            <div>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#180E0E] font-bold mb-8">
                Nossa História
              </h2>
              <div className="space-y-6 font-['Lato'] text-[#180E0E] text-lg leading-relaxed">
                <p className="opacity-90">
                  O Café Sublime nasceu de um sonho: trazer ao Brasil a experiência autêntica dos melhores cafés do mundo. Tudo começou quando nossos fundadores viajaram até as terras altas da Arábia Saudita e se apaixonaram pela riqueza e complexidade dos grãos arábicas cultivados lá.
                </p>
                <p className="opacity-90">
                  Decididos a compartilhar essa descoberta, estabelecemos parcerias diretas com produtores locais, garantindo que cada grão seja selecionado manualmente e chegue até você com todo seu sabor e frescor preservados.
                </p>
                <p className="opacity-90">
                  Hoje, somos mais que uma cafeteria. Somos um ponto de encontro para amantes de café, um espaço de descoberta e apreciação, onde cada xícara conta uma história de tradição, qualidade e paixão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#180E0E] font-bold mb-4">
              Nossos Valores
            </h2>
            <div className="w-24 h-1 bg-[#644536] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center group">
                <div className="text-[#644536] mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#180E0E] mb-4">
                  {value.title}
                </h3>
                <p className="font-['Lato'] text-[#180E0E] opacity-75 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#180E0E] font-bold mb-8">
                Da Origem até Você
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#644536] rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#180E0E] mb-2">
                      Seleção Manual
                    </h3>
                    <p className="font-['Lato'] text-[#180E0E] opacity-80">
                      Cada grão é cuidadosamente escolhido a mão por especialistas nas fazendas da Arábia Saudita.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#644536] rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#180E0E] mb-2">
                      Torra Artesanal
                    </h3>
                    <p className="font-['Lato'] text-[#180E0E] opacity-80">
                      Torramos os grãos em pequenos lotes para garantir o perfil de sabor ideal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#644536] rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#180E0E] mb-2">
                      Preparo Especializado
                    </h3>
                    <p className="font-['Lato'] text-[#180E0E] opacity-80">
                      Nossos baristas treinados preparam cada bebida com técnica e paixão.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#644536] rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#180E0E] mb-2">
                      Experiência Sublime
                    </h3>
                    <p className="font-['Lato'] text-[#180E0E] opacity-80">
                      O resultado é uma xícara de café excepcional que você jamais esquecerá.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-[#644536] -translate-x-6 translate-y-6 rounded-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1768498855458-f6ce1068f02f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNybyUyMGNvZmZlZSUyMGJlYW5zJTIwZGFya3xlbnwxfHx8fDE3NzcxNjM1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Grãos de café"
                className="relative z-10 w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#180E0E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Globe size={64} className="text-[#644536] mx-auto mb-8" />
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-8">
              Compromisso Global, Sabor Local
            </h2>
            <p className="font-['Lato'] text-xl text-gray-300 leading-relaxed mb-8">
              Trabalhamos diretamente com agricultores na Arábia Saudita, garantindo práticas justas e sustentáveis. Cada compra que você faz apoia comunidades agrícolas e preserva tradições milenares de cultivo de café.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold font-['Playfair_Display'] text-[#644536] mb-2">100%</div>
                <div className="font-['Lato']">Café Arábica Premium</div>
              </div>
              <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold font-['Playfair_Display'] text-[#644536] mb-2">15+</div>
                <div className="font-['Lato']">Anos de Experiência</div>
              </div>
              <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold font-['Playfair_Display'] text-[#644536] mb-2">50k+</div>
                <div className="font-['Lato']">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#180E0E] font-bold mb-8">
            Visite-nos e Descubra a Diferença
          </h2>
          <p className="font-['Lato'] text-lg text-[#180E0E] opacity-80 mb-10 max-w-2xl mx-auto">
            Convidamos você a conhecer nossas lojas, experimentar nossos cafés e fazer parte da família Café Sublime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cardapio" className="inline-block bg-[#644536] text-white px-10 py-4 rounded-full font-['Lato'] text-lg hover:bg-[#4a3328] transition-colors shadow-lg">
              Ver Cardápio
            </Link>
            <Link to="/contato" className="inline-block border-2 border-[#644536] text-[#644536] px-10 py-4 rounded-full font-['Lato'] text-lg hover:bg-[#644536] hover:text-white transition-colors">
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
