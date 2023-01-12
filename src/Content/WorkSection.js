import styled from "styled-components";
import CVItem from "../UI/Work/CVItem";
import ImageScroller from "../UI/Work/ImageScroller";
import * as CONTENT from "./content";
import eco from "../assets/images/ecolaw.webp";
import schlapo from "../assets/images/schlapo.webp";
import medloft from "../assets/images/medloft.webp";
import pawaq from "../assets/images/pawaq.webp";
import LinkButton from "../UI/Buttons/LinkButton";

const StyledSection = styled.section`
  padding: 0 10%;
  display: flex;
  flex-direction: row;
  margin: 0 0 130px 0;
  @media only screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

const StyledLeftDiv = styled.div`
  width: 50%;
  padding-right: 100px;
  @media only screen and (max-width: 800px) {
    margin-top: 50px;
    padding: 0;
    width: 100%;
  }
`;

const StyledRightDiv = styled.div`
  width: 50%;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;
const Heading = styled.h3`
  text-align: center;
  margin: 0 0 80px 0;
  @media only screen and (max-width: 800px) {
    margin: 0 0 30px 0;
  }
`;
const CVItemLeft = styled(CVItem)`
  height: calc(100% - 120px); // IMPROVE
  padding: 0 0 0 100px;
  @media only screen and (max-width: 800px) {
    padding: 0 0 80px 20px;
    height: 100%;
    width: 100%;
  }
`;
const ButtonBox = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 800px) {
    justify-content: center;
  }
`;

const Button = styled(LinkButton)`
  width: 80%;
  margin-bottom: 30px;
  @media only screen and (max-width: 800px) {
    text-align:center
  }
`;

const WorkSection = (props) => {
  const screenWidth = props.dimensions.width;
  return (
    <StyledSection>
      <StyledLeftDiv>
        <Heading>NEW LIFE</Heading>
        <CVItemLeft
          date={CONTENT.CASC.date}
          firm={CONTENT.CASC.firm}
          title={CONTENT.CASC.title}
          description={CONTENT.CASC.description}
        >
          {screenWidth <= 800 ? (
            <ButtonBox>
              <Button link="https://ecolaw.at">ecolaw</Button>
              <Button link="https://pawaq.at">pawaq</Button>
              <Button link="https://schlangenapotheke.at">
                SchlangenApotheke
              </Button>
              <Button link="https://medloft.at">Medloft</Button>
            </ButtonBox>
          ) : null}
          {screenWidth > 800 ? (
            <>
              <ImageScroller image={eco} />
              <ImageScroller image={pawaq} />
              <ImageScroller image={schlapo} />
              <ImageScroller image={medloft} />
            </>
          ) : null}
        </CVItemLeft>
      </StyledLeftDiv>
      <StyledRightDiv>
        <Heading>OLD LIFE</Heading>

        <CVItem
          date={CONTENT.ARCUS.date}
          firm={CONTENT.ARCUS.firm}
          title={CONTENT.ARCUS.title}
          description={CONTENT.ARCUS.description}
        />
        <CVItem
          date={CONTENT.BC.date}
          firm={CONTENT.BC.firm}
          title={CONTENT.BC.title}
          description={CONTENT.BC.description}
        />
        <CVItem
          date={CONTENT.AIES.date}
          firm={CONTENT.AIES.firm}
          title={CONTENT.AIES.title}
          description={CONTENT.AIES.description}
        />
        <CVItem
          date={CONTENT.DOD.date}
          firm={CONTENT.DOD.firm}
          title={CONTENT.DOD.title}
          description={CONTENT.DOD.description}
        />
        <CVItem
          date={CONTENT.EFA.date}
          firm={CONTENT.EFA.firm}
          title={CONTENT.EFA.title}
          description={CONTENT.EFA.description}
        />
      </StyledRightDiv>
    </StyledSection>
  );
};

export default WorkSection;
