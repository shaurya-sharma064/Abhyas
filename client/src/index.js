import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import App from "./layouts/App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
