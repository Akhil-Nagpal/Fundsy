import { Route, Routes } from "react-router-dom";
import { Ecommerce } from "../pages/index";

function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Ecommerce />} />
      <Route path="/ecommerce" element={<Ecommerce />} />
    </Routes>
  );
}

export default DashboardRoutes;
