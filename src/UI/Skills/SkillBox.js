import styled from "styled-components";
import LinkButton from "../LinkButton";
import SkillElement from "./SkillElement";

const Wrapper = styled.div`
  width: 70%;
  border: 2px solid ${(props) => props.theme.heading};
`;

const ClosingBox = styled.div`
  background-color: ${(props) => props.theme.heading};
  height: 45px;
  display: flex;
  justify-content: flex-end;

  svg {
    fill: ${(props) => props.theme.body};
  }
  svg:hover {
    cursor: pointer;
  }
`;

const HeadingBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  h4 {
    margin: 0;
    display: inline-block;
    color: ${(props) => props.theme.heading};
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 30px;
`;
const ContentDiv = styled.div`
  padding: 33px 45px;
  p {
    margin: 33px 0;
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

const closeIcon = (
  <svg
    height="35pt"
    width="35pt"
    viewBox="-20 -20 150 150"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m59.461 50 32.242-32.246c2.6094-2.6094 2.6094-6.8516 0-9.457-2.6133-2.6172-6.8516-2.6172-9.4609 0l-32.246 32.242-32.238-32.242c-2.6094-2.6172-6.8477-2.6172-9.4609 0-2.6094 2.6094-2.6094 6.8477 0 9.457l32.246 32.246-32.246 32.246c-2.6094 2.6094-2.6094 6.8438 0 9.457 2.6133 2.6094 6.8516 2.6094 9.4609 0l32.238-32.246 32.246 32.246c2.6094 2.6094 6.8477 2.6094 9.4609 0 2.6094-2.6133 2.6094-6.8477 0-9.457z" />
  </svg>
);

const SkillInfoBox = (props) => {
  return (
    <Wrapper>
      <ClosingBox>
        {closeIcon}
      </ClosingBox>
      <ContentDiv>
        <HeadingBox>
          <h4>Wordpress</h4>
          <SkillLogo>
            <svg
              id="uuid-b848597b-680b-4a8f-890e-24034443bc7c"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 362.52 410.89"
            >
              <g id="uuid-e862e002-7b06-432a-a8b9-986fc490f6cd">
                <path d="M179.28,410.89c-12.25-3.59-24.46-7.32-36.76-10.76-35.09-9.8-70.2-19.52-105.35-29.14-3.23-.88-4.52-2.3-4.81-5.69-4.67-54.1-9.44-108.2-14.26-162.28C13.28,148.93,8.36,94.85,3.5,40.76,2.3,27.34,1.19,13.9,0,0H362.52c-.86,10.21-1.67,20.28-2.57,30.34-3.23,36.34-6.47,72.67-9.74,109-3.52,39.15-7.09,78.3-10.58,117.46-3.17,35.51-6.37,71.01-9.29,106.54-.38,4.67-1.73,6.82-6.46,8.11-45.1,12.29-90.13,24.87-135.17,37.39-1.86,.52-3.62,1.36-5.43,2.05h-4ZM116.99,120.65c2.86,0,4.84,0,6.81,0,51.66,.02,103.32,.04,154.97,.06,11.7,0,11.85,.02,13.06-11.63,1.15-11.06,1.95-22.16,2.93-33.61H67.6c.36,4.76,.65,9.2,1.05,13.64,3.51,39.15,7.15,78.28,10.44,117.45,.39,4.7,1.64,6.06,6.38,6.04,48.32-.15,96.65-.06,144.98-.04,2.09,0,4.19,0,6.54,0-1.68,19.23-3.21,37.63-5.03,56.01-.13,1.36-2.16,3.23-3.64,3.65-14.88,4.24-29.81,8.29-44.77,12.21-1.79,.47-3.96,.16-5.81-.33-14.33-3.74-28.6-7.68-42.94-11.37-3.15-.81-4.56-1.99-4.78-5.58-.65-10.56-1.87-21.09-2.86-31.53h-44.76c-.15,.89-.33,1.39-.29,1.86,1.89,21.9,3.88,43.8,5.63,65.71,.27,3.43,2.4,3.87,4.82,4.54,28.38,7.85,56.74,15.75,85.14,23.51,2.13,.58,4.68,.7,6.79,.12,28.57-7.79,57.08-15.77,85.64-23.58,2.95-.81,4.26-1.99,4.49-5.28,.84-11.96,2.09-23.89,3.17-35.83,2.84-31.52,5.66-63.03,8.47-94.55,.14-1.57,.02-3.16,.02-5.19H121.12c-1.38-15.46-2.72-30.51-4.13-46.28Z" />
              </g>
            </svg>
          </SkillLogo>
        </HeadingBox>
        <p>
          at the beginning of 2020 I decided I wanted to change careers. The
          world ended, I had time to do some programming courses on my own at
          freecodecamp, and then I decided that I wanted to change into frontend
          development.
        </p>
        <ButtonBox>
          <LinkButton link="https://ecolaw.at">SHOWcase</LinkButton>
          <LinkButton link="https://pawaq.at">SHOWcase</LinkButton>
          <LinkButton link="https://ecolaw.at">SHOWcase</LinkButton>
        </ButtonBox>
      </ContentDiv>
    </Wrapper>
  );
};

export default SkillInfoBox;
