import { Button } from "../../components/Form/Button/Button";
import { Container } from "./styles";
import { useNavigate } from 'react-router-dom';

export const ManagerPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
        <Button text="Cadastrar funcionário" onClick={() => navigate('/cadastrar-funcionario')} />
        <Button text="Ver funcionários" />
        <Button text="Gerar lista de salários mensais" />
    </Container>
  );
};