import * as React from "react";
import * as renderer from "react-test-renderer";

import SpinLoader from "../../../src/components/loaders/SpinLoader";

describe("SpinLoader test", () => {
  it("tests SpinLoader test render correctly", () => {
    const spinLoader = renderer.create(<SpinLoader />).toJSON();

    expect(spinLoader).toMatchSnapshot();
  });
});
