import React from "react";
import { action } from "@storybook/addon-actions";

import BasicButton from "../src/components/button/BasicButton";

export default {
  title: "Button",
  component: BasicButton
};

export const _BasicButton = () => <BasicButton value={"basic button"} onClick={action("clicked")} />;
