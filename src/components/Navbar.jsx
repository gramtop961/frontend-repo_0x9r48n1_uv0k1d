import { useState, useEffect } from 'react';
import { Menu, X, Home, Images, Info, FileText, LogIn } from 'lucide-react';

export default function Navbar({ logoUrl }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLink = (href, label, Icon) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-gray-100 hover:text-white hover:bg-white/10 transition"
    >
      {Icon && <Icon size={16} />}
      {label}
    </a>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition backdrop-blur ${scrolled ? 'bg-gray-900/80 shadow-lg' : 'bg-gray-900/40'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded overflow-hidden bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold">
              {logoUrl ? (
                <img src={logoUrl} alt="Logo BKAAP" className="w-full h-full object-contain" />
              ) : (
                'BK'
              )}
            </div>
            <div className="text-white">
              <p className="text-sm leading-tight uppercase tracking-widest text-emerald-300">BKAAP</p>
              <p className="text-xs -mt-1 text-gray-300">Engenharia & Construção</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            {navLink('#inicio', 'Início', Home)}
            {navLink('#sobre', 'Sobre', Info)}
            {navLink('#portfolio', 'Portfólio', Images)}
            {navLink('#orcamento', 'Solicitar Orçamento', FileText)}
            <a href="#admin" className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition">
              <LogIn size={16} /> Área Administrativa
            </a>
          </nav>

          <button
            className="md:hidden text-white p-2 rounded hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-gray-900/95">
          <div className="px-4 py-3 grid gap-1">
            {navLink('#inicio', 'Início', Home)}
            {navLink('#sobre', 'Sobre', Info)}
            {navLink('#portfolio', 'Portfólio', Images)}
            {navLink('#orcamento', 'Solicitar Orçamento', FileText)}
            <a href="#admin" className="flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition">
              <LogIn size={16} /> Área Administrativa
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
