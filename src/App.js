import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

const Home = lazy(() => import("./Home"));
const Character = lazy(() => import("./Character"));
const Pet = lazy(() => import("./Pet"));
const Maps = lazy(() => import("./Maps"));
const Weapon = lazy(() => import("./Weapon"));
const Suport = lazy(() => import("./Suport"));
const Berita = lazy(() => import("./Berita"));
const App = () => (
  <div>
    <Navbar />
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Character" element={<Character />} />
          <Route path="/Pet" element={<Pet />} />
          <Route path="/Maps" element={<Maps />} />
          <Route path="/Weapon" element={<Weapon />} />
          <Route path="/Suport" element={<Suport />} />
          <Route path="/Berita" element={<Berita />} />
        </Routes>
      </Suspense>
    </Router>
  </div>
);

export default App;
