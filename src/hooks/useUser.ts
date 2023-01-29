import React, { useContext } from "react";

import { UserContext } from "../contexts/User";

const useUser = () => {
  return {
    ...useContext(UserContext),
  };
};

export default useUser;
