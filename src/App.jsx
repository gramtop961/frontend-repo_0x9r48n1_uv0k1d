import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import WhatsAppCTA from './components/WhatsAppCTA';
import { LogoProvider } from './components/LogoContext';
import Login, { isAuthenticated } from './components/Login';
import Admin from './components/Admin';
import BackgroundGrid from './components/BackgroundGrid';

function App() {
  const [route, setRoute] = useState(window.location.hash || '');
  const [authed, setAuthed] = useState(isAuthenticated());

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || '');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const isAdminRoute = route === '#admin';

  const onLoginSuccess = () => {
    setAuthed(true);
    window.location.hash = '#admin';
  };

  return (
    <LogoProvider>
      <div className="relative min-h-screen text-white">
        <BackgroundGrid />

        {/* Site público */}
        {!isAdminRoute && (
          <>
            <Navbar />
            <main className="relative z-10">
              <Hero />
              <Portfolio />
              <WhatsAppCTA />
            </main>
            <footer id="contato" className="relative z-10 border-t border-white/5 bg-[#0F0F0F]/80 backdrop-blur">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-neutral-300">
                <p>© {new Date().getFullYear()} BKAAP Construtora. Todos os direitos reservados.</p>
                <p>
                  Contato: <a href="mailto:contato@bkaap.com" className="hover:text-white transition">contato@bkaap.com</a> ·
                  <a href="https://wa.me/5522997459149" target="_blank" rel="noreferrer" className="ml-1 hover:text-white transition">WhatsApp</a>
                  <a href="#admin" className="ml-4 underline/30 hover:text-white">Área admin</a>
                </p>
              </div>
            </footer>
          </>
        )}

        {/* Área administrativa */}
        {isAdminRoute && (
          <div className="relative z-10">
            <Navbar />
            {authed ? <Admin /> : <Login onSuccess={onLoginSuccess} />}
          </div>
        )}
      </div>
    </LogoProvider>
  );
}

export default App;
