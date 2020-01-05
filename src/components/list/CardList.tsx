import styled from "@emotion/styled";
import * as React from "react";

import SimpleCard from "../card/BasicCard";

const StyledListDiv = styled.div`
  margin: 16px;
  height: 400px;
  overflow: scroll;
  width: 90%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  div {
    width: 43%;
  }
`;

interface Props {
  list: string[];
}

const CardList = ({ list }: Props) => (
  <StyledListDiv>
    {list.map((item: string, index: number) => (
      <SimpleCard key={index}>
        <h2>{item}</h2>
      </SimpleCard>
    ))}
  </StyledListDiv>
);

export default CardList;
