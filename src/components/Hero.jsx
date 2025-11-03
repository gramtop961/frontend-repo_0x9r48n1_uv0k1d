import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] w-full bg-[#1F1F1F] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0B0B0B]/70 via-[#0B0B0B]/60 to-[#0B0B0B]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white max-w-3xl"
        >
          Construímos com qualidade, segurança e prazo.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl"
        >
          Obras residenciais, comerciais e reformas completas. Do projeto à entrega, sua construção em boas mãos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href={`https://wa.me/5522997459149?text=${encodeURIComponent('Olá, Bruno! Gostaria de solicitar um orçamento para minha obra.')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#2ECC71] text-[#0F0F0F] px-5 py-2.5 font-medium shadow hover:brightness-110 transition"
          >
            Solicitar orçamento no WhatsApp
          </a>
          <a href="#portfolio" className="inline-flex items-center justify-center rounded-md border border-white/10 text-white px-5 py-2.5 font-medium hover:bg-white/5 transition">
            Ver portfólio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
