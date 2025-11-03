import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import WhatsAppCTA from './components/WhatsAppCTA';
import { LogoProvider } from './components/LogoContext';

function App() {
  return (
    <LogoProvider>
      <div className="min-h-screen bg-[#0B0B0B] text-white">
        <Navbar />
        <main>
          <Hero />
          <Portfolio />
          <WhatsAppCTA />
        </main>
        <footer id="contato" className="border-t border-white/5 bg-[#0F0F0F]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-neutral-300">
            <p>© {new Date().getFullYear()} BKAAP Construtora. Todos os direitos reservados.</p>
            <p>
              Contato: <a href="mailto:contato@bkaap.com" className="hover:text-white transition">contato@bkaap.com</a> ·
              <a href="https://wa.me/5522997459149" target="_blank" rel="noreferrer" className="ml-1 hover:text-white transition">WhatsApp</a>
            </p>
          </div>
        </footer>
      </div>
    </LogoProvider>
  );
}

export default App;
