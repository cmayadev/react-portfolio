import React from "react";
import { Routes, Route } from "react-router-dom";

// Importa los componentes necesarios
import Header from "./components/Header";
import Resume from "./components/Resume";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Terminal from "./components/Terminal";

import "./App.css";
import Tracking from "./components/Tracker/Tracking";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Resume />
              <About />
              <Skills />
              <Experience />
              <Contact />
              <Terminal />
              <Footer />
            </>
          }
        />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
    </div>
  );
}

export default App;
