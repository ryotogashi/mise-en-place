import * as React from "react";

import { radioData } from "../../constants";
import IntroPage from "../app-components/IntroPage";
import BasicTextInput from "./BasicTextInput";
import CustomRadioButtons from "./CustomRadioButton";
import DateTextInput from "./DateTextInput";
import PasswordTextInput from "./PasswordTextInput";
import UnderlineTextInput from "./UnderlineTextInput";
import Section from "../app-components/Section";
import RadioButtons from "./RadioButtons";

const Inputs = () => {
  const [customRadioCheckNumber, setCustomRadioCheckNumber] = React.useState(0);

  const handleRadioClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;
    setCustomRadioCheckNumber(Number(value));
  };

  return (
    <Section title="Inputs">
      <IntroPage title="Basic Text Input" description="Normal text input">
        <BasicTextInput />
      </IntroPage>

      <IntroPage title="Date Text Input" description="Date type input">
        <DateTextInput />
      </IntroPage>

      <IntroPage
        title="Password Text Input"
        description="Password type input which is able to see the password by clicking icon. The icon is optional."
      >
        <PasswordTextInput showHideIcon={true} />
      </IntroPage>

      <IntroPage
        title="Underline Text Input"
        description="Underline text input"
      >
        <UnderlineTextInput />
      </IntroPage>

      <IntroPage title="Radio Buttons" description="Normal radio button group">
        <RadioButtons labels={radioData} />
      </IntroPage>

      <IntroPage
        title="Custom Radio Buttons"
        description="Custom radio button group"
      >
        <CustomRadioButtons
          labels={radioData}
          checkedNumber={customRadioCheckNumber}
          onClick={handleRadioClick}
        />
      </IntroPage>
    </Section>
  );
};

export default Inputs;
