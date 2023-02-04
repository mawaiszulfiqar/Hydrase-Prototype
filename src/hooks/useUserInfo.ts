import React, { useContext } from "react";

import { UserContext } from "../contexts/User";

const useUserInfo = () => {
  return {
    ...useContext(UserContext),
  };
};

export default useUserInfo;
