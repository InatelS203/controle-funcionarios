import { Button } from "../../components/Form/Button/Button";
import { BtnContainer, Container, Title } from "./styles";
import { useNavigate } from "react-router";

export const ManagerPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <BtnContainer>
        <Title>Gerenciar funcionários:</Title>
        <Button
          text="Cadastrar funcionário"
          onClick={() => navigate("/newemployee")}
        />
        <Button
          text="Ver funcionários"
          onClick={() => navigate("/employees")}
        />
        <Button text="Gerar lista de salários mensais" />
      </BtnContainer>
    </Container>
  );
};
