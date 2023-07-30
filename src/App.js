import "./App.css";

import "./fonts/JetBrainsMono-VariableFont_wght.ttf";

import Header from "./components/Header";
import Resume from "./components/Resume";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Terminal from "./components/Terminal";

function App() {
  return (
    <div className="App">
      <Header />
      <Resume />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Terminal />
      <Footer />
    </div>
  );
}

export default App;
