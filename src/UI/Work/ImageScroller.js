import { useState } from "react";
import styled from "styled-components";
import Anchor from "../Buttons/Anchor";

const Wrapper = styled.div`
  position: relative;
`;

const Scroller = styled.div`
  width: 100%;
  height: 300px;
  margin: 80px 0 0 0;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const Image = styled.img`
  width: 100%;
`;
const ScrollAnchor = styled(Anchor)`
  background-color: ${(props) => props.theme.accents};
  position: absolute;
  top: 40%;
  left: 40%;
  @media only screen and (max-width: 1200px) {
    top: 40%;
    left: 25%;
  }
`;

const ImageScroller = (props) => {
  const [ishovering, setIsHovering] = useState(false);
  const mouseOverHandler = () => {
    setIsHovering(true);
  };
  const mouseOutHandler = () => {
    setIsHovering(false);
  };

  return (
    <Wrapper>
      {!ishovering ? <ScrollAnchor rotate={-15}>Scroll me</ScrollAnchor> : null}
      <Scroller onMouseEnter={mouseOverHandler} onMouseLeave={mouseOutHandler}>
        <Image src={props.image} />
      </Scroller>
    </Wrapper>
  );
};

export default ImageScroller;
