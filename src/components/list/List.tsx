import * as React from "react";

import SectionTitle from "../SectionTitle";
import { SectionDiv } from "../constants";
import BasicList from "./BasicList";
import CardList from "./CardList";
import SearchList from "./SearchList";
import { names } from "../constants";

const List = () => (
  <SectionDiv>
    <SectionTitle>List</SectionTitle>
    <BasicList list={names} />
    <CardList list={names} />
    <SearchList isCaseIntensive={true} />
  </SectionDiv>
);

export default List;
