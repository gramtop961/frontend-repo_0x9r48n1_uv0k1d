import React, { useState } from 'react';

const AUTH_EMAIL = 'diretoria@bkaap.com.br';
const AUTH_PASSWORD = '798076502Bb*';
const AUTH_KEY = 'app:auth';

export function isAuthenticated() {
  try {
    return localStorage.getItem(AUTH_KEY) === 'true';
  } catch {
    return false;
  }
}

export function logout() {
  try { localStorage.removeItem(AUTH_KEY); } catch {}
}

export default function Login({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      const ok = email.trim().toLowerCase() === AUTH_EMAIL && password === AUTH_PASSWORD;
      if (ok) {
        try { localStorage.setItem(AUTH_KEY, 'true'); } catch {}
        onSuccess?.();
      } else {
        setError('Credenciais inválidas. Verifique seu e-mail e senha.');
      }
      setLoading(false);
    }, 400);
  };

  return (
    <div className="min-h-[70vh] grid place-items-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-2xl bg-[#111111]/80 ring-1 ring-white/10 p-6 backdrop-blur">
        <h1 className="text-2xl font-semibold text-white">Acesso administrativo</h1>
        <p className="mt-1 text-sm text-neutral-300">Entre com suas credenciais para gerenciar o site.</p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm text-neutral-300 mb-1">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md bg-[#0B0B0B] border border-white/10 px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#2ECC71]"
              placeholder="seuemail@empresa.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-neutral-300 mb-1">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md bg-[#0B0B0B] border border-white/10 px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#2ECC71]"
              placeholder="Sua senha"
              required
            />
          </div>
        </div>

        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full inline-flex items-center justify-center rounded-md bg-[#2ECC71] text-[#0F0F0F] px-4 py-2.5 font-semibold shadow hover:brightness-110 transition disabled:opacity-60"
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
}
