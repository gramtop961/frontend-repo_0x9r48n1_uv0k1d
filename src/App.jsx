import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AdminSettings from './components/AdminSettings';
import { LogoProvider, useLogo } from './components/LogoContext';

function OrcamentoCTA() {
  return (
    <section id="orcamento" className="relative py-20 bg-[#1F1F1F]">
      <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-white to-transparent opacity-50 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Solicite um orçamento personalizado</h2>
        <p className="mt-3 text-[#D0D0D0] max-w-3xl mx-auto">
          Informe a metragem, com ou sem materiais, e receba um estudo com condições de pagamento, cronograma de parcelas e resumo completo.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#admin" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#2ECC71] hover:brightness-110 text-[#1F1F1F] font-semibold shadow-lg transition">
            Acessar Gerador de Orçamentos
          </a>
          <a href="#sobre" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 font-semibold transition">
            Sobre a empresa
          </a>
        </div>
        <p className="mt-4 text-sm text-[#A8A8A8]">Área Administrativa com login será habilitada na próxima etapa.</p>
      </div>
    </section>
  );
}

function Shell() {
  const { logoUrl } = useLogo();
  return (
    <div className="min-h-screen bg-white">
      <Navbar logoUrl={logoUrl} />
      <main className="pt-16">
        <Hero />
        <About />
        <OrcamentoCTA />
        <AdminSettings />
      </main>
      <footer className="bg-[#0F0F0F] text-[#D0D0D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded overflow-hidden bg-[#2ECC71]/15 ring-1 ring-[#2ECC71]/30 flex items-center justify-center text-white font-bold">
                {logoUrl ? (
                  <img src={logoUrl} alt="Logo BKAAP" className="w-full h-full object-contain" />
                ) : (
                  <span className="text-[#2ECC71]">BK</span>
                )}
              </div>
              <div className="text-white">
                <p className="text-sm leading-tight uppercase tracking-widest text-[#2ECC71]">BKAAP</p>
                <p className="text-xs -mt-1 text-[#D0D0D0]">Engenharia & Construção</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-[#A8A8A8]">Após enviar o logotipo, aplicamos a marca d'água e a identidade visual.</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Contato</p>
            <ul className="mt-3 text-sm space-y-1">
              <li>Email: contato@bkaap.com.br</li>
              <li>Telefone: (11) 0000-0000</li>
              <li>Atendimento: Seg a Sex, 9h às 18h</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Navegação</p>
            <ul className="mt-3 text-sm space-y-1">
              <li><a href="#inicio" className="hover:text-white">Início</a></li>
              <li><a href="#sobre" className="hover:text-white">Sobre</a></li>
              <li><a href="#orcamento" className="hover:text-white">Orçamentos</a></li>
              <li><a href="#admin" className="hover:text-white">Admin</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-[#8E8E8E]">© {new Date().getFullYear()} BKAAP. Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LogoProvider>
      <Shell />
    </LogoProvider>
  );
}
