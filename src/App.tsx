import { Navigate, Route, Routes } from "react-router";
import Learn from "./pages/Learn/Learn";
import SignIn from "./pages/SignIn/SignIn";
import { io } from "socket.io-client";

export const socket = io("wss://localhost:9999", {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionAttempts: 30,
});

function App() {
  return (
    <Routes>
      <Route path="/learn/*" element={<Learn />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="*" element={<Navigate to="/learn" replace />} />
    </Routes>
  );
}

export default App;
