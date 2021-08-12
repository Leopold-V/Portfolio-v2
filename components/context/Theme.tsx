import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type contextType = {
  value: string | null;
  setValue: (value: string | null) => void;
};

const ThemeContext = createContext<contextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<any>('light');

  const getTheme = () => {
    let theme = localStorage.getItem('theme');
    if (theme === null) {
      localStorage.setItem('theme', 'light');
      theme = localStorage.getItem('theme');
    } else {
      setValue('dark');
    }
    return theme;
  };

  useEffect(() => {
    typeof window !== 'undefined' && setValue(getTheme());
  }, []);

  return (
    <ThemeContext.Provider value={{ value: value, setValue: setValue }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
