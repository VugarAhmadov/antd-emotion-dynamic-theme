import { ThemeConfig } from "antd/es/config-provider/context";

declare module "@emotion/react" {
  export interface Theme extends ThemeConfig {}
}
