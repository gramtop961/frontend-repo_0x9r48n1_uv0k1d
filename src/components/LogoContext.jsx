import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';

const LogoContext = createContext({
  logo: null,
  setLogoFromFile: async () => {},
  removeLogo: () => {},
  hydrated: false,
});

export const LogoProvider = ({ children }) => {
  const [logo, setLogo] = useState(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('app:brandLogo');
      if (stored) setLogo(stored);
    } catch (e) {
      // ignore
    } finally {
      setHydrated(true);
    }
  }, []);

  const setLogoFromFile = useCallback(async (file) => {
    if (!file) return;
    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.onload = () => {
        const dataUrl = reader.result;
        try {
          localStorage.setItem('app:brandLogo', dataUrl);
        } catch (e) {
          // ignore quota errors
        }
        setLogo(dataUrl);
        resolve(dataUrl);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const removeLogo = useCallback(() => {
    try { localStorage.removeItem('app:brandLogo'); } catch (e) {}
    setLogo(null);
  }, []);

  const value = useMemo(() => ({ logo, setLogoFromFile, removeLogo, hydrated }), [logo, setLogoFromFile, removeLogo, hydrated]);

  return (
    <LogoContext.Provider value={value}>
      {children}
    </LogoContext.Provider>
  );
};

export const useLogo = () => useContext(LogoContext);
