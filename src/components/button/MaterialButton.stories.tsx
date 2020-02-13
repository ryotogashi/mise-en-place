import * as React from "react";
import { action } from "@storybook/addon-actions";

import MaterialButton from "./MaterialButton";

export default {
  title: "Button",
  component: MaterialButton
};

export const _MaterialButton = () => <MaterialButton onClick={action("clicked")}>Material button</MaterialButton>;
