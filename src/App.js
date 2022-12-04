import { useState } from "react";
import Desktop from "./components/Desktop";
import Portfolio from "./components/Portfolio";
import "./App.css";
import Tracking from "./components/Tracker/Tracking";

function App() {
  const [display, setDisplay] = useState("portfolio");

  return (
    <div className="App">
      {display === "portfolio" ? (
        <Portfolio display={display} onSetDisplay={setDisplay} />
      ) : (
        <Desktop display={display} onSetDisplay={setDisplay} />
      )}
    </div>
  );
}

export default App;
