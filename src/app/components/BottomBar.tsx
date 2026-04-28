import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, ShoppingBag, Info, Phone } from 'lucide-react';

const tabs = [
  { to: '/', label: 'Início', icon: Home },
  { to: '/cardapio', label: 'Cardápio', icon: BookOpen },
  { to: '/compre-graos', label: 'Grãos', icon: ShoppingBag },
  { to: '/sobre', label: 'Sobre', icon: Info },
  { to: '/contato', label: 'Contato', icon: Phone },
];

export default function BottomBar() {
  const { pathname } = useLocation();

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="flex items-stretch justify-around px-1">
        {tabs.map(({ to, label, icon: Icon }) => {
          const isActive = to === '/' ? pathname === '/' : pathname.startsWith(to);
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center justify-center gap-1 py-2.5 px-2 flex-1 min-w-0 transition-all duration-200 relative ${
                isActive ? 'text-[#644536]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {isActive && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#644536] rounded-b-full" />
              )}
              <span
                className={`transition-all duration-200 ${
                  isActive ? 'scale-110' : 'scale-100'
                }`}
              >
                <Icon
                  size={22}
                  strokeWidth={isActive ? 2.5 : 1.8}
                />
              </span>
              <span
                className={`text-[10px] font-['Lato'] font-semibold truncate w-full text-center leading-none transition-all duration-200 ${
                  isActive ? 'opacity-100' : 'opacity-70'
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
