import styled from "@emotion/styled";
import * as React from "react";

interface Props {
  placeholder: string;
  width: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | null;
}

const BasicTextInput = ({ placeholder, width, onChange }: Props) => {
  const StyledInput = styled.input`
    height: 24px;
    width: ${width};
    margin: 16px;
    padding: 4px;
    border: 1px solid gray;
    opacity: 0.4;
    border-radius: 4px;
  `;

  return (
    <StyledInput type="text" placeholder={placeholder} onChange={onChange} />
  );
};

BasicTextInput.defaultProps = {
  placeholder: "placeholder",
  width: "70%",
  onChange: null
};

export default BasicTextInput;
