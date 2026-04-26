import React from 'react';
import { X } from 'lucide-react';

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  img: string;
  details?: string;
};

export default function Menu() {
  const [selectedItem, setSelectedItem] = React.useState<MenuItem | null>(null);

  const coffees: MenuItem[] = [
    {
      name: 'Expresso Sublime',
      desc: 'Intenso, com notas de chocolate amargo e avelã.',
      price: 'R$ 12,00',
      img: 'https://dhg1h5j42swfq.cloudfront.net/2017/01/18142635/caf%C3%A9-expresso.png',
      details: 'Café expresso extraído com precisão, apresentando corpo intenso e crema dourada. Ideal para quem aprecia a essência pura do café.'
    },
    {
      name: 'Expresso Duplo',
      desc: 'Dupla dose de intensidade e sabor.',
      price: 'R$ 16,00',
      img: 'https://www.casalmisterio.com/wp-content/uploads/2022/10/18069764_FDnAB.jpg',
      details: 'Dupla extração de expresso para uma experiência ainda mais intensa e rica em sabores complexos.'
    },
    {
      name: 'Cappuccino Cremoso',
      desc: 'O equilíbrio perfeito entre expresso, leite vaporizado e crema.',
      price: 'R$ 18,00',
      img: 'https://www.bongusto.ind.br/wp-content/uploads/2023/06/FRAPE-CAPUCCINO14.jpg',
      details: 'Clássico italiano preparado com terços iguais de expresso, leite vaporizado e espuma cremosa, finalizado com arte em latte.'
    },
    {
      name: 'Cappuccino Canela',
      desc: 'Nossa receita tradicional com um toque especial de canela.',
      price: 'R$ 19,00',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUwQl3YCc2_74FjgawvAUPQv68trzWdOoqA&s',
      details: 'Nosso cappuccino tradicional elevado com canela em pó importada, criando um perfil aromático único e acolhedor.'
    },
    {
      name: 'Latte Tradicional',
      desc: 'Suave e cremoso, com leite vaporizado e café arábica premium.',
      price: 'R$ 17,00',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmqBgVCWMXSlgRCJIKvOVsmliqZd19ySSDg&s',
      details: 'Bebida suave onde o expresso se harmoniza perfeitamente com generosa quantidade de leite vaporizado.'
    },
    {
      name: 'Latte Gelado',
      desc: 'Refrescante, com um toque sutil de baunilha de Madagascar.',
      price: 'R$ 20,00',
      img: 'https://vejasp.abril.com.br/wp-content/uploads/2025/02/DANG0207.jpg.jpg?quality=70&strip=info&w=720&crop=1',
      details: 'Versão gelada do nosso latte, com extrato natural de baunilha de Madagascar e gelo triturado fino.'
    },
    {
      name: 'Filtrado Arábica',
      desc: 'Método V60 que ressalta as notas florais e cítricas do grão.',
      price: 'R$ 16,00',
      img: 'https://images.unsplash.com/photo-1652067871299-0287c2bb881b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3VyJTIwb3ZlciUyMGNvZmZlZSUyMHY2MHxlbnwxfHx8fDE3NzcxNzE3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      details: 'Café preparado no método V60, destacando as características únicas de origem dos nossos grãos arábicas sauditas.'
    },
    {
      name: 'Café Coado Tradicional',
      desc: 'Nosso café coado artesanal, método clássico brasileiro.',
      price: 'R$ 10,00',
      img: 'https://s2-receitas.glbimg.com/APvjbVv4CCxc_Q1Jo6tBuePYOcw=/456x810/top/smart/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2025/1/n/YpGS4BTZi5H8GPdEeM5w/cafe-como-economizar-1-.jpg',
      details: 'O clássico café coado brasileiro preparado com nossos grãos premium, perfeito para qualquer momento do dia.'
    },
    {
      name: 'Macchiato',
      desc: 'Expresso marcado com espuma de leite cremosa.',
      price: 'R$ 14,00',
      img: 'https://osterstatic.reciperm.com/webp/10436.webp',
      details: 'Expresso "manchado" com uma pequena porção de espuma de leite, equilibrando força e suavidade.'
    },
    {
      name: 'Mocha Sublime',
      desc: 'Combinação divina de café, chocolate belga e leite vaporizado.',
      price: 'R$ 22,00',
      img: 'https://levalorcafe.com/pictures/cwlf1xculr.jpg',
      details: 'Indulgente combinação de expresso com chocolate belga premium, leite vaporizado e chantilly artesanal.'
    },
    {
      name: 'Affogato',
      desc: 'Sorvete de baunilha afogado em expresso quente.',
      price: 'R$ 24,00',
      img: 'https://www.thespruceeats.com/thmb/5PcCBEaUd1U1eFxfcKKPLVnZzfA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/affogato-4776668-hero-08-40d7a68d12ba46f48eaea3c43aba715c.jpg',
      details: 'Sobremesa italiana clássica: sorvete artesanal de baunilha coberto com expresso quente duplo.'
    },
    {
      name: 'Café com Leite',
      desc: 'Clássico brasileiro, generoso e reconfortante.',
      price: 'R$ 12,00',
      img: 'https://receitinhasdadani.com.br/wp-content/uploads/2022/08/Cafe-com-leite-cremoso.jpg',
      details: 'Tradicional café com leite brasileiro, preparado com proporções equilibradas para uma bebida reconfortante.'
    }
  ];

  const desserts: MenuItem[] = [
    {
      name: 'Croissant Artesanal',
      desc: 'Folhado francês, crocante por fora e macio por dentro.',
      price: 'R$ 14,00',
      img: 'https://s3.diario.one/linus/images/d68ac591-5f75-4918-ad3a-20f8fb83dbcf.webp',
      details: 'Croissant artesanal produzido diariamente com manteiga francesa, resultando em camadas perfeitas e sabor autêntico.'
    }
    ,
    {
      name: 'Pão na Chapa',
      desc: 'Pão francês quentinho na chapa com manteiga derretida.',
      price: 'R$ 16,00',
      img: 'https://static.itdg.com.br/images/640-auto/3f5318d4c25b35afb4df0547fe8e9dc0/shutterstock-2511230593.jpg',
      details: 'Pão francês quentinho na chapa com manteiga derretida feita com manteiga francesa, resultando em camadas perfeitas e sabor autêntico.'
    },
    {
      name: 'Misto Quente',
      desc: 'Pão francês quentinho com presunto e queijo derretidos na chapa.',
      price: 'R$ 16,00',
      img: 'https://vilmaconfeitarianovamutum.com.br/wp-content/uploads/2024/10/44c5c9a00e19e191aed5c55075b38e84.jpg',
      details: 'Misto Quente feito na chapa feita com manteiga francesa, resultando em camadas perfeitas e sabor autêntico.'
    },
    {
      name: 'Pão com Ovo',
      desc: 'Pão francês quentinho com ovo feito na chapa.',
      price: 'R$ 16,00',
      img: 'https://img.freepik.com/fotos-premium/sanduiche-ciabatta-com-ovos-mexidos_917664-8673.jpg',
      details: 'Pão com Ovo quente na chapa feita com manteiga francesa, resultando em camadas perfeitas e sabor autêntico.'
    },
    {
      name: 'Brownie de Chocolate',
      desc: 'Intenso e úmido, com pedaços de chocolate belga.',
      price: 'R$ 16,00',
      img: 'https://receitatodahora.com.br/wp-content/uploads/2015/09/brownie.jpg.webp',
      details: 'Brownie úmido e denso preparado com chocolate belga 70% cacau e nozes pecã torradas.'
    },
    {
      name: 'Torta de Limão',
      desc: 'Equilibrada entre o azedo e o doce, com merengue suíço.',
      price: 'R$ 18,00',
      img: 'https://www.oetker.com.br/assets/recipes/assets/d044a4ef3cfe45998593f500c00942ef/1272x764/torta-de-limo.jpg',
      details: 'Torta com base de massa amanteigada, recheio cremoso de limão siciliano e merengue maçaricado.'
    },
    {
      name: 'Cheesecake de Frutas Vermelhas',
      desc: 'Cremoso e delicado, com calda especial da casa.',
      price: 'R$ 20,00',
      img: 'https://conteudo.imguol.com.br/c/entretenimento/04/2020/08/10/cheesecake-com-calda-de-frutas-vermelhas-1597080856359_v2_1x1.jpg',
      details: 'Cheesecake cremoso com cream cheese premium, coberto com calda de frutas vermelhas orgânicas.'
    },
    {
      name: 'Bolo de Cenoura com Chocolate',
      desc: 'Receita tradicional brasileira, úmido e saboroso.',
      price: 'R$ 14,00',
      img: 'https://receitatodahora.com.br/wp-content/uploads/2024/08/bolo-de-cenoura-3007.jpg',
      details: 'Tradicional bolo de cenoura brasileiro extra úmido, coberto com brigadeiro cremoso de chocolate meio amargo.'
    },
    {
      name: 'Macaron (3 unidades)',
      desc: 'Sabores variados: framboesa, pistache e chocolate.',
      price: 'R$ 22,00',
      img: 'https://thescranline.com/wp-content/uploads/2024/09/CHOOCLATE-MACARONS-S-02.jpg',
      details: 'Macarons franceses artesanais com casquinha delicada e recheios cremosos de framboesa, pistache e chocolate.'
    },
    {
      name: 'Pão de Queijo (porção)',
      desc: 'Quentinho, crocante por fora e macio por dentro.',
      price: 'R$ 12,00',
      img: 'https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita-840x560.jpg',
      details: 'Porção com 6 unidades de pão de queijo mineiro tradicional, feito com polvilho azedo e queijo meia-cura.'
    },
    {
      name: 'Tiramisu',
      desc: 'Clássico italiano com café, mascarpone e cacau.',
      price: 'R$ 24,00',
      img: 'https://italianismo.com.br/wp-content/uploads/2020/11/Tiramisu%CC%80.jpg',
      details: 'Autêntico tiramisu italiano com biscoitos savoiardi embebidos em nosso expresso, creme de mascarpone e cacau.'
    },
    {
      name: 'Muffin de Blueberry',
      desc: 'Fofinho e generoso em frutas frescas.',
      price: 'R$ 13,00',
      img: 'https://overdoso.com.br/wp-content/uploads/2022/03/Muffins-de-morango-veganos-simple-veganista.jpg',
      details: 'Muffin macio carregado com blueberries frescas e cobertura crocante de streusel.'
    },
    {
      name: 'Torta Cookie',
      desc: 'Deliciosa torta de cookie com cobertura de chocolate',
      price: 'R$ 10,00',
      img: 'https://i.ytimg.com/vi/GE7Ng6kKAxg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDzX-oifC3QBE8DWAhLhgBff2JhDA',
      details: 'Torta Cookie Deliciosa e cremosa com cobertura de chocolate meio amargo.'
    },
    {
      name: 'Torta Holandesa',
      desc: 'Deliciosa combinação de chocolate e creme.',
      price: 'R$ 19,00',
      img: 'https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/desserts-&-bakery/torta-holandesa/main-header.jpg',
      details: 'Torta cremosa com camadas de chocolate ao leite e branco, base de biscoito e cobertura de chocolate.'
    },
    {
      name: 'Sonho Recheado',
      desc: 'Tradicional sonho com recheio de doce de leite.',
      price: 'R$ 11,00',
      img: 'https://i.ytimg.com/vi/2GfuP-UIXig/maxresdefault.jpg',
      details: 'Sonho frito no ponto certo, polvilhado com açúcar e recheado com doce de leite argentino cremoso.'
    },
    {
      name: 'Cookies',
      desc: 'Crocante nas bordas, macio no centro.',
      price: 'R$ 10,00',
      img: 'https://www.foodandwine.com/thmb/4_UScMzHQCxZzACBITHHmT_EM3U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Chocolate-Chunk-Halwah-Cookies-FT-RECIPE0923-1f8df755df6d468da98887aa846a2fe3.jpg',
      details: 'Cookie grande e generoso com gotas de chocolate meio amargo, textura perfeita entre crocante e macio.'
    }
  ];

  return (
    <div className="bg-white">
      <section className="pt-36 pb-24 bg-gradient-to-b from-[#644536] to-[#4a3328]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl text-white font-bold mb-6">
            Cardápio Completo
          </h1>
          <p className="font-['Lato'] text-xl text-gray-200 max-w-2xl mx-auto">
            Descubra toda a experiência sublime que preparamos para você.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#180E0E] font-bold mb-4">Cafés</h2>
            <div className="w-24 h-1 bg-[#644536] mx-auto"></div>
            <p className="font-['Lato'] text-lg text-[#180E0E] opacity-70 mt-6">
              Grãos arábicos selecionados da Arábia Saudita
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {coffees.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedItem(item)}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 cursor-pointer flex flex-col h-full"
              >
                <div className="h-56 overflow-hidden relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
                  <p className="font-['Lato'] text-[#180E0E] opacity-75 text-sm leading-relaxed mb-4 flex-grow">{item.desc}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
                    <span className="font-['Lato'] text-xl font-bold text-[#644536]">{item.price}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        alert('Função de pedido em desenvolvimento');
                      }}
                      className="bg-[#644536] text-white px-4 py-2 rounded-full font-['Lato'] text-sm hover:bg-[#4a3328] transition-colors"
                    >
                      Pedir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#180E0E] font-bold mb-4">Sobremesas & Acompanhamentos</h2>
            <div className="w-24 h-1 bg-[#644536] mx-auto"></div>
            <p className="font-['Lato'] text-lg text-[#180E0E] opacity-70 mt-6">
              O complemento perfeito para o seu café
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {desserts.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedItem(item)}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 cursor-pointer flex flex-col h-full"
              >
                <div className="h-56 overflow-hidden relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
                  <p className="font-['Lato'] text-[#180E0E] opacity-75 text-sm leading-relaxed mb-4 flex-grow">{item.desc}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
                    <span className="font-['Lato'] text-xl font-bold text-[#644536]">{item.price}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        alert('Função de pedido em desenvolvimento');
                      }}
                      className="bg-[#644536] text-white px-4 py-2 rounded-full font-['Lato'] text-sm hover:bg-[#4a3328] transition-colors"
                    >
                      Pedir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                        alert('Função de pedido em desenvolvimento');
                      }}
                      className="flex-1 bg-[#644536] text-white px-8 py-4 rounded-full font-['Lato'] text-lg font-bold hover:bg-[#4a3328] transition-colors shadow-lg"
                    >
                      Adicionar ao Pedido
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
    </div>
  );
}
