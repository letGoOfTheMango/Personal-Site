import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: 50px;
  @media only screen and (max-width: 1024px) {
    font-size: 40px;
  }
`;
const NameHeading = (props) => {
    return ( <StyledH1>{props.children}</StyledH1> );
}
 
export default NameHeading;