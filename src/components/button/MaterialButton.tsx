import styled from "@emotion/styled";
import * as React from "react";

const MaterialStyledButton = styled.button`
  background-color: white;
  border-radius: 5px;
  border: none;
  color: gray;
  height: 30px;
  width: 150px;
  cursor: pointer;
  margin: 16px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 2px 10px 15px rgba(0, 0, 0, 0.3);
  }
`;

interface Props {
  value: string;
  onClick: () => {} | null;
}

const MaterialButton = ({ value, onClick }: Props) => (
  <MaterialStyledButton onClick={onClick}>{value}</MaterialStyledButton>
);

MaterialButton.defaultProps = {
  value: "button",
  onClick: null
};

export default MaterialButton;
