import * as React from "react";
import * as renderer from "react-test-renderer";

import SearchList from "../SearchList";

describe("SearchList test", () => {
  it("tests SearchList renders correctly ", () => {
    const searchList = renderer.create(<SearchList />).toJSON();
    expect(searchList).toMatchSnapshot();
  });
});
