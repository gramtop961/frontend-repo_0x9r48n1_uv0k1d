import React from 'react';
import { Rocket, Shield, Star } from 'lucide-react';

export default function About() {
  const items = [
    {
      icon: <Rocket className="text-[#2ECC71]" size={22} />,
      title: 'Entrega ágil',
      desc: 'Processo enxuto e comunicação clara para colocar seu produto no ar mais rápido.',
    },
    {
      icon: <Shield className="text-[#2ECC71]" size={22} />,
      title: 'Qualidade e segurança',
      desc: 'Boas práticas, testes e observabilidade pensados desde o início.',
    },
    {
      icon: <Star className="text-[#2ECC71]" size={22} />,
      title: 'Design profissional',
      desc: 'Interface moderna, tipografia precisa e identidade consistente.',
    },
  ];

  return (
    <section id="sobre" className="bg-[#121212] text-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Sobre a BKAAP</h2>
            <p className="mt-4 text-[#CFCFCF]">
              Somos uma equipe especializada em produtos digitais que combinam engenharia robusta e
              estética refinada. Nosso foco é gerar valor real rápido, com base em métricas e feedbacks.
            </p>
            <p className="mt-3 text-[#CFCFCF]">
              Do front-end ao back-end, da infra aos dados, entregamos com excelência e atenção aos detalhes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {items.map((it) => (
              <div key={it.title} className="rounded-xl border border-[#2a2a2a] bg-[#1A1A1A] p-5">
                <div className="flex items-center gap-3">
                  {it.icon}
                  <h3 className="font-semibold text-white">{it.title}</h3>
                </div>
                <p className="mt-3 text-sm text-[#CFCFCF]">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
