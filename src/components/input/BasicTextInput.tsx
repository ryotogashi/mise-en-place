import styled from "@emotion/styled";
import * as React from "react";

import InputType from "./input-type";

const StyledInput = styled.input`
  height: 24px;
  width: 70%;
  margin: 16px;
  padding: 4px;
  border: 1px solid gray;
  opacity: 0.4;
  border-radius: 4px;
`;

const BasicTextInput = ({ type, ...props }) => (
  <StyledInput type={type} {...props} />
);

BasicTextInput.defaultProps = {
  type: InputType.TEXT
};

export default BasicTextInput;
