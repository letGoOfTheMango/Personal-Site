import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  padding-left: 100px;
  @media only screen and (max-width: 800px) {
    width: 100%;
    padding: 0;
  }
`;

const InfoColumn = (props) => {
  return <StyledDiv>{props.children}</StyledDiv>;
};

export default InfoColumn;
