import styled from "styled-components";

const StyledButton = styled.button`
  padding: 18px 33px 13px 33px;
  color: ${(props) => props.theme.heading};
  font-family: "AquaGrotesque";
  font-size: 22px;
  line-height: 27px;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.body};
  border: 2px solid ${(props) => props.theme.heading};
  border-radius: 50px;

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
  @media only screen and (max-width: 500px) {
    display: block;
    width: 100%;
  }
`;

const Button = (props) => {
  return (
    <StyledButton className={props.className}>{props.children}</StyledButton>
  );
};

export default Button;
