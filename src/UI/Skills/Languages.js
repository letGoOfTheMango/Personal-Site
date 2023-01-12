import styled from "styled-components";
import Language from "./Language";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 57px 10% 45px 10%;
  margin-bottom: 130px;
  background-color: ${(props) => props.theme.heading};
  @media only screen and (max-width: 420px) {
    margin-bottom: 80px;
  }
`;
const StyledLeftDiv = styled.div`
  width: 25%;
  h3 {
    color: ${(props) => props.theme.body};
    margin: 0;
  }
  @media only screen and (max-width: 1300px) {
    width: 30%;
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
    text-align: center;
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
    h3 {
      text-align: center;
    }
  }

`;

const StyledRightDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
  height: 100px;
  @media only screen and (max-width: 1300px) {
    width: 60%;
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
  @media only screen and (max-width: 800px) {
    height: 250px;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
  @media only screen and (max-width: 500px) {
    height: 370px;
  }
`;

const Languages = (props) => {
  return (
    <Wrapper>
      <StyledLeftDiv>
        <h3>Languages</h3>
      </StyledLeftDiv>
      <StyledRightDiv>
        <Language name="Deutsch" text="Muttersprache" />
        <Language name="English" text="Near-native" />
        <Language name="Svenska" text="Lagom" />
        <Language name="español" text="Un Poquito" />
      </StyledRightDiv>
    </Wrapper>
  );
};

export default Languages;
