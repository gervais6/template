import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import de React Router
import Dev1 from "./pages/dev1";
import Dev2 from "./pages/dev2";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/dev1" element={<Dev1/>} />
          <Route path="/dev2" element={<Dev2/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default  App;
