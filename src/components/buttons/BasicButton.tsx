import styled from "@emotion/styled";
import * as React from "react";

const BasicStyledButton = styled.button`
  background-color: white;
  border-radius: 5px;
  border: none;
  height: 30px;
  width: 150px;
  cursor: pointer;
  margin: 16px;
  &:hover {
    background-color: gray;
  }
`;

const BasicButton = ({ value }) => (
  <BasicStyledButton>{value}</BasicStyledButton>
);

export default BasicButton;
