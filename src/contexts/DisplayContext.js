import React, { createContext, useState, useContext } from "react";

const DisplayContext = createContext();

export const useDisplay = () => useContext(DisplayContext);

export const DisplayProvider = ({ children }) => {
  const [display, setDisplay] = useState({
    mode: "portfolio",
    status: "closed",
  });

  return (
    <DisplayContext.Provider value={{ display, setDisplay }}>
      {children}
    </DisplayContext.Provider>
  );
};
