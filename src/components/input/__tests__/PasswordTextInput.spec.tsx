import * as React from "react";
import * as renderer from "react-test-renderer";

import PasswordTextInput from "../PasswordTextInput";

describe("PasswordTextInput test", () => {
  it("tests PasswordTextInput renders correctly ", () => {
    const passwordTextInput = renderer.create(<PasswordTextInput />).toJSON();
    expect(passwordTextInput).toMatchSnapshot();
  });
});
