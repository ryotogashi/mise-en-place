import styled from '@emotion/styled';
import * as React from 'react';

import { BasicCard } from '../Card/BasicCard';

export interface Props {
  list: string[];
}

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

export const CardList = ({ list }: Props) => (
  <StyledListDiv>
    {list.map((item: string, index: number) => (
      <BasicCard key={index}>
        <h4>{item}</h4>
      </BasicCard>
    ))}
  </StyledListDiv>
);
