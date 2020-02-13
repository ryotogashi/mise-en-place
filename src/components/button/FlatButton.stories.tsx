import * as React from "react";
import { action } from "@storybook/addon-actions";

import FlatButton from "./FlatButton";

export default {
  title: "Button",
  component: FlatButton
};

export const _FlatButton = () => <FlatButton onClick={action("clicked")}>flat button</FlatButton>;
