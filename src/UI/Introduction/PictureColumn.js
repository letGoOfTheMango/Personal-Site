import styled from "styled-components";

const StyledDiv = styled.div`
  width: 40%;
  @media only screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 50px;
    h1{
      font-size: 50px;
      line-height: 50px;
    }
    h2{
      font-size: 40px;
      line-height: 40px;
    }
  }
  @media only screen and (max-width: 420px) {
    h1{
      font-size: 38px;
      line-height: 49px;
    }
    h2{
      font-size: 22px;
      line-height: 30px;
    }
  }
  @media only screen and (max-width: 360px) {
    width: 100%;
    margin-bottom: 0;
    h1{
      font-size: 34px;
      line-height: 40px;
    }
    h2{
      font-size: 21px;
    }
  }
`;

const PictureColumn = (props) => {
  return <StyledDiv>{props.children}</StyledDiv>;
};

export default PictureColumn;
