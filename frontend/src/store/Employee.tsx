import { create } from "zustand";

interface Employee {
  name: string;
  email: string;
  cpf: string;
  password: string;
}

type StateProps = {
  employeeList: Employee[];
  addEmployee: (data: Employee) => void;
};

export const useEmployeeList = create<StateProps>((set) => ({
  employeeList: [],
  addEmployee: (employee) =>
    set((state) => ({
      employeeList: [...state.employeeList, employee], // Adiciona o funcionário à lista existente
    })),
}));
