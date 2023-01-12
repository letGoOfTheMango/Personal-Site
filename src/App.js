import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { lightTheme, darkTheme, GlobalStyles } from "./UI/themes.js";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Navbar from "./UI/Header/Navbar";
import Introduction from "./Content/Introduction.js";
import CategoryDescription from "./UI/CategoryDescription.js";
import SkillsSection from "./Content/SkillsSection.js";
import Languages from "./UI/Skills/Languages";
import CTA from "./UI/Footer/CTAFooter";
import Marquee from "react-fast-marquee";
import MarqueeElement from "./UI/Marquee/MarqueeElement.js";
import MarqueeFlourish from "./UI/Marquee/MarqueeFlourish.js";
import WorkSection from "./Content/WorkSection.js";
import EducationSection from "./Content/EducationSection.js";
import MobileMenu from "./UI/Header/MobileMenu";
import * as CONTENT from "./Content/content";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [theme, setTheme] = useState("dark");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    themeToggler();
  };

  const openMobileMenu = () => {
    setShowMobileMenu(true);
  };
  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);
    window.addEventListener("resize", debouncedHandleResize);
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      {showMobileMenu ? (
        <MobileMenu
          theme={isDarkMode}
          toggle={toggleDarkMode}
          show={showMobileMenu}
          open={openMobileMenu}
          close={closeMobileMenu}
        />
      ) : null}
      <Navbar dimensions={dimensions} click={openMobileMenu} />
      <Introduction cssID="about" dimensions={dimensions} />
      {dimensions.width > 800 ? (
        <DarkModeSwitch
          style={{
            position: "fixed",
            top: "100px",
            right: "10%",
            zIndex: "10",
          }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={50}
          moonColor={`#007678`}
          sunColor={`#B0FF65`}
        />
      ) : null}
      <CategoryDescription
        dimensions={dimensions}
        cssID="skills"
        title="Skills"
        description={CONTENT.SKILLSDESCRIPTION}
      />
      <SkillsSection />
      <Languages />
      <CategoryDescription
        dimensions={dimensions}
        cssID="work"
        title={dimensions.width <= 360 ? "Work" : "Work experience"}
        description={CONTENT.WORKDESCRIPTION}
      />
      <WorkSection dimensions={dimensions} />
      <CategoryDescription
        dimensions={dimensions}
        cssID="education"
        title="Education"
        description={CONTENT.EDUCATIONDESCRIPTION}
      />
      <EducationSection />
      <CTA cssID="contact" />
      <Marquee
        play={true}
        pauseOnHover={true}
        direction="left"
        speed="30"
        style={{ backgroundColor: "#404040" }}
        gradient={false}
      >
        <MarqueeFlourish />
        <MarqueeElement text="DANIEL PLESCHUTZNIG" />
        <MarqueeFlourish />
        <MarqueeElement
          /* sesame="telsesame" */ text="&#x2b;&#x34;&#x33;&#x36;&#x38;&#x30;&#x34;&#x30;&#x30;&#x30;&#x39;&#x37;&#x39;"
        />
        <MarqueeFlourish />
        <MarqueeElement text="da@ple.org" /* hrefTo="mailto:da@ple.org" */ />
        <MarqueeFlourish />
        <MarqueeElement
          text="Github"
          hrefTo="https://github.com/letGoOfTheMango"
        />
        <MarqueeFlourish />
        <MarqueeElement
          text="LinkedIn"
          hrefTo="https://www.linkedin.com/in/danielpleschutznig/"
        />
        <MarqueeFlourish />
        <MarqueeElement
          /* sesame="telsesame" */ text="&#x2b;&#x34;&#x33;&#x36;&#x38;&#x30;&#x34;&#x30;&#x30;&#x30;&#x39;&#x37;&#x39;"
        />
        <MarqueeFlourish />
        <MarqueeElement text="da@ple.org" /* hrefTo="mailto:da@ple.org" */ />
      </Marquee>
    </ThemeProvider>
  );
}

export default App;
