import styled from "styled-components";

const StyledSection = styled.section`
  padding: 0 10%;
  margin-bottom: 130px;
  @media only screen and (max-width: 800px) {
    position: relative;
  }
`;
const StyledFlourishDiv = styled.div`
  svg {
    fill: ${(props) => props.theme.accents};
  }
  @media only screen and (max-width: 800px) {
    display: inline-block;
    svg {
      margin-bottom: -5px;
    }
    h3 {
      font-size: 22px;
      padding-left: 25px;
      display: inline-block;
    }
    ::before {
      content: "";
      width: 100vw;
      height: 2px;
      position: absolute;
      left: 0;
      background-color: ${(props) => props.theme.heading};
    }
    ::after {
      content: "";
      width: 100vw;
      height: 2px;
      position: absolute;
      top: 65px;
      left: 0;
      background-color: ${(props) => props.theme.heading};
    }
  }
`;
const StyledContentDiv = styled.div`
  margin-top: 50px;
  align-content: center;
  display: flex;
`;

const StyledLeftDiv = styled.div`
  display: flex;
  align-content: flex-end;
  display: inline-block;
  width: 32%;
  height: 100px;

  h3 {
    margin: 0;
  }
`;

const StyledRightDiv = styled.div`
  display: inline-block;
  width: 60%;
  height: 100px;
  p {
    margin: 0;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

const CategoryDescription = (props) => {
  const screenWidth = props.dimensions.width;
  return (
    <StyledSection id={props.cssID}>
      <StyledFlourishDiv>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27.431"
          height="27.431"
          viewBox="0 0 27.431 27.431"
        >
          <rect
            width="19.397"
            height="19.397"
            transform="translate(13.716) rotate(45)"
          />
        </svg>
        {screenWidth <= 800 ? <h3>{props.title}</h3> : null}
      </StyledFlourishDiv>
      <StyledContentDiv>
        {screenWidth > 800 ? (
          <StyledLeftDiv>
            <h3>{props.title}</h3>
          </StyledLeftDiv>
        ) : null}
        <StyledRightDiv>
          <p>{props.description}</p>
        </StyledRightDiv>
      </StyledContentDiv>
    </StyledSection>
  );
};

export default CategoryDescription;
