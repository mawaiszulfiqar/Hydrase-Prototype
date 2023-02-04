import { createContext } from "react";

import { ContextValues } from "./types";

const Context = createContext<ContextValues>({
  username: "",
  setUsername: () => {},
  email: "",
  setEmail: () => {},
  isPremium: false,
  setIsPremium: () => {},
  userLevel: 0,
  setUserLevel: () => {},
  hyPoints: 0,
  setHyPoints: () => {},
  currentlyLearning: "",
  setCurrentlyLearning: () => {},
});

export default Context;
