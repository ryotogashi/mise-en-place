import * as React from "react";
import * as renderer from "react-test-renderer";

import NavigationLogo from "../NavigationLogo";

describe("NavigationLogo test", () => {
  it("tests NavigationLogo render correctly", () => {
    const navigationLogo = renderer.create(<NavigationLogo logo="test" />);

    expect(navigationLogo).toMatchSnapshot();
  });
});
