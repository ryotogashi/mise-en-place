import * as React from "react";

import UnderlineTextInput from "../input/UnderlineTextInput";
import BasicList from "./BasicList";
import { names } from "../constants";

interface Props {
  isCaseIntensive: boolean;
}

const SearchList = ({ isCaseIntensive }: Props) => {
  const [nameList, setNameList] = React.useState(names);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const searchWord = event.currentTarget.value;
    setNameList(
      names.filter(item =>
        isCaseIntensive
          ? item.toLowerCase().includes(searchWord.toLowerCase())
          : item.includes(searchWord)
      )
    );
  };

  return (
    <>
      <UnderlineTextInput placeholder="search" onChange={handleChange} />
      <BasicList list={nameList} />
    </>
  );
};

export default SearchList;
