import * as React from "react";
import * as renderer from "react-test-renderer";

import WelcomPage from "../WelcomPage";

describe("WelcomPage test", () => {
  it("tests WelcomPage renders correctly ", () => {
    const welcomPage = renderer.create(<WelcomPage />).toJSON();
    expect(welcomPage).toMatchSnapshot();
  });
});
