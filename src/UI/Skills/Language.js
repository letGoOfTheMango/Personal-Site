import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  margin: 0 5%;
  background-color: ${(props) => props.theme.heading};

  h4 {
    font-size: 28px;
    line-height: 35px;
    color: ${(props) => props.theme.body};
    margin: 0 0 20px 0;
    text-transform: uppercase;
  }
  p {
    font-size: 18px;
    line-height: 32px;
    color: ${(props) => props.theme.body};
    margin: 0;
  }
  @media only screen and (max-width: 1536px) {
    width: 200px;
    h4 {
      font-size: 22px;
    }
  }
  @media only screen and (max-width: 1200px) {
    margin: 0;
    width: 140px;
    p {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 920px) {
    width: 200px;
  }
  @media only screen and (max-width: 800px) {
    height: 100px;
    text-align: center;
    h4{
      margin: 0 0 10px 0;
    }
  }
`;

const Language = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseOverHandler = () => {
    setIsHovering(true);
  };
  const mouseOutHandler = () => {
    setIsHovering(false);
  };
  return (
    <Wrapper onMouseEnter={mouseOverHandler} onMouseLeave={mouseOutHandler}>
      <h4>{props.name}</h4>
      {isHovering ? <p>{props.text}</p> : null}
    </Wrapper>
  );
};

export default Language;
