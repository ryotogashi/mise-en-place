import * as React from "react";
import * as renderer from "react-test-renderer";

import SignInForm from "../SignInForm";

describe("SignInForm test", () => {
  it("tests SignInForm renders correctly ", () => {
    const signInForm = renderer.create(<SignInForm />).toJSON();
    expect(signInForm).toMatchSnapshot();
  });
});
