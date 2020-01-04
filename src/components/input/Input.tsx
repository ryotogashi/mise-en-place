import * as React from "react";

import BasicTextInput from "./BasicTextInput";
import DateTextInput from "./DateTextInput";
import PasswordTextInput from "./PasswordTextInput";
import UnderlineTextInput from "./UnderlineTextInput";
import Section from "../Section";
import RadioButtons from "./RadioButtons";

const Inputs = () => {
  const radioData = [
    { id: 1, name: "radioData1" },
    { id: 2, name: "radioData2" },
    { id: 3, name: "radioData3" }
  ];

  return (
    <Section title="Input">
      <BasicTextInput placeholder="placeholder" />
      <DateTextInput />
      <PasswordTextInput placeholder="password" />
      <UnderlineTextInput placeholder="placeholder" onChange={null} />
      <RadioButtons data={radioData} handleRadio={null} />
    </Section>
  );
};

export default Inputs;
