import * as React from "react";

import { UnderlineTextInput } from "../Input/UnderlineTextInput";
import { BasicList } from "../List/BasicList";
import { getRandomName } from "../../services/getRandomName";
import InputType from "../Input/input-type";

interface Props {
  isCaseIntensive: boolean;
}

export const SearchList = ({ isCaseIntensive }: Props) => {
  const [fullNameList, setFullNameList] = React.useState<string[]>([]);
  const [showingNameList, setShowingNameList] = React.useState<string[]>([]);

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
        isCaseIntensive ? item.toLowerCase().includes(searchWord.toLowerCase()) : item.includes(searchWord)
      )
    );
  };

  return (
    <>
      <UnderlineTextInput type={InputType.SEARCH} placeholder="search" onChange={handleChange} />
      <BasicList list={showingNameList} />
    </>
  );
};

SearchList.defaultProps = {
  isCaseIntensive: true
};
