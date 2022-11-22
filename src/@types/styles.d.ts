import 'styled-components';
import { defaultTheme } from 'styled-components';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType { }
}