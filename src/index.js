import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./sass/main.scss";
import { DisplayProvider } from "./contexts/DisplayContext";

ReactDOM.render(
  <React.StrictMode>
    <DisplayProvider>
      <App />
    </DisplayProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
