import styled from "@emotion/styled";
import * as React from "react";
import * as ReactDOM from "react-dom";

const App = () => (
  <TestDiv>
    <h1>hello world</h1>
  </TestDiv>
);

const TestDiv = styled.div`
  background-color: blue;
`;

ReactDOM.render(<App />, document.getElementById("root"));
