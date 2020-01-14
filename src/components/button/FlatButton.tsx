import styled from "@emotion/styled";
import * as React from "react";

interface Props {
  value: string;
  onClick: () => {} | null;
  height: string;
  width: string;
}

const FlatButton = ({ value, onClick, height, width }: Props) => {
  const FlatStyledButton = styled.button`
    background-color: white;
    border-radius: 5px;
    color: gray;
    height: ${height};
    width: ${width};
    cursor: pointer;
    margin: 16px;
  `;

  return <FlatStyledButton onClick={onClick}>{value}</FlatStyledButton>;
};

FlatButton.defaultProps = {
  value: "button",
  onClick: null,
  height: "30px",
  width: "150px"
};

export default FlatButton;
