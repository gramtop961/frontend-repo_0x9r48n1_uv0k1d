import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';

const LogoContext = createContext({ logoUrl: null, setLogoFromFile: () => Promise.resolve(), removeLogo: () => {} });

export function LogoProvider({ children }) {
  const [logoUrl, setLogoUrl] = useState(null);
  const hasHydrated = useRef(false);

  // Hydrate from localStorage once on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('bkaap_logo');
      if (saved) setLogoUrl(saved);
    } catch {}
    hasHydrated.current = true;
  }, []);

  // Persist when value changes (skip first render before hydration)
  useEffect(() => {
    if (!hasHydrated.current) return;
    try {
      if (logoUrl) localStorage.setItem('bkaap_logo', logoUrl);
      else localStorage.removeItem('bkaap_logo');
    } catch {}
  }, [logoUrl]);

  const setLogoFromFile = (file) =>
    new Promise((resolve, reject) => {
      if (!file) return resolve(null);
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result;
        setLogoUrl(dataUrl);
        resolve(dataUrl);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const removeLogo = () => setLogoUrl(null);

  const value = useMemo(() => ({ logoUrl, setLogoFromFile, removeLogo }), [logoUrl]);

  return <LogoContext.Provider value={value}>{children}</LogoContext.Provider>;
}

export function useLogo() {
  return useContext(LogoContext);
}
