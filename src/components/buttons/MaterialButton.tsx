import styled from "@emotion/styled";
import * as React from "react";

const MaterialStyledButton = styled.button`
  background-color: white;
  border-radius: 5px;
  border: none;
  height: 30px;
  width: 150px;
  cursor: pointer;
  margin: 16px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 2px 10px 15px rgba(0, 0, 0, 0.3);
  }
`;

const MaterialButton = ({ value }) => (
  <MaterialStyledButton>{value}</MaterialStyledButton>
);

export default MaterialButton;
