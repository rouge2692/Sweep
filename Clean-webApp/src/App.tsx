import "tailwindcss/tailwind.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import JourneyFinal from "./pages/JobPosting/global/JourneyFinal";
import JobProperty from "./pages/JobPosting/global/JobProperty";
import JobFreq from "./pages/JobPosting/global/JobFreq";
import JobRooms from "./pages/JobPosting/global/JobRooms";
import JobService from "./pages/ServiceListings/JobService";
import LandingHome from "./pages/Home/LandingHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/HomeMain" element={<LandingHome />} />
          <Route path="/JourneyService/:st01_D1002" element={<JobService />} />
          <Route
            path="/JourneyStart/:sp01_D1002/:st01_D1002"
            element={<JobProperty />}
          />
          <Route path="/JourneySecond" element={<JobFreq />} />
          <Route
            path="/JourneyRooms/:sp01_D1002/:st01_D1002/:st01_D1007D1006"
            element={<JobRooms />}
          />
          <Route path="/JourneyFinal" element={<JourneyFinal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
