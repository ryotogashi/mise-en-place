import * as React from "react";

import BasicList from "./BasicList";

export default {
  title: "List",
  component: BasicList
};

export const _BasicList = () => <BasicList list={nameList}></BasicList>;

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
