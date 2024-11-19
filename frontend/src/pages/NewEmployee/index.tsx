import { Button } from "../../components/Form/Button/Button";
import { Input } from "../../components/Form/Input/Input";
import { Container, FormContainer } from "./styles";

export const NewEmployee = () => {
  return (
    <Container>
      <FormContainer>
        <Input
          label="Nome"
          placeholder="Entre com o nome do novo funcionário"
          id="nome"
          type="nome"
          required
          value=""
          onChange={() => {}}
        />
        <Input
          label="E-mail"
          placeholder="Entre com o e-mail do novo funcionário"
          id="email"
          type="email"
          required
          value=""
          onChange={() => {}}
        />
        <Input
          label="Senha"
          placeholder="Entre com a senha do novo funcionário"
          id="senha"
          type="password"
          required
          value={""}
          onChange={() => {}}
        ></Input>
        <Button text="Concluir cadastro" />
      </FormContainer>
    </Container>
  );
};
