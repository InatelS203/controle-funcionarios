import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { NewEmployee } from "../pages/NewEmployee";
import { EmployeesList } from "../pages/EmployeesList";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar-funcionario" element={<NewEmployee />} />
        <Route path="/funcionarios" element={<EmployeesList />} />
      </Routes>
    </BrowserRouter>
  );
};
