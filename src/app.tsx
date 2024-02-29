import { useState } from "react";
import { Home } from "./home";
import { ConfigProvider, dark, light } from "./theme";

export const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ConfigProvider theme={isDark ? dark : light}>
      <Home onThemeChangeClick={() => setIsDark(!isDark)} />
    </ConfigProvider>
  );
};
