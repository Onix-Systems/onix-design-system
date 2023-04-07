import { ReactNode } from 'react';
import { Themes } from '../../../constants/defines';

export interface IThemeProvider {
  themeName?: Themes
  children?: ReactNode
}
