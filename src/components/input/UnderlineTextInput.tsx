import styled from "@emotion/styled";
import * as React from "react";

const StyledInput = styled.input`
  height: 24px;
  width: 30%;
  margin: 16px;
  padding: 4px;
  border: none;
  border-bottom: 1px solid #dddddd;
  color: #dddddd;

  &::placeholder {
    color: #dddddd;
  }
`;

const UnderlineTextInput = ({ placeholder }) => (
  <StyledInput type="text" placeholder={placeholder} />
);

export default UnderlineTextInput;
