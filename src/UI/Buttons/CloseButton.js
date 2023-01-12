import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  svg {
    fill: ${(props) => props.theme.body};
  }
  svg:hover {
    cursor: pointer;
    fill: ${(props) => props.theme.accents};
  }
`;

const CloseButton = (props) => {
  return (
    <StyledButton className={props.className} onClick={props.click}>
      <svg
        height="35pt"
        width="35pt"
        viewBox="-20 -20 150 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m59.461 50 32.242-32.246c2.6094-2.6094 2.6094-6.8516 0-9.457-2.6133-2.6172-6.8516-2.6172-9.4609 0l-32.246 32.242-32.238-32.242c-2.6094-2.6172-6.8477-2.6172-9.4609 0-2.6094 2.6094-2.6094 6.8477 0 9.457l32.246 32.246-32.246 32.246c-2.6094 2.6094-2.6094 6.8438 0 9.457 2.6133 2.6094 6.8516 2.6094 9.4609 0l32.238-32.246 32.246 32.246c2.6094 2.6094 6.8477 2.6094 9.4609 0 2.6094-2.6133 2.6094-6.8477 0-9.457z" />
      </svg>
    </StyledButton>
  );
};

export default CloseButton;
