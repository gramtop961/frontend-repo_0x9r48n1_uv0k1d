import { useState } from 'react';
import { MapPin, Ruler, Flag, Image as ImageIcon, Video as VideoIcon, X } from 'lucide-react';

const projetosMock = [
  {
    id: 'p1',
    nome: 'Residencial Aurora',
    local: 'São Paulo - SP',
    metragem: 320,
    status: 'Concluída',
    descricao:
      'Construção de residência unifamiliar de alto padrão com integração de ambientes e eficiência energética.',
    midia: [
      { tipo: 'foto', url: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c141?q=80&w=1600&auto=format&fit=crop' },
      { tipo: 'foto', url: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop' },
      { tipo: 'video', url: 'https://www.youtube.com/embed/VYOjWnS4cMY' },
    ],
  },
  {
    id: 'p2',
    nome: 'Centro Comercial Verdes Mares',
    local: 'Fortaleza - CE',
    metragem: 1800,
    status: 'Em execução',
    descricao:
      'Complexo comercial com lajes protendidas, fachadas em pele de vidro e áreas de convivência.',
    midia: [
      { tipo: 'foto', url: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop' },
      { tipo: 'foto', url: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop' },
    ],
  },
  {
    id: 'p3',
    nome: 'Galpão Logístico BKAAP',
    local: 'Betim - MG',
    metragem: 4200,
    status: 'Projeto Executivo',
    descricao:
      'Projeto executivo com foco em modularidade, pavimentação industrial e sistemas de combate a incêndio.',
    midia: [
      { tipo: 'foto', url: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1600&auto=format&fit=crop' },
      { tipo: 'foto', url: 'https://images.unsplash.com/photo-1523419409543-0c737a1f5b1a?q=80&w=1600&auto=format&fit=crop' },
    ],
  },
];

function ProjetoCard({ projeto, onAbrir }) {
  return (
    <button
      onClick={() => onAbrir(projeto)}
      className="text-left group rounded-xl overflow-hidden bg-white ring-1 ring-gray-200 hover:ring-emerald-500/60 transition shadow-sm hover:shadow-lg"
    >
      <div className="aspect-video overflow-hidden">
        <img src={projeto.midia[0].url} alt={projeto.nome} className="w-full h-full object-cover group-hover:scale-105 transition" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{projeto.nome}</h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{projeto.descricao}</p>
        <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-700">
          <span className="inline-flex items-center gap-1"><MapPin size={16} className="text-emerald-600" /> {projeto.local}</span>
          <span className="inline-flex items-center gap-1"><Ruler size={16} className="text-emerald-600" /> {projeto.metragem} m²</span>
          <span className="inline-flex items-center gap-1"><Flag size={16} className="text-emerald-600" /> {projeto.status}</span>
        </div>
      </div>
    </button>
  );
}

function ModalProjeto({ projeto, onFechar }) {
  if (!projeto) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/70" onClick={onFechar} />
      <div className="absolute inset-0 overflow-y-auto p-4 sm:p-8">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{projeto.nome}</h3>
              <p className="text-sm text-gray-600">{projeto.local} • {projeto.metragem} m² • {projeto.status}</p>
            </div>
            <button
              className="p-2 rounded hover:bg-gray-100"
              aria-label="Fechar"
              onClick={onFechar}
            >
              <X />
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 p-4 sm:p-6">
            <div className="lg:col-span-2 space-y-4">
              {projeto.midia.map((m, i) => (
                <div key={i} className="w-full rounded-lg overflow-hidden ring-1 ring-gray-200">
                  {m.tipo === 'foto' ? (
                    <img src={m.url} alt={`Mídia ${i + 1}`} className="w-full h-auto" />
                  ) : (
                    <div className="aspect-video">
                      <iframe
                        className="w-full h-full"
                        src={m.url}
                        title={`Vídeo ${i + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                <p className="text-sm text-gray-600">Descrição</p>
                <p className="mt-1 text-gray-800">{projeto.descricao}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-emerald-800">
                  <ImageIcon size={18} /> Fotos: {projeto.midia.filter(m => m.tipo === 'foto').length}
                </div>
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-emerald-800">
                  <VideoIcon size={18} /> Vídeos: {projeto.midia.filter(m => m.tipo === 'video').length}
                </div>
              </div>
              <a
                href="#orcamento"
                className="block text-center px-4 py-3 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition"
              >
                Solicitar orçamento desta obra
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [selecionado, setSelecionado] = useState(null);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-emerald-600 font-semibold tracking-wider uppercase">Portfólio</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">Projetos em destaque</h2>
            <p className="mt-2 text-gray-600">Conheça algumas obras que refletem nossa qualidade e compromisso.</p>
          </div>
          <a href="#admin" className="hidden sm:inline-flex px-4 py-2 rounded-md border border-emerald-200 text-emerald-700 hover:bg-emerald-50 font-medium">
            Gerenciar Portfólio
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetosMock.map((p) => (
            <ProjetoCard key={p.id} projeto={p} onAbrir={setSelecionado} />
          ))}
        </div>
      </div>

      {selecionado && (
        <ModalProjeto projeto={selecionado} onFechar={() => setSelecionado(null)} />)
      }
    </section>
  );
}
