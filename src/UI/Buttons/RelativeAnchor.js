import styled from "styled-components";
import Anchor from "./Anchor";

const StyledA = styled(Anchor)`
  position: relative;
  left: 28%;

  img {
    position: absolute;
    right: 10px;
    top: -50px;
  }

  @media only screen and (max-width: 1600px) {
    left: 23%;
  }
  @media only screen and (max-width: 1250px) {
    left: 20%;
  }
  @media only screen and (max-width: 800px) {
    position: static;
    display: block;
  }
`;

const RelativeAnchor = (props) => {
  return (
    <StyledA
      className={props.className}
      /* is needed if the exported component is supposed to be extendable!!! */ href={
        props.hrefTo
      }
      rotate={props.rotate}
    >
      {props.children}
    </StyledA>
  );
};

export default RelativeAnchor;
