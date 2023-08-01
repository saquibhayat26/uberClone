import {View, Text} from 'react-native';
import React, {ReactNode} from 'react';
import {ThemeProvider as EmotionThemeProvider} from '@emotion/react';
import {theme} from './theme';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({children}: ThemeProviderProps) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

export default ThemeProvider;
