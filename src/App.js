import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeName from "./Components/Home";
import ContactName from "./Components/Contact";
import AboutName from "./Components/About";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeName />}></Route>
        <Route path="/contact" element={<ContactName />}/>
        <Route path="/about" element={<AboutName />}/>
      </Routes>
    </Router>
  );
}
export default App;
