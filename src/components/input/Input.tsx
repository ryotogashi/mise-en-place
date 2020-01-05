import * as React from "react";

import IntroPage from "../app-components/IntroPage";
import BasicTextInput from "./BasicTextInput";
import DateTextInput from "./DateTextInput";
import PasswordTextInput from "./PasswordTextInput";
import UnderlineTextInput from "./UnderlineTextInput";
import Section from "../app-components/Section";
import RadioButtons from "./RadioButtons";

const Inputs = () => {
  const radioData = [
    { id: 1, name: "radioData1" },
    { id: 2, name: "radioData2" },
    { id: 3, name: "radioData3" }
  ];

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
        description="Password type input which is able to see the password by clicking icon."
      >
        <PasswordTextInput />
      </IntroPage>

      <IntroPage
        title="Underline Text Input"
        description="Underline text input"
      >
        <UnderlineTextInput />
      </IntroPage>

      <IntroPage title="Radio Buttons" description="Normal radio button group">
        <RadioButtons data={radioData} />
      </IntroPage>
    </Section>
  );
};

export default Inputs;
