import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[88vh] w-full bg-[#1F1F1F] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1F1F1F]/40 via-[#1F1F1F]/40 to-[#1F1F1F]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-32 flex flex-col items-start">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
          Soluções digitais com precisão e velocidade
        </h1>
        <p className="mt-5 text-[#CFCFCF] max-w-2xl text-base md:text-lg">
          BKAAP entrega tecnologia sob medida com qualidade de ponta, design limpo e performance de nível profissional.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#orcamento" className="inline-flex items-center justify-center rounded-md bg-[#2ECC71] px-5 py-3 font-semibold text-black hover:brightness-95 transition">
            Gerar Orçamento
          </a>
          <a href="#sobre" className="inline-flex items-center justify-center rounded-md border border-[#2ECC71]/40 px-5 py-3 font-semibold text-white hover:bg-white/5 transition">
            Conheça a BKAAP
          </a>
        </div>
      </div>
    </section>
  );
}
