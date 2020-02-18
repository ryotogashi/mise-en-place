import * as React from "react";
import { action } from "@storybook/addon-actions";

import sampeIcon from "../../assets/sample-icon.svg";

import IconButton from "./IconButton";

export default {
  title: "Button",
  component: IconButton
};

export const _IconButton = () => (
  <IconButton img={sampeIcon} onClick={action("clicked")}>
    basic button
  </IconButton>
);
