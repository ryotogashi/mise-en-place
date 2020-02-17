import * as React from "react";
import * as renderer from "react-test-renderer";

import SideNavigation from "../SideNavigation";

describe("SideNavigation test", () => {
  it("tests SideNavigation render correctly", () => {
    const sideNavigation = renderer.create(
      <SideNavigation
        logo="test"
        items={[
          ["test1", ["test child 1", "test child 2"]],
          ["test2", ["test child 1", "test child 2"]]
        ]}
      />
    );

    expect(sideNavigation).toMatchSnapshot();
  });
});
