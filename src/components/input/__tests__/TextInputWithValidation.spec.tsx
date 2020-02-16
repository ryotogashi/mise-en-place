import * as React from "react";
import * as renderer from "react-test-renderer";

import TextInputWithValidation from "../TextInputWithValidation";

describe("TextInputWithValidation test", () => {
  it("tests TextInputWithValidation renders correctly ", () => {
    const textInputWithValidation = renderer.create(<TextInputWithValidation />).toJSON();
    expect(textInputWithValidation).toMatchSnapshot();
  });
});
