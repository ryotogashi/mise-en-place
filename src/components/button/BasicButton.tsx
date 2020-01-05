import styled from "@emotion/styled";
import * as React from "react";

const BasicStyledButton = styled.button`
  background-color: white;
  border-radius: 5px;
  border: none;
  color: gray;
  height: 30px;
  width: 150px;
  cursor: pointer;
  margin: 16px;
  &:hover {
    background-color: rgba(221, 221, 221, 0.5);
  }
`;

interface Props {
  value: string;
  onClick: () => {} | null;
}

const BasicButton = ({ value, onClick }: Props) => (
  <BasicStyledButton onClick={onClick}>{value}</BasicStyledButton>
);

BasicButton.defaultProps = {
  value: "button",
  onClick: null
};

export default BasicButton;
