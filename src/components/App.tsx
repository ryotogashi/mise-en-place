import { Global } from "@emotion/core";
import styled from "@emotion/styled";
import * as React from "react";

import GlobalStyle from "../constants/globalStyle";
import { siteNavData } from "../constants/sampleData";
import WelcomPage from "./app-components/WelcomPage";
import Button from "./buttons/Button";
import Input from "./inputs/Input";
import Card from "./cards/Card";
import List from "./lists/List";
import Navigation from "./navigations/Navigation";
import Slideshow from "./slideshows/Slideshow";
import SideNavigation from "./navigations/SideNavigation";
import ComposedComponent from "./composite-components/CompositeComponent";
import Avatars from "./avatars";

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
        <Navigation />
        <Slideshow />
        <ComposedComponent />
      </main>
    </StyledDiv>
  </>
);

export default App;
