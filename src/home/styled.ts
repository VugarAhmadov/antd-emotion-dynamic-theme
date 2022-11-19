import styled from "@emotion/styled";

export const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.token?.colorBgBase};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 0;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.token?.colorPrimaryActive};
  }
`;
