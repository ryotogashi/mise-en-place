import * as React from "react";

import { radioData } from "../../constants/sampleData";
import CustomRadioButtonGroup from "./CustomRadioButtonGroup";

export default {
  title: "Input",
  component: CustomRadioButtonGroup
};

export const _CustomRadioButtonGroup = () => {
  const [customRadioCheckNumber, setCustomRadioCheckNumber] = React.useState(0);

  const handleRadioClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setCustomRadioCheckNumber(Number(value));
  };
  return (
    <CustomRadioButtonGroup
      labels={radioData}
      defaultChecked={customRadioCheckNumber}
      onClick={handleRadioClick}
    ></CustomRadioButtonGroup>
  );
};
