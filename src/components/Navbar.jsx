import { useEffect, useState } from 'react';
import { Menu, X, Home, Info, FileText, Settings } from 'lucide-react';

export default function Navbar({ logoUrl }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const NavLink = ({ href, label, Icon }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-gray-100 hover:text-white hover:bg-white/10 transition"
    >
      {Icon ? <Icon size={16} /> : null}
      {label}
    </a>
  );

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled ? 'bg-[#1F1F1F]/95 shadow-lg' : 'bg-[#1F1F1F]/70'} backdrop-blur`}>\n      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n        <div className="flex h-16 items-center justify-between">\n          <a href="#inicio" className="flex items-center gap-3">\n            <div className="w-9 h-9 rounded overflow-hidden bg-[#2ECC71]/10 ring-1 ring-[#2ECC71]/30 flex items-center justify-center text-white font-bold">\n              {logoUrl ? (\n                <img src={logoUrl} alt="Logo BKAAP" className="w-full h-full object-contain" />\n              ) : (\n                <span className="text-[#2ECC71]">BK</span>\n              )}\n            </div>\n            <div className="text-white">\n              <p className="text-sm leading-tight uppercase tracking-widest text-[#2ECC71]">BKAAP</p>\n              <p className="text-xs -mt-1 text-gray-300">Engenharia & Construção</p>\n            </div>\n          </a>\n\n          <nav className="hidden md:flex items-center gap-2">\n            <NavLink href="#inicio" label="Início" Icon={Home} />\n            <NavLink href="#sobre" label="Sobre" Icon={Info} />\n            <NavLink href="#orcamento" label="Orçamento" Icon={FileText} />\n            <a href="#admin" className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#2ECC71] hover:brightness-110 text-[#1F1F1F] text-sm font-semibold transition">\n              <Settings size={16} /> Área Administrativa\n            </a>\n          </nav>\n\n          <button\n            className="md:hidden text-white p-2 rounded hover:bg-white/10"\n            onClick={() => setOpen((v) => !v)}\n            aria-label="Abrir menu"
          >\n            {open ? <X /> : <Menu />}\n          </button>\n        </div>\n      </div>\n\n      {open ? (\n        <div className="md:hidden border-t border-white/10 bg-[#1F1F1F]/95">\n          <div className="px-4 py-3 grid gap-1">\n            <NavLink href="#inicio" label="Início" Icon={Home} />\n            <NavLink href="#sobre" label="Sobre" Icon={Info} />\n            <NavLink href="#orcamento" label="Orçamento" Icon={FileText} />\n            <a href="#admin" className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#2ECC71] hover:brightness-110 text-[#1F1F1F] text-sm font-semibold transition">\n              <Settings size={16} /> Área Administrativa\n            </a>\n          </div>\n        </div>\n      ) : null}\n    </header>
  );
}
