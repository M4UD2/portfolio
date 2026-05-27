import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MoonIcon, SunIcon } from '@phosphor-icons/react';
import { applyTheme, getInitialTheme, THEME_STORAGE_KEY, type Theme } from '../../theme';
import Tooltip from './tooltip-simple';

const THEME_ACTION_LABELS: Record<Theme, string> = {
  light: 'Ativar modo escuro',
  dark: 'Ativar modo claro',
};

interface ThemeSwitchProps {
  className?: string;
}

export default function ThemeSwitch({ className = '' }: ThemeSwitchProps) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Tooltip content={THEME_ACTION_LABELS[theme]} className={className} align="end">
      <motion.button
        type="button"
        role="switch"
        aria-checked={isDarkMode}
        aria-label={THEME_ACTION_LABELS[theme]}
        onClick={toggleTheme}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="inline-flex h-11 min-h-[44px] w-11 items-center justify-center rounded-sm border border-border bg-background text-foreground transition-colors duration-300 hover:bg-muted focus-ring"
      >
        <span aria-hidden="true">
          {isDarkMode ? (
            <MoonIcon size={20} weight="bold" />
          ) : (
            <SunIcon size={20} weight="bold" />
          )}
        </span>
      </motion.button>
    </Tooltip>
  );
}
