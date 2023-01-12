import styled from "styled-components";
import portrait from "../assets/images/portrait.webp";
import portraitHover from "../assets/images/portrait_hover.webp";

const StyledDiv = styled.div`
  background-image: url(${portrait});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 40em;
  margin-bottom: 10%;
  /* &:hover {
    background-image: url(${portraitHover}); //IMPROVE REALLY DO SOMETHING WITH THIS?
  } */

  @media only screen and (max-width: 1366px) {
    background-position: right bottom;
  }
  @media only screen and (max-width: 1024px) {
    height: 30em;
  }
  @media only screen and (max-width: 800px) {
    height: 40em;
    background-position: center;
    background-size: contain;
  }
  @media only screen and (max-width: 420px) {
    height: 32em;
  }
  @media only screen and (max-width: 360px) {
    height: 27em;
  }
`;

const Picture = (props) => {
  return <StyledDiv />;
};

export default Picture;
