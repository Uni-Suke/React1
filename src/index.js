import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <React.Fragment>
      <h1>hello</h1>
      <p>aaa</p>
    </React.Fragment>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
