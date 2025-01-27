import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// React 18 uses createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
