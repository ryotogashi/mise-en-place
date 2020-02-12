import * as React from "react";

import Section from "../app-components/Section";
import IntroPage from "../app-components/IntroPage";
import BasicButton from "./BasicButton";
import FlatButton from "./FlatButton";
import IconButton from "./IconButton";
import MaterialButton from "./MaterialButton";
import SquareIconButton from "./SquareIconButton";
import ToggleButton from "./ToggleButton";
import sampeIcon from "../../assets/sample-icon.svg";

const Buttons = () => (
  <Section title="Buttons">
    <IntroPage title="Basic Button" description="Normal button use for causing action.">
      <BasicButton>button</BasicButton>
    </IntroPage>

    <IntroPage title="Flat Button" description="Flut button use for causing action.">
      <FlatButton>button</FlatButton>
    </IntroPage>

    <IntroPage title="Icon Button" description="Icon button use for causing action.">
      <IconButton img={sampeIcon} />
    </IntroPage>

    <IntroPage title="Square Icon Button" description="Square Icon button use for causing action.">
      <SquareIconButton />
    </IntroPage>

    <IntroPage title="Material Button" description="Material button use for causing action.">
      <MaterialButton>button</MaterialButton>
    </IntroPage>

    <IntroPage title="Toggle Button" description="Toggle button use for causing action.">
      <ToggleButton />
    </IntroPage>
  </Section>
);

export default Buttons;
