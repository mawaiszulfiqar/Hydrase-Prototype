import React from "react";
import { Navigate, Outlet } from "react-router";
import useUserInfo from "../../hooks/useUserInfo";

const AuthGuard = () => {
  const { username, email } = useUserInfo();

  return username && email ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthGuard;
