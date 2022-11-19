import { Button } from "antd";
import { StyledDiv } from "./styled";

interface IHome {
  onThemeChangeClick(): void;
}

export const Home = ({ onThemeChangeClick }: IHome) => {
  return (
    <StyledDiv>
      <h1>test</h1>
      <Button type="primary" onClick={onThemeChangeClick}>
        Change theme
      </Button>
    </StyledDiv>
  );
};
