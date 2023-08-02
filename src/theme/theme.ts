import {colors} from './colors';
import type {Colors} from './colors';
import {shadows} from './shadow';
import type {Shadows} from './shadow';

export const theme = {
  colors,
  shadows,
};

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    shadows: Shadows;
  }
}
