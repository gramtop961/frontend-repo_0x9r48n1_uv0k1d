import React, { createContext, useContext, useMemo, useState, useCallback } from 'react';

const LogoContext = createContext({
  logoUrl: null,
  setLogoFromFile: async () => {},
  removeLogo: () => {},
});

export function LogoProvider({ children }) {
  // Lazy initializer prevents flash by reading once before first paint
  const [logoUrl, setLogoUrl] = useState(() => {
    try {
      return localStorage.getItem('bkaap_logo');
    } catch {
      return null;
    }
  });

  const setLogoFromFile = useCallback(async (file) => {
    if (!file) return;
    const reader = new FileReader();
    const dataUrl = await new Promise((resolve, reject) => {
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
    try {
      localStorage.setItem('bkaap_logo', dataUrl);
    } catch (e) {
      console.warn('Falha ao salvar a logo no navegador:', e);
    }
    setLogoUrl(dataUrl);
  }, []);

  const removeLogo = useCallback(() => {
    try {
      localStorage.removeItem('bkaap_logo');
    } catch {}
    setLogoUrl(null);
  }, []);

  const value = useMemo(() => ({ logoUrl, setLogoFromFile, removeLogo }), [logoUrl, setLogoFromFile, removeLogo]);

  return <LogoContext.Provider value={value}>{children}</LogoContext.Provider>;
}

export function useLogo() {
  return useContext(LogoContext);
}
