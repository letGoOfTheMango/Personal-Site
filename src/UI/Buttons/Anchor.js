import styled from "styled-components";

const StyledA = styled.a`
  color: ${(props) => props.theme.text};
  font-family: "AquaGrotesque", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  background-color: ${(props) => props.theme.accents};
  height: 20px;
  padding: 14px 25px;
  font-size: 18px;
  font-weight: 800;
  transform: rotate(${(props) => props.rotate || 0}deg);
  color: white;
  img {
    position: absolute;
    right: 10px;
    top: -50px;
  }

  &:hover{
    background-color: ${props => props.theme.accentsHover};
    cursor: pointer;
  }

  @media only screen and (max-width: 1090px) {
    padding: 10px 15px;
  }
  @media only screen and (max-width: 676px) {
    font-size: 14px;
    padding: 8px 10px;
    height: 15px;
  }
  @media only screen and (max-width: 420px) {

  }
`;

const Anchor = (props) => {
  return (
    <StyledA onClick={props.click} className={props.className} /* is needed if the exported component is supposed to be extendable!!! */ href={props.hrefTo} rotate={props.rotate}>
      {props.children}
    </StyledA>
  );
};

export default Anchor;
