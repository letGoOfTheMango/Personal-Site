import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 20%;
  svg:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 420px) {
    width: 25%;
  }
`;
const StyledFlourishDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  svg {
    fill: ${(props) => props.theme.heading};
    width: 90px;
    height: 90px;
  }
  svg:hover {
    fill: ${(props) => props.theme.accents};
  }
  @media only screen and (max-width: 1366px) {
    svg {
      width: 60px;
      height: 60px;
    }
  }
`;
const StyledText = styled.p`
  color: ${(props) => props.theme.heading};
  margin: 45px 0 0 0;
  text-align: center;
  text-transform: uppercase;
  @media only screen and (max-width: 1366px) {
    font-size: 16px;
  }
`;

const SkillElement = (props) => {
  return (
    <StyledWrapper className={props.className} onClick={props.click}>
      <StyledFlourishDiv>{props.children}</StyledFlourishDiv>
      <StyledText>{props.name}</StyledText>
    </StyledWrapper>
  );
};
export default SkillElement;
