import { Button } from "../../components/Form/Button/Button";
import { Input } from "../../components/Form/Input/Input";
import { Container, FormContainer } from "./styles";

export const Login = () => {
  return (
    <Container>
      <FormContainer>
        <Input
          label="E-mail"
          placeholder="Entre com seu e-mail"
          id="email"
          type="email"
          required
          value=""
          onChange={() => {}}
        />
        <Input
          label="Senha"
          placeholder="Digite sua senha"
          id="senha"
          type="password"
          required
          value={""}
          onChange={() => {}}
        ></Input>
        <Button text="Entrar" />
      </FormContainer>
    </Container>
  );
};
