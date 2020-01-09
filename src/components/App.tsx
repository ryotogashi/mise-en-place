import { Global } from "@emotion/core";
import styled from "@emotion/styled";
import * as React from "react";

import { GlobalStyle } from "./constants";
import WelcomPage from "./app-components/WelcomPage";
import Button from "./button/Button";
import Input from "./input/Input";
import Card from "./card/Card";
import List from "./list/List";
import Navigation from "./navigation/Navigation";
import Slideshow from "./slideshow/Slideshow";
import SideNavigation from "./navigation/SideNavigation";

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
      <SideNavigation
        logo="Mise en place"
        items={[
          [
            "Buttons",
            [
              "Basic Button",
              "Flat Button",
              "Icon Button",
              "Square Icon Button",
              "Material Button",
              "Toggle Button"
            ]
          ],
          [
            "Inputs",
            [
              "Basic Text Input",
              "Date Text Input",
              "Password Text Input",
              "Underline Text Input",
              "Radio Buttons",
              "Custom Radio Buttons"
            ]
          ],
          ["Cards", ["Basic Card", "Picture Covered Card"]],
          ["Lists", ["Normal List", "Card List", "Example list usage"]],
          ["Navigations", ["Side Navigation", "Top Navigation"]],
          ["Slideshows", ["Normal Slideshow"]]
        ]}
      />
      <main>
        <WelcomPage />
        <Button />
        <Input />
        <Card />
        <List />
        <Navigation />
        <Slideshow />
      </main>
    </StyledDiv>
  </>
);

export default App;
