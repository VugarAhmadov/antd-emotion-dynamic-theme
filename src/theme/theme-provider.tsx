import { ReactNode } from "react";
import { theme as antTheme } from "antd";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { CssBaseline } from "./css-baseline";

interface IThemeProvider {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const { token } = antTheme.useToken();

  return (
    <EmotionThemeProvider theme={{ token }}>
      <CssBaseline />
      {children}
    </EmotionThemeProvider>
  );
};
