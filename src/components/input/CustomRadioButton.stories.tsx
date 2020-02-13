import * as React from "react";
import { action } from "@storybook/addon-actions";
import { radioData } from "../../constants";

import CustomRaioButton from "./CustomRadioButton";

export default {
  title: "Input",
  component: CustomRaioButton
};

export const _CustomRaioButton = () => {
  const [customRadioCheckNumber, setCustomRadioCheckNumber] = React.useState(0);

  const handleRadioClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setCustomRadioCheckNumber(Number(value));
  };
  return (
    <CustomRaioButton
      labels={radioData}
      defaultChecked={customRadioCheckNumber}
      onClick={handleRadioClick}
    ></CustomRaioButton>
  );
};
