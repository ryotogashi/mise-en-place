import styled from "@emotion/styled";
import * as React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width: string;
}

const FlatButton = ({ width, ...rest }: Props) => {
  const FlatStyledButton = styled.button`
    background-color: white;
    border-radius: 5px;
    color: gray;
    height: 30px;
    width: ${width};
    cursor: pointer;
    margin: 16px;
    padding: 4px;
  `;

  return <FlatStyledButton {...rest}></FlatStyledButton>;
};

FlatButton.defaultProps = {
  width: "150px"
};

export default FlatButton;
