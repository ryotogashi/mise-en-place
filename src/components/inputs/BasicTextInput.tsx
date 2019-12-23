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

const BasicTextInput = ({ placeholder }) => (
  <StyledInput type="text" placeholder={placeholder} />
);

export default BasicTextInput;
