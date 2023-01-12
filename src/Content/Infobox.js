import styled from "styled-components";

const StyledDiv = styled.div`
  border: 2px solid ${(props) => props.theme.heading};

  p {
    color: ${(props) => props.theme.heading};
    text-transform: uppercase;
    text-align: center;
  }

  @media only screen and (max-width: 960px) {
    padding: 0 20%;
  }
  @media only screen and (max-width: 800px) {
    padding: 20px 0 0 0;
    border: none;
    ::before{
      content: "";
      width: 100vw;
      height: 2px;
      position: absolute;
      left: 0;
      background-color: ${(props) => props.theme.heading};
    }
    ::after{
      content: "";
      width: 100vw;
      height: 2px;
      position: absolute;
      left: 0;
      background-color: ${(props) => props.theme.heading};
    }
  }
  @media only screen and (max-width: 360px) {
    padding: 20px 0;
  }
`;

const Infobox = (props) => {
  return (
    <StyledDiv>
      <p>{props.infoMessage}</p>
    </StyledDiv>
  );
};

export default Infobox;
