import { ThemeConfig } from "antd/es/config-provider/context";
import { core } from "./core";

export const dark: ThemeConfig = {
  ...core,
  token: {
    colorPrimary: "#2c3e50",
    colorBgBase: "#7f8c8d",
  },
};
