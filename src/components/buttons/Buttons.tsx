import styled from "@emotion/styled";
import * as React from "react";

import SectionTitle from "../SectionTitle";
import BasicButton from "./BasicButton";
import FlatButton from "./FlatButton";
import IconButton from "./IconButton";
import MaterialButton from "./MaterialButton";
import { SectionDiv } from "../constants";

const Buttons = () => (
  <SectionDiv>
    <SectionTitle>Button</SectionTitle>
    <BasicButton value="button" />
    <FlatButton value="button" />
    <IconButton img={`/public/assets/sample-icon.svg`} src="#" />
    <MaterialButton value="button" />
  </SectionDiv>
);

export default Buttons;
