import * as React from "react";

import Section from "../app-components/Section";
import IntroPage from "../app-components/IntroPage";
import BasicList from "./BasicList";
import CardList from "./CardList";
import getRandomName from "../../services/getRandomName";

const List = () => {
  const [apiNames, setApiNames] = React.useState([]);
  React.useEffect(() => {
    (async () => setApiNames(await getRandomName()))();
  }, []);
  return (
    <Section title="Lists">
      <IntroPage title="Normal List" description="Normal list">
        <BasicList list={apiNames} />
      </IntroPage>

      <IntroPage title="Card List" description="Card list">
        <CardList list={apiNames} />
      </IntroPage>
    </Section>
  );
};

export default List;
