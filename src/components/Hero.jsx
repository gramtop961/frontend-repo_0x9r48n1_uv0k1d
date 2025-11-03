import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[88vh] min-h-[520px] w-full bg-[#1f1f1f] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-[#1f1f1f]" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Engenharia moderna, sólida e confiável.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg text-[#D0D0D0]"
          >
            Soluções completas para obras residenciais, comerciais e industriais com foco em qualidade e performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#orcamento"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#2ECC71] hover:brightness-110 text-white font-semibold shadow-lg shadow-emerald-900/30 transition"
            >
              Solicitar Orçamento
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 font-semibold transition"
            >
              Sobre a BKAAP
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
