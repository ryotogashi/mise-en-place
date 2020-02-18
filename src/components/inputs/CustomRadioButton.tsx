import styled from "@emotion/styled";
import * as React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const CustomRadioButton = ({ ...rest }: Props) => {
  const StyledLabel = styled.label`
    color: #858585;
    position: relative;
    padding: 0 0 0 24px;

    &::after,
    &::before {
      position: absolute;
      content: "";
      display: block;
      top: 50%;
    }

    &::after {
      left: 15px;
      margin-top: -10px;
      width: 16px;
      height: 16px;
      border: 2px solid rgba(225, 225, 225, 0.3);
      border-radius: 50%;
    }

    &::before {
      left: 20px;
      margin-top: -5px;
      width: 10px;
      height: 10px;
      background: rgba(225, 225, 225, 0);
      border-radius: 50%;
    }

    &:hover::after {
      border: 2px solid rgba(225, 225, 225, 0.9);
      transition: all 0.5s ease-out;
    }

    &:hover::before {
      background: rgba(225, 225, 225, 0.9);
      transition: all 0.5s ease-out;
    }

    & > input[type="radio"] {
      display: none;
    }
  `;
  return (
    <StyledLabel>
      <input type={"radio"} {...rest} />
    </StyledLabel>
  );
};

export default CustomRadioButton;
