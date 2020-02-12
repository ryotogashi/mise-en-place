import React from "react";
import { action } from "@storybook/addon-actions";

import BasicButton from "../src/components/button/BasicButton";

export default {
  title: "Components/Button",
  component: BasicButton
};

export const _BasicButton = () => <BasicButton onClick={action("clicked")}>basic button</BasicButton>;
