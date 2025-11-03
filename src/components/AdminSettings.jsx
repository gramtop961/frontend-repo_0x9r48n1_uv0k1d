import React, { useMemo, useState } from 'react';
import { Upload, Trash2 } from 'lucide-react';
import { useLogo } from './LogoContext';

export default function AdminSettings() {
  const { logoUrl, setLogoFromFile, removeLogo } = useLogo();
  const [status, setStatus] = useState('');

  const onUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setStatus('Carregando...');
      await setLogoFromFile(file);
      setStatus('Logo atualizada com sucesso!');
      setTimeout(() => setStatus(''), 2000);
    } catch (e) {
      setStatus('Falha ao carregar a logo.');
      setTimeout(() => setStatus(''), 2500);
    }
  };

  const logoPreview = useMemo(() => (
    logoUrl ? (
      <img src={logoUrl} alt="Logo atual" className="h-16 w-16 rounded object-contain bg-[#0F0F0F] p-2 border border-[#2a2a2a]" />
    ) : (
      <div className="h-16 w-16 rounded grid place-items-center bg-[#0F0F0F] border border-[#2a2a2a] text-[#8E8E8E]">Sem logo</div>
    )
  ), [logoUrl]);

  return (
    <section id="admin" className="bg-[#121212] text-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Configurações</h2>
        <p className="mt-2 text-[#CFCFCF]">Faça o upload da sua logomarca para personalizar a navegação.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 rounded-xl border border-[#2a2a2a] bg-[#1A1A1A] p-6">
            <label className="block text-sm text-[#CFCFCF] mb-2">Logo (PNG, JPG, SVG)</label>
            <div className="flex items-center gap-4">
              {logoPreview}
              <div className="flex flex-wrap gap-3">
                <label className="inline-flex items-center gap-2 cursor-pointer rounded-md bg-[#2ECC71] px-4 py-2 font-semibold text-black hover:brightness-95">
                  <Upload size={18} />
                  <span>Enviar logo</span>
                  <input type="file" accept="image/*" className="hidden" onChange={onUpload} />
                </label>
                <button
                  type="button"
                  onClick={removeLogo}
                  className="inline-flex items-center gap-2 rounded-md border border-[#2ECC71]/50 px-4 py-2 text-white hover:bg-white/5"
                >
                  <Trash2 size={18} /> Remover
                </button>
              </div>
            </div>
            {status && <p className="mt-3 text-sm text-[#8E8E8E]">{status}</p>}
          </div>

          <div className="rounded-xl border border-[#2a2a2a] bg-[#1A1A1A] p-6">
            <h3 className="font-semibold mb-2">Dicas</h3>
            <ul className="list-disc list-inside text-sm text-[#CFCFCF] space-y-1">
              <li>Prefira fundo transparente para melhor contraste.</li>
              <li>Arquivos leves agilizam o carregamento.</li>
              <li>Você pode alterar a logo a qualquer momento.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
