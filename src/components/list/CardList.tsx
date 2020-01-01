import styled from "@emotion/styled";
import * as React from "react";

import SimpleCard from "../card/BasicCard";

const StyledListDiv = styled.div`
  margin: 16px;
  height: 400px;
  overflow: scroll;
  width: 80%;
`;

const CardList = ({ list }) => (
  <StyledListDiv>
    {list.map((item, index) => (
      <SimpleCard key={index} title={item} detail="" />
    ))}
  </StyledListDiv>
);

export default CardList;
