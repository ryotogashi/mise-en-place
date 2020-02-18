import * as React from "react";

import SearchList from "./SearchList";

export default {
  title: "Composite Component",
  component: SearchList
};

export const _SearchList = () => <SearchList isCaseIntensive={true}></SearchList>;
