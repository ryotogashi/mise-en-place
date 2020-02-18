import styled from "@emotion/styled";
import * as React from "react";

import { secondary, white } from "../../constants/colors";

const BasicStyledButton = styled.button`
  background-color: ${white};
  border-radius: 5px;
  border: none;
  color: ${secondary};
  height: 30px;
  width: 150px;
  cursor: pointer;
  margin: 16px;
  &:hover {
    background-color: rgba(221, 221, 221, 0.5);
  }
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const BasicButton = ({ ...rest }: Props) => <BasicStyledButton {...rest}></BasicStyledButton>;

export default BasicButton;
