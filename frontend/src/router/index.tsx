import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { EmployeeControl } from "../pages/EmployeeControl";
// import { ManagerControl } from "../pages/ManagerControl";
import { ManagerPage } from "../pages/ManagerPage";
import { NewEmployee } from "../pages/NewEmployee";
import { EmployeesList } from "../pages/EmployeesList";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employee" element={<EmployeeControl />} />
        <Route path="/manager" element={<ManagerPage />} />
        <Route path="/newemployee" element={<NewEmployee />} />
        <Route path="/employees" element={<EmployeesList />} />
      </Routes>
    </BrowserRouter>
  );
};
