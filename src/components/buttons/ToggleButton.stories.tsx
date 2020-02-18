import * as React from "react";
import { action } from "@storybook/addon-actions";

import ToggleButton from "./ToggleButton";

export default {
  title: "Button",
  component: ToggleButton
};

export const _ToggleButton = () => <ToggleButton onClick={action("clicked")}></ToggleButton>;
