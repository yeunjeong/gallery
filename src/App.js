import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Menubar from "./routes/MenuBar";
import Home from "./routes/Home";
import AboutMe from "./routes/AboutMe";
import WorkA from "./routes/WorkA";
import WorkB from "./routes/WorkB";
import WorkC from "./routes/WorkC";
import Contact from "./routes/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route index element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/worka" element={<WorkA />} />
        <Route path="/workb" element={<WorkB />} />
        <Route path="/workc" element={<WorkC />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
