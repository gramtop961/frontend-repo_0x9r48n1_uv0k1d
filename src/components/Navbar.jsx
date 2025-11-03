import React from 'react';
import { useLogo } from './LogoContext';

const Navbar = () => {
  const { logo, hydrated } = useLogo();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-[#0F0F0F]/60 bg-[#0F0F0F]/80 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center justify-center rounded-md bg-[#121212] ring-1 ring-white/10 shadow-sm px-2.5 py-1.5">
            {hydrated && logo ? (
              <img
                src={logo}
                alt="Logo"
                className="h-9 sm:h-10 md:h-11 w-auto object-contain select-none"
                draggable={false}
              />
            ) : (
              <div className="h-9 sm:h-10 md:h-11 aspect-[5/2] bg-[#1F1F1F] rounded-sm" />
            )}
          </div>
        </div>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-300">
          <a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a>
          <a href="#orcamento" className="hover:text-white transition-colors">Orçamento</a>
          <a href="#contato" className="hover:text-white transition-colors">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
