import * as React from "react";
import * as renderer from "react-test-renderer";

import TopNavigation from "../TopNavigation";

describe("TopNavigation test", () => {
  it("tests TopNavigation render correctly", () => {
    const topNavigation = renderer.create(<TopNavigation logo="test" items={["test1", "test2", "test3", "test4"]} />);

    expect(topNavigation).toMatchSnapshot();
  });
});
