// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppMenu from "./components/Menu/Menu";
import GridView from "./components/GridView/GridView";
import TileView from "./components/TileView/TileView";
import "./App.css";

const App = () => {
  return (
    <Router>
      <AppMenu>
        <Routes>
          <Route path="/" element={<GridView />} />
          <Route path="/tile-view/:id" element={<TileView />} />
        </Routes>
      </AppMenu>
    </Router>
  );
};

export default App;
