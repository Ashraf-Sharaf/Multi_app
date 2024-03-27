import "./style/utilities.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from "./pages/weather/weather";
import Notes from "./pages/notes/notes";
import Calculator from "./pages/calculator/calculator";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
