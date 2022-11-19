import { css, Global } from "@emotion/react";

export const CssBaseline = () => {
  return (
    <Global
      styles={css`
        html {
          box-sizing: border-box;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
          margin: 0;
        }

        body {
          margin: 0;
          height: 100vh;
          font-family: "Arial";
        }
      `}
    />
  );
};
