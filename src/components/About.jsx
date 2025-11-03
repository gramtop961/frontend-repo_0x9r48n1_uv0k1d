import { CheckCircle2, Building2, Shield, Sparkles } from 'lucide-react';

export default function About() {
  const bullets = [
    { icon: Building2, text: 'Experiência em obras residenciais, comerciais e industriais.' },
    { icon: Shield, text: 'Compromisso com segurança, prazos e qualidade de execução.' },
    { icon: CheckCircle2, text: 'Gestão completa do projeto, do planejamento à entrega.' },
    { icon: Sparkles, text: 'Acabamentos de alto padrão e atenção aos detalhes.' },
  ];

  return (
    <section id="sobre" className="relative py-20 bg-white">
      <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-[#1F1F1F] to-transparent opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#2ECC71] font-semibold tracking-wider uppercase">Sobre a BKAAP</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#3A3A3A]">Engenharia que inspira confiança</h2>
          <p className="mt-4 text-[#3A3A3A]/80 leading-relaxed">
            Transformamos projetos em realidade com excelência técnica, transparência e respeito ao investimento do cliente.
          </p>

          <ul className="mt-6 grid sm:grid-cols-2 gap-4">
            {bullets.map(({ icon: Icon, text }, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1 text-[#2ECC71]">
                  <Icon size={22} />
                </div>
                <p className="text-[#3A3A3A]">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl ring-1 ring-[#8E8E8E]/40">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1680&auto=format&fit=crop"
              alt="Equipe de construção trabalhando em obra"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-[#2ECC71] text-[#1F1F1F] px-4 py-3 rounded-lg shadow-lg">
            <p className="text-sm font-medium">+10 anos construindo com qualidade</p>
          </div>
        </div>
      </div>
    </section>
  );
}
