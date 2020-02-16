import * as React from "react";
import * as renderer from "react-test-renderer";

import IntroPage from "../IntroPage";

describe("IntroPage test", () => {
  it("tests IntroPage renders correctly ", () => {
    const introPage = renderer
      .create(
        <IntroPage title="test" description="test">
          test
        </IntroPage>
      )
      .toJSON();
    expect(introPage).toMatchSnapshot();
  });
});
