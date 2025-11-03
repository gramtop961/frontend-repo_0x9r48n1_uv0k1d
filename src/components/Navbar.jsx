import React, { useState } from 'react';
import { Menu, X, Settings } from 'lucide-react';
import { useLogo } from './LogoContext';

export default function Navbar() {
  const { logoUrl } = useLogo();
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row md:items-center gap-6">
      <li><a href="#inicio" className="text-[#EAEAEA] hover:text-[#2ECC71] transition-colors">Início</a></li>
      <li><a href="#sobre" className="text-[#EAEAEA] hover:text-[#2ECC71] transition-colors">Sobre</a></li>
      <li><a href="#orcamento" className="text-[#EAEAEA] hover:text-[#2ECC71] transition-colors">Orçamento</a></li>
      <li>
        <a href="#admin" className="inline-flex items-center gap-2 text-[#2ECC71] font-medium">
          <Settings size={18} /> Admin
        </a>
      </li>
    </ul>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#1F1F1F]/80 backdrop-blur-md border-b border-[#2e2e2e]">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          {logoUrl ? (
            <img src={logoUrl} alt="BKAAP" className="h-9 w-9 object-contain rounded" />
          ) : (
            <div className="h-9 w-9 rounded bg-[#2ECC71] grid place-items-center text-black font-bold">B</div>
          )}
          <span className="text-white font-semibold tracking-wide">BKAAP</span>
        </a>

        <div className="hidden md:block">
          <NavLinks />
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:text-[#2ECC71] focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-6">
          <NavLinks />
        </div>
      )}
    </header>
  );
}
