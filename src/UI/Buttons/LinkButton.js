import styled from "styled-components";

const StyledButton = styled.a`
  padding: 10px 30px 10px 30px;
  color: ${(props) => props.theme.heading};
  font-family: "AquaGrotesque";
  font-size: 20px;
  line-height: 27px;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.body};
  border: 2px solid ${(props) => props.theme.heading};
  border-radius: 50px;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.heading};
    color: ${(props) => props.theme.body};
  }
  
  @media only screen and (max-width: 1600px) {
    font-size: 18px;
    line-height: 22px;
  }
  @media only screen and (max-width: 1440px) {
    font-size: 18px;
    line-height: 22px;
  }
  @media only screen and (max-width: 720px) {
    font-size: 16px;
    line-height: 20px;
    padding: 12px 20px 10px 20px;
  }
  @media only screen and (max-width: 420px) {
    display: block;
    width: 100%;
    text-align: center;
  }
  &:hover {
    cursor: pointer;
  }
`;

const LinkButton = (props) => {
  return (
    <StyledButton className={props.className} href={props.link} target="_blank" rel="noreferrer" onClick={props.click}>{props.children}</StyledButton>
  );
};

export default LinkButton;
