import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Coffee, Menu, X, Instagram, Facebook } from 'lucide-react';
import ChatBot from './ChatBot';
import BottomBar from './BottomBar';

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { pathname } = useLocation();

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm' : 'bg-transparent border-b-0 shadow-none'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'h-16 md:h-20' : 'h-24 md:h-32'}`}>
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className={`font-['Playfair_Display'] font-bold flex items-center gap-2 md:gap-4 group ml-1 ${isScrolled ? 'text-[#180E0E]' : 'text-white drop-shadow-lg'}`}>
              <img
                src="/images/logo.png"
                alt="Logo"
                className={`w-auto transition-all duration-500 ${isScrolled ? 'h-8 md:h-12 drop-shadow-md' : 'h-12 md:h-20 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]'}`}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <span className={`transition-all duration-500 ${isScrolled ? 'text-lg md:text-2xl' : 'text-xl md:text-3xl'}`}>
                Café Sublime
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className={`font-['Lato'] transition-colors font-semibold ${isScrolled ? 'text-[#180E0E] hover:text-[#644536]' : 'text-white hover:text-gray-300 drop-shadow-md'}`}>Início</Link>
            <Link to="/sobre" className={`font-['Lato'] transition-colors font-semibold ${isScrolled ? 'text-[#180E0E] hover:text-[#644536]' : 'text-white hover:text-gray-300 drop-shadow-md'}`}>Sobre Nós</Link>
            <Link to="/cardapio" className={`font-['Lato'] transition-colors font-semibold ${isScrolled ? 'text-[#180E0E] hover:text-[#644536]' : 'text-white hover:text-gray-300 drop-shadow-md'}`}>Cardápio</Link>
            <Link to="/compre-graos" className={`font-['Lato'] transition-colors font-semibold ${isScrolled ? 'text-[#180E0E] hover:text-[#644536]' : 'text-white hover:text-gray-300 drop-shadow-md'}`}>Compre Grãos</Link>
            <Link to="/contato" className={`font-['Lato'] transition-colors font-semibold ${isScrolled ? 'text-[#180E0E] hover:text-[#644536]' : 'text-white hover:text-gray-300 drop-shadow-md'}`}>Contato</Link>
            <Link to="/cardapio" className={`px-5 py-2 rounded-full font-['Lato'] font-bold transition-colors shadow-md ${isScrolled ? 'bg-[#644536] text-white hover:bg-[#4a3328]' : 'bg-white text-[#180E0E] hover:bg-gray-100'}`}>
              Peça Online
            </Link>
          </nav>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 ${isScrolled ? 'text-[#180E0E]' : 'text-white drop-shadow-md'}`} aria-label="Menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-1 shadow-lg">
          <Link to="/" className="flex items-center text-[#180E0E] font-['Lato'] font-semibold py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setIsOpen(false)}>Início</Link>
          <Link to="/sobre" className="flex items-center text-[#180E0E] font-['Lato'] font-semibold py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setIsOpen(false)}>Sobre Nós</Link>
          <Link to="/cardapio" className="flex items-center text-[#180E0E] font-['Lato'] font-semibold py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setIsOpen(false)}>Cardápio</Link>
          <Link to="/compre-graos" className="flex items-center text-[#180E0E] font-['Lato'] font-semibold py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setIsOpen(false)}>Compre Grãos</Link>
          <Link to="/contato" className="flex items-center text-[#180E0E] font-['Lato'] font-semibold py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setIsOpen(false)}>Contato</Link>
          <div className="pt-2">
            <Link to="/cardapio" className="block text-center w-full bg-[#644536] text-white px-6 py-3 rounded-full font-['Lato'] font-bold hover:bg-[#4a3328] transition-colors" onClick={() => setIsOpen(false)}>
              Peça Online
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#180E0E] text-white pt-16 pb-8 mb-16 md:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12 border-b border-white/10 pb-12">
          <div className="col-span-1 sm:col-span-2">
            <span className="font-['Playfair_Display'] text-3xl font-bold mb-6 block text-white">Café Sublime</span>
            <p className="font-['Lato'] text-gray-400 max-w-sm leading-relaxed">
              A alma do café em cada grão. Dedicados a trazer a melhor experiência em cafés especiais para o seu dia a dia.
            </p>
          </div>

          <div>
            <h4 className="font-['Playfair_Display'] text-xl font-bold mb-6">Navegação</h4>
            <ul className="space-y-3 font-['Lato'] text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link to="/cardapio" className="hover:text-white transition-colors">Cardápio</Link></li>
              <li><Link to="/compre-graos" className="hover:text-white transition-colors">Compre Grãos</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Playfair_Display'] text-xl font-bold mb-6">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-[#644536] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-[#644536] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center font-['Lato'] text-gray-500 text-sm">
          <p>© 2026 Café Sublime. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default function Root() {
  return (
    <div className="font-['Lato'] scroll-smooth bg-white text-[#180E0E] overflow-x-hidden w-full selection:bg-[#644536] selection:text-white">
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <ChatBot />
      <BottomBar />
    </div>
  );
}
