import { Navigate, Route, Routes, useNavigate } from "react-router";
import Learn from "./pages/learn/Learn";
import SignIn from "./pages/SignIn/SignIn";
import { io } from "socket.io-client";
import AuthGuard from "./guards/AuthGuard/AuthGuard";
import AuthPageGuard from "./guards/AuthGuard/AuthPageGuard";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import useUserInfo from "./hooks/useUserInfo";
import Loader from "./components/Loader/Loader";

export const socket = io("ws://localhost:9999", {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionAttempts: 30,
});

const App = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const { setUsername, setEmail } = useUserInfo();

  useEffect(() => {
    const accessToken = Cookies.get("access_token");

    if (accessToken) {
      fetch("http://localhost:9999/api/auth/verifyToken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessToken }),
      })
        .then((res) => {
          if (res.status === 200) return res.json();
          else throw new Error("Invalid access token!");
        })
        .then((data) => {
          axios
            .get(`http://localhost:9999/api/users/getProfile/${data.userId}`, {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            })
            .then((res) => {
              setUsername(res.data.username);
              setEmail(res.data.email);
            })
            .then(() => setLoading(false));
        })
        .catch((err) => {
          navigate("/login");
          setLoading(false);
        });
    } else {
      navigate("/login");
      setLoading(false);
      console.log("No access token found! Navigate to /login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? <Loader /> : null}
      <Routes>
        <Route element={<AuthGuard />}>
          <Route path="/learn/*" element={<Learn />} />
        </Route>
        <Route element={<AuthPageGuard />}>
          <Route path="/login" element={<SignIn />} />
        </Route>
        <Route path="*" element={<Navigate to="/learn" replace />} />
      </Routes>
    </>
  );
};

export default App;
