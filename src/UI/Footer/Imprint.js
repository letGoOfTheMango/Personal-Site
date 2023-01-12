import { useState } from "react";
import styled from "styled-components";
import Collapsible from "./Collapsible";
import * as CONTENT from "../../Content/content";

const ImprintBox = styled.div`
  padding-right: 5%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  p {
    display: block;
    color: ${(props) => props.theme.body};
  }
  span{
    cursor: pointer;
  }
  @media only screen and (max-width: 720px) {
    justify-content: start;
    h2 {
    font-size: 48px;
    line-height: 50px;
    }
  }
  @media only screen and (max-width: 420px) {
    p {
    font-size: 16px;
    line-height: 24px;
    }
  }
`;

const ContentBox = styled.div`
  p {
    color: ${(props) => props.theme.body};
  }
`;
const Imprint = () => {
  const [content, setContent] = useState(CONTENT.IMPRINTCONTENT);
  const [isOpen, setIsOpen] = useState(false);

  const closeHandler = () => {
    setIsOpen(false);
  };

  const imprintContentHandler = (content) => {
    setIsOpen(true);
    content === "privacy"
      ? setContent(CONTENT.PRIVACYCONTENT)
      : setContent(CONTENT.IMPRINTCONTENT);
    setTimeout(() => {
      document.getElementById(`imprint`).scrollIntoView({ behavior: "smooth" });
    }, "500");
  };

  return (
    <>
      <ImprintBox>
        <p>
          <span onClick={() => imprintContentHandler("imprint")}>Imprint</span>{" "}
          |{" "}
          <span onClick={() => imprintContentHandler("privacy")}>
            Data privacy statement
          </span>
        </p>
      </ImprintBox>
      <ContentBox>
        <Collapsible cssID="imprint" close={closeHandler} open={isOpen}>
          {content}
        </Collapsible>
      </ContentBox>
    </>
  );
};

export default Imprint;
