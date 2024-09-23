import { Route, Routes } from "react-router-dom";
import {
  Calendar,
  ColorPicker,
  Editor,
  Kanban,
} from "../pages/index";

function AppsRoutes() {
  return (
    <Routes>
      <Route path="/kanban" element={<Kanban />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/color-picker" element={<ColorPicker />} />
    </Routes>
  );
}

export default AppsRoutes;
