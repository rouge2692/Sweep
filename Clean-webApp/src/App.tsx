import "tailwindcss/tailwind.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import OrderJourney from "./pages/OrderJourney/OrderJourney";
import JourneySecond from "./pages/OrderJourney/JourneySecond";
import JourneyThird from "./pages/OrderJourney/JourneyThird";
import JourneyFinal from "./pages/OrderJourney/JourneyFinal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/JourneyStart" element={<OrderJourney />} />
          <Route path="/JourneySecond" element={<JourneySecond />} />
          <Route path="/JourneyThird" element={<JourneyThird />} />
          <Route path="/JourneyFinal" element={<JourneyFinal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
