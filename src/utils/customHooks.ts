import { useContext } from 'react';
import { ThemeNameContext } from '../provider/Theme/ThemeProvider';
import { Themes } from '../constants/defines';

export const useTheme = (themeName?: Themes) => {
  const theme = useContext(ThemeNameContext);
  return themeName || theme;
};

export default { useTheme };
