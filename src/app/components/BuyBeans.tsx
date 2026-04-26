import React from 'react';
import { ShoppingBag, Star, Package, CheckCircle } from 'lucide-react';

type BeanProduct = {
  id: number;
  name: string;
  weight: string;
  price: string;
  desc: string;
  roast: string;
  notes: string;
  img: string;
};

export default function BuyBeans() {
  const [selectedProduct, setSelectedProduct] = React.useState<BeanProduct | null>(null);

  const products: BeanProduct[] = [
    {
      id: 1,
      name: 'Blend Signature Arábica',
      weight: '1kg',
      price: 'R$ 145,00',
      desc: 'Nosso blend exclusivo, colhido nas maiores altitudes para um sabor encorpado e acidez equilibrada.',
      roast: 'Média-Escura',
      notes: 'Chocolate amargo, nozes tostadas e leve toque de caramelo.',
      img: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGJhZ3xlbnwxfHx8fDE3NzcxNzUyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      name: 'Reserva Especial Sublime',
      weight: '550g',
      price: 'R$ 89,00',
      desc: 'Uma seleção de microlotes premiados. Doçura natural destacada com corpo aveludado.',
      roast: 'Média',
      notes: 'Frutas vermelhas, melado de cana e final cítrico.',
      img: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwYWNrYWdpbmd8ZW58MXx8fHwxNzc3MTc1MjIyfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      name: 'Arábica Descafeinado',
      weight: '250g',
      price: 'R$ 54,00',
      desc: 'Todo o sabor do nosso arábica premium, processo de descafeinação natural Swiss Water.',
      roast: 'Média',
      notes: 'Baunilha, amêndoas e cacau suave.',
      img: 'https://blog.coffeemais.com/wp-content/uploads/2021/07/cafe-descafeinado-coffee.jpg'
    },
    {
      id: 4,
      name: 'Edição Ouro Arábia',
      weight: '1kg',
      price: 'R$ 180,00',
      desc: 'Os grãos mais raros de nossa safra. Processo de secagem artesanal em terreiro suspenso.',
      roast: 'Clara',
      notes: 'Jasmim, pêssego e chá preto.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-Lk5mpWi5haVBUhZ0lenLdDoIeGa2MZBMQ&s'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="pt-36 pb-24 bg-[#180E0E] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGRhcmt8ZW58MXx8fHwxNzc3MTc1MjcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Fundo grãos de café"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#180E0E] to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl text-white font-bold mb-6 drop-shadow-lg">
            Compre Nossos Grãos
          </h1>
          <p className="font-['Lato'] text-xl text-gray-300 max-w-2xl mx-auto">
            Leve a experiência Sublime para sua casa. Grãos recém-torrados, embalados com perfeição para preservar todo o aroma e sabor.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] transition-all duration-300 flex flex-col sm:flex-row group border border-gray-100">
                <div className="sm:w-2/5 h-64 sm:h-auto relative overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#644536] font-['Lato'] shadow-sm">
                    {product.weight}
                  </div>
                </div>

                <div className="p-8 sm:w-3/5 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#180E0E] leading-tight">
                        {product.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 mb-4 text-[#644536]">
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                    </div>
                    <p className="font-['Lato'] text-gray-600 text-sm leading-relaxed mb-6">
                      {product.desc}
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-700 font-['Lato']">
                        <span className="font-bold text-[#180E0E]">Torra:</span> {product.roast}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700 font-['Lato']">
                        <span className="font-bold text-[#180E0E]">Notas:</span> {product.notes}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="font-['Lato'] text-2xl font-bold text-[#180E0E]">
                      {product.price}
                    </span>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="bg-[#644536] text-white px-6 py-3 rounded-full font-['Lato'] text-sm font-bold hover:bg-[#4a3328] transition-colors flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <ShoppingBag size={18} />
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-[#F8F6F4] rounded-full flex items-center justify-center text-[#644536] mb-4">
                <Package size={32} />
              </div>
              <h4 className="font-['Playfair_Display'] text-xl font-bold text-[#180E0E] mb-2">Entrega Rápida</h4>
              <p className="font-['Lato'] text-gray-600">Enviamos em até 24h úteis para que seu café chegue super fresco.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-[#F8F6F4] rounded-full flex items-center justify-center text-[#644536] mb-4">
                <CheckCircle size={32} />
              </div>
              <h4 className="font-['Playfair_Display'] text-xl font-bold text-[#180E0E] mb-2">Moagem Grátis</h4>
              <p className="font-['Lato'] text-gray-600">Se preferir, moemos na hora do envio na granulometria ideal para seu método.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-[#F8F6F4] rounded-full flex items-center justify-center text-[#644536] mb-4">
                <Star size={32} />
              </div>
              <h4 className="font-['Playfair_Display'] text-xl font-bold text-[#180E0E] mb-2">Qualidade Garantida</h4>
              <p className="font-['Lato'] text-gray-600">100% Arábica selecionado manualmente com rigoroso padrão de qualidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mock Modal for Checkout */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 text-gray-400 hover:text-[#180E0E] transition-colors">
              <span className="sr-only">Fechar</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-[#F8F6F4] rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden border-4 border-white shadow-sm">
                <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#180E0E] mb-1">{selectedProduct.name}</h3>
              <p className="font-['Lato'] text-[#644536] font-bold text-xl">{selectedProduct.price}</p>
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <label className="block font-['Lato'] text-sm font-bold text-gray-700 mb-2">Moagem</label>
                <select className="w-full border border-gray-300 rounded-lg p-3 font-['Lato'] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#644536]">
                  <option>Em Grãos (Inteiros)</option>
                  <option>Moído para Filtro / Coador</option>
                  <option>Moído para Prensa Francesa</option>
                  <option>Moído para Expresso</option>
                </select>
              </div>
              <div>
                <label className="block font-['Lato'] text-sm font-bold text-gray-700 mb-2">Quantidade</label>
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button className="px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors">-</button>
                  <input type="text" value="1" readOnly className="w-full text-center font-['Lato'] text-gray-700" />
                  <button className="px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors">+</button>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                alert('Redirecionando para o WhatsApp da loja para finalizar a compra de grãos...');
                setSelectedProduct(null);
              }}
              className="w-full bg-[#644536] text-white py-4 rounded-lg font-['Lato'] text-lg font-bold hover:bg-[#4a3328] transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              Comprar via WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
