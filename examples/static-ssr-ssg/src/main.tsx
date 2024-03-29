import React from "react";
import ReactDOMServer from "react-dom/server";
import { App } from "./App";

export function render() {
  const html = ReactDOMServer.renderToStaticMarkup(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  return { html };
}
