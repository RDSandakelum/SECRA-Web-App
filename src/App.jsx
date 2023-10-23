import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

import HomePage from "./Components/HomePage";
import QuestionsPage from "./Components/QuestionsPage";
import ResultPage from "./Components/ResultPage";
import NotFound from "./Components/NotFound";
import PrevResponsesPage from "./Components/PrevResponsesPage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/survey" element={<QuestionsPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/prev-results" element={<PrevResponsesPage />} />
    </Routes>
  );
}

export default App;
