import React from "react";
import { UserProvider } from "../../contexts/User";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Providers;
