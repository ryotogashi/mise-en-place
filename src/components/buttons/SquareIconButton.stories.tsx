import * as React from "react";
import { action } from "@storybook/addon-actions";

import SquareIconButton from "./SquareIconButton";

export default {
  title: "Button",
  component: SquareIconButton
};

export const _SquareIconButton = () => <SquareIconButton onClick={action("clicked")}></SquareIconButton>;
