import "tailwindcss/tailwind.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import JourneyFinal from "./pages/JobPosting/global/JourneyFinal";
import JobProperty from "./pages/JobPosting/global/JobProperty";
import JobFreq from "./pages/JobPosting/global/Archive/JobFreq";
import JobRooms from "./pages/JobPosting/global/JobRooms";
import JobService from "./pages/ServiceListings/JobService";
import LandingHome from "./pages/Home/LandingHome";
import Login from "./pages/Login/Login";
import ProfileRoot from "./pages/CleanerProfile/Profile/ProfileRoot";
import RegiLocation from "./pages/CleanerRegistration/global/RegiLocation";
import RegiJobProperty from "./pages/CleanerRegistration/global/RegiJobProperty";
import RegiJobRooms from "./pages/CleanerRegistration/global/RegiJobRooms";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/HomeMain" element={<LandingHome />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/RegiLocation" element={<RegiLocation />} />
          <Route path="/RegiProperties" element={<RegiJobProperty />} />
          <Route path="/RegiRooms" element={<RegiJobRooms />} />
          <Route path="/Profile/*" element={<ProfileRoot />} />
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
