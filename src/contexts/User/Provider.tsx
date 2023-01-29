import React, { useState } from "react";
import Context from "./Context";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [currentlyLearning, setCurrentlyLearning] = useState("de");

  return (
    <Context.Provider value={{ currentlyLearning, setCurrentlyLearning }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
