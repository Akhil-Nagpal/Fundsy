import { Route, Routes } from "react-router-dom";
import { Orders, Employees, Customers } from "../pages/index";

function PagesRoutes() {
  return (
    <Routes>
      <Route path="/orders" element={<Orders />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/customers" element={<Customers />} />
    </Routes>
  );
}

export default PagesRoutes;
