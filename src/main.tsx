import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";

if (typeof document !== "undefined") {
  ReactDOM.render(<App />, document.getElementById("root"));
}
