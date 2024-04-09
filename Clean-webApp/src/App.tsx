import "tailwindcss/tailwind.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import JourneyFinal from "./pages/JobPosting/JourneyFinal";
import JobProperty from "./pages/JobPosting/JobProperty";
import JobFreq from "./pages/JobPosting/JobFreq";
import JobRooms from "./pages/JobPosting/JobRooms";
import JobService from "./pages/ServiceListings/JobService";
import LandingHome from "./pages/Home/LandingHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/HomeMain" element={<LandingHome />} />
          <Route path="/JourneyStart/:D1002" element={<JobProperty />} />
          <Route path="/JourneySecond" element={<JobFreq />} />
          <Route path="/JourneyService" element={<JobService />} />
          <Route path="/Cleaning" element={<JobRooms />} />
          <Route path="/JourneyFinal" element={<JourneyFinal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
