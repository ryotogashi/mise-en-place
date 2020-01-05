import * as React from "react";

import BasicButton from "./BasicButton";
import FlatButton from "./FlatButton";
import IconButton from "./IconButton";
import MaterialButton from "./MaterialButton";
import ToggleButton from "./ToggleButton";
import Section from "../app-components/Section";
import sampeIcon from "../../assets/sample-icon.svg";

const Buttons = () => (
  <Section title="Button">
    <BasicButton />
    <FlatButton />
    <IconButton img={sampeIcon} />
    <MaterialButton />
    <ToggleButton />
  </Section>
);

export default Buttons;
