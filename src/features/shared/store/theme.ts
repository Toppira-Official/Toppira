import { create } from 'zustand';

type theme = 'light' | 'dark';

interface Theme {
  theme: theme;
  toggle: () => void;
  setTheme: (mode: theme) => void;
}

export const useTheme = create<Theme>((set) => ({
  theme: 'light',

  setTheme: (mode) => {
    const root = document.documentElement;
    if (mode === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');

    localStorage.setItem('theme', mode);
    set({ theme: mode });
  },

  toggle: () => {
    set((state) => {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      const root = document.documentElement;

      if (newTheme === 'dark') root.classList.add('dark');
      else root.classList.remove('dark');

      localStorage.setItem('theme', newTheme);
      return { theme: newTheme };
    });
  },
}));
