import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    base: string
    colors: {
      primary: string
      secondary: string
    }
  }
}
