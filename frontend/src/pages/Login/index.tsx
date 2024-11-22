import { Button } from "../../components/Form/Button/Button";
import { Input } from "../../components/Form/Input/Input";
import { Container, FormContainer, Title } from "./styles";

export const Login = () => {
  return (
    <Container>
      <FormContainer>
        <Title>Controle de Funcionários</Title>
        <Input
          label="E-mail"
          placeholder="Entre com seu e-mail"
          id="email"
          type="email"
          required
          onChange={() => {}}
        />
        <Input
          label="Senha"
          placeholder="Digite sua senha"
          id="senha"
          type="password"
          required
          onChange={() => {}}
        ></Input>
        <Button text="Entrar" />
      </FormContainer>
    </Container>
  );
};
