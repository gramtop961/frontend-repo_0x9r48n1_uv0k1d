import { useRef, useState } from 'react';
import { useLogo } from './LogoContext';
import { Upload, Image as ImageIcon, Trash2, Save } from 'lucide-react';

export default function AdminSettings() {
  const { logoUrl, setLogoFromFile, clearLogo } = useLogo();
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
            <p className="text-emerald-600 font-semibold tracking-wider uppercase">Configurações da Aplicação</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">Identidade Visual</h2>
            <p className="mt-2 text-gray-600">Envie o logotipo da BKAAP para aplicarmos no cabeçalho, rodapé e documentos.</p>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-gray-200 bg-gray-50">
            <p className="text-sm font-medium text-gray-700">Logo atual</p>
            <div className="mt-3 aspect-video rounded-lg bg-white grid place-items-center ring-1 ring-gray-200 overflow-hidden">
              {logoUrl ? (
                <img src={logoUrl} alt="Logo BKAAP" className="max-h-full max-w-full object-contain" />
              ) : (
                <div className="text-center text-gray-500">
                  <ImageIcon className="mx-auto mb-2" />
                  <p>Nenhuma logo enviada</p>
                </div>
              )}
            </div>
          </div>

          <div className="p-6 rounded-xl border border-gray-200">
            <p className="text-sm font-medium text-gray-700">Enviar nova logo</p>
            <div className="mt-3 flex flex-col gap-3">
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={onSelect}
                className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
              />
              <div className="flex items-center gap-3">
                <button
                  onClick={() => inputRef.current?.click()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold"
                >
                  <Upload size={16} /> Escolher arquivo
                </button>
                <button
                  onClick={clearLogo}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold"
                >
                  <Trash2 size={16} /> Remover
                </button>
              </div>
              {status && (
                <div className="text-sm text-gray-600 flex items-center gap-2">
                  <Save size={16} className="text-emerald-600" /> {status}
                </div>
              )}
              <p className="text-xs text-gray-500">Formatos recomendados: PNG com fundo transparente ou SVG. Tamanho sugerido: altura 48–80px.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
