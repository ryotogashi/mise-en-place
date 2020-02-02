import * as React from "react";

import UnderlineTextInput from "../input/UnderlineTextInput";
import BasicList from "../list/BasicList";
import getRandomName from "../../services/getRandomName";

interface Props {
  isCaseIntensive: boolean;
}

const SearchList = ({ isCaseIntensive }: Props) => {
  const [fullNameList, setFullNameList] = React.useState([]);
  const [showingNameList, setShowingNameList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const list = await getRandomName();
      setFullNameList(list);
      setShowingNameList(list);
    })();
  }, []);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const searchWord = event.currentTarget.value;
    setShowingNameList(
      fullNameList.filter(item =>
        isCaseIntensive
          ? item.toLowerCase().includes(searchWord.toLowerCase())
          : item.includes(searchWord)
      )
    );
  };

  return (
    <>
      <UnderlineTextInput placeholder="search" onChange={handleChange} />
      <BasicList list={showingNameList} />
    </>
  );
};

export default SearchList;
