import styled from "@emotion/styled";
import * as React from "react";

interface Props {
  height: string;
  width: string;
  children: React.ReactNode;
  onClick: Function | null;
}

const SquareIconButton = ({ height, width, children, onClick }: Props) => {
  const StyledButton = styled.button`
    height: ${height};
    width: ${width};
    background-color: rgba(225, 225, 225, 0.3);
    border: none;
    border-radius: 0;
    padding: 7.5px;

    &:hover {
      background-color: rgba(225, 225, 225, 0.9);
      transition: all 0.5s ease-out;
    }
  `;

  return (
    <StyledButton
      value="right"
      className="right-slideshow-button"
      onClick={event => {
        onClick !== null ? onClick(event) : null;
      }}
    >
      {children}
    </StyledButton>
  );
};

SquareIconButton.defaultProps = {
  height: "45px",
  width: "45px",
  children: null,
  onClick: null
};

export default SquareIconButton;
