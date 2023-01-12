import styled from "styled-components";
import * as CONTENT from "../../Content/content";

const Ribbon = styled.div`
  height: 45px;
  width: 100%;
  background-color: ${(props) => props.theme.accents};
  position: absolute;
  top: 40%;
  left: 0;
  align-items: center;

  svg {
    fill: ${(props) => props.theme.heading};
    margin-top: -20px;
    align-self: baseline;
  }
  @media only screen and (max-width: 360px) {
    top: 43%;
  }
`;
const Wrapper = styled.div`
  display: flex;
  margin-left: 13%;
`;
const Text = styled.h4`
  margin: 0 0 0 10px;
  letter-spacing: 2px;
  line-height: normal;
  color: white;
  @media only screen and (max-width: 420px) {
    margin: 10px 0 0 10px;
  }
`;

const CareerChange = (props) => {
  return (
    <Ribbon>
      <Wrapper>
        {CONTENT.COVID}
        <Text>CAREER-CHANGE</Text>
      </Wrapper>
    </Ribbon>
  );
};

export default CareerChange;
