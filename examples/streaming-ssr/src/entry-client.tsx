import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./Root";

ReactDOM.hydrateRoot(
  document,
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
