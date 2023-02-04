import React, { useState } from "react";
import Context from "./Context";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isPremium, setIsPremium] = useState(false);
  const [userLevel, setUserLevel] = useState(0);
  const [hyPoints, setHyPoints] = useState(0);
  const [currentlyLearning, setCurrentlyLearning] = useState("");

  return (
    <Context.Provider
      value={{
        username,
        setUsername,
        email,
        setEmail,
        isPremium,
        setIsPremium,
        userLevel,
        setUserLevel,
        hyPoints,
        setHyPoints,
        currentlyLearning,
        setCurrentlyLearning,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
