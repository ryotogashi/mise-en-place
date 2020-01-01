import * as React from "react";

import SectionTitle from "../SectionTitle";
import { SectionDiv } from "../constants";
import BasicList from "./BasicList";
import CardList from "./CardList";

const names = [
  "Ana Laura",
  "Anahi",
  "Andrea",
  "Ayumi",
  "Caro",
  "Cedric Balm",
  "Celeste",
  "Chad Demmer",
  "Elif Kurtcu",
  "Ellyn Hay",
  "Enuki Kvintradze",
  "Erika Kin",
  "Ryo Togashi",
  "Rei Togashi",
  "Riku Togashi"
];

const List = () => (
  <SectionDiv>
    <SectionTitle>List</SectionTitle>
    <BasicList list={names} />
    <CardList list={names} />
  </SectionDiv>
);

export default List;
