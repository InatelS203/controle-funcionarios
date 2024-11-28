import { useEmployeeList } from "../../store/Employee";
import { Container, EmployeeBox, ListContainer, Title, Text } from "./styles";

export const EmployeesList = () => {
  const { employeeList } = useEmployeeList();

  return (
    <Container>
      <ListContainer>
        <Title>Funcionários:</Title>
        {employeeList.map((employee) => (
          <EmployeeBox>
            <Text>nome: {employee.name}</Text>
            <Text>email: {employee.email}</Text>
            <Text>cpf: {employee.cpf}</Text>
          </EmployeeBox>
        ))}
      </ListContainer>
    </Container>
  );
};
