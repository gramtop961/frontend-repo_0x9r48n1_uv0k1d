import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';

function OrcamentoCTA() {
  return (
    <section id="orcamento" className="relative py-20 bg-gray-900">
      <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-gray-50 to-transparent opacity-50 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Solicite um orçamento personalizado</h2>
        <p className="mt-3 text-gray-300 max-w-3xl mx-auto">
          Informe a metragem, com ou sem materiais, e receba um estudo com condições de pagamento, cronograma de parcelas e resumo completo.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#admin" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-900/30 transition">
            Acessar Gerador de Orçamentos
          </a>
          <a href="#portfolio" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 font-semibold transition">
            Ver Portfólio de Obras
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-400">Área Administrativa com login será habilitada na próxima etapa.</p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <OrcamentoCTA />
      </main>
      <footer className="bg-gray-950 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded overflow-hidden bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold">BK</div>
              <div className="text-white">
                <p className="text-sm leading-tight uppercase tracking-widest text-emerald-300">BKAAP</p>
                <p className="text-xs -mt-1 text-gray-300">Engenharia & Construção</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-400">Coloque aqui a marca d'água e a identidade visual após o envio do logotipo.</p>
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
            <p className="text-sm font-semibold text-white">Links</p>
            <ul className="mt-3 text-sm space-y-1">
              <li><a href="#inicio" className="hover:text-white">Início</a></li>
              <li><a href="#sobre" className="hover:text-white">Sobre</a></li>
              <li><a href="#portfolio" className="hover:text-white">Portfólio</a></li>
              <li><a href="#orcamento" className="hover:text-white">Orçamentos</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">© {new Date().getFullYear()} BKAAP. Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}
