import * as React from "react";

import BasicCard from "./BasicCard";

export default {
  title: "Card",
  component: BasicCard
};

export const _BasicCard = () => (
  <BasicCard width="350px" height="230px">
    <h2>basic card</h2>
    <p>basic card discrition</p>
  </BasicCard>
);
