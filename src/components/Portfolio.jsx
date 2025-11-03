import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2 } from 'lucide-react';

const STORAGE_KEY = 'app:portfolioItems';

const Portfolio = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setItems(JSON.parse(saved));
    } catch (e) {
      // ignore
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {}
  }, [items]);

  const onAddFiles = async (files) => {
    const selected = Array.from(files);
    const reads = await Promise.all(
      selected.map(
        (file) =>
          new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve({ id: crypto.randomUUID(), src: reader.result, title: file.name.replace(/\.[^/.]+$/, '') });
            reader.readAsDataURL(file);
          })
      )
    );
    setItems((prev) => [...reads, ...prev]);
  };

  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  return (
    <section id="portfolio" className="relative w-full bg-[#0E0E0E] py-14 sm:py-16 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Portfólio de Obras</h2>
            <p className="mt-2 text-neutral-300 max-w-2xl">
              Adicione fotos das suas obras para apresentar aos seus clientes. As imagens ficam salvas no seu navegador.
            </p>
          </div>
          <label className="inline-flex items-center gap-2 rounded-md bg-[#2ECC71] text-[#0F0F0F] px-4 py-2.5 font-medium shadow hover:brightness-110 transition cursor-pointer">
            <Plus className="h-4 w-4" /> Adicionar obras
            <input
              type="file"
              accept="image/*"
              className="hidden"
              multiple
              onChange={(e) => onAddFiles(e.target.files)}
            />
          </label>
        </div>

        {loading ? (
          <div className="mt-10 text-neutral-400">Carregando...</div>
        ) : items.length === 0 ? (
          <div className="mt-10 rounded-lg border border-dashed border-white/10 p-10 text-center text-neutral-400">
            Nenhuma obra adicionada ainda. Clique em "Adicionar obras" para começar.
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {items.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg bg-[#121212] ring-1 ring-white/10">
                <div className="aspect-[4/3] bg-[#0B0B0B]">
                  <img src={item.src} alt={item.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-3 flex items-center justify-between gap-2">
                  <p className="text-sm text-white truncate" title={item.title}>{item.title}</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="inline-flex items-center gap-1 rounded-md border border-white/10 text-neutral-300 hover:text-white hover:bg-white/5 px-2 py-1 text-xs transition"
                    aria-label="Remover"
                  >
                    <Trash2 className="h-4 w-4" /> Remover
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
