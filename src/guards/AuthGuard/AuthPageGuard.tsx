import React from "react";
import { Navigate, Outlet } from "react-router";
import useUserInfo from "../../hooks/useUserInfo";

const AuthPageGuard = () => {
  const { username, email } = useUserInfo();

  return username && email ? <Navigate to="/" /> : <Outlet />;
};

export default AuthPageGuard;
