import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Area,
  Bar,
  ColorMapping,
  Financial,
  Line,
  Pie,
  Pyramid,
  Stacked,
} from "../pages/index";

function ChartsRoutes() {
  return (
    <Routes>
      <Route path="/line" element={<Line />} />
      <Route path="/area" element={<Area />} />
      <Route path="/bar" element={<Bar />} />
      <Route path="/pie" element={<Pie />} />
      <Route path="/financial" element={<Financial />} />
      <Route path="/color-mapping" element={<ColorMapping />} />
      <Route path="/pyramid" element={<Pyramid />} />
      <Route path="/stacked" element={<Stacked />} />
    </Routes>
  );
}

export default ChartsRoutes;
