import * as React from "react";
import { action } from "@storybook/addon-actions";

import BasicButton from "./BasicButton";

export default {
  title: "Button",
  component: BasicButton
};

export const _BasicButton = () => <BasicButton onClick={action("clicked")}>basic button</BasicButton>;
