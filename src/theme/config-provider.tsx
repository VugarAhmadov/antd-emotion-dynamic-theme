import { ReactNode } from "react";
import { ConfigProvider as AntConfigProvider } from "antd";
import { ThemeConfig } from "antd/es/config-provider/context";
import { ThemeProvider } from "./theme-provider";

interface IConfigProvider {
  children: ReactNode;
  theme: ThemeConfig;
}

export const ConfigProvider = ({ children, theme }: IConfigProvider) => {
  return (
    <AntConfigProvider theme={theme}>
      <ThemeProvider>{children}</ThemeProvider>
    </AntConfigProvider>
  );
};
