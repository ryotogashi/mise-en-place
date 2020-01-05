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

interface Props {
  img: string;
  onClick: () => {} | null;
}

const IconButton = ({ img, onClick }: Props) => (
  <IconStyledButton onClick={onClick}>
    <img src={img} alt="icon" />
  </IconStyledButton>
);

IconButton.defaultProps = {
  onClick: null
};

export default IconButton;
