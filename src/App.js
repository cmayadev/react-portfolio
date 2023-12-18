import Desktop from "./components/Desktop";
import Portfolio from "./components/Portfolio";
import { useDisplay } from "./contexts/DisplayContext";
import "./App.css";

function App() {
  const { display } = useDisplay();
  return (
    <div className="App">
      {display === "portfolio" ? <Portfolio /> : <Desktop />}
    </div>
  );
}

export default App;
