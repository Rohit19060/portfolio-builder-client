import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Edit from "./Edit";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Edit />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
