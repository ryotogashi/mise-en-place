import * as React from "react";

import Section from "../app-components/Section";
import IntroPage from "../app-components/IntroPage";
import BasicList from "./BasicList";
import CardList from "./CardList";
import SearchList from "./SearchList";
import { names } from "../constants";

const List = () => (
  <Section title="Lists">
    <IntroPage title="Basic Text Input" description="Normal text input">
      <BasicList list={names} />
    </IntroPage>

    <IntroPage title="Basic Text Input" description="Normal text input">
      <CardList list={names} />
    </IntroPage>

    <IntroPage title="Basic Text Input" description="Normal text input">
      <SearchList isCaseIntensive={true} />
    </IntroPage>
  </Section>
);

export default List;
