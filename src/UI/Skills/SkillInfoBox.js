import styled from "styled-components";
import CloseButton from "../Buttons/CloseButton";
import LinkButton from "../Buttons/LinkButton";
import SkillElement from "./SkillElement";

const Wrapper = styled.div`
  width: 100%;
  border: 2px solid ${(props) => props.theme.heading};
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

const ClosingBox = styled.div`
  background-color: ${(props) => props.theme.heading};
  height: 45px;
  display: flex;
  justify-content: flex-end;
`;

const HeadingBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  h4 {
    margin: 0;
    font-size: 18px;
    display: inline-block;
    font-family: "SpaceGrotesk"
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 30px;
  @media only screen and (max-width: 1366px) {
    row-gap: 20px;
    column-gap: 10px;
  }
`;
const ContentDiv = styled.div`
  padding: 33px 45px;
  p {
    margin: 33px 0;
  }
  p a{
    color: ${(props) => props.theme.heading};
  }
  @media only screen and (max-width: 1200px) {
    p{
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 420px) {
    padding: 33px 20px;
  }
`;

const SkillLogo = styled(SkillElement)`
  display: inline-block;
  p {
    display: none;
  }
  svg:hover {
    cursor: default;
  }
`;

const SkillInfoBox = (props) => {
  return (
    <Wrapper>
      <ClosingBox>
        <CloseButton click={props.click} />
      </ClosingBox>
      <ContentDiv>
        <HeadingBox>
          <h4>{props.name}</h4>
          <SkillLogo>{props.logo}</SkillLogo>
        </HeadingBox>
        <p>{props.text}</p>
        {props.name==="WORDPRESS"?
          <ButtonBox>
            <LinkButton link="https://ecolaw.at">ecolaw</LinkButton>
            <LinkButton link="https://medloft.at">Medloft</LinkButton>
            <LinkButton link="https://schlangenapotheke.at">
              SchlangenApotheke
            </LinkButton>
            <LinkButton link="https://pawaq.at">pawaq</LinkButton>
          </ButtonBox>:null
        }
      </ContentDiv>
    </Wrapper>
  );
};

export default SkillInfoBox;
