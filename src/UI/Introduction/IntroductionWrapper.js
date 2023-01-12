import styled from "styled-components";

const StyledDiv = styled.section`
  padding: 10% 10% 10% 10%;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 800px) {
    margin-top: 10%;
    flex-wrap: wrap;
    margin-bottom: 150px;
  }
`;

const IntroductionWrapper = (props) => {
  return <StyledDiv id={props.cssID}>{props.children}</StyledDiv>;
};

export default IntroductionWrapper;
