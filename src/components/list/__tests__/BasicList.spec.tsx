import * as React from "react";
import * as renderer from "react-test-renderer";

import BasicList from "../BasicList";

describe("BasicList test", () => {
  it("tests BasicList test render correctly", () => {
    const basicList = renderer.create(<BasicList list={["list item1", "list item2", "list item3"]} />).toJSON();

    expect(basicList).toMatchSnapshot();
  });
});
