import { create } from 'zustand';

type theme = 'light' | 'dark';

interface Theme {
  theme: theme;
  toggle: () => void;
}

export const useTheme = create<Theme>((set, get) => {
  const applyTheme = (mode: theme) => {
    const root = document.documentElement;
    if (mode === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  };

  return {
    theme: 'light',
    toggle: () => {
      const newTheme = get().theme === 'dark' ? 'light' : 'dark';
      set({ theme: newTheme });
      applyTheme(newTheme);
    },
  };
});
