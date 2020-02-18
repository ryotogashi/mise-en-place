import * as React from "react";

import CardList from "./CardList";

export default {
  title: "List",
  component: CardList
};

export const _CardList = () => <CardList list={nameList}></CardList>;

const nameList = [
  "Gulnura",
  "Wolf",
  "Ιερώνυμος",
  "Eduardo",
  "Bryan",
  "Λυσικλής",
  "Bram",
  "Wilde",
  "Augustín",
  "Roza",
  "Alexandrina"
];
