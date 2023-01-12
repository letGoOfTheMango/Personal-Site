import Anchor from "../UI/Buttons/Anchor";
import Infobox from "./Infobox";
import InfoColumn from "../UI/Introduction/InfoColumn";
import IntroductionWrapper from "../UI/Introduction/IntroductionWrapper";
import PictureColumn from "../UI/Introduction/PictureColumn";
import Picture from "./Portrait";
import ButtonBox from "../UI/Buttons/ButtonBox";
import IntroductionText from "./IntroductionText";
import * as CONTENT from "./content";
import styled from "styled-components";

const IntroAnchor = styled(Anchor)`
  &:hover {
    cursor: default;
    background-color: ${(props) => props.theme.accents};
  }
`;

const Introduction = (props) => {
  const screenWidth = props.dimensions.width;
  return (
    <IntroductionWrapper cssID={props.cssID}>
      <PictureColumn>
        {screenWidth <= 800 ? (
          <>
            <h1>Daniel Pleschutznig</h1>
            <h2>Front end developer</h2>
          </>
        ) : null}
        <Picture bg="../assets/images/portrait.webp" />
        <Infobox infoMessage={"Based in Vienna | Born in 1987"} />
      </PictureColumn>
      <InfoColumn>
        {screenWidth <= 800 ? null : (
          <>
            <h1>Daniel Pleschutznig</h1>
            <h2>Front end developer</h2>
          </>
        )}
        <IntroductionText>{CONTENT.INTRODUCTION}</IntroductionText>
        <ButtonBox>
          <IntroAnchor rotate={-15}>Tabletop RPGs</IntroAnchor> {/* IMPROVE Change button placement? */}
          <IntroAnchor rotate={12}>Muay Thai</IntroAnchor>
          <IntroAnchor rotate={-4}>Improv</IntroAnchor>
          <IntroAnchor rotate={-13}>
            Growing plants{" "}
            <img src="plant.png" alt="plant" width="42" height="68" /> {/* IMPROVE Change on theme change */}
          </IntroAnchor>
        </ButtonBox>
      </InfoColumn>
    </IntroductionWrapper>
  );
};

export default Introduction;
