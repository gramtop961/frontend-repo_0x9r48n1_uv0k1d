import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const LogoContext = createContext({ logoUrl: null, setLogoFromFile: async () => {}, clearLogo: () => {} });

export function LogoProvider({ children }) {
  const [logoUrl, setLogoUrl] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('bkaap_logo');
    if (saved) setLogoUrl(saved);
  }, []);

  useEffect(() => {
    if (logoUrl) {
      localStorage.setItem('bkaap_logo', logoUrl);
    }
  }, [logoUrl]);

  const setLogoFromFile = useCallback(async (file) => {
    if (!file) return;
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = () => {
        const dataUrl = reader.result;
        setLogoUrl(dataUrl);
        resolve(dataUrl);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }, []);

  const clearLogo = useCallback(() => {
    setLogoUrl(null);
    localStorage.removeItem('bkaap_logo');
  }, []);

  return (
    <LogoContext.Provider value={{ logoUrl, setLogoFromFile, clearLogo }}>
      {children}
    </LogoContext.Provider>
  );
}

export function useLogo() {
  return useContext(LogoContext);
}
