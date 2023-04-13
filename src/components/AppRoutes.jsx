import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieInfo from "./MovieInfo";
import Home from "./Home";
import Years from "./years";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/info/:id" element={<MovieInfo />} />
          <Route path="/year/:year" element={<Years />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
