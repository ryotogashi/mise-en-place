import styled from "@emotion/styled";
import * as React from "react";

import InputType from "./input-type";
import { secondary } from "../../constants/colors";

const StyledInput = styled.input`
  height: 24px;
  width: 70%;
  margin: 16px;
  padding: 4px;
  border: 1px solid ${secondary};
  color: ${secondary};
  border-radius: 4px;

  &::placeholder {
    color: ${secondary};
  }
`;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
}

const BasicTextInput = ({ type, ...rest }: Props) => {
  return <StyledInput type={type} {...rest} />;
};

BasicTextInput.defaultProps = {
  type: InputType.TEXT
};

export default BasicTextInput;
