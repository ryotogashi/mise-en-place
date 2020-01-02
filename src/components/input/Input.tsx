import * as React from "react";

import SectionTitle from "../SectionTitle";
import BasicTextInput from "./BasicTextInput";
import DateTextInput from "./DateTextInput";
import PasswordTextInput from "./PasswordTextInput";
import UnderlineTextInput from "./UnderlineTextInput";
import { SectionDiv } from "../constants";
import RadioButtons from "./RadioButtons";

const Inputs = () => {
  const radioData = [
    { id: 1, name: "radioData1" },
    { id: 2, name: "radioData2" },
    { id: 3, name: "radioData3" }
  ];

  return (
    <SectionDiv>
      <SectionTitle>Inputs</SectionTitle>
      <BasicTextInput placeholder="placeholder" />
      <DateTextInput />
      <PasswordTextInput placeholder="password" />
      <UnderlineTextInput placeholder="placeholder" onChange={null} />
      <RadioButtons data={radioData} handleRadio={null} />
    </SectionDiv>
  );
};

export default Inputs;
