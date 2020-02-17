import * as React from "react";
import * as renderer from "react-test-renderer";

import CardList from "../CardList";

describe("CardList test", () => {
  it("tests CardList test render correctly", () => {
    const cardList = renderer.create(<CardList list={["list item1", "list item2", "list item3"]} />).toJSON();

    expect(cardList).toMatchSnapshot();
  });
});
