import Desktop from "./components/Desktop";
import Portfolio from "./components/Portfolio";
import { useDisplay } from "./contexts/DisplayContext";
import "./App.css";

function App() {
  const { display } = useDisplay();
  return (
    <div className="App">
      {display.mode === "portfolio" ? (
        <Portfolio />
      ) : (
        <Desktop status={display.status} />
      )}
    </div>
  );
}

export default App;
