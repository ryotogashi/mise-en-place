import styled from "@emotion/styled";
import * as React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  height: string;
  width: string;
  value: string;
  children: React.ReactNode;
  disabled: boolean;
}

const SquareIconButton = ({ height, width, value, children, disabled, ...rest }: Props) => {
  const StyledButton = styled.button`
    height: ${height};
    width: ${width};
    background-color: rgba(225, 225, 225, 0.3);
    border: none;
    border-radius: 0;
    padding: 7.5px;

    &:hover {
      background-color: rgba(225, 225, 225, ${disabled ? "0.3" : "0.9"});
      transition: all 0.5s ease-out;
    }
  `;

  return (
    <StyledButton value={value} disabled={disabled} {...rest}>
      {children}
    </StyledButton>
  );
};

SquareIconButton.defaultProps = {
  height: "45px",
  width: "45px",
  value: "squareIconButton",
  children: null,
  disabled: false
};

export default SquareIconButton;
