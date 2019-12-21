import styled from "@emotion/styled";
import * as React from "react";

import SectionTitle from "../SectionTitle";
import BasicButton from "./BasicButton";
import FlatButton from "./FlatButton";
import IconButton from "./IconButton";
import MaterialButton from "./MaterialButton";

const StyledDiv = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Buttons = () => (
  <StyledDiv>
    <SectionTitle>Button</SectionTitle>
    <BasicButton value="button" />
    <FlatButton value="button" />
    <IconButton img={`/public/assets/sample-icon.svg`} src="#" />
    <MaterialButton value="button" />
  </StyledDiv>
);

export default Buttons;
