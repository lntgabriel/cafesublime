import React from 'react';
import { MessageCircle, X, Send, Coffee } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  from: 'bot' | 'user';
  time: string;
};

const getTime = () =>
  new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

const FAQ: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['horário', 'horario', 'hora', 'abre', 'fecha', 'funcionamento', 'funciona'],
    answer:
      '🕐 Nossos horários são:\n\n• **Segunda a Sexta:** 08:00 – 20:00\n• **Sábados e Domingos:** 09:00 – 19:00\n• Fechamos em feriados nacionais.',
  },
  {
    keywords: ['endereço', 'endereco', 'onde', 'localização', 'localizacao', 'local', 'lugar', 'fica'],
    answer:
      '📍 Estamos na **Praça Prof. Simão Faiguenboim, 487**.\n\nTemos outras unidades pela cidade também! Entre em contato para saber a unidade mais próxima de você.',
  },
  {
    keywords: ['cardápio', 'cardapio', 'menu', 'produto', 'produtos', 'item', 'itens', 'tem', 'serve'],
    answer:
      '☕ Temos uma grande variedade! Nosso cardápio inclui:\n\n• Cafés especiais (Expresso, Cappuccino, Latte, Filtrado...)\n• Sobremesas artesanais (Tiramisu, Cheesecake, Brownie...)\n• Acompanhamentos (Croissant, Pão na Chapa, Pão de Queijo...)\n\nVeja o cardápio completo em **Cardápio** no menu do site! 😊',
  },
  {
    keywords: ['grão', 'grao', 'grãos', 'graos', 'comprar', 'compra', 'pacote', 'kg', 'quilo'],
    answer:
      '🛍️ Vendemos nossos grãos arábica premium para você levar para casa!\n\n• **Blend Signature Arábica** – 1kg • R$ 145,00\n• **Reserva Especial Sublime** – 550g • R$ 89,00\n• **Arábica Descafeinado** – 250g • R$ 54,00\n• **Edição Ouro** – 1kg • R$ 180,00\n\nMoemos na hora no ponto ideal para seu método! Acesse **Compre Grãos** para comprar. 💛',
  },
  {
    keywords: ['preço', 'preco', 'valor', 'quanto', 'custa', 'caro'],
    answer:
      '💰 Nossos preços variam de acordo com o produto:\n\n• Cafés: a partir de **R$ 10,00**\n• Sobremesas: a partir de **R$ 10,00**\n• Grãos para levar: de **R$ 54,00 a R$ 180,00**\n\nConsulte o cardápio completo no site para ver todos os preços!',
  },
  {
    keywords: ['entrega', 'delivery', 'motoboy', 'entregar', 'levar', 'envio', 'envia', 'enviar'],
    answer:
      '🚚 Fazemos entrega de nossos grãos em todo o Brasil!\n\nEnviamos em até **24h úteis** após a confirmação do pedido, embalados a vácuo para preservar o frescor.\n\nPara pedidos de bebidas e acompanhamentos, atendemos presencialmente em nossas lojas.',
  },
  {
    keywords: ['whatsapp', 'zap', 'telefone', 'contato', 'ligar', 'falar', 'atendimento'],
    answer:
      '📞 Você pode nos contatar por:\n\n• **Telefone/WhatsApp:** (11) 98765-4321\n• **E-mail:** contato@cafesublime.com\n\nOu acesse a página de **Contato** no site!',
  },
  {
    keywords: ['wifi', 'wi-fi', 'internet', 'rede'],
    answer: '📶 Sim! Oferecemos Wi-Fi gratuito em todas as nossas unidades. Pergunte a um de nossos atendentes a senha ao chegar! ☕',
  },
  {
    keywords: ['reserva', 'reservar', 'mesa', 'evento', 'eventos', 'aniversário', 'aniversario'],
    answer:
      '🎉 Fazemos reservas para grupos e eventos especiais!\n\nEntre em contato pelo WhatsApp **(11) 98765-4321** para verificar disponibilidade e condições especiais.',
  },
  {
    keywords: ['descafeinado', 'cafeina', 'cafeína', 'sem cafeina', 'sem cafeína'],
    answer:
      '✅ Sim! Temos opções descafeinadas tanto no cardápio de bebidas quanto em grãos para levar.\n\nNosso **Arábica Descafeinado** passa pelo processo natural Swiss Water, mantendo todo o sabor sem a cafeína.',
  },
  {
    keywords: ['ola', 'olá', 'oi', 'bom dia', 'boa tarde', 'boa noite', 'hey', 'hi'],
    answer:
      'Olá! ☕ Bem-vindo ao **Café Sublime**!\n\nEstou aqui para ajudar com dúvidas sobre nosso cardápio, horários, localização, entregas e muito mais.\n\nComo posso te ajudar hoje?',
  },
  {
    keywords: ['obrigado', 'obrigada', 'valeu', 'thanks', 'agradeço'],
    answer:
      'Fico feliz em ajudar! 😊 Se tiver mais alguma dúvida, é só perguntar. Esperamos te ver em breve no Café Sublime! ☕',
  },
];

const getAnswer = (input: string): string => {
  const lower = input.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  for (const faq of FAQ) {
    if (faq.keywords.some((kw) => lower.includes(kw.normalize('NFD').replace(/[\u0300-\u036f]/g, '')))) {
      return faq.answer;
    }
  }
  return 'Hmm, não tenho certeza sobre isso. 🤔\n\nVocê pode ligar ou enviar mensagem no nosso WhatsApp: **(11) 98765-4321**, ou visitar a página de **Contato** do site. Estaremos felizes em ajudar!';
};

