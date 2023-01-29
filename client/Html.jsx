import React from "react";

export const Html = ({ children }) => {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="styles/Root.css"></link>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
};
