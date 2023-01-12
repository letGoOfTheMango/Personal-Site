import { useState } from "react";
import styled from "styled-components";
import SkillInfoBox from "../UI/Skills/SkillInfoBox";
import SkillElement from "../UI/Skills/SkillElement";
import * as CONTENT from "./content";

const StyledSection = styled.section`
  padding: 0 10%;
  display: flex;
  flex-direction: row;
  margin-bottom: 10%;
  @media only screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

const StyledLeftDiv = styled.div`
  padding-left: 0;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 85px;
  column-gap: 10%;
  @media only screen and (max-width: 800px) {
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;
  }

`;

const StyledRightDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: end;
  @media only screen and (max-width: 1366px) {
    justify-content: center;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

const SkillsSection = (props) => {
  const [showSkillInfoBox, setShowSkillInfoBox] = useState({name:CONTENT.HTML.name, logo:CONTENT.HTML.logo, text:CONTENT.HTML.description});
  const closeSkillInfoBoxHandler = () => {
    setShowSkillInfoBox(false);
  };

  const infoboxContentHandler=(name, logo, text)=>{
    setShowSkillInfoBox({name:name, logo:logo, text:text});
    window.scrollTo({
      behavior: 'smooth',
      top:
        document.querySelector("#skillInfoBox").getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        150,
    })
  }

  return (
    <StyledSection>
      <StyledLeftDiv>
        <SkillElement name={CONTENT.HTML.name} click={()=>infoboxContentHandler(CONTENT.HTML.name, CONTENT.HTML.logo, CONTENT.HTML.description)}>{CONTENT.HTML.logo}</SkillElement>
        <SkillElement name={CONTENT.CSS.name} click={()=>infoboxContentHandler(CONTENT.CSS.name, CONTENT.CSS.logo, CONTENT.CSS.description)}>{CONTENT.CSS.logo}</SkillElement>
        <SkillElement name={CONTENT.JAVASCRIPT.name} click={()=>infoboxContentHandler(CONTENT.JAVASCRIPT.name, CONTENT.JAVASCRIPT.logo, CONTENT.JAVASCRIPT.description)}>{CONTENT.JAVASCRIPT.logo}</SkillElement>
        <SkillElement name={CONTENT.WORDPRESS.name} click={()=>infoboxContentHandler(CONTENT.WORDPRESS.name, CONTENT.WORDPRESS.logo, CONTENT.WORDPRESS.description)}>{CONTENT.WORDPRESS.logo}</SkillElement>
        <SkillElement name={CONTENT.BOOTSTRAP.name} click={()=>infoboxContentHandler(CONTENT.BOOTSTRAP.name, CONTENT.BOOTSTRAP.logo, CONTENT.BOOTSTRAP.description)}>{CONTENT.BOOTSTRAP.logo}</SkillElement>
        <SkillElement name={CONTENT.REACT.name} click={()=>infoboxContentHandler(CONTENT.REACT.name, CONTENT.REACT.logo, CONTENT.REACT.description)}>{CONTENT.REACT.logo}</SkillElement>
        <SkillElement name={CONTENT.PHOTOSHOP.name} click={()=>infoboxContentHandler(CONTENT.PHOTOSHOP.name, CONTENT.PHOTOSHOP.logo, CONTENT.PHOTOSHOP.description)}>{CONTENT.PHOTOSHOP.logo}</SkillElement>
        <SkillElement name={CONTENT.ILLUSTRATOR.name} click={()=>infoboxContentHandler(CONTENT.ILLUSTRATOR.name, CONTENT.ILLUSTRATOR.logo, CONTENT.ILLUSTRATOR.description)}>{CONTENT.ILLUSTRATOR.logo}</SkillElement>
        <SkillElement name={CONTENT.VSCODE.name} click={()=>infoboxContentHandler(CONTENT.VSCODE.name, CONTENT.VSCODE.logo, CONTENT.VSCODE.description)}>{CONTENT.VSCODE.logo}</SkillElement>
      </StyledLeftDiv>
      <StyledRightDiv id="skillInfoBox">
        {showSkillInfoBox ? (
          <SkillInfoBox
            name={showSkillInfoBox.name}
            logo={showSkillInfoBox.logo}
            text={showSkillInfoBox.text}
            click={closeSkillInfoBoxHandler}
          />
        ) : null}
      </StyledRightDiv>
    </StyledSection>
  );
};

export default SkillsSection;

