import styled from "@emotion/styled";
import * as React from "react";

const FlatStyledButton = styled.button`
  background-color: white;
  border-radius: 5px;
  color: gray;
  height: 30px;
  width: 150px;
  cursor: pointer;
  margin: 16px;
`;

interface Props {
  value: string;
  onClick: () => {} | null;
}

const FlatButton = ({ value, onClick }: Props) => (
  <FlatStyledButton onClick={onClick}>{value}</FlatStyledButton>
);

FlatButton.defaultProps = {
  onClick: null
};

export default FlatButton;
