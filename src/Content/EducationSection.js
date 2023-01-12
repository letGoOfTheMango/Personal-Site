import styled from "styled-components";
import CareerChange from "../UI/Work/CareerChange";
import CVItem from "../UI/Work/CVItem";
import * as CONTENT from "./content";

const StyledSection = styled.section`
  padding: 0 10%;
  display: flex;
  flex-direction: row;
  margin: 0 0 130px 0;
  position: relative;
`;

const StyledDiv = styled.div`
  width: 50%;
  padding-right: 100px;
  hr {
    border: 2px solid ${(props) => props.theme.accents};
    width: 20%;
    margin-left: 0;
  }
  @media only screen and (max-width: 800px) {
    padding: 0;
    width: 100%;
  }
`;
const CVItemTop = styled(CVItem)`
  padding-bottom: 220px;
  @media only screen and (max-width: 800px) {
    padding-bottom: 150px;
  }
`;

const EducationSection = (props) => {
  return (
    <StyledSection>
      <CareerChange />
      <StyledDiv>
        <CVItemTop
          date={CONTENT.CODEFACTORY.date}
          firm={CONTENT.CODEFACTORY.firm}
          title={CONTENT.CODEFACTORY.title}
          description={CONTENT.CODEFACTORY.description}
        ></CVItemTop>
        <CVItem
          date={CONTENT.POWI.date}
          firm={CONTENT.POWI.firm}
          title={CONTENT.POWI.title}
          description={CONTENT.POWI.description}
        ></CVItem>
      </StyledDiv>
    </StyledSection>
  );
};

export default EducationSection;
