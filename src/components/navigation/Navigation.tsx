import * as React from "react";

import Section from "../app-components/Section";
import SideNavigation from "./SideNavigation";
import TopNavigation from "./TopNavigation";

const List = () => (
  <Section title="Navigation">
    <SideNavigation
      logo={"logo item"}
      items={[
        ["item 1", null],
        ["item 2", ["item 2 child 1", "item 2 child 2", "item 2 child 3"]],
        ["item 3", null],
        ["item 4", ["item 4 child 1", "item 4 child 2", "item 4 child 3"]]
      ]}
    />
    <TopNavigation
      logo={"logo item"}
      items={["item 1", "item 2", "item 3", "item 4"]}
    />
  </Section>
);

export default List;