export default function ChatBot() {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState('');
  const [typing, setTyping] = React.useState(false);
  const [hasUnread, setHasUnread] = React.useState(false);
  const [welcomed, setWelcomed] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Welcome message after 3s
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!welcomed) {
        setMessages([
          {
            id: Date.now(),
            text: 'Olá! ☕ Sou o **Café Bot**, assistente do Café Sublime!\n\nPosso te ajudar com dúvidas sobre horários, cardápio, localização, grãos e muito mais. O que gostaria de saber?',
            from: 'bot',
            time: getTime(),
          },
        ]);
        setHasUnread(true);
        setWelcomed(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [welcomed]);

  React.useEffect(() => {
    if (open) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = { id: Date.now(), text, from: 'user', time: getTime() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    const delay = 800 + Math.random() * 700;
    setTimeout(() => {
      const answer = getAnswer(text);
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: answer, from: 'bot', time: getTime() },
      ]);
    }, delay);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') sendMessage();
  };

  // Format message text: **bold** and newlines
  const formatText = (text: string) => {
    return text.split('\n').map((line, i) => {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      return (
        <span key={i}>
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j}>{part}</strong> : part
          )}
          {i < text.split('\n').length - 1 && <br />}
        </span>
      );
    });
  };

  return (
    <>
      {/* Chat Window */}
      {open && (
        <div
          className="fixed z-[60] flex flex-col shadow-2xl rounded-2xl overflow-hidden border border-gray-100"
          style={{
            bottom: 'calc(env(safe-area-inset-bottom, 0px) + 90px)',
            right: '16px',
            width: 'min(380px, calc(100vw - 32px))',
            height: 'min(560px, calc(100vh - 160px))',
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#644536] to-[#4a3328] px-4 py-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Coffee size={20} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-['Playfair_Display'] text-white font-bold text-base leading-tight">Café Bot</p>
              <p className="font-['Lato'] text-white/70 text-xs">Assistente do Café Sublime</p>
            </div>
            <div className="flex items-center gap-2 mr-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="font-['Lato'] text-white/80 text-xs">Online</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors ml-1"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-3">
            {messages.length === 0 && (
              <div className="text-center text-gray-400 font-['Lato'] text-sm mt-8">
                <Coffee size={32} className="mx-auto mb-3 text-[#644536] opacity-40" />
                <p>Envie uma mensagem para começar!</p>
              </div>
            )}

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.from === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {msg.from === 'bot' && (
                  <div className="w-7 h-7 bg-[#644536] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Coffee size={14} className="text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl font-['Lato'] text-sm leading-relaxed shadow-sm ${
                    msg.from === 'user'
                      ? 'bg-[#644536] text-white rounded-tr-sm'
                      : 'bg-white text-[#180E0E] rounded-tl-sm border border-gray-100'
                  }`}
                >
                  <p>{formatText(msg.text)}</p>
                  <p className={`text-xs mt-1 ${msg.from === 'user' ? 'text-white/60 text-right' : 'text-gray-400'}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex gap-2 items-center">
                <div className="w-7 h-7 bg-[#644536] rounded-full flex items-center justify-center flex-shrink-0">
                  <Coffee size={14} className="text-white" />
                </div>
                <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm">
                  <div className="flex gap-1 items-center h-4">
                    <span className="w-2 h-2 bg-[#644536] rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-[#644536] rounded-full opacity-60 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-[#644536] rounded-full opacity-60 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          <div className="bg-white border-t border-gray-100 px-3 py-2 flex gap-2 overflow-x-auto">
            {['Horários', 'Cardápio', 'Localização', 'Grãos'].map((q) => (
              <button
                key={q}
                onClick={() => {
                  setInput(q);
                  setTimeout(() => sendMessage(), 0);
                  // Direct send
                  const text = q;
                  const userMsg: Message = { id: Date.now(), text, from: 'user', time: getTime() };
                  setMessages((prev) => [...prev, userMsg]);
                  setTyping(true);
                  setTimeout(() => {
                    const answer = getAnswer(text);
                    setTyping(false);
                    setMessages((prev) => [
                      ...prev,
                      { id: Date.now() + 1, text: answer, from: 'bot', time: getTime() },
                    ]);
                  }, 800);
                }}
                className="flex-shrink-0 text-xs font-['Lato'] font-semibold text-[#644536] border border-[#644536] px-3 py-1.5 rounded-full hover:bg-[#644536] hover:text-white transition-colors whitespace-nowrap"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="bg-white border-t border-gray-100 px-3 py-3 flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Digite sua dúvida..."
              className="flex-1 border border-gray-200 rounded-full px-4 py-2.5 font-['Lato'] text-sm text-[#180E0E] focus:outline-none focus:border-[#644536] transition-colors bg-gray-50"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="w-10 h-10 bg-[#644536] hover:bg-[#4a3328] disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors flex-shrink-0 shadow-md"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed z-[60] w-14 h-14 bg-[#644536] hover:bg-[#4a3328] text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          bottom: 'calc(env(safe-area-inset-bottom, 0px) + 90px)',
          right: '16px',
        }}
        aria-label="Abrir chat de atendimento"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
        {!open && hasUnread && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs font-bold flex items-center justify-center animate-pulse">
            1
          </span>
        )}
      </button>
    </>
  );
}
