export const THEME_STORAGE_KEY = 'portfolio-theme';

export type Theme = 'light' | 'dark';

export const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const applyTheme = (theme: Theme) => {
  document.documentElement.classList.toggle('dark', theme === 'dark');
};
