import styled from "@emotion/styled";
import * as React from "react";

const StyledListDiv = styled.div`
  margin: 16px;
  height: 300px;
  width: 60%;
  overflow: scroll;
  color: gray;

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

const BasicList = ({ list }) => (
  <StyledListDiv>
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </StyledListDiv>
);

export default BasicList;
