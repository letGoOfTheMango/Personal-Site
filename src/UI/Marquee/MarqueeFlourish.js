import styled from "styled-components";
import * as CONTENT from "../../Content/content";

const StyledSpan = styled.span`
  display: flex;

  rect {
    fill: ${(props) => props.theme.accents};
  }
  rect:hover {
    fill: ${(props) => props.theme.accentsHover};
  }
`;

const MarqueeFlourish = (props) => {
  return <StyledSpan>{CONTENT.FLOURISH}</StyledSpan>;
};

export default MarqueeFlourish;
