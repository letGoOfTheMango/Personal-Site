import styled from "styled-components";

const StyledWrapper = styled.div`
  border-left: 2px solid ${(props) => props.theme.heading};
  padding: 0 0 100px 100px;

  &:before {
    content: "";
    background-color: ${(props) => props.theme.heading};
    height: 28px;
    width: 28px;
    position: relative;
    display: block;
    top: 0;
    left: -115px;
    transform: rotate(45deg);
  }
  &:hover:before {
    background-color: ${(props) => props.theme.accents};
  }
  @media only screen and (max-width: 800px) {
    padding: 0 0 50px 20px;
    &:before {
    left: -35px;
  }

  }
`;
const DateAndFirm = styled.p`
  margin: 0 0 24px 0;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 2px;
  font-weight: 600;
  color: ${(props) => props.theme.accents};
`;
const JobTitle = styled.h4`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;
  color: ${(props) => props.theme.heading};
`;
const JobDescription = styled.p`
  letter-spacing: 2px;
  color: ${(props) => props.theme.text};
`;

const StyledAdditionalContent = styled.div``;

const CVItem = (props) => {
  return (
    <>
      <StyledWrapper className={props.className}>
        <DateAndFirm>
          {props.date} {props.firm ? `| ${props.firm}` : null}
        </DateAndFirm>
        <JobTitle>{props.title}</JobTitle>
        <JobDescription>{props.description}</JobDescription>
        {props.additional ? (
          <StyledAdditionalContent>{props.additional}</StyledAdditionalContent>
        ) : null}
        {props.children}
      </StyledWrapper>
    </>
  );
};

export default CVItem;
