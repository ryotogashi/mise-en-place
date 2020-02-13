import * as React from "react";
import { action } from "@storybook/addon-actions";

import BasicTextInput from "./BasicTextInput";

export default {
  title: "Input",
  component: BasicTextInput
};

export const _BasicTextInput = () => (
  <BasicTextInput onChange={action("changed")} placeholder="basic text input"></BasicTextInput>
);
