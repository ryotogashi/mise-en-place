import * as React from "react";
import styled from "@emotion/styled";

const IconStyledButton = styled.a({
  display: "inline-block",
  margin: "16px",
  height: "24px"
});

const IconButton = ({ img, src }) => (
  <IconStyledButton href={src}>
    <img src={img} alt="icon" />
  </IconStyledButton>
);

export default IconButton;
