import Desktop from "./components/Desktop";
import Portfolio from "./components/Portfolio";
import { useDisplay } from "./contexts/DisplayContext";

function App() {
  const { display } = useDisplay();
  return (
    <div className="App">
      {display.mode === "portfolio" ? <Portfolio /> : <Desktop />}
    </div>
  );
}

export default App;
