import styled from "@emotion/styled";
import * as React from "react";

import BasicCard from "../cards/BasicCard";

const StyledDiv = styled.div`
  width: 80%;
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
        Mise en place is a French culinary phrase which means "putting in place" or "everything in its place". It refers
        to the setup required before cooking and is often used in professional kitchens to refer to organizing and
        arranging the ingredients. Relates this mindset to programming, preparing UI components before you implement an
        actual project is the most efficient and organized way to develop great work.
      </p>
    </BasicCard>
  </StyledDiv>
);

export default WelcomPage;
