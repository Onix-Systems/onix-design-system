import React, {
  createContext, FC, useState, memo, useMemo,
} from 'react';
import { IThemeProvider } from './interfaces/IThemeNameProvider';
import { Themes } from '../../constants/defines';

export const ThemeNameContext = createContext(Themes.MAIN);

const ThemeProvider: FC<IThemeProvider> = ({ children, themeName }) => {
  const [value, setValue] = useState(Themes.MAIN); // default theme

  const theme = useMemo<Themes>(() => {
    if (themeName) {
      setValue(themeName);
      return themeName;
    }
    return value;
  }, [themeName, value]);

  return (
    <ThemeNameContext.Provider value={theme}>
      {children}
    </ThemeNameContext.Provider>
  );
};

export default memo(ThemeProvider);
