import styled from "@emotion/styled";
import * as React from "react";

const StyledInput = styled.input`
  height: 24px;
  width: 30%;
  margin: 16px;
  padding: 4px;
  border: 1px solid gray;
  opacity: 0.4;
  border-radius: 4px;
`;

interface Props {
  placeholder: string;
  onChange: () => {} | null;
}

const BasicTextInput = ({ placeholder, onChange }: Props) => (
  <StyledInput type="text" placeholder={placeholder} onChange={onChange} />
);

BasicTextInput.defaultProps = {
  placeholder: "placeholder",
  onChange: null
};

export default BasicTextInput;
