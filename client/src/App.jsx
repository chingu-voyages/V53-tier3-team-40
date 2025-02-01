import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import HelpAnimalsLayout from "./layout/HelpAnimalsLayout";
import MapLayout from "./layout/MapLayout";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/help-animals" element={<HelpAnimalsLayout />} />
          <Route path="/search" element={<HomeLayout />} />
          <Route path="/map" element={<MapLayout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
