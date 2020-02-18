import * as React from "react";
import * as renderer from "react-test-renderer";

import NavigationNode from "../NavigationNode";

describe("NavigationNode test", () => {
  it("tests NavigationNode render correctly", () => {
    const navigationNode = renderer.create(<NavigationNode item="item" />);

    expect(navigationNode).toMatchSnapshot();
  });
});
