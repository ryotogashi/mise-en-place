import * as React from "react";
import styled from "@emotion/styled";

const IconStyledButton = styled.div`
  display: inline-block;
  margin: 16px;
  height: 24px;

  img {
    height: 100%;
    width: 100%;
  }

  &:hover {
    cursor: pointer;
  }
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  img: string;
}

const IconButton = ({ img, ...rest }: Props) => (
  <IconStyledButton {...rest}>
    <img src={img} alt="icon" />
  </IconStyledButton>
);

export default IconButton;
