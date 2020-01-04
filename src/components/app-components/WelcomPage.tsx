import styled from "@emotion/styled";
import * as React from "react";

import BasicCard from "../card/BasicCard";

const StyledDiv = styled.div`
  width: 85%;
  margin: 48px auto 64px auto;
  text-align: center;

  p {
    line-height: 140%;
    font-size: 20px;
  }
`;

const WelcomPage = () => (
  <StyledDiv>
    <BasicCard>
      <h1>Mise en place</h1>
      <p>
        Mise en place is a French culinary phrase which means "putting in place"
        or "everything in its place".It refers to the setup required before
        cooking, and is often used in professional kitchens to refer to
        organizing and arranging the ingredients (e.g., cuts of meat, relishes,
        sauces, par-cooked items, spices, freshly chopped vegetables, and other
        components) that a cook will require for the menu items that are
        expected to be prepared during a shift.
      </p>
    </BasicCard>
  </StyledDiv>
);

export default WelcomPage;
