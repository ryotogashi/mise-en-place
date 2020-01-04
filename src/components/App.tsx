import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import * as React from "react";

import WelcomPage from "./WelcomPage";
import Button from "./button/Button";
import Input from "./input/Input";
import Card from "./card/Card";
import List from "./list/List";
import Navigation from "./navigation/Navigation";
import SideNavigation from "./navigation/SideNavigation";

const globalStyle = css`
  body {
    margin: 0;
  }
`;

const StyledDiv = styled.div`
  display: flex;

  main {
    height: 100vh;
    width: 100%;
    overflow: scroll;
    float: right;
  }
`;
const App = () => (
  <>
    <Global styles={globalStyle} />
    <StyledDiv>
      <SideNavigation
        logo="Mise en place"
        items={[
          ["Button", null],
          ["Input", null],
          ["Card", null],
          ["List", null],
          ["Navigation", null]
        ]}
      />
      <main>
        <WelcomPage />
        <Button />
        <Input />
        <Card />
        <List />
        <Navigation />
      </main>
    </StyledDiv>
  </>
);

export default App;
