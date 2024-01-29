import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

import HomePage from "./Components/HomePage";
import QuestionsPage from "./Components/QuestionsPage";
import ResultPage from "./Components/ResultPage";
import NotFound from "./Components/NotFound";
import PrevResponsesPage from "./Components/PrevResponsesPage";
import AboutMain from "./Components/AboutMain";

import { atom } from "jotai";
import ResponsePage from "./Components/ResponsePage";
import Landing from "./Components/Landing";

export const answersAtom = atom({});

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/survey" element={<QuestionsPage/>} />
      <Route path="/landing" element={<Landing/>} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/about-secra" element={<AboutMain />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/prev-results" element={<PrevResponsesPage />} />
      <Route path="/view-response" element={<ResponsePage />} />
    </Routes>
  );
}

export default App;
