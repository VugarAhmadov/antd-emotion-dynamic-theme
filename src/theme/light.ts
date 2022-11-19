import { ThemeConfig } from "antd/es/config-provider/context";
import { core } from "./core";

export const light: ThemeConfig = {
  ...core,
  token: {
    colorPrimary: "#9b59b6",
    colorBgBase: "#ecf0f1",
  },
};
