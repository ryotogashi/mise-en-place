import styled from "@emotion/styled";
import * as React from "react";

import { secondary } from "../../constants/colors";

const StyledListDiv = styled.div`
  margin: 16px;
  height: 300px;
  width: 90%;
  overflow: scroll;
  color: ${secondary};

  ul {
    padding: 0;
  }

  li {
    list-style: none;
    padding: 8px;
    margin: 8px;

    &:hover {
      background-color: rgba(221, 221, 221, 0.4);

      cursor: pointer;
    }
  }
`;

interface Props {
  list: string[];
}

const BasicList = ({ list }: Props) => (
  <StyledListDiv>
    <ul>
      {list.map((item: string, index: number) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </StyledListDiv>
);

export default BasicList;
