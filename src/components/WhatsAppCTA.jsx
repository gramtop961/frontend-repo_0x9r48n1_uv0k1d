import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

const WhatsAppCTA = () => {
  const phone = '5522997459149';
  const message = encodeURIComponent('Olá, Bruno! Gostaria de solicitar um orçamento para minha obra.');
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <section id="orcamento" className="relative w-full bg-[#0B0B0B] py-14 sm:py-16 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-gradient-to-br from-[#121212] to-[#0E0E0E] ring-1 ring-white/10 p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">Solicite seu orçamento agora</h3>
            <p className="mt-2 text-neutral-300">Atendimento direto com Bruno Baraúna no WhatsApp: (22) 99745-9149</p>
          </div>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#2ECC71] text-[#0F0F0F] px-5 py-3 font-semibold shadow hover:brightness-110 transition"
          >
            <PhoneCall className="h-5 w-5" /> Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
