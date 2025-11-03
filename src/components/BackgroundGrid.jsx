import React from 'react';

// Fundo com "quadros" e brilho interno sutil
// Usa múltiplos backgrounds CSS para formar a malha e halos de luz
export default function BackgroundGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundColor: '#0B0B0B',
        backgroundImage: `
          radial-gradient( rgba(255,255,255,0.08) 1px, transparent 1px ),
          radial-gradient( rgba(255,255,255,0.06) 1px, transparent 1px ),
          linear-gradient(transparent, rgba(0,0,0,0.4)),
          radial-gradient( 40vw 40vh at 20% 20%, rgba(46,204,113,0.06), transparent 60% ),
          radial-gradient( 45vw 45vh at 80% 60%, rgba(142,142,142,0.06), transparent 60% )
        `,
        backgroundSize: '40px 40px, 40px 40px, 100% 100%, 100% 100%, 100% 100%',
        backgroundPosition: '0 0, 20px 20px, 0 0, 0 0, 0 0',
        maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
      }}
    />
  );
}
