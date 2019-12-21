import styled from "@emotion/styled";
import * as React from "react";

const FlatStyledButton = styled.button({
  backgroundColor: "white",
  borderRadius: "5px",
  height: "30px",
  width: "150px",
  cursor: "pointer",
  margin: "16px"
});

const FlatButton = ({ value }) => <FlatStyledButton>{value}</FlatStyledButton>;

export default FlatButton;
