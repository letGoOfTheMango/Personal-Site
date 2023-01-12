import { useState } from "react";
import styled from "styled-components";
import Imprint from "./Imprint";
import LinkButton from "../Buttons/LinkButton";

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.heading};
  padding: 92px 0 33px 10%;

  h2 {
    margin: 0 0 10px 0;
    color: ${(props) => props.theme.body};
    font-size: 120px;
    line-height: 120px;
  }
  h3{
    color: ${(props) => props.theme.body};
  }
  h4{
    color: ${(props) => props.theme.body};
  }
  @media only screen and (max-width: 1200px) {
    h2 {
    font-size: 90px;
    line-height: 90px;
    }
  }
  @media only screen and (max-width: 950px) {
    h2 {
    font-size: 70px;
    line-height: 70px;
    }
  }
  @media only screen and (max-width: 720px) {
    h2 {
    font-size: 48px;
    line-height: 50px;
    }
  }
  @media only screen and (max-width: 500px) {
    h2 {
    font-size: 35px;
    line-height: 40px;
    }
  }
  @media only screen and (max-width: 420px) {
    padding: 92px 10% 33px 10%;
    h2{
      font-size: 30px;
      margin-bottom: 30px;
    }
  }
`;
const ButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 30px;
  @media only screen and (max-width: 920px) {
    margin-bottom: 30px;
  }
`;
const CTAButton = styled(LinkButton)`
  color: ${(props) => props.theme.body};
  background-color: ${(props) => props.theme.heading};
  border: 2px solid ${(props) => props.theme.body};
  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.heading};
  }
`;

const CTA = (props) => {
  const [mail, setmail] = useState("To make live harder for scrapers my address will be used as soon as you click here.");
  const [phone, setphone] = useState("To make live harder for scrapers my number will be used as soon as you click here.");
  const setEmail=()=>{
    let one="mailto:";
    let two="da@";
    let three="ple.org";
    const result=one.concat(two).concat(three);
    setmail(result)
  }  
  const setPhone=()=>{
    let one="tel:+";
    let two="43680";
    let three="4000979";
    const result=one.concat(two).concat(three);
    setphone(result)
  }
  return (
    <Wrapper id={props.cssID}>
      <h2>Sound good? Contact me!</h2>
      <ButtonBox>
        <CTAButton link={phone} click={setPhone}>Call me</CTAButton>
        <CTAButton link={mail} click={setEmail}>Drop me an e-mail</CTAButton>
      </ButtonBox>
      <Imprint />
    </Wrapper>
  );
};

export default CTA;
