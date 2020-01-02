import * as React from "react";

import SectionTitle from "../SectionTitle";
import BasicButton from "./BasicButton";
import FlatButton from "./FlatButton";
import IconButton from "./IconButton";
import MaterialButton from "./MaterialButton";
import ToggleButton from "./ToggleButton";
import { SectionDiv } from "../constants";

const Buttons = () => (
  <SectionDiv>
    <SectionTitle>Button</SectionTitle>
    <BasicButton value="button" />
    <FlatButton value="button" />
    <IconButton img={`/public/assets/sample-icon.svg`} src="#" />
    <MaterialButton value="button" />
    <ToggleButton
      values={["item 1", "item 2", "item 3", "item 4"]}
      onClick={null}
    />
  </SectionDiv>
);

export default Buttons;
