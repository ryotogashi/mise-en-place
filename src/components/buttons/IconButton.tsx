import * as React from "react";
import styled from "@emotion/styled";

const IconStyledButton = styled.a({
  display: "inline-block",
  margin: "16px",
  height: "24px"
});

const IconButton = ({ img, src, onClick }) => (
  <IconStyledButton href={src} onClick={onClick}>
    <img src={img} alt="icon" />
  </IconStyledButton>
);

IconButton.defaultProps = {
  onClick: null
};

export default IconButton;
