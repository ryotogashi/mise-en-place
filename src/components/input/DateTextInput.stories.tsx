import * as React from "react";
import { action } from "@storybook/addon-actions";

import DateTextInput from "./DateTextInput";

export default {
  title: "Input",
  component: DateTextInput
};

export const _DateTextInput = () => <DateTextInput onChange={action("changed")}></DateTextInput>;
