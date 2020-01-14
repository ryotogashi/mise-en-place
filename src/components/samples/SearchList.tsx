import * as React from "react";

import UnderlineTextInput from "../input/UnderlineTextInput";
import BasicList from "../list/BasicList";

interface Props {
  list: string[];
  isCaseIntensive: boolean;
}

const SearchList = ({ list, isCaseIntensive }: Props) => {
  const [listItem, setListItem] = React.useState(list);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const searchWord = event.currentTarget.value;
    setListItem(
      list.filter(item =>
        isCaseIntensive
          ? item.toLowerCase().includes(searchWord.toLowerCase())
          : item.includes(searchWord)
      )
    );
  };

  return (
    <>
      <UnderlineTextInput placeholder="search" onChange={handleChange} />
      <BasicList list={listItem} />
    </>
  );
};

export default SearchList;
