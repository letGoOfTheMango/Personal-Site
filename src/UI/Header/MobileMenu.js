import { DarkModeSwitch } from "react-toggle-dark-mode";
import styled from "styled-components";
import Anchor from "../Buttons/Anchor";
import CloseButton from "../Buttons/CloseButton";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  width: 80%;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.accents};
  z-index: 10000;
  padding: 10%;
`;
const Close = styled(CloseButton)`
  align-self: flex-end;
  margin-bottom: 10%;
  svg {
    fill: white;
  }
  svg:hover {
    fill: white;
  }
`;
const MobileAnchor = styled(Anchor)`
  margin-left: 30%;
  font-size: 45px;
  margin-bottom: 40px;
  background-color: transparent;
  @media only screen and (max-width: 800px) {
    margin-bottom: 10px;
    margin-left: 17%;
    padding: 10px 10px;
    height: 45px;
  }
  @media only screen and (max-width: 420px) {
    font-size: 28px;
    margin-bottom: 20px;
    margin-left: 17%;
    padding: 10px 10px;
    height: 25px;
  }
`;

const MobileMenu = (props) => {
  const scrollHandler = (elementId, offset) => {
    props.close();
    window.scrollTo({
      behavior: "smooth",
      top:
        document.querySelector(elementId).getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        offset,
    });
  };

  return (
    <Wrapper>
      <Close click={props.close} />
      <MobileAnchor click={() => scrollHandler("#about", 50)}>
        About me
      </MobileAnchor>
      <MobileAnchor click={() => scrollHandler("#skills", 50)}>
        Skills
      </MobileAnchor>
      <MobileAnchor click={() => scrollHandler("#work", 50)}>Work</MobileAnchor>
      <MobileAnchor click={() => scrollHandler("#education", 50)}>
        Education
      </MobileAnchor>
      <MobileAnchor click={() => scrollHandler("#contact", 50)}>
        Contact
      </MobileAnchor>
      <DarkModeSwitch
        style={{marginLeft:"40%"}}
        checked={props.theme}
        onChange={props.toggle}
        size={50}
        moonColor={`black`}
        sunColor={`white`}
      />
    </Wrapper>
  );
};

export default MobileMenu;
