import { Global } from "@emotion/core";
import styled from "@emotion/styled";
import * as React from "react";

import { GlobalStyle, siteNavData } from "../constants";
import WelcomPage from "./app-components/WelcomPage";
import Button from "./button/Button";
import Input from "./input/Input";
import Card from "./card/Card";
import List from "./list/List";
import Navigation from "./navigation/Navigation";
import Slideshow from "./slideshow/Slideshow";
import SideNavigation from "./navigation/SideNavigation";
import ComposedComponent from "./composite-component/CompositeComponent";

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
    <Global styles={GlobalStyle} />
    <StyledDiv>
      <SideNavigation logo="Mise en place" items={siteNavData} />
      <main>
        <WelcomPage />
        <Button />
        <Input />
        <Card />
        <List />
        <Navigation />
        <Slideshow />
        <ComposedComponent />
      </main>
    </StyledDiv>
  </>
);

export default App;
