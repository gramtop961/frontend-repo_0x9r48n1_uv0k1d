import React, { useEffect, useMemo, useState } from 'react';
import { Plus, Trash2, Upload, LogOut } from 'lucide-react';
import { useLogo } from './LogoContext';
import { logout } from './Login';

const STORAGE_KEY = 'app:portfolioItems';

export default function Admin() {
  const { logo, setLogoFromFile, removeLogo, hydrated } = useLogo();
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setItems(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); } catch {}
  }, [items]);

  const onAddFiles = async (files) => {
    const selected = Array.from(files || []);
    if (!selected.length) return;
    const reads = await Promise.all(
      selected.map((file) => new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve({ id: crypto.randomUUID(), src: reader.result, title: file.name.replace(/\.[^/.]+$/, '') });
        reader.readAsDataURL(file);
      }))
    );
    setItems((prev) => [...reads, ...prev]);
  };

  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  const logoPreview = useMemo(() => (
    hydrated && logo ? (
      <img src={logo} alt="Logo atual" className="h-16 w-16 rounded object-contain bg-[#0F0F0F] p-2 border border-white/10" />
    ) : (
      <div className="h-16 w-16 rounded grid place-items-center bg-[#0F0F0F] border border-white/10 text-[#8E8E8E]">Sem logo</div>
    )
  ), [logo, hydrated]);

  const handleLogout = () => {
    logout();
    window.location.hash = '';
  };

  return (
    <div className="min-h-[80vh] px-4 sm:px-6 lg:px-8 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-white">Painel Administrativo</h1>
            <p className="mt-1 text-neutral-300">Gerencie a logo e o conteúdo do portfólio exibido no site.</p>
          </div>
          <button onClick={handleLogout} className="inline-flex items-center gap-2 rounded-md border border-white/10 text-neutral-200 hover:text-white hover:bg-white/5 px-3 py-2 text-sm">
            <LogOut className="h-4 w-4" /> Sair
          </button>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 rounded-xl ring-1 ring-white/10 bg-[#111111]/70 p-6 backdrop-blur">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Portfólio</h2>
              <label className="inline-flex items-center gap-2 rounded-md bg-[#2ECC71] text-[#0F0F0F] px-3 py-2 font-medium shadow hover:brightness-110 transition cursor-pointer text-sm">
                <Plus className="h-4 w-4" /> Adicionar obras
                <input type="file" accept="image/*" multiple className="hidden" onChange={(e) => onAddFiles(e.target.files)} />
              </label>
            </div>

            {items.length === 0 ? (
              <div className="rounded-lg border border-dashed border-white/10 p-10 text-center text-neutral-400">
                Nenhuma obra adicionada ainda. Clique em "Adicionar obras" para começar.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((item) => (
                  <div key={item.id} className="group relative overflow-hidden rounded-lg bg-[#121212] ring-1 ring-white/10">
                    <div className="aspect-[4/3] bg-[#0B0B0B]">
                      <img src={item.src} alt={item.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="p-3 flex items-center justify-between gap-2">
                      <p className="text-sm text-white truncate" title={item.title}>{item.title}</p>
                      <button onClick={() => removeItem(item.id)} className="inline-flex items-center gap-1 rounded-md border border-white/10 text-neutral-300 hover:text-white hover:bg-white/5 px-2 py-1 text-xs transition">
                        <Trash2 className="h-4 w-4" /> Remover
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-xl ring-1 ring-white/10 bg-[#111111]/70 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold text-white mb-3">Logo do site</h2>
            <div className="flex items-center gap-4">
              {logoPreview}
              <div className="flex flex-wrap gap-3">
                <label className="inline-flex items-center gap-2 cursor-pointer rounded-md bg-[#2ECC71] px-4 py-2 font-semibold text-black hover:brightness-95">
                  <Upload className="h-4 w-4" />
                  <span>Enviar logo</span>
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && setLogoFromFile(e.target.files[0])} />
                </label>
                <button type="button" onClick={removeLogo} className="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-white hover:bg-white/5">
                  <Trash2 className="h-4 w-4" /> Remover
                </button>
              </div>
            </div>
            {status && <p className="mt-3 text-sm text-[#8E8E8E]">{status}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
