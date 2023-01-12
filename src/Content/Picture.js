import styled from "styled-components";

const StyledDiv = styled.div`
  background-image: url("${process.env.PUBLIC_URL}/stock.png");
  background-repeat: no-repeat;
  height: 30em;
  margin-bottom: 10%;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Picture = (props) => {
  return <StyledDiv>{props.children}</StyledDiv>;
};

export default Picture;
