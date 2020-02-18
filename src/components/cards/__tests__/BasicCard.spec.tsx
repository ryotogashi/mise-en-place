import * as React from "react";
import * as renderer from "react-test-renderer";

import BasicCard from "../BasicCard";

describe("BasicCard test", () => {
  it("tests BasicCard renders correctly ", () => {
    const basicCard = renderer
      .create(
        <BasicCard>
          <h1>test</h1>
          <p>test test</p>
        </BasicCard>
      )
      .toJSON();
    expect(basicCard).toMatchSnapshot();
  });
});
