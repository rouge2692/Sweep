import "tailwindcss/tailwind.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import JourneyFinal from "./pages/JobPosting/JourneyFinal";
import JobProperty from "./pages/JobPosting/JobProperty";
import JobFreq from "./pages/JobPosting/JobFreq";
import JobRooms from "./pages/JobPosting/JobRooms";
import JobService from "./pages/JobPosting/JobService";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/JourneyStart" element={<JobProperty />} />
          <Route path="/JourneySecond" element={<JobFreq />} />
          <Route path="/JourneyService" element={<JobService />} />
          <Route path="/JourneyThird" element={<JobRooms />} />
          <Route path="/JourneyFinal" element={<JourneyFinal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
