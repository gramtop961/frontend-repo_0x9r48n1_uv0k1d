import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[88vh] min-h-[520px] w-full bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        {/* Spline 3D background (placeholder scene) */}
        <Spline
          scene="https://prod.spline.design/2bq2w0z4c4oT4oQm/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient overlay (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-900/30 via-gray-900/40 to-gray-900" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Construindo com qualidade, confiança e experiência.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg text-gray-200"
          >
            Soluções completas de engenharia e construção para obras residenciais, comerciais e industriais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#orcamento"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-900/30 transition"
            >
              Solicitar Orçamento
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 font-semibold transition"
            >
              Ver Portfólio
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
