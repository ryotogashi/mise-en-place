import * as React from "react";

import { radioData } from "../../constants/sampleData";
import IntroPage from "../app-components/IntroPage";
import BasicTextInput from "./BasicTextInput";
import CustomRadioButtonGroup from "./CustomRadioButtonGroup";
import DateTextInput from "./DateTextInput";
import PasswordTextInput from "./PasswordTextInput";
import UnderlineTextInput from "./UnderlineTextInput";
import Section from "../app-components/Section";
import InputType from "./input-type";
import TextInputWithValidation from "./TextInputWithValidation";
import CustomCheckbox from "./CustomCheckbox";

const Inputs = () => {
  const [customRadioCheckNumber, setCustomRadioCheckNumber] = React.useState(0);

  const handleRadioClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setCustomRadioCheckNumber(Number(value));
  };

  const validations: [RegExp, string][] = [[/\S+@\S+\.\S+/, "Email address isn't valid."]];

  return (
    <Section title="Inputs">
      <IntroPage title="Basic Text Input" description="Normal text input">
        <BasicTextInput placeholder="placeholder" />
      </IntroPage>

      <IntroPage title="Underline Text Input" description="Underline text input">
        <UnderlineTextInput type={InputType.TEXT} placeholder="placeholder" />
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

      <IntroPage title="TextInput With Validation" description="TextInput with Validtion.">
        <TextInputWithValidation validations={validations} placeholder="email" />
      </IntroPage>

      <IntroPage title="Custom Radio Buttons" description="Custom radio button group">
        <CustomRadioButtonGroup labels={radioData} defaultChecked={customRadioCheckNumber} onClick={handleRadioClick} />
      </IntroPage>

      <IntroPage title="Custom Checkbox" description="Custom checkbox">
        <CustomCheckbox />
      </IntroPage>
    </Section>
  );
};

export default Inputs;
