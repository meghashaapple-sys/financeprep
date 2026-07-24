import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface SettingsContextValue {
  fontScale: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
}

const STORAGE_KEY = 'nism-study-font-scale';
const MIN_SCALE = 0.9;
const MAX_SCALE = 1.6;
const STEP = 0.1;
const DEFAULT_SCALE = 1.2; // large by default, per requirement

const SettingsContext = createContext<SettingsContextValue | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [fontScale, setFontScale] = useState<number>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? Number(stored) : DEFAULT_SCALE;
  });

  useEffect(() => {
    document.documentElement.style.setProperty('--font-scale', String(fontScale));
    localStorage.setItem(STORAGE_KEY, String(fontScale));
  }, [fontScale]);

  const increase = () => setFontScale((s) => Math.min(MAX_SCALE, +(s + STEP).toFixed(2)));
  const decrease = () => setFontScale((s) => Math.max(MIN_SCALE, +(s - STEP).toFixed(2)));
  const reset = () => setFontScale(DEFAULT_SCALE);

  return (
    <SettingsContext.Provider value={{ fontScale, increase, decrease, reset }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used within SettingsProvider');
  return ctx;
}
