import * as React from "react";
import { action } from "@storybook/addon-actions";

import UnderlineTextInput from "./UnderlineTextInput";

export default {
  title: "Input",
  component: UnderlineTextInput
};

export const _UnderlineTextInput = () => (
  <UnderlineTextInput onChange={action("changed")} placeholder="underline text input"></UnderlineTextInput>
);
