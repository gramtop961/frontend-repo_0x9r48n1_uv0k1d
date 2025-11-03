import { useRef, useState } from 'react';
import { useLogo } from './LogoContext';
import { Upload, Image as ImageIcon, Trash2, CheckCircle2 } from 'lucide-react';

export default function AdminSettings() {
  const { logoUrl, setLogoFromFile, removeLogo } = useLogo();
  const inputRef = useRef(null);
  const [status, setStatus] = useState('');

  const onSelect = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setStatus('Carregando imagem...');
      await setLogoFromFile(file);
      setStatus('Logo atualizada com sucesso!');
      setTimeout(() => setStatus(''), 2000);
    } catch (err) {
      setStatus('Falha ao carregar a imagem. Tente novamente.');
      setTimeout(() => setStatus(''), 2500);
    }
  };

  return (
    <section id="admin" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[#2ECC71] font-semibold tracking-wider uppercase">Configurações da Aplicação</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#3A3A3A]">Identidade Visual</h2>
            <p className="mt-2 text-[#8E8E8E]">Envie o logotipo da BKAAP para aplicarmos no cabeçalho, rodapé e documentos.</p>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-[#8E8E8E]/30 bg-[#F8F8F8]">
            <p className="text-sm font-medium text-[#3A3A3A]">Logo atual</p>
            <div className="mt-3 aspect-video rounded-lg bg-white grid place-items-center ring-1 ring-[#8E8E8E]/30 overflow-hidden">
              {logoUrl ? (
                <img src={logoUrl} alt="Logo BKAAP" className="max-h-full max-w-full object-contain" />
              ) : (
                <div className="text-center text-[#8E8E8E]">
                  <ImageIcon className="mx-auto mb-2" />
                  <p>Nenhuma logo enviada</p>
                </div>
              )}
            </div>
          </div>

          <div className="p-6 rounded-xl border border-[#8E8E8E]/30">
            <p className="text-sm font-medium text-[#3A3A3A]">Enviar nova logo</p>
            <div className="mt-3 flex flex-col gap-3">
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={onSelect}
                className="block w-full text-sm text-[#3A3A3A] file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#2ECC71]/15 file:text-[#1F1F1F] hover:file:bg-[#2ECC71]/25"
              />
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => inputRef.current?.click()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#2ECC71] hover:brightness-110 text-[#1F1F1F] text-sm font-semibold"
                >
                  <Upload size={16} /> Escolher arquivo
                </button>
                <button
                  type="button"
                  onClick={removeLogo}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#F0F0F0] hover:bg-[#E6E6E6] text-[#3A3A3A] text-sm font-semibold"
                >
                  <Trash2 size={16} /> Remover
                </button>
              </div>
              {status && (
                <div className="text-sm text-[#3A3A3A] flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#2ECC71]" /> {status}
                </div>
              )}
              <p className="text-xs text-[#8E8E8E]">Formatos recomendados: PNG com fundo transparente ou SVG. Tamanho sugerido: altura 48–80px.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
