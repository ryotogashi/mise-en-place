import styled from "@emotion/styled";
import * as React from "react";

const StyledInput = styled.input`
  height: 24px;
  width: 70%;
  margin: 16px;
  padding: 4px;
  border: none;
  border-bottom: 1px solid #dddddd;
  color: #dddddd;

  &::placeholder {
    color: #dddddd;
  }
`;

interface Props {
  placeholder: string;
  onChange: Function | null;
}

const UnderlineTextInput = ({ placeholder, onChange }: Props) => (
  <StyledInput
    type="text"
    placeholder={placeholder}
    onChange={event => (onChange ? onChange(event) : null)}
  />
);

UnderlineTextInput.defaultProps = {
  placeholder: "placeholder",
  onChange: null
};

export default UnderlineTextInput;
