import styled from "styled-components";

const StyledP = styled.div`
  padding-right: 30%;

  @media only screen and (max-width: 1200px) {
    padding-right: 10%;
  }
`;

const IntroductionText = (props) => {
  return <StyledP>{props.children}</StyledP>;
};

export default IntroductionText;
