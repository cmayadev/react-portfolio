import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./sass/main.scss";
import reportWebVitals from "./reportWebVitals";
import { DisplayProvider } from "./contexts/DisplayContext";

ReactDOM.render(
  <React.StrictMode>
    <DisplayProvider>
      <App />
    </DisplayProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
