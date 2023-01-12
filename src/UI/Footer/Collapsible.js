import styled from "styled-components";
import CloseButton from "../Buttons/CloseButton";

const ContentParent = styled.div`
  max-height: 0px;
  transition: max-height 500ms;
  padding-right: 5%;
  overflow: hidden;
`;
const Collapsible = (props) => {
  return (
    <ContentParent
      id={props.cssID}
      style={
        props.open
          ? {
              "maxHeight": "10000px",
            }
          : { "maxHeight": "0px" }
      }
    >
      <CloseButton click={props.close} />
      {props.children}
    </ContentParent>
  );
};
export default Collapsible;
