import * as React from "react";
import { action } from "@storybook/addon-actions";

import PasswordTextInput from "./PasswordTextInput";

export default {
  title: "Input",
  component: PasswordTextInput
};

export const _PasswordTextInput = () => <PasswordTextInput onChange={action("changed")}></PasswordTextInput>;

export const _PasswordTextInputWithIcon = () => <PasswordTextInput showHideIcon={true}></PasswordTextInput>;
