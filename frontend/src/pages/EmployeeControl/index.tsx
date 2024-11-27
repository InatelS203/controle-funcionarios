import { Button } from "../../components/Form/Button/Button";
import { Container } from "./styles";

export const ManagerPage = () => {

  return (
    <Container>
        <Button text="Consultar informações/banco de horas"/>
        <Button text="Bater ponto" />
    </Container>
  );
};