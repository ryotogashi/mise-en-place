import * as React from "react";

import Section from "../app-components/Section";
import BasicList from "./BasicList";
import CardList from "./CardList";
import SearchList from "./SearchList";
import { names } from "../app-components/constants";

const List = () => (
  <Section title="List">
    <BasicList list={names} />
    <CardList list={names} />
    <SearchList isCaseIntensive={true} />
  </Section>
);

export default List;
