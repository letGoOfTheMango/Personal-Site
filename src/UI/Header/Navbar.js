import styled from "styled-components";
import Anchor from "../Buttons/Anchor";
import { FaBars } from "react-icons/fa/";

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 52px;
  background-color: ${(props) => props.theme.heading};
  display: flex;
  justify-content: center;
  z-index: 1000;

  @media only screen and (max-width: 676px) {
    height: 40px;
  }
`;

const NavWrapper = styled.span`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 55%;

  @media only screen and (max-width: 1440px) {
    width: 75%;
  }
  @media only screen and (max-width: 1024px) {
    width: 90%;
  }
  @media only screen and (max-width: 800px) {
    margin-top: 3%;
    justify-content: center;
  }
`;

const MenuButton = styled(Anchor)`
  height: 32px;
  width: 32px;
  svg {
    font-size: 32px;
  }
`;

const Navbar = (props) => {
  const screenWidth = props.dimensions.width;

  const scrollHandler = (elementId, offset) => {
    window.scrollTo({
      behavior: 'smooth',
      top:
        document.querySelector(elementId).getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        offset,
    })
  }

  return (
    <StyledDiv>
      <NavWrapper>
        {screenWidth <= 800 ? null : (
          <>
            <Anchor click={() => scrollHandler("#about", 100)}>About me</Anchor>
            <Anchor click={() => scrollHandler("#skills", 100)}>Skills</Anchor>
            <Anchor click={() => scrollHandler("#work", 100)}>Work</Anchor>
            <Anchor click={() => scrollHandler("#education", 100)}>Education</Anchor>
            <Anchor click={() => scrollHandler("#contact", 100)}>Contact</Anchor>
          </>
        )}
        {screenWidth > 800 ? null : (
          <MenuButton click={props.click}>
            <FaBars />
          </MenuButton>
        )}
      </NavWrapper>
    </StyledDiv>
  );
};

export default Navbar;
