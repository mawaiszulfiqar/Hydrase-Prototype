import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { socket } from "../../App";
import Battle from "../../components/Battle/Battle";
import LearnView from "../../views/Learn/LearnView";

const Learn = () => {
  useEffect(() => {
    socket.emit("connection");
  }, []);

  // useEffect(() => {
  //   socket.on("show-success", (data: { title: string; message: string }) => {
  //     setPopupTitle(data.title);
  //     setPopupMessage(data.message);
  //     setShowPopUp(true);
  //   });
  // }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<LearnView />} />
        <Route
          path="/:originLang/:learningLang/unit/:unitId/lesson/:lessonId"
          element={<Battle />}
        />
      </Routes>
    </>
  );
};

export default Learn;
