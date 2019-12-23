import styled from "@emotion/styled";
import * as React from "react";

const StyledInput = styled.input`
  height: 24px;
  width: 30%;
  margin: 16px;
  padding: 4px;
  border: none;
  border-bottom: 1px solid #d1d5db;
`;

const UnderlineTextInput = ({ placeholder }) => (
  <StyledInput type="text" placeholder={placeholder} />
);

export default UnderlineTextInput;
