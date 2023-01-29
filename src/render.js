import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { App } from "../client/App.jsx";

export const render = (response) => {
  const stream = renderToPipeableStream(<App />, {
    bootstrapScripts: ["client.bundle.js"],
    onShellReady() {
      response.setHeader("content-type", "text/html");
      stream.pipe(response);
    },
  });
};
