import { Navigate, Route, Routes } from "react-router";
import Learn from "./Pages/Learn/Learn";
import SignIn from "./Pages/SignIn/SignIn";
import { io } from "socket.io-client";

export const socket = io("ws://localhost:9999");

function App() {
  return (
    <Routes>
      <Route path="/" element={<Learn />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
