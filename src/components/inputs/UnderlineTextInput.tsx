import styled from "@emotion/styled";
import * as React from "react";

import InputType from "./input-type";
import { secondary } from "../../constants/colors";

const StyledInput = styled.input`
  height: 24px;
  width: 70%;
  margin: 16px;
  padding: 4px;
  border: none;
  border-bottom: 1px solid ${secondary};
  color: ${secondary};

  &::placeholder {
    color: ${secondary};
  }
`;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
}

const UnderlineTextInput = ({ type, ...rest }: Props) => <StyledInput type="text" {...rest} />;

UnderlineTextInput.defaultProps = {
  type: InputType.TEXT
};

export default UnderlineTextInput;
