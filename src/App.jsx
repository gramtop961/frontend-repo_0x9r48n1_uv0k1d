import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OrcamentoCTA from './components/OrcamentoCTA';
import AdminSettings from './components/AdminSettings';
import { LogoProvider } from './components/LogoContext';

function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#8E8E8E]">© {new Date().getFullYear()} BKAAP. Todos os direitos reservados.</p>
        <div className="text-sm text-[#CFCFCF]">Feito com precisão, design e performance.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <LogoProvider>
      <div className="min-h-screen bg-[#0E0E0E]">
        <Navbar />
        <main className="pt-20">
          <Hero />
          <About />
          <OrcamentoCTA />
          <AdminSettings />
        </main>
        <Footer />
      </div>
    </LogoProvider>
  );
}
