import * as React from "react";

import UnderlineTextInput from "../input/UnderlineTextInput";
import BasicList from "./BasicList";
import { names } from "../app-components/constants";

interface Props {
  isCaseIntensive: boolean;
}

const SearchList = ({ isCaseIntensive }: Props) => {
  const [nameList, setNameList] = React.useState(names);

  const handleChange = event => {
    const searchWord = event.target.value;
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
