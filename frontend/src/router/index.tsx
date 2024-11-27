import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { EmployeeControl } from "../pages/EmployeeControl";
import { ManagerControl } from "../pages/ManagerControl";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employee" element={<EmployeeControl />} />
        <Route path="/manager" element={<ManagerControl />} />
      </Routes>
    </BrowserRouter>
  );
};
