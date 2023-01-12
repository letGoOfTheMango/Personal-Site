import styled from "styled-components";

const StyledDiv = styled.div`
  width: 70%;
  padding: 40px 0 0 0;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  column-gap: 15%;
  row-gap: 80px;

  /* @media only screen and (max-width: 1536px) {
    width: 70%;
  } */
  @media only screen and (max-width: 1536px) {
    width: 90%;
    column-gap: 10%;
  }
  @media only screen and (max-width: 1090px) {
    width: 90%;
    column-gap: 10%;
  }
  @media only screen and (max-width: 800px) {
    padding: 20px 0 0 0;
    width: 100%;
    column-gap: 10%;
    row-gap: 60px;
  }
  @media only screen and (max-width: 420px) {
    row-gap: 80px;
  }
`;

const ButtonBox = (props) => {
  return <StyledDiv>{props.children}</StyledDiv>;
};

export default ButtonBox;
