import * as React from "react";

import SectionTitle from "../SectionTitle";
import { SectionDiv } from "../constants";
import SimpleList from "./SimpleList";

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
    <SimpleList list={names} />
  </SectionDiv>
);

export default List;
