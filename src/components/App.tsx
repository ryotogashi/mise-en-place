import { Global } from "@emotion/core";
import styled from "@emotion/styled";
import * as React from "react";

import GlobalStyle from "../constants/globalStyle";
import { siteNavData } from "../constants/sampleData";
import WelcomPage from "./app-components/WelcomPage";
import Button from "./buttons";
import Input from "./inputs";
import Card from "./cards";
import List from "./lists";
import Navigation from "./navigations";
import Slideshow from "./slideshows";
import SideNavigation from "./navigations/SideNavigation";
import ComposedComponent from "./composite-components";
import Avatars from "./avatars";
import Loaders from "./loaders";

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
        <Avatars />
        <Loaders />
        <Navigation />
        <Slideshow />
        <ComposedComponent />
      </main>
    </StyledDiv>
  </>
);

export default App;
