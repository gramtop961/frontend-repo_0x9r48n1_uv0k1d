import React, { useMemo, useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function OrcamentoCTA() {
  const [escopo, setEscopo] = useState('landing');
  const [prazo, setPrazo] = useState('normal');
  const [complexidade, setComplexidade] = useState('baixa');

  const precoEstimado = useMemo(() => {
    let base = 2500; // base em BRL
    if (escopo === 'saas') base += 6000;
    if (escopo === 'ecommerce') base += 4000;
    if (complexidade === 'media') base *= 1.25;
    if (complexidade === 'alta') base *= 1.6;
    if (prazo === 'expresso') base *= 1.3;
    return Math.round(base);
  }, [escopo, prazo, complexidade]);

  return (
    <section id="orcamento" className="bg-[#0F0F0F] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Gerador de Orçamento</h2>
            <p className="mt-3 text-[#CFCFCF]">
              Estime o investimento do seu projeto e receba um PDF com os detalhes. Valores são indicativos e podem variar conforme requisitos.
            </p>

            <form className="mt-6 grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-[#CFCFCF] mb-2">Escopo</label>
                <select
                  value={escopo}
                  onChange={(e) => setEscopo(e.target.value)}
                  className="w-full rounded-md bg-[#1A1A1A] border border-[#2a2a2a] p-3"
                >
                  <option value="landing">Landing Page</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="saas">Aplicação SaaS</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-[#CFCFCF] mb-2">Complexidade</label>
                <select
                  value={complexidade}
                  onChange={(e) => setComplexidade(e.target.value)}
                  className="w-full rounded-md bg-[#1A1A1A] border border-[#2a2a2a] p-3"
                >
                  <option value="baixa">Baixa</option>
                  <option value="media">Média</option>
                  <option value="alta">Alta</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-[#CFCFCF] mb-2">Prazo</label>
                <select
                  value={prazo}
                  onChange={(e) => setPrazo(e.target.value)}
                  className="w-full rounded-md bg-[#1A1A1A] border border-[#2a2a2a] p-3"
                >
                  <option value="normal">Normal</option>
                  <option value="expresso">Expresso</option>
                </select>
              </div>
            </form>
          </div>

          <div className="rounded-xl border border-[#2a2a2a] bg-[#121212] p-6">
            <div className="flex items-baseline justify-between">
              <p className="text-[#CFCFCF]">Estimativa inicial</p>
              <span className="text-xs text-[#8E8E8E]">Sem impostos</span>
            </div>
            <p className="mt-2 text-4xl font-extrabold text-[#2ECC71]">R$ {precoEstimado.toLocaleString('pt-BR')}</p>
            <p className="mt-2 text-sm text-[#CFCFCF]">
              Inclui planejamento, design, desenvolvimento e QA essenciais. Integrações e infra podem alterar o valor.
            </p>
            <div className="mt-6">
              <a href="#admin" className="inline-flex items-center gap-2 rounded-md bg-[#2ECC71] px-5 py-3 font-semibold text-black hover:brightness-95">
                Solicitar Proposta Completa <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
