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
    <BasicButton value="button" />
    <FlatButton value="button" />
    <IconButton img={sampeIcon} />
    <MaterialButton value="button" />
    <ToggleButton
      values={["item 1", "item 2", "item 3", "item 4"]}
      onClick={null}
    />
  </Section>
);

export default Buttons;
